"use client";

import Link from "next/link";
import { useState } from "react";
import BlackstarJourneyNavigation from "../_blackstar/components/BlackstarJourneyNavigation";
import { BLACKSTAR_PROJECTS } from "../_blackstar/blackstar-site-content";

export default function BlackstarProjectsRoomPage() {
  const [openProjectIndex, setOpenProjectIndex] = useState(0);
  const [followedProjectNumbers, setFollowedProjectNumbers] = useState<
    string[]
  >([]);

  return (
    <main className="room-page projects-room">
      <BlackstarJourneyNavigation currentRoomKey="projects" />
      <section className="room-hero projects-hero" id="room-content">
        <p>Room 04 · The projector</p>
        <h1>
          An idea becomes real
          <br />
          when other people enter it.
        </h1>
        <p className="room-lede">
          These projects begin with a question, then change through conversation,
          research, and collaboration. Open a drawer to see what is taking shape.
        </p>
      </section>

      <section className="project-cabinet">
        {BLACKSTAR_PROJECTS.map((blackstarProject, projectIndex) => (
          <article
            className={`project-drawer ${blackstarProject.accentClassName} ${
              openProjectIndex === projectIndex ? "open" : ""
            }`}
            key={blackstarProject.projectTitle}
          >
            <button
              type="button"
              aria-expanded={openProjectIndex === projectIndex}
              onClick={() => setOpenProjectIndex(projectIndex)}
            >
              <span>{blackstarProject.projectNumber}</span>
              <strong>{blackstarProject.projectTitle}</strong>
              <small>{blackstarProject.projectMedium}</small>
              <i aria-hidden="true">
                {openProjectIndex === projectIndex ? "−" : "+"}
              </i>
            </button>
            <div
              className="drawer-content"
              hidden={openProjectIndex !== projectIndex}
            >
              <div className="project-frame" aria-hidden="true">
                <span>{blackstarProject.projectStatus}</span>
                <i />
                <b>BS / {blackstarProject.projectNumber}</b>
              </div>
              <div>
                <p className="project-status">
                  {blackstarProject.projectStatus}
                </p>
                <h2>{blackstarProject.projectQuestion}</h2>
                <p>{blackstarProject.projectSummary}</p>
                <button
                  type="button"
                  aria-pressed={followedProjectNumbers.includes(
                    blackstarProject.projectNumber,
                  )}
                  onClick={() =>
                    setFollowedProjectNumbers((currentFollowedProjectNumbers) =>
                      currentFollowedProjectNumbers.includes(
                        blackstarProject.projectNumber,
                      )
                        ? currentFollowedProjectNumbers.filter(
                            (projectNumber) =>
                              projectNumber !==
                              blackstarProject.projectNumber,
                          )
                        : [
                            ...currentFollowedProjectNumbers,
                            blackstarProject.projectNumber,
                          ],
                    )
                  }
                >
                  {followedProjectNumbers.includes(
                    blackstarProject.projectNumber,
                  )
                    ? "Added to your journey"
                    : "I want to follow this project"}
                  <span>
                    {followedProjectNumbers.includes(
                      blackstarProject.projectNumber,
                    )
                      ? "✓"
                      : "＋"}
                  </span>
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="collaboration-note">
        <p>Nothing here is meant to be made alone.</p>
        <h2>
          If one of these ideas connects with your work, tell us what you see in it.
        </h2>
        <Link href="/contact">Start that conversation ↗</Link>
      </section>

      <section className="room-exit project-exit">
        <p>The projector is still running. There is one more object waiting for you.</p>
        <div>
          <Link href="/contact">Answer the telephone <span>05 ↗</span></Link>
          <Link href="/#journey">Return to the journey map</Link>
        </div>
      </section>
    </main>
  );
}
