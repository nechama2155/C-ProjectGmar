import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { assessmentThunk } from "../../redux/slices/get/assessmentThunk"
import { Button } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import { editAssessment, setIsMy } from "../../redux/slices/assessmentSlice";
import { myAssessmentsThunk } from "../../redux/slices/get/myAssessmentsThunk";

export const Assessment = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate ();
    const assessmentDetails = useSelector(state => state.assessment.assessments);
    const successed = useSelector(state => state.assessment.sucsses);
    const [selected, setSelected] = useState(false);
    const [selectedAs, setSelectedAs] = useState({});
    const type = useSelector(state=>state.user.t);
    const thisAssessor = useSelector(state => state.assessor.thisAssessor);
    useEffect(() => { 
            if (assessmentDetails.length === 0) 
            if(type === "a"){
                if(thisAssessor.isManager)
                      dispatch(assessmentThunk());
                else 
                    dispatch(myAssessmentsThunk(thisAssessor.assessorId));
}
     }, [])
//      useEffect(() => { 
//         if (successed){ 
//         if(type === "a"){
//             if(thisAssessor.isManager)
//                   dispatch(assessmentThunk());
//             else 
//                 dispatch(myAssessmentsThunk(thisAssessor.assessorId));
// }}
//  }, [successed])


    return <div>  
        { assessmentDetails.length>0 && <table>
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
                {assessmentDetails && assessmentDetails.map(d => {

                    return <tr key={d.assessmentId} onClick={() => { setSelected(true); setSelectedAs(d) }} className={(selected && selectedAs === d) ? "s" : "r"}>
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
        </table>}
        {/* <Button variant="text" onClick={()=>{navigate('addAssessor')}}>add assessment</Button> */}
    {selected &&<>
<Button variant="text" onClick={()=>{dispatch(editAssessment(selectedAs));navigate('editAssessment')}}>edit assessment</Button>
{/* <Button  variant="text" onClick={()=>{dispatch(deleteAssessorThunk(selectedAs.assessorId));setSelected(false)}}>delete assessor</Button> */}
 </>  
  }
  <Outlet/>
        {/* <button onClick={()=>(dispatch(assessmentThunk()))}>o</button> */}
    </div>
}