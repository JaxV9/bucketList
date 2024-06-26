import { useState } from "react"


export const Pagination = () => {

    const [currentPage, setCurrentPage] = useState<number>(1)

    const results = 3

    return (
        <>
            <div className="paginationContainer">
                {
                    currentPage > 1 ?
                        <div onClick={() => setCurrentPage(currentPage-1)} className="navPagination">Précédent</div>
                        :
                        <div></div>
                }
                <div className="navNumberContainer">
                    {
                        Array.from({ length: results }, (_, index) => (
                            <div onClick={() => setCurrentPage(index+1)} className={currentPage === index+1 ? "navNumberFocus" : "navNumber"}>{index + 1}</div>
                        ))
                    }
                </div>
                {
                    currentPage !== results ?
                        <div onClick={() => setCurrentPage(currentPage+1)} className="navPagination">Suivant</div>
                        :
                        null
                }

            </div>
        </>
    )
}