import React, { useState, useEffect } from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ลำดับ', width: 70 },
    { field: 'prosonalID', headerName: 'เลขบัรประชาชน', width: 130 },
    {
        field: 'firstName',
        headerName: 'ชื่อจริง',
        width: 160,
    },
    {
        field: 'lastName',
        headerName: 'นามสกุล',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        // valueGetter: (params: GridValueGetterParams) =>
        //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    {
        field: 'age',
        headerName: 'อายุ',
        type: 'number',
        width: 80,
    },

];

const rows = [
    { id: 1, prosonalID: '1234567890123', lastName: 'ทีมเอชอา', firstName: 'สัน', age: 25 },
    { id: 2, prosonalID: '0004567890123', lastName: 'ทีมเอชอา', firstName: 'เสือ', age: 40 },
    { id: 3, prosonalID: '2224567890123', lastName: 'ทีมเอชอา', firstName: 'ส้ม', age: 15 },
    { id: 5, prosonalID: '3334567890123', lastName: 'ทีมเอชอา', firstName: 'สิง', age: 92 },
];

export default function TableRecruit() {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    );
}

