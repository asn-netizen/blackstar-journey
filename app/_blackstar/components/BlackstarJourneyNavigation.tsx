"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { includeBlackstarVisitedRoomKey } from "../blackstar-journey-storage";
import {
  BLACKSTAR_JOURNEY_ROOMS,
  BLACKSTAR_ROOM_COUNT,
  type BlackstarRoomKey,
} from "../blackstar-site-content";

type BlackstarJourneyNavigationProps = {
  currentRoomKey: BlackstarRoomKey;
};

export default function BlackstarJourneyNavigation({
  currentRoomKey,
}: BlackstarJourneyNavigationProps) {
  const [navigationMenuOpen, setNavigationMenuOpen] = useState(false);
  const [visitedRoomKeys, setVisitedRoomKeys] = useState<BlackstarRoomKey[]>([]);

  useEffect(() => {
    const visitedRoomsFrame = window.requestAnimationFrame(() => {
      setVisitedRoomKeys(includeBlackstarVisitedRoomKey(currentRoomKey));
    });

    return () => window.cancelAnimationFrame(visitedRoomsFrame);
  }, [currentRoomKey]);

  return (
    <>
      <a className="skip-link" href="#room-content">
        Skip to this room
      </a>
      <header className="journey-nav">
        <Link
          className="journey-brand"
          href="/#journey"
          aria-label="Return to the Blackstar journey map"
        >
          BLACKSTAR
        </Link>
        <div
          className="journey-progress"
          aria-label={`${visitedRoomKeys.length} of ${BLACKSTAR_ROOM_COUNT} rooms discovered`}
        >
          <span className="progress-dots" aria-hidden="true">
            {BLACKSTAR_JOURNEY_ROOMS.map(({ roomKey }) => (
              <i
                className={visitedRoomKeys.includes(roomKey) ? "found" : ""}
                key={roomKey}
              />
            ))}
          </span>
          <span>
            {visitedRoomKeys.length}/{BLACKSTAR_ROOM_COUNT} discovered
          </span>
        </div>
        <nav aria-label="Journey rooms">
          {BLACKSTAR_JOURNEY_ROOMS.map(({ roomKey, roomLabel }) => (
            <Link
              aria-current={
                roomKey === currentRoomKey ? "page" : undefined
              }
              href={`/${roomKey}`}
              key={roomKey}
            >
              {roomLabel}
            </Link>
          ))}
        </nav>
        <button
          className="journey-menu-button"
          type="button"
          aria-label={
            navigationMenuOpen ? "Close room menu" : "Open room menu"
          }
          aria-expanded={navigationMenuOpen}
          onClick={() =>
            setNavigationMenuOpen(
              (currentMenuState) => !currentMenuState,
            )
          }
        >
          <span />
          <span />
        </button>
      </header>
      {navigationMenuOpen && (
        <div className="journey-mobile-menu">
          <p>Choose another room</p>
          {BLACKSTAR_JOURNEY_ROOMS.map(
            ({ roomKey, roomLabel }, roomIndex) => (
              <Link
                href={`/${roomKey}`}
                key={roomKey}
                onClick={() => setNavigationMenuOpen(false)}
              >
                <span>0{roomIndex + 1}</span>
                {roomLabel}
              </Link>
            ),
          )}
          <Link
            className="map-return"
            href="/#journey"
            onClick={() => setNavigationMenuOpen(false)}
          >
            Return to the journey map
          </Link>
        </div>
      )}
    </>
  );
}
