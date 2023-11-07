import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import Multiselect from 'multiselect-react-dropdown';
import axios from "axios";
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useFormik } from "formik"
import { teamSchema } from "../schemas/Index";
import { createDepart } from "../redux/features/createDepart";
import CreatableSelect from "react-select/creatable";


const initialValues = {
    name: "",
    email: "",
    // department_project: "",
    // teamMember: "",
    department_head: "",
    description: "",
};

function ProjectDepartAddNew() {
    const [users, setUsers] = useState([])
    const [dat,setDat]=useState([])
    useEffect(() => {
        const url = 'http://13.200.102.128:8001/api/getuserlist/';
        const getToken = JSON.parse(localStorage.getItem("profile"))?.response?.token
        const bearer_token = `Bearer ${getToken}`;
        // const token="Bearer  getToken"
        //  console.log("12 ", bearer_token);
        const config = {
            headers: {
                Authorization: bearer_token
            }
        };
        axios.get(url, config)
            .then((res) => {
                // console.log("28, ", res)
                // console.log("13 ", res?.data?.response?.userList);
                setUsers(res?.data?.response?.userList);
                // console.log(setUsers);
            })
            .catch(err => {
                // console.log(err); 
            });
    }, []);
    // console.log("36 ", users);
    const { error } = useSelector((state) => ({ ...state.auth }));
    const dispatch = useDispatch();
    const navigate = useNavigate();


    console.log("55 ",dat)

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues,
            validationSchema: teamSchema,
            onSubmit: (values, action) => {
                const data= { ... values, agm:dat}
                console.log("54 ", data)
                return
                dispatch(createDepart({ values, navigate, toast }));
                action.resetForm();
            },
        });


    const onSelect = (e) => {
        console.log("64 ", e)
        // setValue(e.target.value)
        // set

    }

    // ------------------------- new code start here -------------------------
    const options = [
        { value: "jack", label: "Jack", color: "#FF8B00" },
        { value: "john", label: "John", color: "#36B37E" },
        { value: "mike", label: "Mike", color: "#0052CC" },
    ];
    const colorStyles = {
        control: (styles) => ({ ...styles, backgroundColor: "white" }),
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
            return { ...styles, color: data.color };
        },
        multiValue: (styles, { data }) => {
            return {
                ...styles,
                backgroundColor: data.color,
                color: "#fff",
            };
        },
        multiValueLabel: (styles, { data }) => {
            return {
                ...styles,
                color: "#fff",
            };
        },
        multiValueRemove: (styles, { data }) => {
            return {
                ...styles,
                color: "#fff",
                cursor: "pointer",
                ":hover": {
                    color: "#fff",
                },
            };
        },
    };
    const handleChangeee = (selectedOption, actionMeta) => {
        console.log("handleChangeee", selectedOption, actionMeta);
    };
    const handleInputChangeee = (inputValue) => {
        console.log("handleInputChangeee", inputValue);
        setDat(inputValue)

    };

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
                                            <li className="breadcrumb-item"><Link to="/ProjectsTeam">Department /</Link>
                                            </li>
                                            <li className="breadcrumb-item active">Create Department</li>
                                        </ol>
                                    </div>
                                    <h4 className="page-title">Create Department</h4>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <form onSubmit={handleSubmit}>
                                            <CreatableSelect
                                                options={users}
                                                onChange={handleInputChangeee}
                                                onInputChange={handleInputChangeee}
                                                getOptionLabel={(option)=>option.name}
                                                getOptionValue={(option)=>option.id}
                                                isMulti
                                                styles={colorStyles}
                                            />
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <div className="form-group mb-3">
                                                        <label htmlFor="name" className="form-label">Name</label>
                                                        <input
                                                            type="text"
                                                            name="name"
                                                            id="name"
                                                            value={values.name}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            autoComplete="off"
                                                            maxLength={40}
                                                            className="form-control"
                                                            placeholder="Enter name" />
                                                        {touched.name && errors.name ? (
                                                            <p className="text-danger mt-2 mb-0">{errors.name}</p>
                                                        ) : null}
                                                    </div>
                                                </div>
                                                <div className='col-md-6'>
                                                    <div className="form-group mb-3">
                                                        <label htmlFor="email" className="form-label">Email</label>
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            id="email"
                                                            value={values.email}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            autoComplete="off"
                                                            maxLength={40}
                                                            placeholder="Ex: abc@abc.com"
                                                            className="form-control" />
                                                        {touched.email && errors.email ? (
                                                            <p className="text-danger mt-2 mb-0">{errors.email}</p>
                                                        ) : null}
                                                    </div>
                                                </div>
                                                <div className='col-md-6'>
                                                    <div className="form-group mb-3">
                                                        <label htmlFor="department_project" className="form-label">Project name</label>
                                                        <Multiselect
                                                            name="department_project"
                                                            id="department_project"
                                                            value={values.department_project}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            autoComplete="off"
                                                            maxLength={40}
                                                            isObject={true}
                                                            displayValue="name"
                                                            onRemove={(event) => { console.log(event); }}
                                                            onSelect={(e) => { onSelect(e) }}
                                                            options={users}
                                                        />
                                                        {touched.department_project && errors.department_project ? (
                                                            <p className="text-danger mt-2 mb-0">{errors.department_project}</p>
                                                        ) : null}
                                                    </div>
                                                </div>
                                                <div className='col-md-6'>
                                                    <div className="form-group mb-3">
                                                        <label htmlFor="ReportingTo" className="form-label">Team member</label>
                                                        <Multiselect
                                                            name="department_member"
                                                            id="department_member"
                                                            value={values.department_member}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            autoComplete="off"
                                                            maxLength={40}
                                                            isObject={true}
                                                            displayValue="name"
                                                            onRemove={(event) => { console.log(event); }}
                                                            onSelect={(event) => { console.log(event); }}
                                                            options={users}
                                                        />
                                                        {touched.department_member && errors.department_member ? (
                                                            <p className="text-danger mt-2 mb-0">{errors.department_member}</p>
                                                        ) : null}
                                                    </div>
                                                </div>
                                                <div className='col-md-12'>
                                                    <div className="form-group mb-3">
                                                        <label htmlFor="department_head" className="form-label">Department head</label>
                                                        <input
                                                            type="text"
                                                            name="department_head"
                                                            id="department_head"
                                                            value={values.department_head}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            autoComplete="off"
                                                            maxLength={40}
                                                            className="form-control" placeholder=""
                                                        />
                                                        {touched.department_head && errors.department_head ? (
                                                            <p className="text-danger mt-2 mb-0">{errors.department_head}</p>
                                                        ) : null}
                                                    </div>
                                                </div>
                                                <div className='col-md-12'>
                                                    <div className="form-group mb-3">
                                                        <label htmlFor="description" className="form-label">Department Description</label>
                                                        <textarea
                                                            name="description"
                                                            id="description"
                                                            value={values.description}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            autoComplete="off"
                                                            maxLength={40}
                                                            className="form-control" row="5">
                                                        </textarea>
                                                        {touched.description && errors.description ? (
                                                            <p className="text-danger mt-2 mb-0">{errors.description}</p>
                                                        ) : null}
                                                    </div>
                                                </div>
                                            </div>
                                            <button type="submit" className="btn btn-primary btn-sm me-3 mt-3">Submit</button>
                                            <button type="button" className="btn btn-de-danger btn-sm mt-3">Cancel</button>
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

export default ProjectDepartAddNew