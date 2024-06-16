import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const Create = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [course, setCourse] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneCode, setPhoneCode] = useState("+91");
  const [comments, setComments] = useState("");
  const [nameError, setNameError] = useState("");
  const [ageError, setAgeError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;

    if (name.trim() === "") {
      setNameError("Name is required *");
      isValid = false;
    } else if (!/^[a-zA-Z ]+$/.test(name)) {
      setNameError("Name should contain only alphabets");
      isValid = false;
    } else {
      setNameError("");
    }

    if (age.trim() === "") {
      setAgeError("Age is required *");
      isValid = false;
    } else if (parseInt(age) < 0) {
      setAgeError("Age cannot be negative");
      isValid = false;
    } else {
      setAgeError("");
    }

    if (email.trim() === "") {
      setEmailError("Email is required *");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Invalid email format");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (gender === "") {
      alert("Please select gender");
      isValid = false;
    }

    if (course === "") {
      alert("Please select a course");
      isValid = false;
    }

    if (phone.trim() === "") {
      alert("Phone number is required");
      isValid = false;
    }

    if (isValid) {
      axios
        .post("https://6664520a932baf9032aab50f.mockapi.io/Crud-app", {
          name,
          age,
          email,
          date,
          gender,
          courses: course,
          comments,
          phone: `${phoneCode} ${phone}`,
        })
        .then(() => {
          navigate("/read");
        });
    }
  };

  // Function to reset form fields
  const handleCancel = () => {
    setName("");
    setAge("");
    setEmail("");
    setDate("");
    setGender("");
    setCourse("");
    setPhone("");
    setComments("");
    setPhoneCode("+91");
    setNameError("");
    setAgeError("");
    setEmailError("");
  };

  return (
    <div className="container mt-3">
      <form onSubmit={handleSubmit} className="card p-3 shadow border border-primary" style={{ maxWidth: "600px", margin: "0 auto" }}>
        <div className="mb-3">
          <legend className="text-primary d-flex justify-content-between align-items-center" style={{ fontWeight: "bold", fontFamily: "Arial, sans-serif", backgroundImage: "url('leaf.png')", backgroundSize: "contain", backgroundRepeat: "no-repeat", paddingLeft: "50px" }}>
            <span>Crud Operations</span>
            <div>
              {/* <Link to="/">
                <button className="btn btn-primary me-2">Create</button>
              </Link> */}
              <Link to="/read">
                <button className="btn btn-primary">Show Data</button>
              </Link>
            </div>
          </legend>
        </div>
        <div className="mb-2">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control form-control-sm"
            style={{ color: "black" }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {nameError && <div className="text-danger">{nameError}</div>}
        </div>
        <div className="mb-2">
          <label className="form-label">Age</label>
          <input
            type="number"
            className="form-control form-control-sm"
            style={{ color: "black" }}
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          {ageError && <div className="text-danger">{ageError}</div>}
        </div>
        <div className="mb-2">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control form-control-sm"
            style={{ color: "black" }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <div className="text-danger">{emailError}</div>}
        </div>
        <div className="mb-2">
          <label className="form-label">Gender</label>
          <div>
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={(e) => setGender(e.target.value)}
            /> Male&nbsp;&nbsp;&nbsp;
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={(e) => setGender(e.target.value)}
            /> Female&nbsp;&nbsp;&nbsp;
            <input
              type="radio"
              name="gender"
              value="Other"
              onChange={(e) => setGender(e.target.value)}
            /> Other
          </div>
        </div>
        <div className="mb-2">
          <label className="form-label">Courses</label>
          <select
            name="course"
            className="form-control form-control-sm"
            style={{ color: "black" }}
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          >
            <option value="">Select a course</option>
            <option value="Full Stack Development">Full Stack Development</option>
            <option value="Programming with Python">Programming with Python</option>
            <option value="Machine Learning">Machine Learning</option>
            <option value="Graphic Designing">Graphic Designing</option>
            <option value="Software Engineering">Software Engineering</option>
            <option value="Animation & VFX">Animation & VFX</option>
          </select>
        </div>
        <div className="mb-2">
          <label className="form-label">Phone No</label>
          <div className="d-flex">
            <select
              name="phoneCode"
              className="form-control form-control-sm w-auto"
              style={{ color: "black" }}
              value={phoneCode}
              onChange={(e) => setPhoneCode(e.target.value)}
            >
              <option value="+91">+91</option>
              <option value="+89">+89</option>
              <option value="+83">+83</option>
              <option value="+67">+67</option>
              <option value="+37">+37</option>
              <option value="+98">+98</option>
            </select>
            <input
              type="number"
              name="phone"
              className="form-control form-control-sm"
              style={{ color: "black" }}
              placeholder="Enter your Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-2">
          <label className="form-label">Date</label>
          <input
            type="date"
            className="form-control form-control-sm"
            style={{ color: "black" }}
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <textarea
          name="textarea"
          className="form-control form-control-sm"
          cols="30"
          rows="2"
          placeholder="Enter your comment"
          style={{ color: "black" }}
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        ></textarea>
        <div className="d-flex justify-content-end mt-2">
          <button type="submit" className="btn btn-primary btn-sm me-2">
            Submit
          </button>
          <button
            type="button"
            className="btn btn-danger btn-sm"
            onClick={handleCancel}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;
