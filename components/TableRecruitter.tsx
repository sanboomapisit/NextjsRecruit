import React, { useState, useEffect } from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ลำดับ', width: 70 },
    { field: 'applyDate', headerName: 'วันที่ลงทะเบียน', width: 160 },
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
    {
        field: 'educationLevel',
        headerName: 'ระดับการศึกษา',
        width: 130,
    },
    {
        field: 'department',
        headerName: 'สาขา',
        width: 130,
    },
    {
        field: 'gpa',
        headerName: 'เกรดเฉลี่ย',
        type: 'number',
        width: 80,
    },
    {
        field: 'position',
        headerName: 'ตำแหน่งงาน',
        width: 190,
    },
    {
        field: 'site',
        headerName: 'สถานที่ปฎิบัติงาน',
        width: 225,
    },
    {
        field: 'status',
        headerName: 'Status',
        width: 210,
    },
];

const rows = [
    { id: 1, applyDate: '17/11/2021 16:24:29', prosonalID: '1234567890123', lastName: 'สัน', firstName: 'ทีมเดป', age: 23, educationLevel: 'ม.6', department: 'IT', gpa: 2.25, position: 'AIS Contact Center ภาษาอังกฤษ', site: 'กรุงเทพฯ (อาคารพหลโยธินเพลส)', status: 'Pre-verify (Pass) - Completed' },
    { id: 2, applyDate: '17/11/2021 16:24:29', prosonalID: '4564567890123', lastName: 'โดม', firstName: 'ทีมเดป', age: 23, educationLevel: 'ปริญญาตรี', department: 'IT', gpa: 3.50, position: 'AIS Contact Center ภาษาอังกฤษ', site: 'กรุงเทพฯ (อาคารพหลโยธินเพลส)', status: 'Pre-verify (Pass) - Completed' },
    { id: 3, applyDate: '18/11/2021 16:24:29', prosonalID: '7894567890123', lastName: 'อาม', firstName: 'ทีมเดป', age: 23, educationLevel: 'ปริญญาตรี', department: 'IT', gpa: 3.60, position: 'AIS Contact Center ภาษาอังกฤษ', site: 'กรุงเทพฯ (อาคารพหลโยธินเพลส)', status: 'Pre-verify (Pass) - Completed' },
    { id: 4, applyDate: '18/11/2021 16:24:29', prosonalID: '0124567890123', lastName: 'อาย', firstName: 'ทีมเดป', age: 24, educationLevel: 'ปริญญาตรี', department: 'IT', gpa: 3.70, position: 'AIS Contact Center ภาษาอังกฤษ', site: 'กรุงเทพฯ (อาคารพหลโยธินเพลส)', status: 'Pre-verify (Pass) - Completed' },
    { id: 5, applyDate: '19/11/2021 16:24:29', prosonalID: '4324567890123', lastName: 'นับ', firstName: 'ทีมเดป', age: 23, educationLevel: 'ปริญญาตรี', department: 'IT', gpa: 3.80, position: 'AIS Contact Center ภาษาอังกฤษ', site: 'กรุงเทพฯ (อาคารพหลโยธินเพลส)', status: 'Pre-verify (Pass) - Completed' },
    { id: 6, applyDate: '19/11/2021 16:24:29', prosonalID: '5764567890123', lastName: 'เนค', firstName: 'ทีมเดป', age: 29, educationLevel: 'ปริญญาตรี', department: 'IT', gpa: 3.90, position: 'AIS Contact Center ภาษาอังกฤษ', site: 'กรุงเทพฯ (อาคารพหลโยธินเพลส)', status: 'Pre-verify (Pass) - Completed' },
    { id: 7, applyDate: '21/11/2021 16:24:29', prosonalID: '8974567890123', lastName: 'บอล', firstName: 'ทีมเดป', age: 38, educationLevel: 'ปริญญาตรี', department: 'IT', gpa: 3.19, position: 'AIS Contact Center ภาษาอังกฤษ', site: 'กรุงเทพฯ (อาคารพหลโยธินเพลส)', status: 'Pre-verify (Pass) - Completed' },
    { id: 8, applyDate: '21/11/2021 16:24:29', prosonalID: '9114567890123', lastName: 'ตู่', firstName: 'ทีมเดป', age: 30, educationLevel: 'ปริญญาตรี', department: 'IT', gpa: 3.91, position: 'AIS Contact Center ภาษาอังกฤษ', site: 'กรุงเทพฯ (อาคารพหลโยธินเพลส)', status: 'Pre-verify (Pass) - Completed' },
    { id: 9, applyDate: '22/11/2021 16:24:29', prosonalID: '1304567890123', lastName: 'แก้ม', firstName: 'ทีมเดป', age: 26, educationLevel: 'ปริญญาตรี', department: 'IT', gpa: 3.95, position: 'AIS Contact Center ภาษาอังกฤษ', site: 'กรุงเทพฯ (อาคารพหลโยธินเพลส)', status: 'Pre-verify (Pass) - Completed' },
    { id: 10, applyDate: '23/11/2021 16:24:29', prosonalID: '5554567890123', lastName: 'สิต', firstName: 'ทีมเดป', age: 17, educationLevel: 'ปริญญาโท', department: 'IT', gpa: 3.99, position: 'AIS Contact Center ภาษาอังกฤษ', site: 'กรุงเทพฯ (อาคารพหลโยธินเพลส)', status: 'Pre-verify (Pass) - Completed' },
];

export default function DataTable() {
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
