"use client"

import NavBarContext from '@/contexts/navBarContext'
import Link from 'next/link'
import { useContext, useState } from 'react'

type isToggleType = {
    isToggleProps: boolean
}


export const NavBar = ({isToggleProps}: isToggleType) => {

    const { navBarIsActive, setNavBarIsActive } = useContext(NavBarContext)!;


    return(
        <>
            <div className={navBarIsActive ? "toggleNavBarActive" : "toggleNavBarInactive"} onClick={() => setNavBarIsActive(!navBarIsActive)}>
            </div>
            <div className={navBarIsActive ? "navContainer" : "navContainerInactive"}>
                <div className="navLinkContainer">
                    <Link href="/">
                        <div className="navLinkHover">
                            <div className="navLink">
                                <div className="navLinkIcon">
                                    <img src="/assets/report-light.svg" />
                                </div>
                                <div className="navLinkText">
                                    <span>Dashboard</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link href="/projects">
                        <div className="navLinkHover">
                            <div className="navLink">
                                <div className="navLinkIcon">
                                    <img src="/assets/project.svg" />
                                </div>
                                <div className="navLinkText">
                                    <span>Projets</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link href="/habits">
                        <div className="navLinkHover">
                            <div className="navLink">
                                <div className="navLinkIcon">
                                    <img src="/assets/habit.svg" />
                                </div>
                                <div className="navLinkText">
                                    <span>Habitudes</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link href="/tasks">
                        <div className="navLinkHover">
                            <div className="navLink">
                                <div className="navLinkIcon">
                                    <img src="/assets/task.svg" />
                                </div>
                                <div className="navLinkText">
                                    <span>Tâches</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <div className="navLinkBottomContainer">
                        <div className="navLinkBottomText">Se déconnecter</div>
                    </div>
                </div>
            </div>

        </>
    )
}