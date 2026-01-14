/**
 * @file        src/app/privacy/page.tsx
 * @author      David @dvhsh (https://dvh.sh)
 * @description Privacy Policy page
 */
'use client';

import React, { Dispatch, SetStateAction, useState } from "react";
import Navbar                                        from "@/components/nav/Navbar";
import Footer                                        from "@/components/nav/Footer";

const solutions = [
  {
    id: 1,
    title: "Data-Free at Its Core",
    description:
      "No data is stored. All data is sourced externally, and all code is completely open source. There is no storage of search queries or their results, ensuring user privacy at every step.",
  },
  {
    id: 2,
    title: "Use Privately with Confidence",
    description:
      "True privacy is a priority. Basic logging is in place for analytical purposes, tracking only essential metrics such as the type of query submitted, the duration of the query, the occurrence of any errors (only status codes are recorded), and the date and time of the request. No personal data, search queries, or results are stored. No cookies, no tracking, no traditional telemetry.",
  },
  {
    id: 3,
    title: "Third-Party Services",
    description:
      "Our OSINT modules rely on third-party sources to provide data. These third-party services are essential to the functionality of our platform but are beyond our control. Users should be aware that these sources may have their own privacy policies and practices.",
  },
  {
    id: 4,
    title: "Jurisdiction and Dispute Resolution",
    description:
      "These Terms of Service and Privacy Policy are governed by the laws of the jurisdiction in which NITROUS operates. Any disputes arising from the use of the service will be resolved through binding arbitration in this jurisdiction. By using NITROUS, you agree to submit to the jurisdiction of these courts.",
  },
  {
    id: 5,
    title: "Contact Information",
    description:
      "For any questions or concerns regarding our privacy practices, please contact us at hello@nitrous-oxi.de. We are committed to addressing any issues promptly.",
  },
];

const Privacy = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col relative">

      {/* Background - Fixed to viewport */}
      <div className="fixed inset-0 z-[-2] h-full w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,black_1px)] bg-[size:20px_20px]" />

      <Navbar />

      <main className="flex-grow w-full max-w-3xl mx-auto px-4 pt-32 pb-20 flex flex-col gap-8">
        <h3 className="text-5xl font-bold mb-8 pt-2 text-purple-300 text-center">Privacy Policy</h3>
        <div className="flex flex-col gap-4">
          {solutions.map((solution) => (
            <Solution
              {...solution}
              key={solution.id}
              open={open}
              setOpen={setOpen}
              index={solution.id}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

const Solution = ({
  title,
  description,
  index,
  open,
  setOpen,
}: {
  title: string;
  description: string;
  index: number;
  open: number | null;
  setOpen: Dispatch<SetStateAction<number | null>>;
}) => {
  const isOpen = index === open;

  return (
    <div
      onClick={() => setOpen(isOpen ? null : index)}
      className="p-0.5 rounded-lg relative overflow-hidden cursor-pointer"
    >
      <div
        className={`p-6 rounded-[7px] bg-neutral-900 flex flex-col justify-between relative z-20 transition-all duration-300 ${isOpen ? 'h-auto' : 'h-20'}`}
      >
        <p className="text-xl font-medium w-fit text-gray-200">{title}</p>
        {isOpen && (
          <p className="mt-4 text-gray-300">
            {description}
          </p>
        )}
      </div>
      {isOpen && (
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-violet-600 to-indigo-600" />
      )}
      <div className="absolute inset-0 z-0 bg-slate-200" />
    </div>
  );
};

export default Privacy;

// path: src/app/privacy/page.tsx