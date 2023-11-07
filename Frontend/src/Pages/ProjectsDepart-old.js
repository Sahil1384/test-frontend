import React, { useEffect, useState } from "react"
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from '../Components/Footer'
import Header from '../Components/Header'

function ProjectsTeam() {

  const baseURL =  "http://13.200.102.128:8001/";
  const [departs, setDeparts] = useState([])

  const fetchData = () => {

    const url = 'http://13.200.102.128:8001/api/getdepartmentlist/';
    const getToken = JSON.parse(localStorage.getItem("profile"))?.response?.token
    const bearer_token = `Bearer ${getToken}`;
    const config = {
      headers: {
        Authorization: bearer_token
      }
    };
    const payload = {
      "user_id": 1
    }

    axios.post(url, payload, config)
      .then((res) => {
        // console.log("27, ", res)
        // console.log("28, ", res?.data?.response?.departmentsList)
        setDeparts(res.data.response.departmentsList)
      })
      .catch(err => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <>
      <Header />
      <div className='page-wrapper'>
        <div className='page-content-tab'>
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <div className="page-title-box">
                  <div className="float-end">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><Link to="#"></Link>
                      </li>
                      <li className="breadcrumb-item"><Link to="#">Projects /</Link>
                      </li>
                      <li className="breadcrumb-item active">Department list</li>
                    </ol>
                  </div>
                  <h4 className="page-title">Department list</h4>
                </div>
              </div>
            </div>
            {/* {departs.length > 1 && (
              <ul>
                {departs.map(depart => (
                  <li key={depart.id}>{depart.name}</li>
                ))}
              </ul>
            )} */}
            <div className="row">
              <div className="col-lg-6">
                <h5 className="m-0 font-14">Here the list of all available Department. <span className="badge badge-soft-pink">6</span>
                </h5>
              </div>

              <div className="col-lg-6 text-end">
                <Link to="/ProjectsDepartAdd"><button type="button" className="btn btn-primary btn-sm mb-3">Create Department</button></Link>
              </div>
            </div>

            <div className="row">

              {departs.map((depart, i) => {


                return <div key={i} className="col-lg-4" >
                  <div className="card team-card">
                    <div className="card-body">
                      <div className="float-end">
                        <div className="dropdown d-inline-block">
                          <Link className="dropdown-toggle" id="dLabel1" data-bs-toggle="dropdown" to="#" role="button"
                            aria-haspopup="false" aria-expanded="false">
                            <i className="las la-ellipsis-v font-24 text-muted"></i>
                          </Link>
                          <div className="dropdown-menu dropdown-menu-end" aria-labelledby="dLabel1">
                            <Link className="dropdown-item" to="#">Add Members</Link>
                            <Link className="dropdown-item" to="#">Add Projects</Link>
                            <Link className="dropdown-item" to="#">Edit</Link>
                            <Link className="dropdown-item" to="#">Delete</Link>
                          </div>
                        </div>
                      </div>
                      <div className="media align-items-center">
                        <div className="img-group">
                          <Link className="user-avatar me-1" to="#">
                            <img src={baseURL + depart.departmentHead.profileimage} alt={depart.departmentHead.name} className="rounded-circle thumb-md" />
                            <span className="avatar-badge online"></span>
                          </Link>
                        </div>
                        <div className="media-body ms-2 align-self-center">
                          <h5 className="m-0">{depart.departmentHead.name}</h5>
                          <p className="text-muted font-12 mb-0">{depart.departmentHead.phone}</p>
                        </div>
                      </div>
                      <h4 className="m-0 mt-3 font-13 mb-0 fw-bold">{depart.departmentDetails.name}</h4>
                      <p className="text-muted mb-0 fw-semibold">{depart.departmentDetails.description}</p>
                      <div className="mt-3 d-flex justify-content-between">
                        <div className="img-group">
                          {depart.departmentMembers.map((member, index) => {
                            return <Link className="user-avatar" to="#">
                              <img src={baseURL+member.profileimage} alt={depart.departmentDetails.name} className="thumb-xs rounded-circle" />
                            </Link>
                          })}
                          {/* {departmentMembers.map(depart , i)  => {
                            // <div className="events">{depart.person.name}</div>
                            <Link className="user-avatar" to="#">
                            <img src={depart.departmentMembers.profileimage} alt={depart.departmentMembers.profileimage} className="thumb-xs rounded-circle" />
                          </Link>
                           })} */}
                          {/* <Link className="user-avatar" to="#">
                            <img src={depart.departmentMembers.profileimage} alt={depart.departmentMembers.profileimage} className="thumb-xs rounded-circle" />
                          </Link>
                          <Link className="user-avatar ms-n3" to="#">
                            <img src={depart.departmentMembers.profileimage} alt={depart.departmentMembers.profileimage} className="thumb-xs rounded-circle" />
                          </Link>
                          <Link className="user-avatar" to="#">
                            <img src={depart.departmentMembers.profileimage} alt={depart.departmentMembers.profileimage} className="thumb-xs rounded-circle" />
                          </Link>
                          <Link className="user-avatar ms-n3" to="#">
                            <img src={depart.departmentMembers.profileimage} alt={depart.departmentMembers.profileimage} className="thumb-xs rounded-circle" />
                          </Link> */}
                          <Link to="#" className="user-avatar">
                            <span
                              className="thumb-xs justify-content-center d-flex align-items-center bg-soft-info rounded-circle fw-semibold">+{depart.departmentMembersCount}</span>
                          </Link>
                        </div>
                        <div className="align-self-center">
                          <button type="button" className="btn btn-xs btn-light btn-round">View Details <i
                            className="mdi mdi-arrow-right"></i></button>
                        </div>
                      </div>
                      <hr className="hr-dashed my-3" />
                      <div className="media align-items-center">
                        <img src="assets/images/small/project-2.jpg" alt="" className="rounded-circle thumb-sm" />
                        <div className="media-body ms-3 align-self-center">
                          <h6 className="m-0 font-15">Total projects </h6>
                          <div className="d-flex justify-content-between">
                            <span>
                              <Link className="" to="#">
                                <i className="mdi mdi-format-list-bulleted text-success"></i>
                                <span className="text-muted">{depart.departmentPendingProjects}/100</span>
                              </Link>
                            </span>
                            <span className="text-muted">{depart.departmentCompletedProjects}% Complete</span>
                          </div>
                          <div className="progress mt-0" style={{ height: '3px' }}>
                            <div className="progress-bar bg-warning" role="progressbar" style={{ width: '55%' }}
                              aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              })}
            </div>
          </div>
        </div>
      </div >
      <Footer />
    </>
  )
}

export default ProjectsTeam
