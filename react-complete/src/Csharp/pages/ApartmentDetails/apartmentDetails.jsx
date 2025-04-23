import { useEffect, useState } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { apartmentDetailsThunk } from "../../redux/slices/get/apartmentDetailsThunk";

export const ApartmentDetails = () => {

    const apartmentsDetails = useSelector(state => state.apartmentDetails.apartmentsDetails);
    const dispatch = useDispatch();
    const [selected,setSelected] = useState(false);
    const [selectedAs,setSelectedAs] = useState({});
    
    return <div >
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>CustomerId</th>
                    <th>City</th>
                    <th>Address</th>
                    <th>Size</th>
                    <th>Air Directions</th>
                    <th>Directions</th>
                    <th>Floor</th>
                    <th>Elevator</th>
                </tr>
            </thead>
            <tbody>
               
                    {apartmentsDetails && apartmentsDetails.map(d => {
               return  <tr key={d.apartmentId}  onClick={()=>{setSelected(true);setSelectedAs(d)}} className={(selected&& selectedAs === d)?"s":"r"}>
                    <td>{d.apartmentId}</td>
                    <td>{d.customerId}</td>
                    <td>{d.apartmentCity}</td>
                    <td>{d.apartmentAddress}</td>
                    <td>{d.apartmentSize}</td>
                    <td>{d.airDirections}</td>
                    <td>{d.directions}</td>
                    <td>{d.floor}</td>
                    <td>{d.elevator}</td>
                   </tr>
                    })}
               
            </tbody>
        </table>
        <button onClick={()=>(dispatch(apartmentDetailsThunk()))}>o</button>
    </div>
}