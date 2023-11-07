import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { useNavigate } from "react-router-dom";

function MaterialRejected() {
const navigate = useNavigate();

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
                      {/* <li className="breadcrumb-item">
                        <Link to="/emd-paid">EMD Paid Status /</Link>
                      </li> */}
                      <li className="breadcrumb-item active">Rejected Material</li>
                    </ol>
                  </div>
                  <h4 className="page-title">Rejected Material</h4>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <h5 className="mt-0">
                      Here the list of all Rejected Material.{" "}
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
                      <Link to="/rejected-material-add">
                        <button
                          type="button"
                          className="btn btn-primary btn-sm"   
                        >
                          Add Material 
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
                        <h4 className="card-title">Our Rejected Material</h4>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-striped">
                        <thead className="thead-light">
                          <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Status</th>  
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>
                            <button className="p-1"><i className="las la-pen text-secondary font-16"></i></button>
                                  &nbsp;&nbsp;
                            <button className="p-1"><i className="las la-trash-alt text-secondary font-6"></i></button>
                            </td>
                  
                          </tr>
                          <tr>
                            <th scope="row">1</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>
                            <button className="p-1"  onClick={()=>navigate('/edit-rejected-material')}><i className="las la-pen text-secondary font-16"></i></button>
                                  &nbsp;&nbsp;
                            <button className="p-1"><i className="las la-trash-alt text-secondary font-6"></i></button>
                            </td>
                          </tr>
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


                          <li className="page-item">
                            <Link
                              className="page-link"
                              to="#"
            
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
      <Footer></Footer>
    </>
  );
}

export default MaterialRejected;
