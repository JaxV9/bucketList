'use client';

import { ReactNode, useEffect, useState } from "react";
import NavBarContext from "./navBarContext";

type ProviderType = {
    children : ReactNode
}

export function Providers({ children }: ProviderType) {

    const [navBarIsActive, setNavBarIsActive] = useState<boolean>(localStorage.getItem("navBarIsActive") === "true");

    useEffect(() => {
        localStorage.setItem("navBarIsActive", navBarIsActive.toString());
    }, [navBarIsActive]);

  return (
    <>
        <NavBarContext.Provider value={{ navBarIsActive, setNavBarIsActive }}>
            {children}
        </NavBarContext.Provider>
    </>
  );
}