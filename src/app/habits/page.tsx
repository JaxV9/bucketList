"use client"
import { Calendar } from "@/components/ui/calendar"
import { DataTable } from "@/components/ui/dataTable/dataTable"
import React, { useEffect, useState } from "react"

const Habits = () => {

    const days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"]
    const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]

    const [date, setDate] = React.useState<Date | undefined>(new Date())
    const currentDay = new Date()
    const today = days[Number(currentDay?.getDay())] + " " + currentDay?.getDate() + " " + months[Number(currentDay?.getMonth())] + " " + currentDay?.getFullYear()


    useEffect(() => {
        let test = date?.getDate()
        console.log(test)
    }, [date])


    return (
        <>
            <h1 className="text-3xl font-bold mb-6">Habitudes</h1>
            <div className="habitsContainer">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border block w-fit h-fit"
                />
                <div className="dateHabitsContainer">
                    <span className="text-2xl mb-6 mt-0">
                        {
                            date ? days[Number(date?.getDay())] + " " + date?.getDate() + " " + months[Number(date?.getMonth())] + " " + date?.getFullYear()
                                : today
                        }
                    </span>
                    <DataTable dateProps={date ? date : new Date()} />
                </div>
            </div>
        </>
    )
}

export default Habits