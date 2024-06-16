import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Update = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [courses, setCourses] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [comments, setComments] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setAge(localStorage.getItem("age"));
    setEmail(localStorage.getItem("email"));
    setGender(localStorage.getItem("gender"));
    setCourses(localStorage.getItem("courses"));
    setPhone(localStorage.getItem("phone"));
    setDate(localStorage.getItem("date"));
    setComments(localStorage.getItem("comments"));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`https://6664520a932baf9032aab50f.mockapi.io/Crud-app/${id}`, {
      name: name,
      age: age,
      email: email,
      gender: gender,
      courses: courses,
      phone: phone,
      date: date,
      comments: comments,
    }).then(() => {
      navigate("/read");
    });
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="border border-primary border-2 p-4 rounded">
            <h2 className="text-center mb-2">Update</h2>
            <form>
              {/* Form inputs */}
              <div className="mb-2">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              {/* Other form fields */}
              <div className="mb-2">
                <label className="form-label">Age</label>
                <input
                  type="number"
                  className="form-control"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
              {/* Other form fields */}
              <div className="mb-2">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {/* Other form fields */}
              <div className="mb-2">
                <label className="form-label">Gender</label>
                <input
                  type="text"
                  className="form-control"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                />
              </div>
              {/* Other form fields */}
              <div className="mb-2">
                <label className="form-label">Courses</label>
                <input
                  type="text"
                  className="form-control"
                  value={courses}
                  onChange={(e) => setCourses(e.target.value)}
                />
              </div>
              {/* Other form fields */}
              <div className="mb-2">
                <label className="form-label">Phone No</label>
                <input
                  type="text"
                  className="form-control"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              {/* Other form fields */}
              <div className="mb-2">
                <label className="form-label">Date</label>
                <input
                  type="date"
                  className="form-control"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              {/* Other form fields */}
              <div className="mb-2">
                <label className="form-label">Comments</label>
                <input
                  type="text"
                  className="form-control"
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                />
              </div>
              {/* Update and Back buttons */}
              <div className="row">
                <div className="col">
                  <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    onClick={handleUpdate}
                  >
                    Update
                  </button>
                </div>
                <div className="col">
                  <Link to="/read">
                    <button className='btn btn-secondary btn-block'>
                      Back
                    </button>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Update;
