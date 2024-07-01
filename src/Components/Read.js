import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Switch,
  Typography,
} from "@mui/material";

const Read = () => {
  const [data, setData] = useState([]);
  const [tableDark, setTableDark] = useState(false);

  const getData = async () => {
    try {
      const res = await axios.get("https://6664520a932baf9032aab50f.mockapi.io/Crud-app");
      setData(res.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://6664520a932baf9032aab50f.mockapi.io/Crud-app/${id}`);
      getData();
    } catch (error) {
      console.error("Error deleting data: ", error);
    }
  };

  const setToLocalStorage = (data) => {
    for (const [key, value] of Object.entries(data)) {
      localStorage.setItem(key, value);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <Typography variant="h4" color="primary">Read Operation</Typography>
        <div>
          <Switch
            checked={tableDark}
            onChange={() => setTableDark((prev) => !prev)}
            color="default"
          />
          <Typography variant="caption">Toggle Dark Mode</Typography>
        </div>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button variant="contained" color="success">Create</Button>
        </Link>
      </div>
      <TableContainer component={Paper} style={{ backgroundColor: tableDark ? "#333" : "#fff" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Courses</TableCell>
              <TableCell>Phone No</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Comments</TableCell>
              <TableCell>Edit</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((eachData) => (
              <TableRow key={eachData.id}>
                <TableCell>{eachData.id}</TableCell>
                <TableCell>{eachData.name}</TableCell>
                <TableCell>{eachData.age}</TableCell>
                <TableCell>{eachData.email}</TableCell>
                <TableCell>{eachData.gender}</TableCell>
                <TableCell>{eachData.courses}</TableCell>
                <TableCell>{eachData.phone}</TableCell>
                <TableCell>{eachData.date}</TableCell>
                <TableCell>{eachData.comments}</TableCell>
                <TableCell>
                  <Link to="/update" style={{ textDecoration: 'none' }}>
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      onClick={() => setToLocalStorage(eachData)}
                    >
                      Edit
                    </Button>
                  </Link>
                </TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="error"
                    size="small"
                    onClick={() => handleDelete(eachData.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Read;
