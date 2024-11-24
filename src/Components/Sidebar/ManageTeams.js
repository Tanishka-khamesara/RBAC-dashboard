import React, { useContext } from "react";
import { UserContext } from "../Context/Context";
import { DataGrid } from "@mui/x-data-grid";
import { Content } from "../Details/Content";
import "./ManageTeams.css"; // Custom styles

function ManageTeams() {
    const Ctx = useContext(UserContext);
    const userCtx = Ctx.colors;

    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        { field: "name", headerName: "First Name", width: 170 },
        { field: "email", headerName: "Email ID", width: 190 },
        { field: "phone", headerName: "Phone Number", width: 120 },
        { field: "cost", headerName: "Cost", width: 100 },
        { field: "status", headerName: "Status", width: 160 },
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
