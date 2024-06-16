import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
    <div className="container">
      <div className="form-check form-switch mt-3">
        <input
          className="form-check-input"
          type="checkbox"
          checked={tableDark}
          onChange={() => setTableDark((prev) => !prev)}
        />
        <label className="form-check-label">Toggle Dark Mode</label>
      </div>

      <div className="d-flex justify-content-between align-items-center my-4">
        <h2 className="text-primary">Read Operation</h2>
        <Link to="/">
          <button className="btn btn-secondary">Create</button>
        </Link>
      </div>

      <table className={`table table-striped ${tableDark ? "table-dark" : ""}`}>
        <thead className="table-primary">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Email</th>
            <th scope="col">Gender</th>
            <th scope="col">Courses</th>
            <th scope="col">Phone No</th>
            <th scope="col">Date</th>
            <th scope="col">Comments</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((eachData) => (
            <tr key={eachData.id}>
              <td>{eachData.id}</td>
              <td>{eachData.name}</td>
              <td>{eachData.age}</td>
              <td>{eachData.email}</td>
              <td>{eachData.gender}</td>
              <td>{eachData.courses}</td>
              <td>{eachData.phone}</td>
              <td>{eachData.date}</td>
              <td>{eachData.comments}</td>
              <td>
                <Link to="/update">
                  <button
                    type="button"
                    className="btn btn-success btn-sm"
                    onClick={() => setToLocalStorage(eachData)}
                  >
                    Edit
                  </button>
                </Link>
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(eachData.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Read;
