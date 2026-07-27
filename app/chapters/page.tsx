"use client";

import Link from "next/link";
import { useState } from "react";
import BlackstarJourneyNavigation from "../_blackstar/components/BlackstarJourneyNavigation";
import { BLACKSTAR_CHAPTER_PLACES } from "../_blackstar/blackstar-site-content";

export default function BlackstarChaptersRoomPage() {
  const [activeChapterPlace, setActiveChapterPlace] = useState(
    BLACKSTAR_CHAPTER_PLACES[0],
  );
  const [savedChapterKeys, setSavedChapterKeys] = useState<string[]>([]);

  return (
    <main className="room-page chapters-room">
      <BlackstarJourneyNavigation currentRoomKey="chapters" />
      <section className="room-hero chapters-hero" id="room-content">
        <div>
          <p>Room 03 · The compass</p>
          <h1>
            Every place
            <br />
            remembers differently.
          </h1>
        </div>
        <p className="room-lede">
          Choose a point on the map. We will show you the people, questions, and
          relationships that make it more than a location.
        </p>
      </section>

      <section className="map-room">
        <div className="map-constellation" aria-hidden="true">
          <i className="map-line line-one" />
          <i className="map-line line-two" />
          <i className="map-orbit orbit-a" />
          <i className="map-orbit orbit-b" />
        </div>
        <div className="map-points" role="group" aria-label="Choose a Blackstar chapter">
          {BLACKSTAR_CHAPTER_PLACES.map(
            (chapterPlace, chapterIndex) => (
            <button
              className={`map-point point-${chapterPlace.chapterKey} ${
                activeChapterPlace.chapterKey === chapterPlace.chapterKey
                  ? "active"
                  : ""
              }`}
              type="button"
              key={chapterPlace.chapterKey}
              aria-pressed={
                activeChapterPlace.chapterKey === chapterPlace.chapterKey
              }
              onClick={() => setActiveChapterPlace(chapterPlace)}
            >
              <span className="point-pulse" />
              <small>0{chapterIndex + 1}</small>
              <strong>{chapterPlace.placeName}</strong>
            </button>
            ),
          )}
        </div>
        <article className="place-card" aria-live="polite">
          <p>{activeChapterPlace.countryName}</p>
          <span>{activeChapterPlace.coordinates}</span>
          <h2>{activeChapterPlace.placeName}</h2>
          <h3>{activeChapterPlace.visitorPrompt}</h3>
          <p>{activeChapterPlace.placeDescription}</p>
          <button
            type="button"
            aria-pressed={savedChapterKeys.includes(
              activeChapterPlace.chapterKey,
            )}
            onClick={() =>
              setSavedChapterKeys((currentSavedChapterKeys) =>
                currentSavedChapterKeys.includes(
                  activeChapterPlace.chapterKey,
                )
                  ? currentSavedChapterKeys.filter(
                      (chapterKey) =>
                        chapterKey !== activeChapterPlace.chapterKey,
                    )
                  : [
                      ...currentSavedChapterKeys,
                      activeChapterPlace.chapterKey,
                    ],
              )
            }
          >
            {savedChapterKeys.includes(activeChapterPlace.chapterKey)
              ? "Saved for this visit"
              : "Save this chapter for later"}
            <span>
              {savedChapterKeys.includes(activeChapterPlace.chapterKey)
                ? "✓"
                : "＋"}
            </span>
          </button>
        </article>
      </section>

      <section className="chapter-principle">
        <span>One important thing</span>
        <p>
          These chapters are not markets we drop into. They grow from lived
          relationships, proper credit, patient listening, and the willingness to return.
        </p>
      </section>

      <section className="room-exit map-exit">
        <p>You have found your bearings. Do you want to see what we’re making?</p>
        <div>
          <Link href="/projects">Turn on the projector <span>04 ↗</span></Link>
          <Link href="/#journey">Return to the journey map</Link>
        </div>
      </section>
    </main>
  );
}
