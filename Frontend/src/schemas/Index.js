import * as Yup from "yup";

export const loginSchema = Yup.object({
    email: Yup.string().email("Please enter a valid email address").matches(/@[^.]*\./, "Please enter a valid email address").required("This field is required").min(10).max(40),
    password: Yup.string().required("This field is required").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, "Password should contain One Uppercase, One Lowercase, One Number and One Special Case Character").min(6).max(16),
});

export const departSchema = Yup.object({
    name: Yup.string().required("This field is required").min(3).max(20),
    email: Yup.string().email("Please enter a valid email address").matches(/@[^.]*\./, "Please enter a valid email address").required("This field is required").min(10).max(40),
    // department_project: Yup.object().required("This field is required"),
    // department_project: Yup.object().shape({
    //     label: Yup.string().required("Required"),
    //     value: Yup.string().required("Required")
    // }),
    // department_project: Yup.string(),
    // department_project: Yup.string().required("Required").nullable(),
    // teamMember: Yup.object().required("This field is required"),
    department_head: Yup.string().required("This field is required").min(6).max(16),
    description: Yup.string().required("This field is required").min(6).max(16),
});