import { Tag } from "@/components/ui/tag/tag"
import { CheckboxUI } from "../checkbox/checkbox"
import { EditUI } from "../edit/edit"
import { Habit } from "@/components/habit/habit"
import Link from "next/link"
import { convertDateFormat } from "@/app/utils/formats"
import { useState } from "react"
import { Pagination } from "../pagination/pagination"

type DataTablePropsType = {
    dateProps: Date
}

type HabitPropsType = {
    status: string,
    frequency: string,
    project: string,
    task: string,
    date: string
}

export const DataTable = ({ dateProps }: DataTablePropsType) => {

    const [allSelected, setAllSelected] = useState<boolean>(false)

    const selectAll = () => {
        setAllSelected(!allSelected)
    }

    const objects: HabitPropsType[] = [
        {
            "status": "en cours",
            "frequency": "2x par semaine",
            "project": "projet test",
            "task": "première tâche",
            "date": convertDateFormat(new Date().toString())
        },
        {
            "status": "en cours",
            "frequency": "2x par semaine",
            "project": "projet test",
            "task": "deuxième tâche",
            "date": convertDateFormat(new Date().toString())
        },
        {
            "status": "en cours",
            "frequency": "2x par semaine",
            "project": "projet test",
            "task": "troisième tâche",
            "date": convertDateFormat(new Date().toString())
        }
    ]

    const filteredObjects = objects.filter((object) => object.date === convertDateFormat(dateProps.toString()));

    return (
        <>
            <div className="dataTableContainer">
                <div className="headDataTable">
                    <CheckboxUI functionProps={selectAll} checkedProps={allSelected} />
                    <span>Statut</span>
                    <span>Fréquence</span>
                    <span>Projet</span>
                    <span>Tâche</span>
                    <span>Éditer</span>
                </div>

                {
                    filteredObjects.length > 0 ?
                        filteredObjects.map((object) => (
                            <Habit statusProps={object.status}
                                frequencyProps={object.frequency}
                                projectProps={object.project}
                                taskProps={object.task}
                                isSelectedProps={allSelected}
                            />
                        ))
                        : null
                }
            </div>
            <Pagination />
        </>
    )
}