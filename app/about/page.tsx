"use client";

import Link from "next/link";
import { useState } from "react";
import BlackstarJourneyNavigation from "../_blackstar/components/BlackstarJourneyNavigation";
import { BLACKSTAR_ABOUT_CONVERSATIONS } from "../_blackstar/blackstar-site-content";

export default function BlackstarAboutRoomPage() {
  const [activeConversationPrompt, setActiveConversationPrompt] = useState(
    BLACKSTAR_ABOUT_CONVERSATIONS[0],
  );

  return (
    <main className="room-page about-room">
      <BlackstarJourneyNavigation currentRoomKey="about" />
      <section className="room-hero about-hero" id="room-content">
        <div className="room-heading">
          <p>Room 01 · The portrait</p>
          <h1>
            Come closer.
            <br />
            This is why we’re here.
          </h1>
          <p className="room-lede">
            Blackstar is a place for stories, sounds, images, and ideas that connect Ghana,
            the African diaspora, and the communities growing between them.
          </p>
        </div>
        <div className="about-portrait" aria-label="Abstract framed portrait">
          <div className="portrait-sun">✦</div>
          <div className="portrait-profile" />
          <span>LOOK / LISTEN / REMEMBER</span>
        </div>
      </section>

      <section className="about-letter">
        <p className="section-index">A note from Blackstar</p>
        <div>
          <h2>If we were sitting together, this is what we would tell you.</h2>
          <p>
            We started with a simple belief: paying attention is a form of care. When a
            person tells you where they come from, what they make, or what they are trying
            to protect, the first job is to listen well.
          </p>
          <p>
            Blackstar documents those moments without flattening them. We connect people
            and places without pretending they are all the same. Then, when the right idea
            appears, we help make something new in company with the people who inspired it.
          </p>
        </div>
      </section>

      <section className="conversation-table">
        <div className="conversation-questions">
          <p className="section-index">Ask us something</p>
          {BLACKSTAR_ABOUT_CONVERSATIONS.map(
            (conversationPrompt, promptIndex) => (
            <button
              className={
                activeConversationPrompt.promptKey ===
                conversationPrompt.promptKey
                  ? "active"
                  : ""
              }
              type="button"
              key={conversationPrompt.promptKey}
              aria-pressed={
                activeConversationPrompt.promptKey ===
                conversationPrompt.promptKey
              }
              onClick={() =>
                setActiveConversationPrompt(conversationPrompt)
              }
            >
              <span>0{promptIndex + 1}</span>
              {conversationPrompt.question}
            </button>
            ),
          )}
        </div>
        <div className="conversation-answer" aria-live="polite">
          <span>Our answer</span>
          <p>{activeConversationPrompt.answer}</p>
        </div>
      </section>

      <section className="room-exit">
        <p>You know why we’re here. Where would you like to go next?</p>
        <div>
          <Link href="/journal">Open the newspaper <span>02 ↗</span></Link>
          <Link href="/#journey">Return to the journey map</Link>
        </div>
      </section>
    </main>
  );
}
