/**
 * @file        src/app/page.tsx
 * @author      David @dvhsh (https://dvh.sh)
 * @description Landing page
 */

'use client';

import React   from "react";

import Landing from "@/containers/landing/Hero";

import Navbar  from "@/components/nav/Navbar";
import Footer  from "@/components/nav/Footer";

const Home = () => {
    return (
      <>
        <Landing />
        <Navbar />
        <Footer />
      </>
    );
};

export default Home;

// path: src/app/page.tsx