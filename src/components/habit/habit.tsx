import { CheckboxUI } from "../ui/checkbox/checkbox"
import { EditUI } from "../ui/edit/edit"
import { Tag } from "../ui/tag/tag"

type HabitPropsType = {
    statusProps: string,
    frequencyProps: string,
    projectProps: string,
    taskProps: string
    isSelectedProps: boolean
}

export const Habit = ({statusProps, frequencyProps, projectProps, taskProps, isSelectedProps}:HabitPropsType) => {


    return (
        <>
            <div className="habitRow">
                <CheckboxUI checkedProps={isSelectedProps} />
                <Tag>{statusProps}</Tag>
                <span>{frequencyProps}</span>
                <span>{projectProps}</span>
                <span>{taskProps}</span>
                <EditUI />
            </div>
        </>
    )
}