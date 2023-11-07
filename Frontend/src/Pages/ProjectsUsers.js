import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ProjectsUsers() {
  //Get User List Start
  const apiurl = process.env.REACT_APP_DEV_API_KEY_NEW;
  const baseURL = "http://13.200.102.128:8001/";
  const placeholderImage =baseURL+"assets/user.jpg";
  const onImageError = (e) => {
    e.target.src = placeholderImage;
  };
  const [currentPage, setCurrentPage] = useState(1);
  const [users, setUsers] = useState([]);
  const [editAbleUser, setEditAbleUser] = useState({});
  const user = JSON.parse(localStorage.getItem("profile"));
  const user_id = user.response.userDetails.id;
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [deletingUserId, setDeletingUserId] = useState(null);
  const [toplevel, settopLevel] = useState([]);
  
  useEffect(() => {
    const url = apiurl + "getuserlist/";
    const getToken = JSON.parse(localStorage.getItem("profile"))?.response
      ?.token;
    const bearer_token = `Bearer ${getToken}`;
    var body = {
      user_id: user_id,
    };
    const config = {
      headers: {
        Authorization: bearer_token,
      },
    };
    axios
      .post(url, body, config)
      .then((res) => {
        console.log("Response of Project users", res);
        if(res.data.status === "Token is Expired"){navigate('/')}
        setUsers(res?.data?.response?.userList.User);
        settopLevel(res.data.response.userList.topLevel);
        setCurrentPage(1);
      })
      .catch((err) => {});
  }, []);

 

  function deleteUser(id) {
    setShowModal(true);
    setDeletingUserId(id);
  }

  function handleDeleteUser() {
    const url = apiurl + "setdeleteuser"; 
    const getToken = JSON.parse(localStorage.getItem("profile"))?.response
      ?.token;
    const bearer_token = `Bearer ${getToken}`;
    const config = {
      headers: {
        Authorization: bearer_token,
      },
    };
    // Send the user ID in the request body
    const body = {
      user_id: user_id,
      duser_id: deletingUserId,
    };
    axios
      .post(url, body, config)
      .then((res) => {
        // console.log("User deleted successfully:", res);
        axios
          .post(apiurl + "getuserlist/", { user_id: user_id }, config)
          .then((res) => {
            // console.log("Updated User List:", res);
            setUsers(res?.data?.response?.userList?.User);
            setTimeout(()=>{
              navigate('/ProjectsUsers')
            },1500)
          })
          .catch((err) => {
            console.error("Error fetching updated user list:", err);
          });
      })
      .catch((err) => {
        console.error("Error deleting user:", err);
      });
  
    // Reset the state variables to hide the modal and clear the deletingUserId
    setShowModal(false);
    setDeletingUserId(null);
  }

  function userEditApi(editId) {
    const url = apiurl + "getusereditdetails";
    const getToken = JSON.parse(localStorage.getItem("profile"))?.response
      ?.token;
    const bearer_token = `Bearer ${getToken}`;
    const config = {
      headers: {
        Authorization: bearer_token,
      },
    };
    const data = {
      user_id: editId,
    };
    axios
      .post(url, data, config)
      .then((res) => {
  
        setEditAbleUser(res.data.response.editData);
        let datatToEdit = res.data.response.editData;
        navigate("/EditForm", { state: { editAbleUser: datatToEdit } });

      })
      .catch((error) => {
        console.log("Error fetching user edit details: ", error);
      });


  }

  ///// PAGINATION ////
  const recordsPerPage = 3;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = users.slice(firstIndex, lastIndex);
  const npage = Math.ceil(users.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  function nextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  }

  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function changeCpage(id) {
    setCurrentPage(id);
  }
  //// PAGINATION  END /////

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
                      <li className="breadcrumb-item">
                        <Link to="/ProjectsUsers">Projects /</Link>
                      </li>
                      <li className="breadcrumb-item active">Users</li>
                    </ol>
                  </div>
                  <h4 className="page-title">Users</h4>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <h5 className="mt-0">
                      Here the list of all users.{" "}
                      <span className="badge badge-pink">6</span>
                    </h5>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 text-end">
                <div className="text-end">
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <div className="input-group">
                        <input
                          type="text"
                          id="example-input1-group2"
                          name="example-input1-group2"
                          className="form-control form-control-sm"
                          placeholder="Search"
                        />
                        <button
                          type="button"
                          className="btn btn-primary btn-sm"
                        >
                          <i className="fas fa-search"></i>
                        </button>
                      </div>
                    </li>
                    <li className="list-inline-item">
                      <Link to="/ProjectsUsersAdd">
                        <button
                          type="button"
                          className="btn btn-primary btn-sm"
                        >
                          Create User
                        </button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              {toplevel.map((obj, i) => {
                return (
                  <div className="col-lg-4" key={i}>
                    <div className="card">
                      <div className="card-body p-0">
                        <div className="media p-3  align-items-center">
                          {/* <Link to="profile-users.php"> */}
                            <img
                              src={
                                  baseURL + obj.profileimage
                                  ? baseURL + obj.profileimage  
                                  : placeholderImage                              
                              }
                              onError={onImageError}
                              alt="user"
                              className="rounded-circle thumb-lg"
                            />
                          {/* </Link> */}

                          <div className="media-body ms-3 align-self-center">
                            <Link to="profile-users.php">
                              <h5 className="m-0">
                                {" "}
                                {obj.name}
                                <span className="badge badge-warning font-10">
                                  New
                                </span>
                              </h5>
                            </Link>

                            <p className="mb-0 text-muted">
                              {obj.userDesignation}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <div className="row align-items-center">
                      <div className="col">
                        <h4 className="card-title">Our Users</h4>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-striped">
                        <thead className="thead-light">
                          <tr>
                            <th>Name</th>
                            <th>Images</th>
                            <th>Designation</th>
                            <th>Email</th>
                            <th>Contact</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {records.map((obj, i) => {
                            return (
                              <tr key={i}>
                                <td> {obj.name}</td>
                                <td>
                                  {/* <Link to="profile-users.php"> */}
                                    <img
                                      src={
                                        baseURL + obj.profileimage
                                        ? baseURL + obj.profileimage
                                          : placeholderImage
                                      }
                                      alt=""
                                      className="rounded-circle thumb-sm me-1"
                                    />
                                  {/* </Link> */}
                                </td>
                                <td>{obj.userDesignation}</td>
                                <td>{obj.email}</td>
                                <td>{obj.phone}</td>
                                <td>
                                  {/* <Link to="/EditForm"> */}
                                  <button onClick={() => userEditApi(obj.id)} className="btn btn-warning btn-sm px-3">
                                    <i className="las la-pen text-secondary font-16 text-dark"></i>
                                  </button>
                                  {/* </Link> */}
                                  &nbsp;&nbsp;
                                  <Link
                                    to="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#modalDelete"
                                  >
                                    <button onClick={() => deleteUser(obj.id)} className="btn btn-danger btn-sm px-3">
                                      <i className="las la-trash-alt text-secondary font-16 text-dark"></i>
                                    </button>
                                  </Link>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                    <div className="text-end">
                      <nav aria-label="...">
                        <ul className="pagination pagination-sm mb-0 justify-content-end">
                          <li className="page-item">
                            <Link
                              className="page-link"
                              to="#"
                              onClick={() => prePage()}
                            >
                              Previous
                            </Link>
                          </li>

                          {/* <li className="page-item active">
                            <Link className="page-link" to="#">
                              1
                            </Link>
                          </li>
                          <li className="page-item">
                            <Link className="page-link" to="#">
                              2 <span className="sr-only">(current)</span>
                            </Link>
                          </li>
                          <li className="page-item">
                            <Link className="page-link" to="#">
                              3
                            </Link>
                          </li>  */}

                          {numbers.map((e, i) => {
                            return (
                              <li
                                className={`page-item ${
                                  currentPage === e ? "active" : ""
                                }`}
                                key={i}
                              >
                                <a
                                  href="#"
                                  className="page-link"
                                  onClick={() => changeCpage(e)}
                                >
                                  {e}
                                </a>
                              </li>
                            );
                          })}

                          <li className="page-item">
                            <Link
                              className="page-link"
                              to="#"
                              onClick={() => nextPage()}
                            >
                              Next
                            </Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="modalDelete">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body py-5 text-center">
              <h4 className="lh-base mb-4">
                Are you sure you want to <br /> delete this record
              </h4>
              <button
                type="button"
                className="btn btn-success me-3"
                onClick={() => handleDeleteUser()}
                data-bs-dismiss="modal"
              >
                Yes
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={() => setShowModal(false)}
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProjectsUsers;
