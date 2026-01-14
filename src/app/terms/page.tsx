/**
 * @file        src/app/terms/page.tsx
 * @author      David @dvhsh (https://dvh.sh)
 * @description Terms of Service page
 */
'use client';

import React, { ReactNode, useState } from "react";

import Navbar                         from "@/components/nav/Navbar";
import Footer                         from "@/components/nav/Footer";

const terms = [
  {
    id: 1,
    title: "Acceptance of Terms",
    description:
      "By accessing or using the NITROUS service, you agree to be bound by these Terms of Service and any future amendments or modifications.",
  },
  {
    id: 2,
    title: "Service Provided 'As-Is'",
    description:
      "The NITROUS service is provided on an 'as-is' and 'as-available' basis. No warranties, whether express or implied, including but not limited to, implied warranties of merchantability, fitness for a particular purpose, or non-infringement, are made with respect to the service.",
  },
  {
    id: 3,
    title: "Limitation of Liability",
    description:
      "Under no circumstances shall NITROUS, its developers, or affiliates be liable for any direct, indirect, incidental, special, consequential, or exemplary damages resulting from the use or the inability to use the service, even if NITROUS has been advised of the possibility of such damages.",
  },
  {
    id: 4,
    title: "Data and Content",
    description:
      "All data provided through the NITROUS service is sourced from third-party public APIs and external sources. NITROUS does not store or retain any of this data. The accuracy, completeness, or reliability of the data is not guaranteed, and users should independently verify the information.",
  },
  {
    id: 5,
    title: "Modifications and Discontinuation",
    description:
      "The NITROUS service may be modified, suspended, or discontinued at any time without notice. NITROUS reserves the right to update these Terms of Service at any time, and continued use of the service constitutes acceptance of any changes.",
  },
  {
    id: 6,
    title: "Indemnification",
    description:
      "Users agree to indemnify and hold harmless NITROUS, its developers, and affiliates from any claims, damages, losses, liabilities, and expenses arising out of the use of the service or violation of these Terms.",
  },
  {
    id: 7,
    title: "Governing Law",
    description:
      "These Terms of Service shall be governed by and construed in accordance with the laws of the jurisdiction in which NITROUS operates, without regard to its conflict of law principles.",
  },
];

const Terms = () => {
  return (
    <MouseMoveLineDrawing>
      <div className="min-h-screen flex flex-col relative">

        {/* Background - Fixed to viewport */}
        <div className="fixed inset-0 z-[-2] h-full w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,black_1px)] bg-[size:20px_20px]" />

        <Navbar />

        <main className="flex-grow w-full max-w-3xl mx-auto px-4 sm:px-8 lg:px-16 pt-32 pb-20 flex flex-col gap-8">
          <h3 className="text-5xl font-bold mb-6 text-purple-300 text-center">Terms of Service</h3>
          
          {terms.map((term) => (
            <div key={term.id} className="flex flex-col gap-1">
              <span className="text-xl font-bold text-white">{term.title}</span>
              <span className="text-lg text-white">{term.description}</span>
            </div>
          ))}

          <span className="pt-4 text-4xl font-black text-purple-300 text-center">
            By using this service, you agree to these terms.
          </span>
        </main>

        <Footer />

      </div>
    </MouseMoveLineDrawing>
  );
};

const MAX_POINTS = 30;

const MouseMoveLineDrawing = ({ children }: { children?: ReactNode }) => {
  const [points, setPoints] = useState<string[]>([]);

  return (
    <div
      onMouseMove={(e) => {
        setPoints((prev) => {
          const x = e.clientX;
          const y = e.clientY;

          const pointBuffer = [...prev, `${x} ${y}`];

          if (pointBuffer.length > MAX_POINTS) {
            pointBuffer.shift();
          }

          return pointBuffer;
        });
      }}
    >
      {children}
      <svg
        className="pointer-events-none fixed left-0 top-0 h-full w-full"
        viewBox="0 0 100% 100%"
      >
        <polyline
          className="stroke-indigo-500"
          fill="none"
          strokeWidth="4"
          strokeDasharray="0"
          strokeLinecap="round"
          points={points.join(", ")}
        ></polyline>
      </svg>
    </div>
  );
};

export default Terms;

// path: src/app/terms/page.tsx