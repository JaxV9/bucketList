'use client';
import NavBarContext from "@/contexts/navBarContext";
import { ReactNode, useContext } from "react"

type contentPropsType = {
    children: ReactNode
}

export const Content = ({children}:contentPropsType) => {

    const { navBarIsActive, setNavBarIsActive } = useContext(NavBarContext)!;

    return(
        <>
            <section className={navBarIsActive ? "contentBodyContainerSlideActive" : "contentBodyContainerSlideInactive"}>
                {children}
            </section>
        </>
    )
}