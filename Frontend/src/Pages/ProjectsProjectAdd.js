import React from 'react'
import { Link } from "react-router-dom";
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function ProjectsProjectAdd() {
  const apiurl  = process.env.REACT_APP_DEV_API_KEY_NEW;
  const user = JSON.parse(localStorage.getItem("profile"));
  const user_id = user.response.userDetails.id;  

  var body = {
      user_id: user_id
      
  }

  const [error, setError] = useState("")
  const navigate = useNavigate();
  const [serialNumber, setserialNumber] = useState("MD5 35095")
  const [project_id, setprojectId] = useState("")
  
    //First section Start 
  const [project_title, setproject_title] = useState("")
  const [poNoLoaNo, setpoNoLoaNo] = useState("")
  const [projectDescription, setprojectDescription] = useState("")
  const [railwayZone, setrailwayZone] = useState(1)
  const [workStatus, setworkStatus] = useState(1)
  const [fileNo, setfileNo] = useState("")
  const [tenderNo, settenderNo] = useState("")
  const [tenderQty, settenderQty] = useState("")  
  const [tenderDate, settenderDate] = useState("")
  const [poDateLoaDate, setpoDateLoaDate] = useState("")
  const [poLoaQty, setpoLoaQty] = useState("")
  const [unit, setunit] = useState("")
  const [startDate, setstartDate] = useState("")
  const [completionDate, setcompletionDate] = useState("")
  const [dpExtension, setdpExtension] = useState("")
  const [dpExtensionRemark, setdpExtensionRemark] = useState("")

  const [project_titleerror, setproject_titleError] = useState("")
  const [projectDescriptionerror, setprojectDescriptionError] = useState("")
  const [railwayZoneerror, setrailwayZoneError] = useState("")
  const [workStatuserror, setworkStatusError] = useState("")
  const [poNoLoaNoerror, setpoNoLoaNoError] = useState("") 
  const [fileNoerror, setfileNoError] = useState("")
  const [tenderNoerror, settenderNoError] = useState("")
  const [tenderQtyerror, settenderQtyError] = useState("")  
  const [tenderDateerror, settenderDateError] = useState("")
  const [poDateLoaDateerror, setpoDateLoaDateError] = useState("")
  const [poLoaQtyerror, setpoLoaQtyError] = useState("")
  const [uniterror, setunitError] = useState("")
  const [startDateerror, setstartDateError] = useState("")
  const [completionDateerror, setcompletionDateError] = useState("")
  const [dpExtensionerror, setdpExtensionError] = useState("")
  const [dpExtensionRemarkerror, setdpExtensionRemarkError] = useState("")

  //First section End
  
  //Second section Start

  const [basicPerUnit, setbasicPerUnit] = useState("")
  const [basicTotal, setbasicTotal] = useState("")
  const [packagingPerUnit, setpackagingPerUnit] = useState("")
  const [packegingTotal, setpackegingTotal] = useState("")
  const [freightPerUnit, setfreightPerUnit] = useState("")
  const [freightTotal, setfreightTotal] = useState("")
  const [gstPerUnit, setgstPerUnit] = useState("")
  const [gstTotal, setgstTotal] = useState("")
  const [installationPerUnit, setinstallationPerUnit] = useState("")
  const [installationTotal, setinstallationTotal] = useState("")
  const [other, setother] = useState("")
  const [loaPoValue, setloaPoValue] = useState("")
  


  const [basicPerUniterror, setbasicPerUnitError] = useState("")
  const [basicTotalerror, setbasicTotalError] = useState("")
  const [packagingPerUniterror, setpackagingPerUnitError] = useState("")
  const [packegingTotalerror, setpackegingTotalError] = useState("")
  const [freightPerUniterror, setfreightPerUnitError] = useState("")
  const [freightTotalerror, setfreightTotalError] = useState("")
  const [gstPerUniterror, setgstPerUnitError] = useState("")
  const [gstTotalerror, setgstTotalError] = useState("")
  const [installationPerUniterror, setinstallationPerUnitError] = useState("")
  const [installationTotalerror, setinstallationTotalError] = useState("")
  const [othererror, setotherError] = useState("")
  const [loaPoValueerror, setloaPoValueError] = useState("")
  //Second section End



  //Third section Start

  const [emdToPay, setemdToPay] = useState("")
  const [emdPaidStatus, setemdPaidStatus] = useState("")
  const [emdPaidAmount, setemdPaidAmount] = useState("")
  const [emdPaidDate, setemdPaidDate] = useState("")
  const [emdTransactionDetails, setemdTransactionDetails] = useState("")
  const [emdReturnAmount, setemdReturnAmount] = useState("")
  const [emdReturnDate, setemdReturnDate] = useState("")
  const [emdDue, setemdDue] = useState("")
  const [emdReturnRemark, setemdReturnRemark] = useState("")

  
  const [emdToPayerror, setemdToPayError] = useState("")
  const [emdPaidStatuserror, setemdPaidStatusError] = useState("")
  const [emdPaidAmounterror, setemdPaidAmountError] = useState("")
  const [emdPaidDateerror, setemdPaidDateError] = useState("")
  const [emdTransactionDetailserror, setemdTransactionDetailsError] = useState("")
  const [emdReturnAmounterror, setemdReturnAmountError] = useState("")
  const [emdReturnDateerror, setemdReturnDateError] = useState("")
  const [emdDueerror, setemdDueError] = useState("")
  const [emdReturnRemarkerror, setemdReturnRemarkError] = useState("")
  
  //Third section End




  const handleFirstSubmit = e => {
    e.preventDefault()
  
    const data = {
      user_id,serialNumber, project_title, poNoLoaNo, tenderQty, projectDescription, railwayZone, workStatus, fileNo, tenderNo, tenderDate,
      poDateLoaDate, poLoaQty, unit, startDate, completionDate , dpExtension, dpExtensionRemark
  }

  const getToken = user.response.token;
  const bearer_token = `Bearer ${getToken}`;
  const config = {
      headers: {
          Authorization: bearer_token
      }
  };

  axios.post(apiurl+"storeprojectfirst",data, {
      headers: {
          'Authorization': bearer_token,
          'Accept' : 'application/json',
          'Content-Type': 'application/json'
      }
  })
  .then(response => {
      // return  response;


      if (response.data.success) {               
          //navigate("/ProjectsProject");

          setprojectId(response.data.response.projectId);
          console.log("255 ", response);
          console.log("projectId 255 ", project_id);
        //  alert(projectId);

      }
     

      // console.log("255 pro", response.data.response);

      setError(response.data.status);


  })
  .catch((error) => {

      console.log("2555 ", error);
      console.log("2555 ", error.response.data.message);
      console.log("2555 ", error.response.data.response);

  if (error.response.data.message === 'Error validation') {
      setproject_titleError(error.response.data.response.project_title);
      setprojectDescriptionError(error.response.data.response.projectDescription);
      setcompletionDateError(error.response.data.response.completionDate);
      setdpExtensionError(error.response.data.response.dpExtension);  
      setdpExtensionRemarkError(error.response.data.response.dpExtensionRemark);  
      setpoNoLoaNoError(error.response.data.response.poNoLoaNo); 
      setrailwayZoneError(error.response.data.response.railwayZone);
      setworkStatusError(error.response.data.response.workStatus);
      setfileNoError(error.response.data.response.fileNo);
      settenderNoError(error.response.data.response.tenderNo);
      settenderDateError(error.response.data.response.tenderDate);
      setpoDateLoaDateError(error.response.data.response.poDateLoaDate);
      setpoLoaQtyError(error.response.data.response.poLoaQty);
      setstartDateError(error.response.data.response.startDate);
      settenderQtyError(error.response.data.response.tenderQty)
      
      }

     
  });

  }



const handleTwoSubmit = e => {
  e.preventDefault()
 
  const data = {
    user_id, project_id, basicPerUnit, basicTotal, packagingPerUnit, packegingTotal, freightPerUnit, freightTotal, gstPerUnit, gstTotal, installationPerUnit,
    installationTotal, other, loaPoValue
}

const getToken = user.response.token;
const bearer_token = `Bearer ${getToken}`;
const config = {
    headers: {
        Authorization: bearer_token
    }
};



axios.post(apiurl+"storeprojectsecond",data, {
    headers: {
        'Authorization': bearer_token,
        'Accept' : 'application/json',
        'Content-Type': 'application/json'
    }
})
.then(response => {
    // return  response;


    if (response.data.success) {               
        //navigate("/ProjectsProject");

       
        console.log("255 ", response);
      
      //  alert(projectId);

    }
   

    // console.log("255 pro", response.data.response);

    setError(response.data.status);

 

    


})
.catch((error) => {

    console.log("2555 ", error);
    console.log("2555 ", error.response.data.message);
    console.log("2555 ", error.response.data.response);

    
    

if (error.response.data.message === 'Error validation') {

    setbasicPerUnitError(error.response.data.response.basicPerUnit);
    setbasicTotalError(error.response.data.response.basicTotal);
    setpackagingPerUnitError(error.response.data.response.packagingPerUnit);
    setpackegingTotalError(error.response.data.response.packegingTotal);  
    setfreightPerUnitError(error.response.data.response.freightPerUnit);  
    setfreightTotalError(error.response.data.response.freightTotal); 
    setgstPerUnitError(error.response.data.response.gstPerUnit);
    setgstTotalError(error.response.data.response.gstTotal);
    setinstallationPerUnitError(error.response.data.response.installationPerUnit);
    setinstallationTotalError(error.response.data.response.installationTotal);
    setotherError(error.response.data.response.other);
    setloaPoValueError(error.response.data.response.loaPoValue);
   
    
    
    
    }

   
});




}



const handleThreeSubmit = e => {
  e.preventDefault()
 
  const data = {
    user_id, project_id, emdToPay, emdPaidStatus, emdPaidAmount, emdPaidDate, emdTransactionDetails, emdReturnAmount, emdReturnDate, emdDue, emdReturnRemark
}

const getToken = user.response.token;
const bearer_token = `Bearer ${getToken}`;
const config = {
    headers: {
        Authorization: bearer_token
    }
};

axios.post(apiurl+"storeprojectthird",data, {
    headers: {
        'Authorization': bearer_token,
        'Accept' : 'application/json',
        'Content-Type': 'application/json'
    }
})
.then(response => {
    


    if (response.data.success) {               
        //navigate("/ProjectsProject");

       
        console.log("255 ", response);
      
    }
   

    setError(response.data.status);

})
.catch((error) => {

    console.log("2555 ", error);
    console.log("2555 ", error.response.data.message);
    console.log("2555 ", error.response.data.response);

if (error.response.data.message === 'Error validation') {

    setemdToPayError(error.response.data.response.emdToPay);
    setemdPaidStatusError(error.response.data.response.emdPaidStatus);
    setemdPaidAmountError(error.response.data.response.emdPaidAmount);
    setemdPaidDateError(error.response.data.response.emdPaidDate);  
    setemdTransactionDetailsError(error.response.data.response.emdTransactionDetails);  
    setemdReturnAmountError(error.response.data.response.emdReturnAmount); 
    setemdReturnDateError(error.response.data.response.emdReturnDate);
    setemdDueError(error.response.data.response.emdDue);
    setemdReturnRemarkError(error.response.data.response.emdReturnRemark);
   
   
    }

});

}




  const handleSubmit = e => {
    e.preventDefault()
    alert(user_id);
    

  }
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
                      <li className="breadcrumb-item"><Link to="#!">Projects /</Link>
                      </li>
                      <li className="breadcrumb-item"><Link to="/ProjectsProject">Projects /</Link>
                      </li>
                      <li className="breadcrumb-item active">Create Project</li>
                    </ol>
                  </div>
                  <h4 className="page-title">Create Project</h4>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                      <div className="accordion" id="projectsAccordian">
                        <div className="accordion-item">
                          <h5 className="accordion-header m-0" id="headingOne">
                            <button className="accordion-button fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#project_details" aria-expanded="true" aria-controls="project_details">
                            PROJECT DETAILS
                            </button>
                          </h5>
                          <div id="project_details" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#projectsAccordian">
                            <div className="accordion-body">
                              <div className='row'>

                              <div className='col-md-4 col-sm-6'>
                                  <div className="form-group mb-3">
                                    <label htmlFor="" className="form-label">Project Title</label>
                                    <input type="text" className="form-control" id="project_title" name="project_title" placeholder="" value={project_title} onChange={e => setproject_title(e.target.value)}  maxLength={40}  />
                                    <p style={{ color: "red" }}>{project_titleerror}</p>
                                  </div>
                                </div>

                                <div className='col-md-4 col-sm-6'>
                                  <div className="form-group mb-3">
                                    <label htmlFor="" className="form-label">Po.No.Loa No.</label>
                                    <input type="text" className="form-control" id="poNoLoaNo" name="poNoLoaNo" placeholder="" value={poNoLoaNo} onChange={e => setpoNoLoaNo(e.target.value)}  maxLength={40}  />
                                    <p style={{ color: "red" }}>{poNoLoaNoerror}</p>
                                  </div>
                                </div>
                                <div className='col-md-4 col-sm-6'>
                                  <div className="form-group mb-3">
                                    <label htmlFor="" className="form-label">Project item/description</label>
                                    <input type="text" className="form-control" id="projectDescription" name="projectDescription" placeholder=""  value={projectDescription} onChange={e => setprojectDescription(e.target.value)}  maxLength={40} />
                                    <p style={{ color: "red" }}>{projectDescriptionerror}</p>
                                  </div>
                                </div>
                                <div className='col-md-4 col-sm-6'>
                                  <div className="form-group mb-3">
                                    <label htmlFor="" className="form-label">Railway zone</label>
                                    <select className="form-control" id="railwayZone" name="railwayZone"  value={railwayZone} onChange={e => setrailwayZone(e.target.value)}  >
                                    <option value="">Select</option>
                                      <option value="1">Delhi</option>
                                      <option value="2">Meerut</option>
                                    </select>
                                    <p style={{ color: "red" }}>{railwayZoneerror}</p>
                                  </div>
                                </div>
                                <div className='col-md-4 col-sm-6'>
                                  <div className="form-group mb-3">
                                    <label htmlFor="" className="form-label">Work status</label>
                                    <select className="form-control" id="workStatus" name="workStatus" value={workStatus} onChange={e => setworkStatus(e.target.value)} >
                                    <option value="">Select</option>
                                      <option value="1">Complete</option>
                                      <option value="2">Pending</option>
                                    </select>
                                    <p style={{ color: "red" }}>{workStatuserror}</p>
                                  </div>
                                </div>
                                <div className='col-md-4 col-sm-6'>
                                  <div className="form-group mb-3">
                                    <label htmlFor="" className="form-label">File no</label>
                                    <input type="text" className="form-control" id="fileNo" name="fileNo" placeholder="" value={fileNo} onChange={e => setfileNo(e.target.value)}  maxLength={40} />
                                    <p style={{ color: "red" }}>{fileNoerror}</p>
                                  </div>
                                </div>
                                <div className='col-md-4 col-sm-6'>
                                  <div className="form-group mb-3">
                                    <label htmlFor="" className="form-label">Tender no</label>
                                    <input type="text" className="form-control" id="tenderNo" name="tenderNo" placeholder=""  value={tenderNo} onChange={e => settenderNo(e.target.value)}  maxLength={40} />
                                    <p style={{ color: "red" }}>{tenderNoerror}</p>
                                  </div>
                                </div>
                                <div className='col-md-4 col-sm-6'>
                                  <div className="form-group mb-3">
                                    <label htmlFor="" className="form-label">Tender date</label>
                                    <input type="date" className="form-control" id="tenderDate" name="tenderDate" value={tenderDate} onChange={e => settenderDate(e.target.value)}  maxLength={40}  />
                                    
                                    <p style={{ color: "red" }}>{tenderDateerror}</p>
                                  </div>
                                </div>
                                <div className='col-md-4 col-sm-6'>
                                  <div className="form-group mb-3">
                                    <label htmlFor="" className="form-label">Tender qty</label>
                                    <input type="text" className="form-control" id="tenderQty" name="tenderQty" placeholder=""  value={tenderQty} onChange={e => settenderQty(e.target.value)}  maxLength={40} />
                                    <p style={{ color: "red" }}>{tenderQtyerror}</p>
                                  </div>
                                </div>

                                <div className='col-md-4 col-sm-6'>
                                  <div className="form-group mb-3">
                                    <label htmlFor="" className="form-label">Po.date loa date.</label>
                                    <input type="date" className="form-control" id="poDateLoaDate" name="poDateLoaDate" placeholder=""  value={poDateLoaDate} onChange={e => setpoDateLoaDate(e.target.value)}  maxLength={40} />
                                    <p style={{ color: "red" }}>{poDateLoaDateerror}</p>
                                  </div>
                                </div>
                                <div className='col-md-4 col-sm-6'>
                                  <div className="form-group mb-3">
                                    <label htmlFor="" className="form-label">Po.Loa qty</label>
                                    <input type="text" className="form-control" id="poLoaQty" name="poLoaQty" placeholder="" value={poLoaQty} onChange={e => setpoLoaQty(e.target.value)}  maxLength={40} />
                                    <p style={{ color: "red" }}>{poLoaQtyerror}</p>
                                  </div>
                                </div>
                                <div className='col-md-4 col-sm-6'>
                                  <div className="form-group mb-3">
                                    <label htmlFor="" className="form-label">Unit</label>
                                    <select className="form-control" id="unit" name="unit" value={unit} onChange={e => setunit(e.target.value)}  maxLength={40} >
                                    <p style={{ color: "red" }}>{uniterror}</p>
                                      <option value="1">1</option>
                                      <option value="2">2</option>
                                    </select>
                                    <p style={{ color: "red" }}>{uniterror}</p>
                                  </div>
                                </div>
                                <div className='col-md-4 col-sm-6'>
                                  <div className="form-group mb-3">
                                    <label htmlFor="" className="form-label">Start date</label>
                                    <input type="date" className="form-control" id="startDate" name="startDate" value={startDate} onChange={e => setstartDate(e.target.value)}  maxLength={40} />
                                    <p style={{ color: "red" }}>{startDateerror}</p>
                                  </div>
                                </div>
                                <div className='col-md-4 col-sm-6'>
                                  <div className="form-group mb-3">
                                    <label htmlFor="" className="form-label">Completion date</label>
                                    <input type="date" className="form-control" id="completionDate" name="completionDate"  value={completionDate} onChange={e => setcompletionDate(e.target.value)}  maxLength={40} />
                                    <p style={{ color: "red" }}>{completionDateerror}</p>
                                  </div>
                                </div>
                                <div className='col-md-4 col-sm-6'>
                                  <div className="form-group mb-3">
                                    <label htmlFor="" className="form-label">Dp extension</label>
                                    <input type="date" className="form-control" id="dpExtension" name="dpExtension" value={dpExtension} onChange={e => setdpExtension(e.target.value)}  maxLength={40}  />
                                    <p style={{ color: "red" }}>{dpExtensionerror}</p>
                                  </div>
                                </div>
                                <div className='col-md-4 col-sm-6'>
                                  <div className="form-group mb-3">
                                    <label htmlFor="" className="form-label">Dp extension description</label>
                                    <input type="text" className="form-control" id="dpExtensionRemark" name="dpExtensionRemark" value={dpExtensionRemark} onChange={e => setdpExtensionRemark(e.target.value)}  maxLength={40}  />
                                    <p style={{ color: "red" }}>{dpExtensionRemarkerror}</p>
                                  </div>
                                </div>
                              </div>
                              <button type="button" onClick={handleFirstSubmit} className="btn btn-primary btn-sm me-3">Save</button>
                              <button type="button" className="btn btn-de-danger btn-sm">Cancel</button>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h5 className="accordion-header m-0" id="headingTwo">
                            <button className="accordion-button fw-semibold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#railway_rate" aria-expanded="false" aria-controls="railway_rate">
                            RAILWAY RATE AS PER LOA/PO  VALUE
                            </button>
                          </h5>
                          <div id="railway_rate" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#projectsAccordian">
                            <div className="accordion-body">
                              <div className='row'>
                                <div className='col-md-2 align-self-center'>
                                </div>
                                <div className='col-md-10'>
                                  <div className='row'>
                                    <div className='col-md-3'>
                                      <h6>Per unit </h6>
                                    </div>
                                    <div className='col-md-3'>
                                      <h6>Total</h6>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className='row mb-3'>
                                <div className='col-md-2 align-self-center'>
                                  <div className="form-group">
                                    <label htmlFor="" className="form-label mb-0">Basic </label>
                                  </div>
                                </div>
                                <div className='col-md-10'>
                                  <div className='row'>
                                    <div className='col-md-3'>
                                      <div className="form-group">
                                        <input type="text" className="form-control" id="basicPerUnit" name="basicPerUnit" placeholder="" value={basicPerUnit} onChange={e => setbasicPerUnit(e.target.value)}  maxLength={40} />
                                        <p style={{ color: "red" }}>{basicPerUniterror}</p>
                                      </div>
                                    </div>
                                    <div className='col-md-3'>
                                      <div className="form-group">
                                        <input type="text" className="form-control" id="basicTotal" name="basicTotal" placeholder="" value={basicTotal} onChange={e => setbasicTotal(e.target.value)}  maxLength={40} />
                                        <p style={{ color: "red" }}>{basicTotalerror}</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className='row mb-3'>
                                <div className='col-md-2 align-self-center'>
                                  <div className="form-group">
                                    <label htmlFor="" className="form-label mb-0">Packaging  </label>
                                  </div>
                                </div>
                                <div className='col-md-10'>
                                  <div className='row'>
                                    <div className='col-md-3'>
                                      <div className="form-group">
                                        <input type="text" className="form-control" id="packagingPerUnit" name="packagingPerUnit" placeholder="" value={packagingPerUnit} onChange={e => setpackagingPerUnit(e.target.value)}  maxLength={40} />
                                        <p style={{ color: "red" }}>{packagingPerUniterror}</p>
                                      </div>
                                    </div>
                                    <div className='col-md-3'>
                                      <div className="form-group">
                                        <input type="text" className="form-control" id="packegingTotal" name="packegingTotal" placeholder="" value={packegingTotal} onChange={e => setpackegingTotal(e.target.value)}  maxLength={40} />
                                        <p style={{ color: "red" }}>{packegingTotalerror}</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className='row mb-3'>
                                <div className='col-md-2 align-self-center'>
                                  <div className="form-group">
                                    <label htmlFor="" className="form-label mb-0">Freight  </label>
                                  </div>
                                </div>
                                <div className='col-md-10'>
                                  <div className='row'>
                                    <div className='col-md-3'>
                                      <div className="form-group">
                                        <input type="text" className="form-control" id="freightPerUnit" name="freightTotal" placeholder="" value={freightPerUnit} onChange={e => setfreightPerUnit(e.target.value)}  maxLength={40} />
                                        <p style={{ color: "red" }}>{freightPerUniterror}</p>
                                      </div>
                                    </div>
                                    <div className='col-md-3'>
                                      <div className="form-group">
                                        <input type="text" className="form-control" id="freightTotal" name="freightTotal" placeholder="" value={freightTotal} onChange={e => setfreightTotal(e.target.value)}  maxLength={40} />
                                        <p style={{ color: "red" }}>{freightTotalerror}</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className='row mb-3'>
                                <div className='col-md-2 align-self-center'>
                                  <div className="form-group">
                                    <label htmlFor="" className="form-label mb-0">GSt@18%   </label>
                                  </div>
                                </div>
                                <div className='col-md-10'>
                                  <div className='row'>
                                    <div className='col-md-3'>
                                      <div className="form-group">
                                        <input type="text" className="form-control" id="gstPerUnit" name="gstPerUnit" placeholder="" value={gstPerUnit} onChange={e => setgstPerUnit(e.target.value)}  maxLength={40} />
                                        <p style={{ color: "red" }}>{gstPerUniterror}</p>
                                      </div>
                                    </div>
                                    <div className='col-md-3'>
                                      <div className="form-group">
                                        <input type="text" className="form-control" id="gstTotal" name="gstTotal" placeholder="" value={gstTotal} onChange={e => setgstTotal(e.target.value)}  maxLength={40} />
                                        <p style={{ color: "red" }}>{gstTotalerror}</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className='row mb-3'>
                                <div className='col-md-2 align-self-center'>
                                  <div className="form-group">
                                    <label htmlFor="" className="form-label mb-0">Installation </label>
                                  </div>
                                </div>
                                <div className='col-md-10'>
                                  <div className='row'>
                                    <div className='col-md-3'>
                                      <div className="form-group">
                                        <input type="text" className="form-control" id="installationPerUnit" name="installationPerUnit" placeholder="" value={installationPerUnit} onChange={e => setinstallationPerUnit(e.target.value)}  maxLength={40} />
                                        <p style={{ color: "red" }}>{installationPerUniterror}</p>
                                      </div>
                                    </div>
                                    <div className='col-md-3'>
                                      <div className="form-group">
                                        <input type="text" className="form-control" id="installationTotal" name="installationTotal" placeholder="" value={installationTotal} onChange={e => setinstallationTotal(e.target.value)}  maxLength={40} />
                                        <p style={{ color: "red" }}>{installationTotalerror}</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className='row mb-3'>
                                <div className='col-md-2 align-self-center'>
                                  <div className="form-group">
                                    <label htmlFor="" className="form-label mb-0">Other</label>
                                  </div>
                                </div>
                                <div className='col-md-10'>
                                  <div className='row'>
                                    <div className='col-md-6'>
                                      <div className="form-group">
                                        <select className="form-control" id="other" name="other" value={other} onChange={e => setother(e.target.value)}  maxLength={40} >
                                          <option value="1">Delhi</option>
                                          <option value="2">Meerut</option>
                                        </select>
                                        <p style={{ color: "red" }}>{othererror}</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className='row mb-3'>
                                <div className='col-md-2 align-self-center'>
                                  <div className="form-group">
                                    <label htmlFor="" className="form-label mb-0">Loa/po Value </label>
                                  </div>
                                </div>
                                <div className='col-md-10'>
                                  <div className='row'>
                                    <div className='col-md-6'>
                                      <div className="form-group">
                                        <input type="text" className="form-control" id="loaPoValue" name="loaPoValue" placeholder="" value={loaPoValue} onChange={e => setloaPoValue(e.target.value)}  maxLength={40} />
                                        <p style={{ color: "red" }}>{loaPoValueerror}</p>
                                      </div>
                                    </div>
                                    <div className='col-md-1'>
                                      <span className='fs-3'>+</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <button type="button" className="btn btn-primary btn-sm me-3" onClick={handleTwoSubmit} >Save</button>
                              <button type="button" className="btn btn-de-danger btn-sm">Cancel</button>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h5 className="accordion-header m-0" id="headingThree">
                            <button className="accordion-button fw-semibold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#emd_paid" aria-expanded="false" aria-controls="emd_paid">
                              EMD PAID DETAILS
                            </button>
                          </h5>
                          <div id="emd_paid" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#projectsAccordian">
                            <div className="accordion-body">
                              <h5 className='mb-3'>EMD PAID DETAILS</h5>
                              <div className='row'>
                                <div className='col-md-4 col-sm-6'>
                                  <div className="form-group mb-3">
                                    <label htmlFor="" className="form-label">Emd to Pay</label>
                                    <input type="text" className="form-control" id="emdToPay" name="emdToPay" placeholder="" value={emdToPay} onChange={e => setemdToPay(e.target.value)}  maxLength={40} />
                                    <p style={{ color: "red" }}>{emdToPayerror}</p>
                                  </div>
                                </div>
                                <div className='col-md-4 col-sm-6'>
                                  <div className="form-group mb-3">
                                    <label htmlFor="" className="form-label">Emd Paid status</label>
                                    <select className="form-control" id="emdPaidStatus" name="emdPaidStatus"  value={emdPaidStatus} onChange={e => setemdPaidStatus(e.target.value)}  maxLength={40} >
                                    
                                      <option value="1">Paid</option>
                                      <option value="1">Paid</option>
                                    </select>
                                    <p style={{ color: "red" }}>{emdPaidStatuserror}</p>
                                  </div>
                                </div>
                                <div className='col-md-4 col-sm-6'>
                                  <div className="form-group mb-3">
                                    <label htmlFor="" className="form-label">Emd Paid amount</label>
                                    <input type="text" className="form-control" id="emdPaidAmount" name="emdPaidAmount" placeholder=""  value={emdPaidAmount} onChange={e => setemdPaidAmount(e.target.value)}  maxLength={40}/>
                                    <p style={{ color: "red" }}>{emdPaidAmounterror}</p>
                                  </div>
                                </div>
                                <div className='col-md-4 col-sm-6'>
                                  <div className="form-group mb-3">
                                    <label htmlFor="" className="form-label">Emd Paid date</label>
                                    <input type="date" className="form-control" id="emdPaidDate" name="emdPaidDate" placeholder=""  value={emdPaidDate} onChange={e => setemdPaidDate(e.target.value)}  maxLength={40}/>
                                    <p style={{ color: "red" }}>{emdPaidDateerror}</p>
                                  </div>
                                </div>
                                <div className='col-md-4 col-sm-6'>
                                  <div className="form-group mb-3">
                                    <label htmlFor="" className="form-label">Emd Transaction details</label>
                                    <input type="text" className="form-control" id="emdTransactionDetails" name="emdTransactionDetails" placeholder="" value={emdTransactionDetails} onChange={e => setemdTransactionDetails(e.target.value)}  maxLength={40} />
                                    <p style={{ color: "red" }}>{emdTransactionDetailserror}</p>
                                  </div>
                                </div>
                              </div>
                              <h5 className='mb-3'>EMD RETURN DETAILS</h5>
                              <div className='row'>
                                <div className='col-md-4 col-sm-6'>
                                  <div className="form-group mb-3">
                                    <label htmlFor="" className="form-label">Emd return amount</label>
                                    <input type="text" className="form-control" id="emdReturnAmount" name="emdReturnAmount" placeholder="" value={emdReturnAmount} onChange={e => setemdReturnAmount(e.target.value)}  maxLength={40} />
                                    <p style={{ color: "red" }}>{emdReturnAmounterror}</p>
                                  </div>
                                </div>
                                <div className='col-md-4 col-sm-6'>
                                  <div className="form-group mb-3">
                                    <label htmlFor="" className="form-label">Emd return date</label>
                                    <input type="date" className="form-control" id="emdReturnDate" name="emdReturnDate" placeholder="" value={emdReturnDate} onChange={e => setemdReturnDate(e.target.value)}  maxLength={40} />
                                    <p style={{ color: "red" }}>{emdReturnDateerror}</p>
                                  </div>
                                </div>
                                <div className='col-md-4 col-sm-6'>
                                  <div className="form-group mb-3">
                                    <label htmlFor="" className="form-label">Emd Due</label>
                                    <input type="text" className="form-control" id="emdDue" name="emdDue" placeholder="" value={emdDue} onChange={e => setemdDue(e.target.value)}  maxLength={40} />
                                    <p style={{ color: "red" }}>{emdDueerror}</p>
                                  </div>
                                </div>
                                <div className='col-md-4 col-sm-6'>
                                  <div className="form-group mb-3">
                                    <label htmlFor="" className="form-label">Remark</label>
                                    <input type="text" className="form-control" id="emdReturnRemark" name="emdReturnRemark" placeholder="" value={emdReturnRemark} onChange={e => setemdReturnRemark(e.target.value)}  maxLength={40} />
                                    <p style={{ color: "red" }}>{emdReturnRemarkerror}</p>
                                  </div>
                                </div>
                              </div>
                              <button type="button" onClick={handleThreeSubmit} className="btn btn-primary btn-sm me-3">Save</button>
                              <button type="button" className="btn btn-de-danger btn-sm">Cancel</button>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h5 className="accordion-header m-0" id="headingFive">
                            <button className="accordion-button fw-semibold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sd_paid" aria-expanded="false" aria-controls="sd_paid">
                              SD PAID DETAILS
                            </button>
                          </h5>
                          <div id="sd_paid" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#projectsAccordian">
                            <div className="accordion-body">
                              <h5 className='mb-3'>SD PAID DETAILS</h5>
                              <div className='row'>
                                <div className='col-md-4 col-sm-6'>
                                  <div className="form-group mb-3">
                                    <label htmlFor="" className="form-label">Sd to Pay</label>
                                    <input type="text" className="form-control" id="" name="" placeholder="" />
                                  </div>
                                </div>
                                <div className='col-md-4 col-sm-6'>
                                  <div className="form-group mb-3">
                                    <label htmlFor="" className="form-label">Sd Paid status</label>
                                    <select className="form-control" id="" name="" value="" >
                                      <option value="1">Paid</option>
                                      <option value="1">Paid</option>
                                    </select>
                                  </div>
                                </div>
                                <div className='col-md-4 col-sm-6'>
                                  <div className="form-group mb-3">
                                    <label htmlFor="" className="form-label">Sd amount Paid</label>
                                    <input type="text" className="form-control" id="" name="" placeholder="" />
                                  </div>
                                </div>
                                <div className='col-md-4 col-sm-6'>
                                  <div className="form-group mb-3">
                                    <label htmlFor="" className="form-label">EMd Adjusted amount</label>
                                    <input type="text" className="form-control" id="" name="" placeholder="" />
                                  </div>
                                </div>
                                <div className='col-md-4 col-sm-6'>
                                  <div className="form-group mb-3">
                                    <label htmlFor="" className="form-label">SD Paid through</label>
                                    <select className="form-control" id="" name="" value="" >
                                      <option value="1">Credit</option>
                                      <option value="1">Debit</option>
                                    </select>
                                  </div>
                                </div>
                                <div className='col-md-4 col-sm-6'>
                                  <div className="form-group mb-3">
                                    <label htmlFor="" className="form-label">SD Transaction details</label>
                                    <input type="text" className="form-control" id="" name="" placeholder="" />
                                  </div>
                                </div>
                                <div className='col-md-4 col-sm-6'>
                                  <div className="form-group mb-3">
                                    <label htmlFor="" className="form-label">Sd Paid date</label>
                                    <input type="date" className="form-control" id="" name="" />
                                  </div>
                                </div>
                                <div className='col-md-4 col-sm-6'>
                                  <div className="form-group mb-3">
                                    <label htmlFor="" className="form-label">Sd expiry date</label>
                                    <input type="date" className="form-control" id="" name="" />
                                  </div>
                                </div>
                              </div>
                              <h5 className='mb-3'>SD RETURN DETAILS</h5>
                              <div className='row'>
                                <div className='col-md-4 col-sm-6'>
                                  <div className="form-group mb-3">
                                    <label htmlFor="" className="form-label">Sd retrun amount</label>
                                    <input type="text" className="form-control" id="" name="" placeholder="" />
                                  </div>
                                </div>
                                <div className='col-md-4 col-sm-6'>
                                  <div className="form-group mb-3">
                                    <label htmlFor="" className="form-label">Sd return date</label>
                                    <input type="date" className="form-control" id="" name="" placeholder="" />
                                  </div>
                                </div>
                                <div className='col-md-4 col-sm-6'>
                                  <div className="form-group mb-3">
                                    <label htmlFor="" className="form-label">Sd Due</label>
                                    <input type="text" className="form-control" id="" name="" placeholder="" />
                                  </div>
                                </div>
                                <div className='col-md-4 col-sm-6'>
                                  <div className="form-group mb-3">
                                    <label htmlFor="" className="form-label">Remark</label>
                                    <input type="text" className="form-control" id="" name="" placeholder="" />
                                  </div>
                                </div>
                              </div>
                              <button type="submit" className="btn btn-primary btn-sm me-3">Save</button>
                              <button type="button" className="btn btn-de-danger btn-sm">Cancel</button>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h5 className="accordion-header m-0" id="headingSix">
                            <button className="accordion-button fw-semibold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#pg_paid" aria-expanded="false" aria-controls="pg_paid">
                              PG PAID DETAILS
                            </button>
                          </h5>
                          <div id="pg_paid" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#projectsAccordian">
                            <div className="accordion-body">
                              <h5 className='mb-3'>PG PAID DETAILS</h5>
                              <div className='row'>
                                <div className='col-md-4 col-sm-6'>
                                  <div className="form-group mb-3">
                                    <label htmlFor="" className="form-label">Pg to Pay</label>
                                    <input type="text" className="form-control" id="" name="" placeholder="" />
                                  </div>
                                </div>
                                <div className='col-md-4 col-sm-6'>
                                  <div className="form-group mb-3">
                                    <label htmlFor="" className="form-label">Pg Paid status</label>
                                    <select className="form-control" id="" name="" value="" >
                                      <option value="1">Paid</option>
                                      <option value="1">Paid</option>
                                    </select>
                                  </div>
                                </div>
                                <div className='col-md-4 col-sm-6'>
                                  <div className="form-group mb-3">
                                    <label htmlFor="" className="form-label">Pg Paid amount</label>
                                    <input type="text" className="form-control" id="" name="" placeholder="" />
                                  </div>
                                </div>
                                <div className='col-md-4 col-sm-6'>
                                  <div className="form-group mb-3">
                                    <label htmlFor="" className="form-label">Pg Paid date</label>
                                    <input type="date" className="form-control" id="" name="" placeholder="" />
                                  </div>
                                </div>
                                <div className='col-md-4 col-sm-6'>
                                  <div className="form-group mb-3">
                                    <label htmlFor="" className="form-label">PG Transaction details</label>
                                    <input type="text" className="form-control" id="" name="" placeholder="" />
                                  </div>
                                </div>
                                <div className='col-md-4 col-sm-6'>
                                  <div className="form-group mb-3">
                                    <label htmlFor="" className="form-label">PG Paid through</label>
                                    <input type="text" className="form-control" id="" name="" placeholder="" />
                                  </div>
                                </div>
                                <div className='col-md-4 col-sm-6'>
                                  <div className="form-group mb-3">
                                    <label htmlFor="" className="form-label">EMd adjusted amount</label>
                                    <input type="text" className="form-control" id="" name="" placeholder="" />
                                  </div>
                                </div>
                              </div>
                              <h5 className='mb-3'>SD RETURN DETAILS</h5>
                              <div className='row'>
                                <div className='col-md-4 col-sm-6'>
                                  <div className="form-group mb-3">
                                    <label htmlFor="" className="form-label">Pg return amount</label>
                                    <input type="text" className="form-control" id="" name="" placeholder="" />
                                  </div>
                                </div>
                                <div className='col-md-4 col-sm-6'>
                                  <div className="form-group mb-3">
                                    <label htmlFor="" className="form-label">Pg return date</label>
                                    <input type="date" className="form-control" id="" name="" placeholder="" />
                                  </div>
                                </div>
                                <div className='col-md-4 col-sm-6'>
                                  <div className="form-group mb-3">
                                    <label htmlFor="" className="form-label">Pg Due</label>
                                    <input type="text" className="form-control" id="" name="" placeholder="" />
                                  </div>
                                </div>
                                <div className='col-md-4 col-sm-6'>
                                  <div className="form-group mb-3">
                                    <label htmlFor="" className="form-label">Remark</label>
                                    <input type="text" className="form-control" id="" name="" placeholder="" />
                                  </div>
                                </div>
                                <div className='col-md-4 col-sm-6'>
                                  <div className="form-group mb-3">
                                    <label htmlFor="" className="form-label">Payment Terms</label>
                                    <input type="file" className="form-control" id="" name="" placeholder="" />
                                  </div>
                                </div>
                                <div className='col-md-4 col-sm-6'>
                                  <div className="form-group mb-3">
                                    <label htmlFor="" className="form-label">Contract Signing Authority</label>
                                    <input type="text" className="form-control" id="" name="" placeholder="" />
                                  </div>
                                </div>
                              </div>
                              <h5 className='mb-3'>Material Inspection details</h5>
                              <div className='row'>
                                <div className='col-md-4 col-sm-6'>
                                  <div className="form-group mb-3">
                                    <label htmlFor="" className="form-label">Inspection Agency</label>
                                    <select className="form-control" id="" name="" value="" >
                                      <option value="1">yes</option>
                                      <option value="1">yes</option>
                                    </select>
                                  </div>
                                </div>
                                <div className='col-md-4 col-sm-6'>
                                  <div className="form-group mb-3">
                                    <label htmlFor="" className="form-label">Inspection case No:</label>
                                    <input type="text" className="form-control" id="" name="" placeholder="" />
                                  </div>
                                </div>
                                <div className='col-md-4 col-sm-6'>
                                  <div className="form-group mb-3">
                                    <label htmlFor="" className="form-label">Inspection Date</label>
                                    <input type="date" className="form-control" id="" name="" placeholder="" />
                                  </div>
                                </div>
                                <div className='col-md-4 col-sm-6'>
                                  <div className="form-group mb-3">
                                    <label htmlFor="" className="form-label">Rites IC details</label>
                                    <input type="text" className="form-control" id="" name="" placeholder="" />
                                  </div>
                                </div>
                                <div className='col-md-4 col-sm-6'>
                                  <div className="form-group mb-3">
                                    <label htmlFor="" className="form-label">Rites IC Status</label>
                                    <select className="form-control" id="" name="" value="" >
                                      <option value="1">yes</option>
                                      <option value="1">yes</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <h5 className='mb-3'>Invoice details</h5>
                              <div className='row'>
                                <div className='col-md-4 col-sm-6'>
                                  <div className="form-group mb-3">
                                    <label htmlFor="" className="form-label">Invoice no</label>
                                    <input type="text" className="form-control" id="" name="" placeholder="" />
                                  </div>
                                </div>
                                <div className='col-md-4 col-sm-6'>
                                  <div className="form-group mb-3">
                                    <label htmlFor="" className="form-label">Invoice Date</label>
                                    <input type="date" className="form-control" id="" name="" placeholder="" />
                                  </div>
                                </div>
                                <div className='col-md-4 col-sm-6'>
                                  <div className="form-group mb-3">
                                    <label htmlFor="" className="form-label">Invoice Qty</label>
                                    <input type="text" className="form-control" id="" name="" placeholder="" />
                                  </div>
                                </div>
                                <div className='col-md-4 col-sm-6'>
                                  <div className="form-group mb-3">
                                    <label htmlFor="" className="form-label">Invoice Amount</label>
                                    <input type="text" className="form-control" id="" name="" placeholder="" />
                                  </div>
                                </div>
                                <div className='col-md-4 col-sm-6'>
                                  <div className="form-group mb-3">
                                    <label htmlFor="" className="form-label">Material accepted/Rejected</label>
                                    <select className="form-control" id="" name="" value="" >
                                      <option value="1">Yes</option>
                                      <option value="1">No</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <button type="submit" className="btn btn-primary btn-sm me-3">Save</button>
                              <button type="button" className="btn btn-de-danger btn-sm">Cancel</button>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h5 className="accordion-header m-0" id="headingSeven">
                            <button className="accordion-button fw-semibold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#note_details" aria-expanded="false" aria-controls="note_details">
                              R NOTE DETAILS
                            </button>
                          </h5>
                          <div id="note_details" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#projectsAccordian">
                            <div className="accordion-body">
                              <div className='row'>
                                <div className='col-md-4 col-sm-6'>
                                  <div className="form-group mb-3">
                                    <label htmlFor="" className="form-label">R Note No</label>
                                    <input type="text" className="form-control" id="" name="" placeholder="" />
                                  </div>
                                </div>
                                <div className='col-md-4 col-sm-6'>
                                  <div className="form-group mb-3">
                                    <label htmlFor="" className="form-label">R Note Date </label>
                                    <input type="text" className="form-control" id="" name="" placeholder="" />
                                  </div>
                                </div>
                              </div>
                              <h5 className='mb-3'>PG PAID DETAILS</h5>
                              <div className='row'>
                                <div className='col-md-4 col-sm-6'>
                                  <div className="form-group mb-3">
                                    <label htmlFor="" className="form-label">Payment Status</label>
                                    <input type="text" className="form-control" id="" name="" placeholder="" />
                                  </div>
                                </div>
                                <div className='col-md-4 col-sm-6'>
                                  <div className="form-group mb-3">
                                    <label htmlFor="" className="form-label">Payment Received date</label>
                                    <input type="date" className="form-control" id="" name="" placeholder="" />
                                  </div>
                                </div>
                                <div className='col-md-4 col-sm-6'>
                                  <div className="form-group mb-3">
                                    <label htmlFor="" className="form-label">Payment Status</label>
                                    <input type="text" className="form-control" id="" name="" placeholder="" />
                                  </div>
                                </div>
                              </div>
                              <h5 className='mb-3'>AMOUNT DEDUCTED</h5>
                              <div className='row'>
                                <div className='col-md-4 col-sm-6'>
                                  <div className="form-group mb-3">
                                    <label htmlFor="" className="form-label">Against short fitment deducted</label>
                                    <select className="form-control" id="" name="" value="" >
                                      <option value="1">Opt-1</option>
                                      <option value="1">Opt-2</option>
                                    </select>
                                  </div>
                                </div>
                                <div className='col-md-4 col-sm-6'>
                                  <div className="form-group mb-3">
                                    <label htmlFor="" className="form-label">Against Material deducted</label>
                                    <input type="text" className="form-control" id="" name="" placeholder="" />
                                  </div>
                                </div>
                                <div className='col-md-4 col-sm-6'>
                                  <div className="form-group mb-3">
                                    <label htmlFor="" className="form-label">Store deposit deducted</label>
                                    <input type="text" className="form-control" id="" name="" placeholder="" />
                                  </div>
                                </div>
                                <div className='col-md-4 col-sm-6'>
                                  <div className="form-group mb-3">
                                    <label htmlFor="" className="form-label">LD deducted</label>
                                    <input type="text" className="form-control" id="" name="" placeholder="" />
                                  </div>
                                </div>
                                <div className='col-md-4 col-sm-6'>
                                  <div className="form-group mb-3">
                                    <label htmlFor="" className="form-label">Penalty deducted</label>
                                    <input type="text" className="form-control" id="" name="" placeholder="" />
                                  </div>
                                </div>
                                <div className='col-md-4 col-sm-6'>
                                  <div className="form-group mb-3">
                                    <label htmlFor="" className="form-label">SD deducted</label>
                                    <input type="text" className="form-control" id="" name="" placeholder="" />
                                  </div>
                                </div>
                                <div className='col-md-4 col-sm-6'>
                                  <div className="form-group mb-3">
                                    <label htmlFor="" className="form-label">TDS(income tax deducted)</label>
                                    <input type="text" className="form-control" id="" name="" placeholder="" />
                                  </div>
                                </div>
                                <div className='col-md-4 col-sm-6'>
                                  <div className="form-group mb-3">
                                    <label htmlFor="" className="form-label">GST deducted</label>
                                    <input type="text" className="form-control" id="" name="" placeholder="" />
                                  </div>
                                </div>
                                <div className='col-md-4 col-sm-6'>
                                  <div className="form-group mb-3">
                                    <label htmlFor="" className="form-label">Primary css/surcharge</label>
                                    <input type="text" className="form-control" id="" name="" placeholder="" />
                                  </div>
                                </div>
                                <div className='col-md-4 col-sm-6'>
                                  <div className="form-group mb-3">
                                    <label htmlFor="" className="form-label">Other deduction</label>
                                    <input type="text" className="form-control" id="" name="" placeholder="" />
                                  </div>
                                </div>
                                <div className='col-md-4 col-sm-6'>
                                  <div className="form-group mb-3">
                                    <label htmlFor="" className="form-label">Total deduction</label>
                                    <input type="text" className="form-control" id="" name="" placeholder="" />
                                  </div>
                                </div>
                                <div className='col-md-4 col-sm-6'>
                                  <div className="form-group mb-3">
                                    <label htmlFor="" className="form-label">Payment due</label>
                                    <input type="text" className="form-control" id="" name="" placeholder="" />
                                  </div>
                                </div>
                                <div className='col-md-4 col-sm-6'>
                                  <div className="form-group mb-3">
                                    <label htmlFor="" className="form-label">P/Loa completion status</label>
                                    <select className="form-control" id="" name="" value="" >
                                      <option value="1">Opt-1</option>
                                      <option value="1">Opt-2</option>
                                    </select>
                                  </div>
                                </div>
                                <div className='col-md-4 col-sm-6'>
                                  <div className="form-group mb-3">
                                    <label htmlFor="" className="form-label">Remark</label>
                                    <input type="text" className="form-control" id="" name="" placeholder="" />
                                  </div>
                                </div>
                              </div>
                              <button type="submit" className="btn btn-primary btn-sm me-3">Save</button>
                              <button type="button" className="btn btn-de-danger btn-sm">Cancel</button>
                            </div>
                          </div>
                        </div>
                        <div className='text-end mt-3'>
                          <button type="submit" className="btn btn-primary btn-sm me-3">Submit</button>
                          <button type="button" className="btn btn-de-danger btn-sm">Cancel</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div >
          </div >
        </div >
      </div >
      <Footer />
    </>
  )
}

export default ProjectsProjectAdd
