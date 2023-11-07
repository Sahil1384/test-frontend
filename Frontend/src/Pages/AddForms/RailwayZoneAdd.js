import React, { useState } from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import { Link, NavLink, useNavigate } from "react-router-dom";
import axios from "axios"

function RailwayZoneAdd() {
  const user = JSON.parse(localStorage.getItem("profile"));
  const user_id = user.response.userDetails.id;
  const navigate = useNavigate()
  const [name, setName] = useState("");
  const [nameError , setNameError]= useState('')
  const apiurl  = process.env.REACT_APP_DEV_API_KEY_NEW;

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      user_id,
      name,
    };
    const getToken = user.response.token;
    const bearer_token = `Bearer ${getToken}`;
    const config = {
      headers: {
        Authorization: bearer_token,
      },
    };
    axios.post(apiurl + "storerailwayzone/", data, {
      headers: {
        Authorization: bearer_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
    .then(response => {
      console.log("response is", response);
      if (response.data.success) {               
          navigate("/railway-zone");
      }
  })
  .catch((error)=>{
       console.log("Error is" , error)
       if (error.response.data.message === 'Error validation') {
        setNameError(error.response.data.response.name);
      }
  })
  }

  return (
    <>
      <Header />
      <div className="page-wrapper">
        <div className="page-content-tab">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <div className="page-title-box">
                  <div className="float-end">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="#"></Link>
                      </li>
                      {/* <li className="breadcrumb-item">
                        <Link to="#!">Projects /</Link>
                      </li> */}
                      <li className="breadcrumb-item">
                        <Link to="/railway-zone">Railway Zone /</Link>
                      </li>
                      <li className="breadcrumb-item active">Add New Zone</li>
                    </ol>
                  </div>
                  <h4 className="page-title">Add New Railway Zone </h4>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group mb-3">
                            <label htmlFor="name" className="form-label">
                              Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="name"
                              name="name"
                              placeholder="Enter name"
                              maxLength={40}
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                            />
                             <p style={{ color: "red" }}>{nameError}</p>
                          </div>
                        </div>
                       
                      </div>
                      <div className="col-md-4">
                        <button
                          type="submit"
                          className="btn btn-primary btn-sm me-3"
                        >
                          Save
                        </button>
                        <NavLink to="/railway-zone">
                          <button
                            type="button"
                            className="btn btn-de-danger btn-sm"
                          >
                            Cancel
                          </button>
                        </NavLink>
                      </div>
                    </form>

                    {/* <p style={{ color: "red" }}>{error}</p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default RailwayZoneAdd;
