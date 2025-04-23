import { Button, TextareaAutosize } from "@mui/material"
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addChatThunk } from "../redux/slices/add/addChatThunk";
import { applicationSlice } from "../redux/slices/applicationsSlice";

export const NewChat = () =>{

    const navigate = useNavigate();
    const refdialog = useRef();
    const customer = useSelector(state=> state.customer.customerChose);
    const type = useSelector(state=> state.user.t);
    // const customer = useSelector(state=> state.customer.customerChose);
    const [data,setData] = useState({sendDate:new Date().toISOString(),from:type,read:false,information:"",chatId:"",applicationId:""});
    const [flag,setFlag] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
         
        refdialog.current.showModal();
    }, [])

       const openTimer = () => {
       setFlag(true);
            let oo = setInterval(() => {
            setFlag(false);   
            navigate('/home/customers');
            clearInterval(oo);
            }, 10000)
    
        }
        // {
        //     "chatId": 4,
        //     "applicationId": 1000,
        //     "from": true,
        //     "information": "hi!!! I try to add a chat...",
        //     "read": false,
        //     "sendDate": "2025-03-31T00:00:00"
        //   },

    return <div>
       <dialog ref={refdialog}>
            {!flag && <><Button onClick={() => { refdialog.current.close(); navigate('/home/customers')}}>✖</Button><br/>
                <label>to: {customer.customerFirstName} {customer.customerLastName}</label><br/>
                <label>date: {new Date().toLocaleDateString()}</label> <br/>
                <TextareaAutosize
                    aria-label="minimum height"
                    minRows={20}
                    placeholder="your massage..."
                    style={{ width: 250 }}
                    onChange={(e)=>{setData({...data,information:e.target.value})}}
                /><br/>
                <Button onClick={() => {dispatch(addChatThunk(data));openTimer()}}>send</Button>
                </>}
            {flag &&<div>your messege sent succssesfully</div> }
            </dialog>
            
          

    </div>
}