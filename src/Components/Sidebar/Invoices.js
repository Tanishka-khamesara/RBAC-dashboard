import { UserContext } from "../Context/Context";
import {  useContext, useState } from "react";
import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Content } from '../Details/Content';

function ManageTeams() {
    const Ctx = useContext(UserContext);
    const userCtx = Ctx.colors;
    const detailCtx = Ctx.details;
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 90 ,},
        { field: 'name', headerName: 'First name', width: 170, },
        { field: 'email', headerName: 'Email Id', width: 190, },
        {
          field: 'phone',
          headerName: 'Phone number',
          type: 'number',
            width: 120,
            
        },
        {
            field: 'cost',
            headerName: 'Cost',
            type: 'number',
            width: 100,
            
          },
        
          {
            field: 'date',
            headerName: 'Date',
            type: 'number',
            width: 120,
          },
    
      ];
    const rows = detailCtx;

    const CustomDataGrid = ({ className, ...rest }) => (
        <div className={className} style={{ backgroundColor: 'white' }}>
            <DataGrid {...rest} />
        </div>
    );

    return (
        <div >
            <h1 style={{ margin: "2%",color: userCtx.forwordsgreen }}>TEAM</h1>
            <p style={{ color: userCtx.forwordsgreen, margin: "2%" }}>Managing the Team Members</p>
            <div style={{ height: '70vh', width: '96%', margin: 'auto', color: userCtx.forFont,backgroundColor: 'white' }}>
                <DataGrid
                    rows={Content}
                    columns={columns}
                    components={{ MuiDataGrid: CustomDataGrid }}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                />
            </div>
        </div>
    );
          
     
    
}
export default ManageTeams;