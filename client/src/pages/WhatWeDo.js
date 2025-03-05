import React from "react";
import "../styles/pages.css"; // Ensure your styles are properly defined

const WhatWeDo = () => {
  return (
    <div className="page flex items-center justify-center min-h-screen p-6">
      <div className="page-container max-w-4xl bg-white bg-opacity-90 shadow-lg rounded-2xl p-8 text-gray-800">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-600 uppercase tracking-wide">
          What We Do
        </h2>

        <div className="space-y-6 text-left">
          <section>
            <h3 className="text-2xl font-semibold text-gray-700">
              Innovation & Initiatives
            </h3>
            <p className="mt-2 text-lg text-gray-700">
              No idea succeeds in isolation. Many of us have concepts that could
              contribute to rebuilding Syria, but are they realistic? Have they
              been tested, refined, and shaped by those with the expertise to
              take them further? Every strong idea needs a foundation, a reality
              check, and the right people to help it grow.
            </p>
            <p className="mt-2 text-lg text-gray-700">
              This is where we come in. We provide a space for professionals to
              connect, challenge, and develop ideas together. This is not a
              passive platform where ideas wait for approval. It is an active
              community where your ability to engage, collaborate, and build
              relationships determines how far your idea can go.
            </p>
            <h4 className="mt-4 font-semibold text-gray-800">
              How to get involved?
            </h4>
            <ul className="list-disc list-inside text-gray-700">
              <li>
                Join discussions and present your idea to others in the network.
              </li>
              <li>
                Connect with experts who can help evaluate and refine your
                concept.
              </li>
              <li>
                Work on a structured proposal with feedback from professionals.
              </li>
              <li>
                Build a small team and prepare your idea for the next stage.
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-2xl font-semibold text-gray-700">
              Syrian Expertise Hub
            </h3>
            <p className="mt-2 text-lg text-gray-700">
              Over 4,000 professionals have joined our network, and hundreds
              have already shared details about their expertise. This allows us
              to map skills, connect people efficiently, and ensure that
              expertise is accessible where it is needed most.
            </p>
            <p className="mt-2 text-lg text-gray-700">
              We are building the largest Syrian expertise platform, powered by
              smart technology and AI-driven matching. The goal is simple: to
              ensure that knowledge does not remain scattered but is connected,
              structured, and ready to contribute to Syria’s reconstruction.
            </p>
            <h4 className="mt-4 font-semibold text-gray-800">
              How to get involved?
            </h4>
            <ul className="list-disc list-inside text-gray-700">
              <li>Register and create your expertise profile.</li>
              <li>
                Specify your field, experience, and how you want to contribute.
              </li>
              <li>
                Get matched with individuals and projects that need your
                expertise.
              </li>
              <li>
                Leverage the platform to build connections, share expertise, and
                collaborate effectively.
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-2xl font-semibold text-gray-700">
              Expert Insights
            </h3>
            <p className="mt-2 text-lg text-gray-700">
              Knowledge is only powerful when it is shared. If you have
              insights, experiences, or ideas that others should hear, this is
              the place to share them.
            </p>
            <p className="mt-2 text-lg text-gray-700">
              Perhaps you have a concept but need to articulate it clearly
              before taking it further. Maybe you want to share an article, a
              video, or an analysis that contributes to the wider conversation.
              By publishing your insights, you make your expertise visible,
              connect with those who share your vision, and open the door to new
              opportunities.
            </p>
            <h4 className="mt-4 font-semibold text-gray-800">
              How to get involved?
            </h4>
            <ul className="list-disc list-inside text-gray-700">
              <li>
                Write an article, record a video, or prepare a visual
                presentation.
              </li>
              <li>Submit your content to our team for review.</li>
              <li>
                Once approved, your insights will be published and shared with
                the network.
              </li>
              <li>
                Engage with others who respond to your ideas and expand your
                reach.
              </li>
            </ul>
            <p className="mt-4 font-semibold text-gray-900">
              Your expertise has the power to inspire change. Share your
              insights and make an impact.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
