import { useEffect } from "react";
// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './Pages/Dashboard'
import Login from './Login/Login'
import { setUser } from "./redux/features/authSlice";
import PrivateRoute from "./Components/PrivateRoute";
import ForgotPassword from './Login/ForgotPassword'
import AnalyticsIndex from "./Pages/AnalyticsIndex";
import { useDispatch } from "react-redux";
import VerifyOtp from './Login/VerifyOtp'
import ChangePassword from './Login/ChangePassword'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProfileAdmin from './Pages/ProfileAdmin'
import ProfileUser from './Pages/ProfileUser'
import ProjectsChat from './Pages/ProjectsChat'
import ProjectsClients from './Pages/ProjectsClients'
import ProjectsCreate from './Pages/ProjectsCreate'
import ProjectsIndex from './Pages/ProjectsIndex'
import ProjectsKanbanBoard from './Pages/ProjectsKanbanBoard'
import ProjectsProject from './Pages/ProjectsProject'
import ProjectsProjectAdd from './Pages/ProjectsProjectAdd'
import ProjectsTask from './Pages/ProjectsTask'
import ProjectsDepart from './Pages/ProjectsDepart'
import ProjectsDepartAdd from './Pages/ProjectsDepartAdd'
// import ProjectDepartAddNew from './Pages/ProjectDepartAddNew'
import ProjectsUsers from './Pages/ProjectsUsers'
import ProjectsUsersAdd from './Pages/ProjectsUsersAdd'
import EditForm from './Pages/EditForm'
import DownloadProjectPdf from './Pages/DownloadProjectPdf'
import RailwayZone from './Pages/RailwayZone'
import RailwayZoneAdd from './Pages/AddForms/RailwayZoneAdd'
import EditRailwayZone from './Pages/EditForms/EditRailwayZone'
import EmdPaidStatus from './Pages/EmdPaidStatus'
import EmdPaidStatusAdd from './Pages/AddForms/EmdPaidStatusAdd'
import EditEmdPaidStatus from './Pages/EditForms/EditEmdPaidStatus'
import SdPaidStatus from './Pages/SdPaidStatus'
import SdPaidStatusAdd from './Pages/AddForms/SdPaidStatusAdd'
import EditSdPaidStatus from './Pages/EditForms/EditSdPaidStatus'
import SdPaidThrough from './Pages/SdPaidThrough'
import SdPaidThroughAdd from './Pages/AddForms/SdPaidThroughAdd'
import EditSdPaidThrough from './Pages/EditForms/EditSdPaidThrough'
import PgPaidStatus from './Pages/PgPaidStatus'
import PgPaidStatusAdd from './Pages/AddForms/PgPaidStatusAdd'
import EditPgPaidStatus from './Pages/EditForms/EditPgPaidStatus'
import PgPaidThrough from './Pages/PgPaidThrough'
import PgPaidThroughAdd from './Pages/AddForms/PgPaidThroughAdd'
import EditPgPaidThrough from './Pages/EditForms/EditPgPaidThrough'
import InspectionAgency from './Pages/InspectionAgency'
import InspectionAgencyAdd from './Pages/AddForms/InspectionAgencyAdd' 
import EditInspectionAgency from './Pages/EditForms/EditInspectionAgency'
import MaterialAccepted from './Pages/MaterialAccepted'
import MaterialAcceptedAdd from './Pages/AddForms/MaterialAcceptedAdd'
import EditMaterialAccepted from './Pages/EditForms/EditMaterialAccepted'
import MaterialRejected from './Pages/MaterialRejected'
import MaterialRejectedAdd from './Pages/AddForms/MaterialRejectedAdd'
import EditMaterialRejected from './Pages/EditForms/EditMaterialRejected'
import PaymentStatus from './Pages/PaymentStatus'
import PaymentStatusAdd from './Pages/AddForms/PaymentStatusAdd'
import EditPaymentStatus from './Pages/EditForms/EditPaymentStatus'
import RitesIcStatus from './Pages/RitesIcStatus'
import RitesIcStatusAdd from './Pages/AddForms/RitesIcStatusAdd'
import EditRitesIcStatus from './Pages/EditForms/EditRitesIcStatus'
import DownloadPdf from './Pages/DownloadPdf'
// 
function App() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  // console.log("33", user);
  useEffect(() => {
    dispatch(setUser(user));
  }, []);
  return (
    <div className="App">
      <ToastContainer />
      <Router>
        <Routes>
          {/* auth routes start */}
          <Route exact path='/' element={< Login />}></Route>
          {/* <Route exact path='/Login' element={< Login />}></Route> */}
          <Route exact path='/ForgotPassword' element={< ForgotPassword />}></Route>
          <Route exact path='/VerifyOtp' element={< VerifyOtp />}></Route>
          <Route exact path='/ChangePassword' element={< ChangePassword />}></Route>
          {/* auth routes end */}
          {/* protected routes start */}
          <Route exact path="/Dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route exact path='/AnalyticsIndex' element={<PrivateRoute>< AnalyticsIndex /></PrivateRoute>} />
          <Route exact path='/ProfileAdmin' element={<PrivateRoute>< ProfileAdmin /></PrivateRoute>} />
          <Route exact path='/ProfileUser' element={<PrivateRoute>< ProfileUser /></PrivateRoute>} />
          {/* project routes start */}
          <Route exact path='/ProjectsChat' element={<PrivateRoute>< ProjectsChat /></PrivateRoute>} />
          <Route exact path='/ProjectsClients' element={<PrivateRoute>< ProjectsClients /></PrivateRoute>} />
          <Route exact path='/ProjectsCreate' element={<PrivateRoute>< ProjectsCreate /></PrivateRoute>} />
          <Route exact path='/ProjectsIndex' element={<PrivateRoute>< ProjectsIndex /></PrivateRoute>} />
          <Route exact path='/ProjectsKanbanBoard' element={<PrivateRoute>< ProjectsKanbanBoard /></PrivateRoute>} />
          <Route exact path='/ProjectsProject' element={<PrivateRoute>< ProjectsProject /></PrivateRoute>} />
          <Route exact path='/ProjectsProjectAdd' element={<PrivateRoute>< ProjectsProjectAdd /></PrivateRoute>} />
          <Route exact path='/ProjectsTask' element={<PrivateRoute>< ProjectsTask /></PrivateRoute>} />
          <Route exact path='/ProjectsDepart' element={<PrivateRoute>< ProjectsDepart /></PrivateRoute>} />
          <Route exact path='/ProjectsDepartAdd' element={<PrivateRoute>< ProjectsDepartAdd /></PrivateRoute>} />
          {/* <Route exact path='/ProjectDepartAddNew' element={<PrivateRoute>< ProjectDepartAddNew /></PrivateRoute>} /> */}
          <Route exact path='/ProjectsUsers' element={<PrivateRoute>< ProjectsUsers /></PrivateRoute>} />
          <Route exact path='/ProjectsUsersAdd' element={<PrivateRoute>< ProjectsUsersAdd /></PrivateRoute>} />
          <Route exact path='/EditForm' element={<PrivateRoute>< EditForm /></PrivateRoute>} />
          <Route exact path='/DownloadProjectPdf' element={<PrivateRoute>< DownloadProjectPdf /></PrivateRoute>} />
           <Route exact path='/railway-zone' element={<PrivateRoute>< RailwayZone /></PrivateRoute>} />
          <Route exact path='/edit-railway-zone' element={<PrivateRoute>< EditRailwayZone /></PrivateRoute>} />
          <Route exact path='/railway-zone-add' element={<PrivateRoute>< RailwayZoneAdd /></PrivateRoute>} />
          <Route exact path='/emd-paid' element={<PrivateRoute>< EmdPaidStatus /></PrivateRoute>} />
          <Route exact path='/edit-emd-paid' element={<PrivateRoute>< EditEmdPaidStatus /></PrivateRoute>} />
          <Route exact path='/emd-paid-add' element={<PrivateRoute>< EmdPaidStatusAdd /></PrivateRoute>} />
          <Route exact path='/sd-paid-status' element={<PrivateRoute>< SdPaidStatus /></PrivateRoute>} />
          <Route exact path='/edit-sd-paid-status' element={<PrivateRoute>< EditSdPaidStatus /></PrivateRoute>} />
          <Route exact path='/sd-paid-status-add' element={<PrivateRoute>< SdPaidStatusAdd /></PrivateRoute>} />
          <Route exact path='/sd-paid-through' element={<PrivateRoute>< SdPaidThrough /></PrivateRoute>} />
          <Route exact path='/edit-sd-paid-through' element={<PrivateRoute>< EditSdPaidThrough /></PrivateRoute>} />
          <Route exact path='/sd-paid-through-add' element={<PrivateRoute>< SdPaidThroughAdd /></PrivateRoute>} />
          <Route exact path='/pg-paid-status' element={<PrivateRoute> < PgPaidStatus /> </PrivateRoute>} />
          <Route exact path='/edit-pg-paid-status' element={<PrivateRoute> < EditPgPaidStatus /> </PrivateRoute>} />
          <Route exact path='/pg-paid-status-add' element={<PrivateRoute>< PgPaidStatusAdd /></PrivateRoute>} />
          <Route exact path='/pg-paid-through' element={<PrivateRoute> < PgPaidThrough /> </PrivateRoute>} />
          <Route exact path='/edit-pg-paid-through' element={<PrivateRoute> < EditPgPaidThrough /> </PrivateRoute>} />
          <Route exact path='/pg-paid-through-add' element={<PrivateRoute> < PgPaidThroughAdd /> </PrivateRoute>} />
          <Route exact path='/inspection-agency' element={<PrivateRoute> < InspectionAgency /> </PrivateRoute>} />
          <Route exact path='/inspection-agency-add' element={<PrivateRoute> < InspectionAgencyAdd /> </PrivateRoute>} />
          <Route exact path='/edit-inspection-agency' element={<PrivateRoute> < EditInspectionAgency /> </PrivateRoute>} />
          <Route exact path='/accepted-material' element={<PrivateRoute> < MaterialAccepted /> </PrivateRoute>} />
          <Route exact path='/edit-accepted-material' element={<PrivateRoute> < EditMaterialAccepted /> </PrivateRoute>} />
          <Route exact path='/accepted-material-add' element={<PrivateRoute> < MaterialAcceptedAdd /> </PrivateRoute>} />
          <Route exact path='/rejected-material' element={<PrivateRoute> < MaterialRejected /> </PrivateRoute>} />
          <Route exact path='/edit-rejected-material' element={<PrivateRoute> < EditMaterialRejected /> </PrivateRoute>} />
          <Route exact path='/rejected-material-add' element={<PrivateRoute> < MaterialRejectedAdd /> </PrivateRoute>} />
          <Route exact path='/payment-status' element={<PrivateRoute> < PaymentStatus /> </PrivateRoute>} />
          <Route exact path='/edit-payment-status' element={<PrivateRoute> < EditPaymentStatus /> </PrivateRoute>} />
          <Route exact path='/payment-status-add' element={<PrivateRoute> < PaymentStatusAdd /> </PrivateRoute>} />
          <Route exact path='/rites-ic-status' element={<PrivateRoute> < RitesIcStatus /> </PrivateRoute>} />
          <Route exact path='/edit-rites-ic-status' element={<PrivateRoute> < EditRitesIcStatus /> </PrivateRoute>} />
          <Route exact path='/rites-ic-status-add' element={<PrivateRoute> < RitesIcStatusAdd /> </PrivateRoute>} />
          <Route exact path='/download-pdf' element={<PrivateRoute> < DownloadPdf /> </PrivateRoute>} />
          {/* protected routes end */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;