import { useState } from "react"


export const Pagination = () => {

    const [currentPage, setCurrentPage] = useState<number>(1)

    const results = 30

    return (
        <>
            <div className="paginationContainer">
                {
                    currentPage > 1 ?
                        <div className="navPagination">Précédent</div>
                        :
                        <div></div>
                }
                <div className="navNumberContainer">
                    <div className="navNumberFocus">1</div>
                    <div className="navNumber">2</div>
                </div>
                {
                    currentPage !== results ?
                        <div className="navPagination">Suivant</div>
                        :
                        null
                }

            </div>
        </>
    )
}