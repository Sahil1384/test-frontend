import React, { useEffect, useState , useRef } from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function RailwayZone() {
  const navigate = useNavigate();
  const apiurl = process.env.REACT_APP_DEV_API_KEY_NEW;
  const user = JSON.parse(localStorage.getItem("profile"));
  const user_id = user.response.userDetails.id;
  const [zones, setZones] = useState([]);
  const [deletingUserId, setDeletingUserId] = useState(null);
  const [moreZones, setMoreZones] = useState([]);
  const tableBottomRef = useRef();
  const tableTopRef = useRef();

  //// Fatching Data from APIs /////
  useEffect(() => {
    const url = process.env.REACT_APP_DEV_API_KEY_NEW + "getrailwayzonelist/";
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
        console.log("Railway Zone Response", res);

        setZones(res.data.response.RailwayZoneList);
        setMoreZones(res.data.response.RailwayZoneList.slice(0, 5));
      })
      .catch((err) => {});
  }, []);
 
  //// Fatching Data from APIs End/////

  //// Getting Editable User and Pass User Data to Edit Form Page  /////
  function editUser(id) {
    const editUser = zones.find((e) => e.id === id);
    navigate("/edit-railway-zone", { state: { editUser: editUser } });
  }
  //// Getting Editable User End /////

  //// Delete User ///////
  function deleteUser(id) {
    // setShowModal(true);
    setDeletingUserId(id);
  }
  function handleDeleteUser() {
    const url = apiurl + "deleterailwayzone/";
    const getToken = JSON.parse(localStorage.getItem("profile"))?.response
      ?.token;
    const bearer_token = `Bearer ${getToken}`;
    const config = {
      headers: {
        Authorization: bearer_token,
      },
    };
    const body = {
      user_id: user_id,
      railwayZoneId: deletingUserId,
    };
    axios
      .post(url, body, config)
      .then((res) => {
        console.log("User deleted successfully:", res);
        axios
          .post(apiurl + "getrailwayzonelist/", { user_id: user_id }, config)
          .then((res) => {
            console.log("Updated User List:", res);
            setZones(res.data.response.RailwayZoneList);
            setMoreZones(res.data.response.RailwayZoneList.slice(0,5))
          })
          .catch((err) => {
            console.error("Error fetching updated user list:", err);
          });
      })
      .catch((err) => {
        console.error("Error deleting user:", err);
      });
    setDeletingUserId(null);
  }
  //// Delete User End ///////

  //// Pagination ///////
  const scrollToBottom = () => {
      tableBottomRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    };
  const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

  function moreData() {
    const additionalData = zones.slice(moreZones.length, moreZones.length + 3);
    setMoreZones((prevMoreZones) => prevMoreZones.concat(additionalData));
    scrollToBottom();
  }

  function lessData() {
    // setMoreZones(zones.slice(0, 5));
    scrollToTop(); 

    // Check if the last element of moreZones is the same as the last element of zones
  }
  useEffect(() => {
    if (moreZones.length > 5) {
      scrollToBottom();
    }
  }, [moreZones]);
  //// Pagination End /////

  return (
    <>
      <Header></Header>
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
                      <li className="breadcrumb-item active">Railway Zone</li>
                    </ol>
                  </div>
                  <h4 className="page-title">Railway Zone</h4>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <h5 className="mt-0">
                      Here the list of all zones.{" "}
                      {/* <span className="badge badge-pink">6</span> */}
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
                      <Link to="/railway-zone-add">
                        <button
                          type="button"
                          className="btn btn-primary btn-sm"
                        >
                          Create Railway Zone
                        </button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <div className="row align-items-center">
                      <div className="col">
                        <h4 className="card-title">Our Zones</h4>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-striped">
                        <thead className="thead-light">
                          <tr>
                            <th>Sr No.</th>
                            <th>Name</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {moreZones.map((element, index) => {
                            return (
                              <tr key={element.id}>
                                <th scope="row">{index + 1}</th>
                                <td>{element.name}</td>
                                <td>
                                  <button
                                    className="p-1  btn btn-warning"
                                    onClick={() => editUser(element.id)}
                                  >
                                    <i className="las la-pen text-secondary font-6 px-1 text-light"></i>
                                  </button>
                                  &nbsp;&nbsp;
                                  <Link
                                    to="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#modalDelete"
                                  >
                                    <button
                                      className="p-1 btn btn-danger"
                                      onClick={() => deleteUser(element.id)}
                                    >
                                      <i className="las la-trash-alt text-secondary font-6 px-1 text-light" ></i>
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
                      {/* <button
                          className="btn btn-secondary btn-sm mx-2"
                          onClick={() => lessData()}
                        >
                          Show Less
                        </button> */}
                      {moreZones.length > 5 && (
                        <button
                          className="btn btn-secondary btn-sm mx-2"
                          onClick={() => lessData()}
                        >
                          <i className="fa fa-arrow-up mx-2"></i>
                        </button>
                      )}

                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => moreData()}
                      >
                        Show More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Start */}
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
                // onClick={() => setShowModal(false)}
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>

      <div ref={tableBottomRef} />
      <div ref={tableTopRef} />
      <Footer></Footer>
    </>
  );
}

export default RailwayZone;
