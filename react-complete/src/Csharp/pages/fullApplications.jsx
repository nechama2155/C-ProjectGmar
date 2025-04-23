import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { applicationThunk } from "../redux/slices/get/applicatiionThunk";
import { myApplicationsThunk } from "../redux/slices/get/myApplicationsThunk";

export const  FullApplications = () =>{
 const thisAssessor = useSelector(state=>state.assessor.thisAssessor);
 const customersDetails = useSelector(state => state.customer.customers);
 const applicationsDetails = useSelector(state => state.application.applications);
 const assessmentsDetails = useSelector(state => state.assessment.assessments);
 const type = useSelector(state => state.user.t); 
 const dispatch = useDispatch();
 useEffect(()=>{

    if(applicationsDetails.length===0){
        if(type === "a"){
            if(thisAssessor.isManager)
                  dispatch(applicationThunk());
            else 
                dispatch(myApplicationsThunk(thisAssessor.assessorId));
    }}

 },[])
return <div>
{/* customer table */}
<table>
            <thead>
                {/* <tr>
                    <th>id</th>
                    <th>firstName</th>
                    <th>lastName</th>
                    <th>city</th>
                    <th>address</th>
                    <th>phone</th>
                    <th>email</th>
                  {!thisAssessor.isManager && <th>chat</th>}
                </tr> */}
                {/* <tr> */}
                    Customer Details
                    {/* </tr> */}
            </thead>
            <tbody>

                 {customersDetails.map(d => {
                    return <tr key={d.customerId}>
                        <td>id: {d.customerId}</td>
                        <td>firstName: {d.customerFirstName}</td>
                        <td>lastName: {d.customerLastName}</td>
                        <td>city: {d.customerCity}</td>
                        <td>address: {d.customerAddress}</td>
                        <td>phone: {d.customerPhone}</td>
                        <td>email: {d.customerEmail}</td>

                  </tr>})}
            </tbody>
        </table>
        <div style={{border:"solid 2px gray"}}>
            <div>
        {/* application table */}
        <table>
        <thead>
            <tr>
                <th>applicationId</th>
                <th>assessorId</th>
                <td>applicationDate</td>
                <td>lastApplicationDate</td>
                <td>applicationStatus</td>
                     
            </tr>
        </thead>
        <tbody>
           
                {applicationsDetails.map(d => {
           return  <tr key={d.applicationId} >
                <td>{d.applicationId}</td>
                <td>{d.assessorId}</td>
                <td>{d.applicationDate}</td>
                <td>{d.lastApplicationDate}</td>
                <td>{d.applicationStatus}</td>

             </tr>
                })}
           
        </tbody>
    </table>
    {/* assessment table */}
    <table>
            <thead>
                <tr>
                    <th>AssessmentId</th>
                    <th>Block</th>
                    <th>Plot</th>
                    <th>SubPlot</th>
                    <th>ConstructionYear</th>
                    <th>AcquisionPrice</th>
                    <th>AssessmentGoal</th>
                    <th>LegalState</th>
                    <th>BuildingPermit</th>
                    <th>IrregularitiesBuilding</th>
                </tr>
            </thead>
            <tbody>
                {assessmentsDetails.map(d => {

                    return <tr key={d.assessmentId}>
                        <td>{d.assessmentId}</td>
                        <td>{d.block}</td>
                        <td>{d.plot}</td>
                        <td>{d.subPlot}</td>
                        <td>{d.constructionYear}</td>
                        <td>{d.acquisionPrice}</td>
                        <td>{d.assessmentGoal}</td>
                        <td>{d.legalState}</td>
                        <td>{d.buildingPermit}</td>
                        <td>{d.irregularitiesBuilding}</td>
                    </tr>
                })}

            </tbody>
        </table>
        </div>
        <div>
        {/* {!thisAssessor.isManager &&<> 


<MailOutlineOutlinedIcon />
    {((chat && !sent ) || selectedAs !== d) && <Button variant="text" onClick={() => { setChat(false); setSent(true) }}><GridViewIcon/></Button>}
    {(sent && !chat)&&selectedAs === d && <>
       <Button onClick={() => { dispatch(setChoseDetails(d));navigate('newChat') }}><BookmarkAddOutlinedIcon />new chat</Button><br />
         <Button onClick={() => navigate('fullApplications')}><BookmarkAddedOutlinedIcon />last chats</Button>
    </>
    }

</>} */}
        </div>
        </div>
</div>
} 





