"use client";

import Link from "next/link";
import { CSSProperties, useEffect, useRef, useState } from "react";
import {
  includeBlackstarVisitedRoomKey,
  readBlackstarVisitedRoomKeys,
} from "./_blackstar/blackstar-journey-storage";
import {
  BLACKSTAR_JOURNEY_PATHS,
  BLACKSTAR_ROOM_COUNT,
  BLACKSTAR_SKY_STARS,
  type BlackstarArtifactType,
  type BlackstarJourneyPath,
  type BlackstarRoomKey,
} from "./_blackstar/blackstar-site-content";

type BlackstarJourneyArtifactProps = {
  artifactType: BlackstarArtifactType;
};

function BlackstarJourneyArtifact({
  artifactType,
}: BlackstarJourneyArtifactProps) {
  return (
    <span
      className={`artifact artifact-${artifactType}`}
      aria-hidden="true"
    >
      {artifactType === "portrait" && (
        <>
          <i className="portrait-mat" />
          <i className="portrait-head" />
          <i className="portrait-shoulders" />
          <b>✦</b>
        </>
      )}
      {artifactType === "newspaper" && (
        <>
          <b>BLACKSTAR</b>
          <i className="paper-photo" />
          <i className="paper-lines" />
        </>
      )}
      {artifactType === "compass" && (
        <>
          <i className="compass-ring" />
          <i className="compass-needle" />
          <b>N</b>
        </>
      )}
      {artifactType === "projector" && (
        <>
          <i className="reel reel-left" />
          <i className="reel reel-right" />
          <i className="projector-body" />
          <i className="projector-light" />
        </>
      )}
      {artifactType === "telephone" && (
        <>
          <i className="phone-receiver" />
          <i className="phone-body" />
          <i className="phone-dial" />
          <i className="phone-cord" />
        </>
      )}
    </span>
  );
}

