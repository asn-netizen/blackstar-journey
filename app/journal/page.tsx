"use client";

import Link from "next/link";
import { useState } from "react";
import BlackstarJourneyNavigation from "../_blackstar/components/BlackstarJourneyNavigation";
import {
  BLACKSTAR_JOURNAL_FILTERS,
  BLACKSTAR_JOURNAL_STORIES,
  type BlackstarJournalFilter,
  type BlackstarJournalStory,
} from "../_blackstar/blackstar-site-content";

export default function BlackstarJournalRoomPage() {
  const [selectedJournalFilter, setSelectedJournalFilter] =
    useState<BlackstarJournalFilter>("All");
  const [openJournalStory, setOpenJournalStory] =
    useState<BlackstarJournalStory | null>(null);
  const visibleJournalStories =
    selectedJournalFilter === "All"
      ? BLACKSTAR_JOURNAL_STORIES
      : BLACKSTAR_JOURNAL_STORIES.filter(
          ({ storyType }) => storyType === selectedJournalFilter,
        );

  return (
    <main className="room-page journal-room">
      <BlackstarJourneyNavigation currentRoomKey="journal" />
      <section className="room-hero journal-hero" id="room-content">
        <p>Room 02 · The newspaper</p>
        <div>
          <h1>
            Stay a while.
            <br />
            There’s more to the story.
          </h1>
          <p>
            This is where we share what we have seen, heard, and learned in the field.
            Pick up any story that catches your attention.
          </p>
        </div>
        <span className="journal-date">VOL. 01 · STORIES IN PROGRESS · 2026</span>
      </section>

      <section className="journal-desk">
        <div className="journal-filters" aria-label="Filter journal stories">
          <span>Show me:</span>
          {BLACKSTAR_JOURNAL_FILTERS.map((journalFilter) => (
            <button
              className={
                selectedJournalFilter === journalFilter ? "active" : ""
              }
              type="button"
              key={journalFilter}
              aria-pressed={selectedJournalFilter === journalFilter}
              onClick={() => setSelectedJournalFilter(journalFilter)}
            >
              {journalFilter}
            </button>
          ))}
        </div>
        <div className="newspaper-grid">
          {visibleJournalStories.map((journalStory, storyIndex) => (
            <button
              className={`newspaper-story story-${journalStory.colorTheme}`}
              type="button"
              key={journalStory.storyTitle}
              onClick={() => setOpenJournalStory(journalStory)}
            >
              <span className="story-number">0{storyIndex + 1}</span>
              <span className="story-image-block" aria-hidden="true">
                <i />
                <b>{journalStory.storyPlace}</b>
              </span>
              <span className="story-meta">
                {journalStory.storyType} · {journalStory.storyPlace}
              </span>
              <strong>{journalStory.storyTitle}</strong>
              <span className="story-deck">{journalStory.storyDeck}</span>
              <span className="story-open">Open story ↗</span>
            </button>
          ))}
        </div>
      </section>

      {openJournalStory && (
        <div
          className="story-backdrop"
          onPointerDown={(event) => {
            if (event.target === event.currentTarget) {
              setOpenJournalStory(null);
            }
          }}
        >
          <article
            className="story-reader"
            role="dialog"
            aria-modal="true"
            aria-label={openJournalStory.storyTitle}
          >
            <button
              type="button"
              className="reader-close"
              onClick={() => setOpenJournalStory(null)}
            >
              Close ×
            </button>
            <p>
              {openJournalStory.storyType} · {openJournalStory.storyPlace}
            </p>
            <h2>{openJournalStory.storyTitle}</h2>
            <h3>{openJournalStory.storyDeck}</h3>
            <div
              className={`reader-image story-${openJournalStory.colorTheme}`}
            >
              <span>{openJournalStory.storyPlace}</span>
            </div>
            <p className="reader-copy">{openJournalStory.storyExcerpt}</p>
            <p className="reader-note">
              This is a preview of how each Blackstar story can open. The full reporting,
              images, sound, and credits can be added when the story is ready.
            </p>
          </article>
        </div>
      )}

      <section className="room-exit dark-exit">
        <p>The newspaper can stay open. Your journey does not have to end here.</p>
        <div>
          <Link href="/chapters">Follow the compass <span>03 ↗</span></Link>
          <Link href="/#journey">Return to the journey map</Link>
        </div>
      </section>
    </main>
  );
}
