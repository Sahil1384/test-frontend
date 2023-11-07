import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import Multiselect from 'multiselect-react-dropdown';
import axios from "axios";
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useFormik } from "formik"
import { departSchema } from "../schemas/Index";
import { createDepart } from "../redux/features/createDepart";
import { getUsers } from '../redux/api';
import { getProjects } from '../redux/api';
import Select from 'react-select'
import './Style.css'

// import CreatableSelect from "react-select/creatable";


const initialValues = {
    name: "",
    email: "",
    department_project: [],
    teamMember: [],
    department_head: "",
    description: "",
};

function ProjectsDepartAdd() {
    const [users, setUsers] = useState([])
    const [projects, setProjects] = useState([])
    const [departHead, setDepartHead] = useState([])
    const [formValue, setFormValue] = useState(initialValues);
    const [formError, setFormError] = useState({})
    const [additionalInputs, setAdditionalInputs] = useState(0);
    const [rowFormValue, setRowFormValue] = useState([]);
    const [rowFormError, setRowFormError] = useState([]);
    // console.log("38 ", formError);

    const user = JSON.parse(localStorage.getItem("profile"));
    // console.log("333 ap", user.response.userDetails.id);      
    const user_id = user.response.userDetails.id;

    const handleChange = (e) => {
        let { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
        // console.log("36 ", formValue);
    };

    const { values, errors, touched } =
        useFormik({
            initialValues,
            validationSchema: departSchema,
            onSubmit: (values, action) => {
                console.log("54 ", values)
                // dispatch(ProjectsDepartAdd({ values, navigate, toast }));
                action.resetForm();
            },
        });

    const handleBlur = () => {

    }
    const { error } = useSelector((state) => ({ ...state.auth }));
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        getUsers({ user_id: user_id }).then((res) => {
            //  console.log("28, ", res)
            //  console.log("29 ", res?.data?.response?.userList?.topLevel);
            setUsers(res?.data?.response?.userList?.topLevel);
        })
            .catch(err => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        getUsers({ user_id: user_id }).then((res) => {
            //  console.log("28, ", res)
            // console.log("29 ", res?.data?.response?.userList?.topLevel);
            setDepartHead(res?.data?.response?.userList?.topLevel);
        })
            .catch(err => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        getProjects({ userId: user_id }).then((res) => {
            //  console.log("398, ", res)onDepartHeadSelectselectedList
            //  console.log("399 ", res?.data?.response?.roleList);
            setProjects(res?.data?.response?.roleList);
        })
            .catch(err => {
                console.log(err);
            });
    }, []);

    const onTeamSelect = (selectedList) => {
        const ids = selectedList.map(({ id }) => id)
        formValue.teamMember = ids
    }

    // const onTeamRemove = (selectedList) => {
    //     const ids = selectedList.map(({ id }) => id)
    //     formValue.teamMember = ids
    // }



    const onDepartHeadSelect = (selectedList) => {
        const ids = selectedList.id
        formValue.department_head = ids
    }


    // const onDepartHeadRemove = (selectedList) => {
    //     const ids = selectedList.map(({ id }) => id)
    //     formValue.department_head = ids
    // }
///////// GUDDU SIR START /////////
    // const onProjectSelect = (selectedList) => {
    //     const ids = selectedList.id
    //     formValue.department_project = ids
    // }    
///////// GUDDU SIR END /////////
const onProjectSelect = (selectedList, index) => {
    const ids = selectedList.id;
    const updatedProjects = [...formValue.department_project];
    updatedProjects[index] = ids;
    setFormValue({
        ...formValue,
        department_project: updatedProjects,
    });
};

// const onProjectRemove = (selectedList, index) => {
//     const updatedProjects = [...formValue.department_project];
//     updatedProjects[index] = ""; // Set an empty string as a placeholder for the removed input
//     setFormValue({
//         ...formValue,
//         department_project: updatedProjects,
//     });
// };


    // const onProjectRemove = (selectedList) => {
    //     const ids = selectedList.map(({ id }) => id)
    //     formValue.department_project = ids
    // }

    const handleSubmit = async (e) => {
        console.log(e)
        e.preventDefault()
        const data = { ...formValue, user_id: user_id }
        // console.log(formValue)
        const resData = await dispatch(createDepart({ data, navigate, toast }));
        // console.log("175 ", resData?.payload)
        if (resData?.payload?.success === false) {
            setFormError(resData.payload?.response)
        }
    };

    // function addInputs(e) {
    //     e.preventDefault()
    //     setAdditionalInputs((prevCount) => prevCount + 1);
    
    // }

    function addInputs(e) {
        e.preventDefault();
        setAdditionalInputs((prevCount) => prevCount + 1);
        // Add an empty string as a placeholder for the new input to department_project array
        setFormValue((prevFormValue) => ({
            ...prevFormValue,
            department_project: [...prevFormValue.department_project, ""],
        }));
    }

    function removeInputs(index) {
        // Step 3: Decrement the count of additional inputs when the "-" button is clicked
        setAdditionalInputs((prevCount) => prevCount - 1);
    
        // Step 4: Update the formValue to remove the corresponding row data
        const updatedTeamMembers = formValue.teamMember.filter((_, i) => i !== index);
        const updatedProjects = formValue.department_project.filter((_, i) => i !== index);
        setFormValue({
            ...formValue,
            teamMember: updatedTeamMembers,
            department_project: updatedProjects,
        });
    }    
    console.log(formValue)

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
                                            <li className="breadcrumb-item"><Link to="/ProjectsDepart">Department /</Link>
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
                                        <form>
                                            {/* <CreatableSelect
                                                options={options}
                                                onChange={handleInputChangeee}
                                                // onInputChange={handleInputChangeee}
                                                getOptionLabel={(option)=>option.value}
                                                getOptionValue={(option)=>option.id}
                                                isMulti
                                                styles={colorStyles}
                                            /> */}
                                            {/* {users.map((item) => (
                                                <h2>{item.name}</h2>
                                            ))} */}
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <div className="form-group mb-3">
                                                        <label htmlFor="name" className="form-label">Name</label>
                                                        <input
                                                            type="text"
                                                            name="name"
                                                            id="name"
                                                            value={formValue.name}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            autoComplete="off"
                                                            maxLength={40}
                                                            className="form-control"
                                                            placeholder="Enter name" />
                                                        <p className="text-danger mb-0 mt-2">{formError?.name?.[0]}</p>
                                                    </div>
                                                </div>
                                                <div className='col-md-6'>
                                                    <div className="form-group mb-3">
                                                        <label htmlFor="email" className="form-label">Email</label>
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            id="email"
                                                            value={formValue.email}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            autoComplete="off"
                                                            maxLength={40}
                                                            placeholder="Ex: abc@abc.com"
                                                            className="form-control" />
                                                        <p className="text-danger mb-0 mt-2">{formError?.email?.[0]}</p>
                                                    </div>
                                                </div>
                                                {/* Step 3: Use a loop to render the additional inputs based on the count */}


                                                <div className='col-md-5'>
                                                    <div className="form-group mb-3">
                                                        <label htmlFor="department_project" className="form-label">Project name</label>
                                                        <Select
                                                            placeholder='Search Team member'
                                                            options={projects}
                                                       
                                                            getOptionLabel={(projects) => projects['name']}
                                                            getOptionValue={(projects) => projects['id']}
                                                            onChange={onProjectSelect}
                                                        />
                                                        {/* <p className="text-danger mb-0 mt-2">{formError?.name?.[0]}</p> */}
                                                    </div>
                                                </div>
                                                <div className='col-md-6'>
                                                    <div className="form-group mb-3">
                                                        <label htmlFor="ReportingTo" className="form-label">Team member</label>
                                                        {/* <Multiselect
                                                            displayValue="name"
                                                            placeholder="Select"
                                                            onSelect={onTeamSelect}
                                                            onRemove={onTeamRemove}
                                                            options={users}
                                                        /> */}
                                                        <Select
                                                            placeholder='Search Team member'
                                                            options={users}
                                                            isMulti
                                                            getOptionLabel={(users) => users['name']}
                                                            getOptionValue={(users) => users['id']}
                                                            onChange={onTeamSelect}
                                                        />
                                                        {/* <p className="text-danger mb-0 mt-2">{formError?.name?.[0]}</p> */}
                                                    </div>
                                                </div>
                                                <div className='col-md-1 d-flex align-items-center'>
                                                    <button className='add-button' title='Add' onClick={addInputs}>+</button>
                                                    <button type="button" title='Remove' className='remove-button-disabled' disabled>-</button>
                                                </div>
                                                

                                                {[...Array(additionalInputs)].map((_, index) => (
                                                    <React.Fragment key={index}>
                                                        <div className='col-md-5'>
                                                        <div className="form-group mb-3">
                                                        <label htmlFor="department_project" className="form-label">Project name</label>
                                                        <Select
                                                            placeholder='Search Team member'
                                                            options={projects}
                                                            getOptionLabel={(projects) => projects['name']}
                                                            getOptionValue={(projects) => projects['id']}
                                                            onChange={onProjectSelect}
                                                        />
                                                        {/* <p className="text-danger mb-0 mt-2">{formError?.name?.[0]}</p> */}
                                                    </div>
                                                        </div>
                                                        <div className='col-md-6'>
                                                        <div className="form-group mb-3">
                                                        <label htmlFor="ReportingTo" className="form-label">Team member</label>
                                                        {/* <Multiselect
                                                            displayValue="name"
                                                            placeholder="Select"
                                                            onSelect={onTeamSelect}
                                                            onRemove={onTeamRemove}
                                                            options={users}
                                                        /> */}
                                                        <Select
                                                            placeholder='Search Team member'
                                                            options={users}
                                                            isMulti
                                                            getOptionLabel={(users) => users['name']}
                                                            getOptionValue={(users) => users['id']}
                                                            onChange={onTeamSelect}
                                                        />
                                                        {/* <p className="text-danger mb-0 mt-2">{formError?.name?.[0]}</p> */}
                                                    </div>
                                                        </div>
                                                        <div className='col-md-1 d-flex align-items-center'>
                                                            {/* Step 4: Add the "-" button to each added row */}
                                                            <button className='add-button' title='Add' onClick={addInputs}>+</button>
                                                            <button type="button" title='Remove' className='remove-button' onClick={() => removeInputs(index)}>-</button>
                                                        </div>
                                                    </React.Fragment>
                                                ))}

                                                <div className='col-md-12'>
                                                    <div className="form-group mb-3">
                                                        <label htmlFor="department_head" className="form-label">Department head</label>
                                                        {/* <Multiselect
                                                            displayValue="name"
                                                            placeholder="Select"
                                                            onSelect={onDepartSelect}
                                                            onRemove={onDepartRemove}
                                                            options={users}
                                                        /> */}
                                                        <Select
                                                            placeholder='Search Department head'
                                                            options={departHead}
                                                            getOptionLabel={(departHead) => departHead['name']}
                                                            getOptionValue={(departHead) => departHead['id']}
                                                            onChange={onDepartHeadSelect}
                                                        />
                                                        <p className="text-danger mb-0 mt-2">{formError?.department_head?.[0]}</p>
                                                    </div>
                                                </div>
                                                <div className='col-md-12'>
                                                    <div className="form-group mb-3">
                                                        <label htmlFor="description" className="form-label">Department Description</label>
                                                        <textarea
                                                            name="description"
                                                            id="description"
                                                            value={formValue.description}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            autoComplete="off"
                                                            maxLength={40}
                                                            className="form-control" row="5">
                                                        </textarea>
                                                        <p className="text-danger mb-0 mt-2">{formError?.description?.[0]}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <button type="submit" className="btn btn-primary btn-sm me-3 mt-3" onClick={handleSubmit}>Submit</button>
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

export default ProjectsDepartAdd