export default function BlackstarJourneyEntrancePage() {
  const [journeyStarted, setJourneyStarted] = useState(false);
  const [selectedJourneyPath, setSelectedJourneyPath] =
    useState<BlackstarJourneyPath | null>(null);
  const [highlightedJourneyPath, setHighlightedJourneyPath] =
    useState<BlackstarJourneyPath | null>(null);
  const [visitedRoomKeys, setVisitedRoomKeys] = useState<BlackstarRoomKey[]>([]);
  const journeyWorldElement = useRef<HTMLElement>(null);
  const choiceCloseButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const journeyStateFrame = window.requestAnimationFrame(() => {
      setVisitedRoomKeys(readBlackstarVisitedRoomKeys());
      if (window.location.hash === "#journey") {
        setJourneyStarted(true);
      }
    });

    return () => window.cancelAnimationFrame(journeyStateFrame);
  }, []);

  useEffect(() => {
    if (!selectedJourneyPath) {
      return;
    }

    choiceCloseButton.current?.focus();
    const closeChoiceWithEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedJourneyPath(null);
      }
    };

    document.body.classList.add("modal-open");
    window.addEventListener("keydown", closeChoiceWithEscape);

    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", closeChoiceWithEscape);
    };
  }, [selectedJourneyPath]);

  const startBlackstarJourney = () => {
    setJourneyStarted(true);
    window.history.replaceState(null, "", "#journey");
  };

  const returnToBlackstarEntrance = () => {
    setJourneyStarted(false);
    setSelectedJourneyPath(null);
    window.history.replaceState(null, "", window.location.pathname);
  };

  const rememberBlackstarRoomVisit = (roomKey: BlackstarRoomKey) => {
    setVisitedRoomKeys(includeBlackstarVisitedRoomKey(roomKey));
  };

  const updateBlackstarPointerLight = (
    event: React.PointerEvent<HTMLElement>,
  ) => {
    const journeyBounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty(
      "--blackstar-pointer-x",
      `${event.clientX - journeyBounds.left}px`,
    );
    event.currentTarget.style.setProperty(
      "--blackstar-pointer-y",
      `${event.clientY - journeyBounds.top}px`,
    );
  };

  return (
    <main
      className={`journey-home ${journeyStarted ? "journey-entered" : ""}`}
      onPointerMove={updateBlackstarPointerLight}
      ref={journeyWorldElement}
    >
      <div className="world-sky" aria-hidden="true">
        {BLACKSTAR_SKY_STARS.map(
          ({ leftPosition, topPosition }, starIndex) => (
            <i
              key={`${leftPosition}-${topPosition}`}
              style={{
                left: leftPosition,
                top: topPosition,
                animationDelay: `${starIndex * 0.37}s`,
              }}
            />
          ),
        )}
      </div>

      {!journeyStarted ? (
        <section className="journey-gate" aria-label="Blackstar entrance">
          <button
            className="journey-start"
            type="button"
            onClick={startBlackstarJourney}
          >
            <span>Start your journey</span>
            <i aria-hidden="true" />
          </button>
        </section>
      ) : (
        <section className="discovery-world" aria-label="Blackstar journey map">
          <header className="world-header">
            <span className="world-brand">BLACKSTAR</span>
            <div className="world-status">
              <span>
                {visitedRoomKeys.length}/{BLACKSTAR_ROOM_COUNT} paths discovered
              </span>
              <button type="button" onClick={returnToBlackstarEntrance}>
                Return to entrance
              </button>
            </div>
          </header>

          <div className="world-introduction">
            <p>There is no correct order.</p>
            <h1>What pulls you closer?</h1>
            <span>Choose an object. Every one opens a different part of the story.</span>
          </div>

          <div className="object-field" role="group" aria-label="Five paths to explore">
            {BLACKSTAR_JOURNEY_PATHS.map((journeyPath, pathIndex) => (
              <button
                className={`world-object object-${journeyPath.roomKey}`}
                key={journeyPath.roomKey}
                type="button"
                style={
                  {
                    "--blackstar-object-delay": `${pathIndex * 90}ms`,
                  } as CSSProperties
                }
                aria-label={`Open ${journeyPath.roomName}: ${journeyPath.artifactLabel}`}
                onClick={() => setSelectedJourneyPath(journeyPath)}
                onFocus={() => setHighlightedJourneyPath(journeyPath)}
                onBlur={() => setHighlightedJourneyPath(null)}
                onPointerEnter={() =>
                  setHighlightedJourneyPath(journeyPath)
                }
                onPointerLeave={() => setHighlightedJourneyPath(null)}
              >
                <span className="object-number">
                  {journeyPath.roomNumber}
                </span>
                <BlackstarJourneyArtifact
                  artifactType={journeyPath.artifactType}
                />
                <span className="object-name">
                  <small>{journeyPath.artifactLabel}</small>
                  <strong>{journeyPath.roomName}</strong>
                </span>
                {visitedRoomKeys.includes(journeyPath.roomKey) && (
                  <span className="visited-mark">Discovered</span>
                )}
              </button>
            ))}
          </div>

          <div className="world-whisper" aria-live="polite">
            <span>
              {highlightedJourneyPath
                ? highlightedJourneyPath.artifactInvitation
                : "Move toward anything that catches your eye."}
            </span>
          </div>
        </section>
      )}

      {selectedJourneyPath && (
        <div
          className="choice-backdrop"
          onPointerDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedJourneyPath(null);
            }
          }}
        >
          <section
            className={`choice-dialog choice-${selectedJourneyPath.roomKey}`}
            role="dialog"
            aria-modal="true"
          >
            <button
              className="choice-close"
              type="button"
              aria-label="Close this choice"
              ref={choiceCloseButton}
              onClick={() => setSelectedJourneyPath(null)}
            >
              ×
            </button>
            <p>
              Path {selectedJourneyPath.roomNumber} ·{" "}
              {selectedJourneyPath.artifactLabel}
            </p>
            <h2>{selectedJourneyPath.artifactInvitation}</h2>
            <div className="choice-rule" />
            <p className="choice-description">
              {selectedJourneyPath.roomIntroduction}
            </p>
            <div className="choice-actions">
              <Link
                href={selectedJourneyPath.roomPath}
                onClick={() =>
                  rememberBlackstarRoomVisit(selectedJourneyPath.roomKey)
                }
              >
                Enter {selectedJourneyPath.roomName}
                <span aria-hidden="true">↗</span>
              </Link>
              <button
                type="button"
                onClick={() => setSelectedJourneyPath(null)}
              >
                Keep exploring
              </button>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
