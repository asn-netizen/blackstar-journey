"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import BlackstarJourneyNavigation from "../_blackstar/components/BlackstarJourneyNavigation";

export default function BlackstarContactRoomPage() {
  const [messagePrepared, setMessagePrepared] = useState(false);

  const prepareBlackstarContactMessage = (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    setMessagePrepared(true);
  };

  return (
    <main className="room-page contact-room">
      <BlackstarJourneyNavigation currentRoomKey="contact" />
      <section className="room-hero contact-hero" id="room-content">
        <div>
          <p>Room 05 · The telephone</p>
          <h1>
            We’ve talked enough.
            <br />
            Now we want to hear you.
          </h1>
          <p className="room-lede">
            You do not need a perfect pitch. Tell us what brought you here, what you
            are working on, or what stayed with you after the journey.
          </p>
        </div>
        <div className="contact-telephone" aria-hidden="true">
          <i className="contact-receiver" />
          <i className="contact-phone-base" />
          <i className="contact-phone-dial" />
          <span>LINE 05</span>
        </div>
      </section>

      <section className="listening-room">
        <div className="contact-aside">
          <p className="section-index">Before you write</p>
          <h2>Start wherever the thought starts.</h2>
          <p>
            A collaboration, a story we should know, an invitation, a question, or
            simply “I would like to learn more” are all good reasons to reach out.
          </p>
          <div>
            <span>Good conversations often begin with:</span>
            <ul>
              <li>What you care about</li>
              <li>Why this feels connected</li>
              <li>What you hope could happen next</li>
            </ul>
          </div>
        </div>

        {!messagePrepared ? (
          <form
            className="human-contact-form"
            onSubmit={prepareBlackstarContactMessage}
          >
            <label>
              What should we call you?
              <input name="name" autoComplete="name" required placeholder="Your name" />
            </label>
            <label>
              Where can we reply?
              <input
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="you@example.com"
              />
            </label>
            <label>
              What brought you here?
              <select name="reason" defaultValue="">
                <option value="" disabled>Choose the closest answer</option>
                <option>I have a collaboration in mind</option>
                <option>I want to share a story</option>
                <option>I am interested in a project</option>
                <option>I have a press or event question</option>
                <option>I just want to say hello</option>
              </select>
            </label>
            <label>
              Tell us what is on your mind.
              <textarea
                name="message"
                required
                rows={6}
                placeholder="You can write the way you would speak to a person."
              />
            </label>
            <button type="submit">
              Prepare my message <span>↗</span>
            </button>
            <p className="form-note">
              This concept form does not send yet. When your real contact details are
              ready, we can connect it to your inbox.
            </p>
          </form>
        ) : (
          <div className="message-ready" role="status">
            <span>Message prepared</span>
            <h2>Your side of the conversation is ready.</h2>
            <p>
              The form is still in concept mode, so nothing was sent. Once the final
              email connection is added, this moment will confirm that your message is
              on its way.
            </p>
            <button
              type="button"
              onClick={() => setMessagePrepared(false)}
            >
              Write another message
            </button>
          </div>
        )}
      </section>

      <section className="journey-complete">
        <p>Five rooms. One living world.</p>
        <h2>Where you go next is up to you.</h2>
        <div>
          <Link href="/#journey">Return to the journey map</Link>
          <Link href="/journal">Keep reading the journal ↗</Link>
        </div>
      </section>
    </main>
  );
}
