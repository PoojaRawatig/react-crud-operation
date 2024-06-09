import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);
  const [tabledark, setTableDark] = useState('')

  function getData() {
    axios
      .get("https://6664520a932baf9032aab50f.mockapi.io/Crud-app")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }

  function handleDelete(id) {
    axios.delete(`https://6664520a932baf9032aab50f.mockapi.io/Crud-app/${id}`)
  .then(() =>{
    getData()
  });

}
const setToLocalStorage = (id, name, email) =>{
  localStorage.setItem("id",id)
  localStorage.setItem("name",name);
  localStorage.setItem("email",email);
};


  useEffect(() => {
    getData();
  }, []);

  // getData();
  return (
    <>
    <div className="form-check form-switch">
      <input className="form-check-input" type="checkbox" onClick={() =>{
        if(tabledark === 'table-dark') setTableDark("")
         else setTableDark ("table-dark");
      }} />

    </div>
   
      <div className="d-flex justify-content-between m-4">
      <h2>Read Operation</h2>

      <Link to="/">
      <button className="btn btn-secondary">Create </button>
      </Link>

      </div>
      <table className={`table ${tabledark}`}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        {data.map((eachData) => {
          return (
            <>
              <tbody>
                <tr>
                  <th scope="row">{eachData.id}</th>

                  <td>{eachData.name}</td>
                  <td>{eachData.email}</td>
                  <td>
                  <Link to="/update">
                    <button type="button" class="btn btn-success"  
                    onClick={() =>{
                      setToLocalStorage(
                        eachData.id,
                        eachData.name,
                        eachData.email
                      )
                    }} >
                      Edit
                    </button>
                    </Link>
                  </td>
                  <td>
                  
                    <button
                      type="button"
                      class="btn btn-danger"
                      onClick={() => handleDelete(eachData.id)}
                    >
                      Delete{" "}
                    </button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </>
  );
};

export default Read;
