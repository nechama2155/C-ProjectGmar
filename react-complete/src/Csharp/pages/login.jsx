import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "../redux/slices/loginThunk";
import Button from '@mui/material/Button';
import { addUser, setType } from "../redux/slices/userSlice";
import { Box, TextField } from "@mui/material";
import * as React from 'react';
import { assessorByIdThunk } from "../redux/slices/get/assessorByIdThunk";
import { customerByIdThunk } from "../redux/slices/get/customerByIdThunk";


export const Login = () => {

  const [id, setId] = useState("");
  const dispatch = useDispatch();
  const type = useSelector(state => state.user.t);
  const tokena = useSelector(state => state.assessor.token);
  const tokenc = useSelector(state => state.customer.token);
  const navigate = useNavigate();
  const user = useSelector(state => state.user.users);

  const refdialog = useRef();

  useEffect(() => {
    refdialog.current.showModal();
  }, [])
  useEffect(() => {
    if(tokena===1 || tokenc ===1 )
    navigate('/home/about');
  }, [tokena,tokenc])
  useEffect(() => {
    console.log(type);
    if (type !== null) {
        if (type === 'a') {
            dispatch(assessorByIdThunk(user.userId));
        }
        else if (type === 'c') {
            dispatch(customerByIdThunk(user.userId));
        }
        else  navigate('/home/about');
    }
  }, [type])

  return <div>
    <dialog ref={refdialog} className="dialog">
      <div>
        <img src="logo.png" alt="" style={{width:"350px"}} />
      </div>
      {/* <div onClick={()=>{}}>x</div> */}
      <Box>
      {/* <TextField id="standard-basic" label="first name" variant="standard" onChange={(e) => setDetails({ ...details, userFirstName: e.target.value })}/>
      <TextField id="standard-basic" label="last name" variant="standard" onChange={(e) => setDetails({ ...details, userLastName: e.target.value })}/> */}
      <TextField id="standard-basic" label="id" variant="standard" onChange={(e) => setId(e.target.value)}/>
    </Box>
      
      <Button variant="outlined" onClick={() => {dispatch(addUser(id));dispatch(loginThunk(id))}}>next</Button>
    </dialog>
  </div>
}