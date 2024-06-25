
type DataTablePropsType = {
    dataProps: object[]
}

export const DataTable = ({dataProps}:DataTablePropsType) => {

    return(
        <>
            <div className="dataTableContainer">
                <div className="headDataTable">
                    
                    <span>Tâches</span>
                </div>
                <div className="dataTable">
                    <span>Task 1</span>
                </div>
                <div className="dataTable">
                    <span>Task 2</span>
                </div>
                <div className="dataTable">
                    <span>Task 3</span>
                </div>
                <div className="dataTable">
                    <span>Task 4</span>
                </div>
                <div className="dataTable">
                    <span>Task 5</span>
                </div>
                <div className="dataTable">
                    <span>Task 6</span>
                </div>
                <div className="dataTable">
                    <span>Task 7</span>
                </div>
                <div className="dataTable">
                    <span>Task 8</span>
                </div>
                <div className="dataTable">
                    <span>Task 9</span>
                </div>
                <div className="dataTable">
                    <span>Task 10</span>
                </div>
            </div>
        </>
    )
}