/**
 * @file        src/containers/landing/Hero.tsx
 * @author      David @dvhsh (https://dvh.sh)
 * @description Search page
 */
import React               from "react";

import { useRouter }       from "next/navigation";
import { Button  }         from "@nextui-org/react";

import { BackgroundBeams } from "@/components/ui/beams";

const Landing = () => {
  
    const router = useRouter();

    return (
        <section>

            <div className="h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">

                <BackgroundBeams/>

            <div className="max-w-2xl mx-auto p-4">
                <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-sky-500  text-center font-sans font-bold">
                    NITROUS
                </h1>
                <p></p>
                <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
                    open source OSINT investigation suite with an exposed RESTful API
                </p>
            </div>

            <div className="flex gap-4 mt-4">
                <Button onPress={() => router.push('/search')} variant={'solid'} className="bg-sky-500 text-neutral-950 py-2 px-4 rounded-lg font-bold">
                    Get Started
                </Button>
                <Button onPress={() => router.push('/')} variant={'solid'} isDisabled className="bg-sky-500 text-neutral-950 py-2 px-4 rounded-lg font-bold">
                    Documentation
                </Button>
            </div>
              
            </div>
    </section>
); }

export default Landing;
