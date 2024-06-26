import { useEffect, useState } from "react"

type CheckboxPropsType = {
    checkedProps: boolean,
    functionProps?: () => void
}

export const CheckboxUI = ({ checkedProps, functionProps }: CheckboxPropsType) => {

    const [isChecked, setIsChecked] = useState<boolean>(false)

    const handleCheck = () => {
        if(functionProps == undefined){
            setIsChecked(!isChecked)
        }
        if(functionProps !== undefined){
            functionProps()
        }
    }

    useEffect(() => {
        console.log(isChecked)
    },[isChecked])

    useEffect(() => {
        setIsChecked(checkedProps)
    },[checkedProps])

    return (
        <>
            <input type="checkbox" className="checkboxUI" onClick={handleCheck} checked={isChecked} />
        </>
    )
}