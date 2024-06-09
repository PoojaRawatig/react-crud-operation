import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  const history = useNavigate();

  const header = { "Access-Control-Allow-Origin": "*" };

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;

    if (name.trim() === "") {
      setNameError("Name is required");
      isValid = false;
    } else {
      setNameError("");
    }

    if (email.trim() === "") {
      setEmailError("Email is required");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (isValid) {
      axios.post("https://6664520a932baf9032aab50f.mockapi.io/Crud-app", {
        name: name,
        email: email,
        header,
      })
      .then(() => {
        history("/read");
      });
    }
  };

  return (
    <>
      <div className="d-flex justify-content-between m-4">
        <h2>Create</h2>
        <Link to="/read">
          <button className="btn btn-primary">Show Data</button>
        </Link>
      </div>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
          />
          {nameError && <div style={{ color: "red" }}>{nameError}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <div style={{ color: "red" }}>{emailError}</div>}
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Create;
