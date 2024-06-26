import { ReactNode } from "react"

type tagPropsType = {
    children: ReactNode
}

export const Tag = ({ children }: tagPropsType) => {

    return (
        <>
            <div className="tagUI">{children}</div>
        </>
    )
}