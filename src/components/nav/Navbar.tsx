/**
 * @file        src/components/nav/Navbar.tsx
 * @author      David @dvhsh (https://dvh.sh)
 * @author      Marc
 * @description Navigation bar component
 */
import { motion }  from "framer-motion";
import React       from "react";

export const Navbar = () => {
  return (
    <section className="">
      <SimpleFloatingNav />
    </section>
  );
};

const SimpleFloatingNav = () => {
  return (
      <div>
          <nav
              className="fixed z-50 left-[50%] top-8 flex w-fit -translate-x-[50%] items-center gap-6 rounded-lg border-[1px] border-sky-900 bg-sky-500/90 p-3 text-sm text-zinc-950 fill-white shadow-lg shadow-sky-500/20 backdrop-blur-md">
              
              <NavLink redirect={'/'}        > Home    </NavLink>
              <NavLink redirect={'/search'}  > Search  </NavLink>
              <NavLink redirect={'/terms'}   > Terms   </NavLink>
              <NavLink redirect={'/privacy'} > Privacy </NavLink>
          </nav>
      </div>
  );
};

const NavLink = ({children, redirect}: { children: string, redirect: string }) => {
    return (
        <a href={redirect} rel="nofollow" className="block overflow-hidden">
            <motion.div
                whileHover={{y: -20}}
                transition={{ ease: "backInOut", duration: 0.5 }}
                className="h-[20px]"
            >
                <span className="flex h-[20px] items-center text-zinc-950">{children}</span>
                <span className="flex h-[20px] items-center text-neutral-50">
                    {children}
                </span>
            </motion.div>
        </a>
    );
};

export default Navbar;

// path: src/app/components/ui/Navbar.tsx