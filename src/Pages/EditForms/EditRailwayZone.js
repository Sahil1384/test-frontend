import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from 'react-router-dom';

function EditRailwayZone() {
  const location = useLocation()
  const navigate = useNavigate()
  const editUser = location.state.editUser
  const [isChecked, setIsChecked] = useState(true);
  const [name , setName] =useState(editUser.name)
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  const railwayZoneId = editUser.id  
  const [nameError , setNameError]= useState('')
  
  const handleSubmit = e => {
    e.preventDefault()
    const user = JSON.parse(localStorage.getItem("profile"));  
    const user_id = user.response.userDetails.id; 
    const data = {
        user_id, railwayZoneId, name
    }
    const getToken = user.response.token;
    const bearer_token = `Bearer ${getToken}`;
    const config = {
        headers: {
            Authorization: bearer_token
        }
    };
    axios.post("http://13.200.102.128:8001/api/editrailwayzone",data, {
        headers: {
            'Authorization': bearer_token,
            'Accept' : 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        // return  response;
        if (response.data.success) {               
            navigate("/railway-zone");
        }
        console.log("255 ", response);
    })
    .catch((error) => {
        if (error.response.data.message === 'Error validation') {
         setNameError(error.response.data.response.name);
       }
     
    });
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
                        <Link to="/railway-zone">Railway Zone/</Link>
                      </li>
                      <li className="breadcrumb-item active">Edit Railway Zone</li>
                    </ol>
                  </div>
                  <h4 className="page-title">Edit Railway Zone</h4>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <form encType="multipart/form-data" onSubmit={handleSubmit}>
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
                        <div className="col-md-4">
                          <div className="form-group">
                            <label
                              htmlFor="flexSwitchCheckChecked"
                              className="form-label"
                            >
                              Status
                            </label>
                            <div className="form-check form-switch">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="flexSwitchCheckChecked"
                                checked={isChecked}
                                onChange={handleCheckboxChange}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <button
                          type="submit"
                          className="btn btn-primary btn-sm me-3"
                        >
                          Update
                        </button>
                        <Link to="/railway-zone">
                          <button
                            type="button"
                            className="btn btn-de-danger btn-sm"
                          >
                            Cancel
                          </button>
                        </Link>
                      </div>
                    </form>
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

export default EditRailwayZone;
