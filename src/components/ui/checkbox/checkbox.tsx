
type CheckboxPropsType = {
    checkedProps: boolean
}

export const CheckboxUI = ({ checkedProps }: CheckboxPropsType) => {

    return (
        <>
            <input type="checkbox" className="checkboxUI" checked={checkedProps} />
        </>
    )
}