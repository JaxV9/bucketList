'use client';
import React from 'react';

type NavBarContextType = {
    navBarIsActive: boolean,
    setNavBarIsActive: (isActive: boolean) => void
}

const NavBarContext = React.createContext<NavBarContextType | null>(null);

export default NavBarContext;