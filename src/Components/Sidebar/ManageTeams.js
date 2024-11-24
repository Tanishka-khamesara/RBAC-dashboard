import React, { useContext } from "react";
import { UserContext } from "../Context/Context";
import { DataGrid } from "@mui/x-data-grid";
import { Content } from "../Details/Content";
import "./ManageTeams.css"; // Custom styles

function ManageTeams() {
    const Ctx = useContext(UserContext);
    const userCtx = Ctx.colors;

    const handleEdit = (id) => {
        console.log("Edit row with ID:", id);
        // Implement your edit logic here
    };

    const handleDelete = (id) => {
        console.log("Delete row with ID:", id);
        // Implement your delete logic here
    };

    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        { field: "name", headerName: "First Name", width: 170 },
        { field: "phone", headerName: "Phone Number", width: 120 },
        { field: "cost", headerName: "Cost", width: 100 },
        { field: "status", headerName: "Status", width: 160 },
        {
            field: "actions",
            headerName: "Actions",
            width: 200,
            sortable: false,
            renderCell: (params) => (
                <div className="actions-container" >
                   <button
    onClick={() => handleEdit(params.row.id)}
    className="edit-button"
    style={{ backgroundColor: "lightgreen", color: "black", padding: "10px", marginRight: "7px" ,cursor:"not-allowed"}}
>
    Edit
</button>

                    <button
                        onClick={() => handleDelete(params.row.id)}
                        className="delete-button"
                        style={{backgroundColor:"red",color:'black',padding:"10px",cursor:"not-allowed"}}
                    >
                        Delete
                    </button>
                </div>
            ),
        },
    ];

    return (
        <div>
            <h1 style={{ margin: "2%", color: userCtx.forwordsgreen }}>TEAM</h1>
            <p style={{ color: userCtx.forwordsgreen, margin: "2%" }}>
                Managing the Team Members
            </p>
            <div
                style={{
                    height: "70vh",
                    width: "96%",
                    margin: "auto",
                    color: userCtx.forFont,
                    backgroundColor: "white",
                }}
            >
                <DataGrid
                    rows={Content} // Assuming `Content` contains rows data
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                    className="custom-data-grid" // Custom class for styling
                />
            </div>
        </div>
    );
}

export default ManageTeams;
