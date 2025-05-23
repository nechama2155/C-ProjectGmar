import { useEffect, useState } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { applicationThunk } from "../../redux/slices/get/applicatiionThunk";
import { useNavigate } from "react-router-dom";
import { myApplicationsThunk } from "../../redux/slices/get/myApplicationsThunk";

export const Applications = () =>{
    const [selected,setSelected] = useState(false);
    const [selectedAs,setSelectedAs] = useState({});
    const [data,setData] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const applicationsDetails = useSelector(state=>state.application.applications);
    const type = useSelector(state=>state.user.t);
    const thisAssessor = useSelector(state => state.assessor.thisAssessor);


    useEffect(()=>{
        if(applicationsDetails.length === 0) 
            if(type === "a"){
                if(thisAssessor.isManager)
                      dispatch(applicationThunk());
                else 
                    dispatch(myApplicationsThunk(thisAssessor.assessorId));
}
        },[])

    return  <div >
{applicationsDetails.length>0 && <table>
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
           
                {applicationsDetails && applicationsDetails.map(d => {
           return  <tr key={d.applicationId} onClick={()=>{setSelected(true);setSelectedAs(d)}} className={(selected&& selectedAs === d)?"s":"r"}>
                <td>{d.applicationId}</td>
                <td>{d.assessorId}</td>
                <td>{d.applicationDate}</td>
                <td>{d.lastApplicationDate}</td>
                <td>{d.applicationStatus}</td>

             </tr>
                })}
           
        </tbody>
    </table>}
    {/* <Button  variant="text" onClick={()=>{navigate('/addApplication')}}>add application</Button> */}
    {selected &&<>
{/* <Button variant="text" onClick={()=>{dispatch(editApplication(selectedAs));navigate('/editAssessor')}}>edit application</Button> */}
{/* <button onClick={()=>{dispatch(deleteApplicationThunk(selectedAs.assessorId));setSelected(false)}}>delete assessor</button> */}
</>}
</div>

}