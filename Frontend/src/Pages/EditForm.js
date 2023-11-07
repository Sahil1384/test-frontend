    import React from 'react'
    import { Link } from "react-router-dom";
    import Footer from '../Components/Footer'
    import Header from '../Components/Header'
    import { useState, useEffect } from "react"
    import axios from "axios"
    import { useNavigate } from "react-router-dom"
    import { useLocation } from 'react-router-dom';

    function EditForm() {
        const apiKey = process.env.REACT_APP_DEV_API_KEY_NEW;
        const apiurl  = process.env.REACT_APP_DEV_API_KEY_NEW;
        const baseURL = "http://13.200.102.128:8001/";
        const location = useLocation()
        const editAbleUser = location.state.editAbleUser
        console.log("Your Api key is" ,apiKey)
        const placeholderImage ='http://localhost:3000/assets/images/users/user-1.jpg'
        const [editData , setEditData] = useState()
        const [name, setName] = useState(editAbleUser.name)
        const [email, setEmail] = useState(editAbleUser.email)
        const [phone, setPhone] = useState(editAbleUser.phone)
        const [designation, setDesignation] = useState(editAbleUser.designation)
        const [reporting_person, setReporting_person] = useState(editAbleUser.reporting_person)
        const [joining_date, setJoining_date] = useState(editAbleUser.joining_date)
        const [profileimage, setProfileimage] = useState()
        const [nameerror, setNameError] = useState("")
        const [emailerror, setEmailError] = useState("")
        const [designationerror, setDesignationError] = useState("")
        const [reportingerror, setReportingError] = useState("")
        const [phoneerror, setPhoneError] = useState("")
        const [profileimageerror, setProfileimageError] = useState("")
      

        let editId = editAbleUser.id
        console.log("edit id is" , editId)

        const user = JSON.parse(localStorage.getItem("profile"));
        const user_id = user.response.userDetails.id;
        var body = {
            user_id: user_id
        }
      
        const [error, setError] = useState("")
        const navigate = useNavigate();
        const handleChange=(e)=>{
        // console.log(e.target.file);
            const data = new FileReader()
            data.addEventListener('load',()=>{
                setProfileimage(data.result)
            })
        data.readAsDataURL(e.target.files[0]);
        } 



    //Get User List Start
    const [users, setUsers] = useState([])
    useEffect(() => {
        const url = apiurl+'getuserdropdown';
        const getToken = JSON.parse(localStorage.getItem("profile"))?.response?.token
        const bearer_token = `Bearer ${getToken}`;
        const config = {
            headers: {
                Authorization: bearer_token
            }
        };
        axios.post(url,body, config)
            .then((res) => {
                console.log("28, ", res)          
                setUsers(res?.data?.response?.userList);
                
            })
            .catch(err => {
                // console.log(err); 
            });
    }, []);
    //Get User List End 


    //Get Role  List Start
    const [roles, setRoles] = useState([])
    useEffect(() => {
        const url = apiurl+'getrolelist';
        const getToken = JSON.parse(localStorage.getItem("profile"))?.response?.token
        const bearer_token = `Bearer ${getToken}`;    
        const config = {
            headers: {
                Authorization: bearer_token
            }
        };
        axios.post(url,body, config)
            .then((res) => {
                console.log("28, ", res)          
                setRoles(res?.data?.response?.roleList);    
            })
            .catch(err => {
                // console.log(err); 
            });
    }, []);
    //Get Role  List End 

    const handleSubmit = e => {
            e.preventDefault()
            console.log(editAbleUser.id)  
            const user = JSON.parse(localStorage.getItem("profile"));
            console.log("333 ap", user.response.userDetails.id);      
            const user_id = user.response.userDetails.id; 
            const id = editAbleUser.id; 
            console.log("user id is", user_id)      
            const data = {
                user_id, id, email, name, phone, designation, reporting_person, joining_date, profileimage
            }
        
            const getToken = user.response.token;
            const bearer_token = `Bearer ${getToken}`;
            const config = {
                headers: {
                    Authorization: bearer_token
                }
            };

            axios.post("http://13.200.102.128:8001/api/updateuserdata",data, {
                headers: {
                    'Authorization': bearer_token,
                    'Accept' : 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
                // return  response;
                if (response.data.success) {               
                    navigate("/ProjectsUsers");
                }
                console.log("255 ", response);
                setError(response.data.status)
            })
            .catch((error) => {
                console.log("2555 ", error);
                console.log("2555", error.response.data.message);
                console.log("2555 ", error.response.data.response);   
            if (error.response.data.message === 'Error validation') {
                setNameError(error.response.data.response.name);
                setEmailError(error.response.data.response.email);
                setDesignationError(error.response.data.response.designation);
                setReportingError(error.response.data.response.reporting_person);  
                setPhoneError(error.response.data.response.phone);  
                setProfileimageError(error.response.data.response.profileimage);    
                }       
            });
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
                                                <li className="breadcrumb-item"><Link to="/ProjectsUsers">Users /</Link>
                                                </li>
                                                <li className="breadcrumb-item active">Edit User</li>
                                            </ol>
                                        </div>
                                        <h4 className="page-title">Edit User</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <form onSubmit={handleSubmit} encType="multipart/form-data">
                                                <div className='row'>
                                                    <div className='col-md-6'>
                                                        <div className="form-group mb-3">
                                                            <label htmlFor="name" className="form-label">Name</label>
                                                            <input type="text" className="form-control" id="name" name="name" placeholder="Enter name" value={name} onChange={e => setName(e.target.value)}  maxLength={40}  />
                                                            <p style={{ color: "red" }}>{nameerror}</p>
                                                        </div>
                                                    </div>
                                                    <div className='col-md-3'>
                                                        <div className="form-group mb-3">
                                                            <label htmlFor="designation" className="form-label">Designation</label>
                                                            <select className="form-control" id="designation" name="designation"  onChange={e => setDesignation(e.target.value)} value={designation}>
                                                            <option value="">Select</option>
                                                            {
                                                                    roles.map((item,i)=>{
                                                                        return <option value={item.id} key={i} >{item.name}</option>
                                                                    })
                                                                }
                                                            </select>
                                                            <p style={{ color: "red" }}>{designationerror}</p>  
                                                        </div>
                                                    </div>

                                                    <div className='col-md-3'>
                                                        <div className="form-group mb-3">
                                                            <label htmlFor="reporting_person" className="form-label">Reporting Person</label>
                                                            <select className="form-control" id="reporting_person" name="reporting_person" value={reporting_person} onChange={e => setReporting_person(e.target.value)} >
                                                                                                                    
                                                                <option value="">Select</option>
                                                                {
                                                                    users.map((obj,i)=>{
                                                                        return <option value={obj.id} key={i}>{obj.name}</option>
                                                                    })
                                                                }
                                                                
                                                            </select>
                                                            <p style={{ color: "red" }}>{reportingerror}</p>
                                                        </div>
                                                    </div>

                                                    <div className='col-md-6'>
                                                        <div className="form-group mb-3">
                                                            <label htmlFor="profileimage" className="form-label">Image</label>
                                                            <input type="file" className="form-control" id="profileimage" name="profileimage"  onChange={handleChange} />
                                                            <p style={{ color: "red" }}>{profileimageerror}</p>
                                                            
                                                        </div>
                                                    </div>
                                                    <div className='col-md-6'>
                                                        <div className="form-group mb-3">
                                                            {/* <label htmlFor="profileimage" className="form-label">Image preview</label> */}
                                                            <img src={baseURL + editAbleUser.profileimage} style={{width: "70px" , height: "70px" , objectFit: "cover"}}/>

                                                        </div>
                                                    </div>
                                                    <div className='col-md-6'>
                                                        <div className="form-group mb-3">
                                                            <label htmlFor="email" className="form-label">Email</label>
                                                            <input className="form-control" id="email" name="email" placeholder="Ex: abc@abc.com" value={email} onChange={e => setEmail(e.target.value)}  maxLength={40} />
                                                            <p style={{ color: "red" }}>{emailerror}</p>
                                                        </div>
                                                    </div>
                                                    <div className='col-md-3'>
                                                        <div className="form-group mb-3">
                                                            <label htmlFor="phone" className="form-label">Contact</label>
                                                            <input className="form-control" id="phone" name="phone" placeholder="Ex: +91 000 0000 000" value={phone}  onChange={e => setPhone(e.target.value)}  maxLength={12} />
                                                            <p style={{ color: "red" }}>{phoneerror}</p>
                                                            
                                                        </div>
                                                    </div>

                                                    <div className='col-md-3'>
                                                        <div className="form-group mb-3">
                                                            <label htmlFor="joining_date" className="form-label">Joining Date</label>
                                                            <input className="form-control" id="joining_date" name="joining_date" placeholder="Ex: 2023-07-02" value={joining_date}  onChange={e => setJoining_date(e.target.value)}  maxLength={10} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <button type="submit" className="btn btn-primary btn-sm me-3">Update User</button>
                                                <button type="button" className="btn btn-de-danger btn-sm">Cancel</button>
                                            </form>

                                            <p style={{ color: "red" }}>{error}</p>
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

    export default EditForm