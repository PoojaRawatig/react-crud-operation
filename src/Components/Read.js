import React, { useState, useEffect } from "react";
import axios from "axios";
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './DataTableStyles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";


const StudentTable = ({ apiUrl = "https://6664520a932baf9032aab50f.mockapi.io/Crud-app" }) => {
    const [stdData, setData] = useState([]);

    const getData = async () => {
        try {
            const res = await axios.get(apiUrl);
            setData(res.data);
            toast.success("Data successfully loaded!");

        } catch (error) {
            toast.error("Error loading data.");
            console.error("Error fetching data: ", error);
        }
    };

    useEffect(() => {
        getData();
    }, [apiUrl]);

    const editData = (data) => {
        for (const [key, value] of Object.entries(data)) {
          localStorage.setItem(key, value);
        }
      };
      const deleteData = async (rowId) => {
        try {
            await axios.delete(`${apiUrl}/${rowId}`);
            getData();
        } catch (error) {
            console.error("Error deleting data: ", error);
        }
    };

    const columns = [
        {
            name: 'ID',
            selector: row => row.id,
            sortable: true,
        },
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'Gender',
            selector: row => row.gender,
            sortable: true,
        },
        {
            name: 'Email',
            selector: row => row.email,
            sortable: true,
        },
        {
            name: 'Phone',
            selector: row => row.phone,
            sortable: true,
        },
        {
            name: 'Course',
            selector: row => row.courses,
            sortable: true,
        },
        {
            name: 'Date',
            selector: row => row.date,
            sortable: true,
        },
        {
            name: 'Edit',
            cell: row => (
                <Link to="/update" style={{ textDecoration: 'none' }} onClick={() => editData(row)}>
                    <FontAwesomeIcon icon={faEdit} style={{ color: 'blue', cursor: 'pointer' }} />
                </Link>
            ),
            sortable: false,
        },
        {
            name: 'Delete',
            cell: row => (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <FontAwesomeIcon
                        icon={faTrash}
                        style={{ color: 'red', cursor: 'pointer', marginRight: '10px' }}
                        onClick={() => deleteData(row.id)}
                    />
                </div>
            ),
            sortable: false,
        },
    ];

    const tableData = {
        columns,
        data: stdData,
        exportHeaders: true,
        fileName: "students"
    };

    return (
        <>
            <ToastContainer />
            <DataTableExtensions {...tableData}>
                <DataTable
                    title="Read Operation"
                    columns={columns}
                    data={stdData}
                    pagination
                    highlightOnHover
                    // className="custom-datatable"
                />
            </DataTableExtensions>
        </>
    );
};


export default StudentTable;
