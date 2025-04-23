import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from '@mui/material/Button';
import { Outlet, useNavigate } from "react-router-dom";
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
// import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';

// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';


//  <script src="./h.css" ></script> 
//import './cssPages/h.css'/m
import './cssPages/h.css'
import { List, ListItem, TextField } from "@mui/material";
import { Padding, PaddingOutlined } from "@mui/icons-material";

export const Home = () => {

    // localStorage(userType)
    const type = useSelector(state => state.user.t);
    const user = useSelector(state => state.user.users);
    const thisAssessor = useSelector(state => state.assessor.thisAssessor);
    const token = useSelector(state => state.assessor.token);
    const thisCustomer = useSelector(state => state.customer.thisCustomer);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [details, setDetails] = useState({});


    const [state, setState] = React.useState({
        // top: false,
        // left: false,
        // bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: 250, maxHeight: 50 }}
            role="combobox"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
            className="myBox"
        >

            <Divider />
            <List>
                <ListItem Padding>
                    {type === 'a' && <>
                        <TextField label="First Name" variant="standard" value={details?.assessorFirstName} onChange={(e) => setDetails({ ...details, assessorFirstName: e.target.value })} />
                        <TextField label="Last Name" variant="standard" value={details?.assessorLastName} onChange={(e) => setDetails({ ...details, assessorLastName: e.target.value })} />
                        <TextField label="Phone" variant="standard" value={details?.assessorPhone} onChange={(e) => setDetails({ ...details, assessorPhone: e.target.value })} />
                        <TextField label="Email" variant="standard" value={details?.assessorEmail} onChange={(e) => setDetails({ ...details, assessorEmail: e.target.value })} />
                        <TextField label="City" variant="standard" value={details?.assessorCity} onChange={(e) => setDetails({ ...details, assessorCity: e.target.value })} />
                        <TextField label="Address" variant="standard" value={details?.assessorAddress} onChange={(e) => setDetails({ ...details, assessorAddress: e.target.value })} />
                        {/* <Button onClick={()=>{}}></Button> */}
                        <ListItemButton>save</ListItemButton>

                    </>
                    }
                    {type === 'c' && <>
                        <TextField label="First Name" variant="standard" value={details?.customerFirstName} onChange={(e) => setDetails({ ...details, customerFirstName: e.target.value })} />
                        <TextField label="Last Name" variant="standard" value={details?.customerLastName} onChange={(e) => setDetails({ ...details, customerLastName: e.target.value })} />
                        <TextField label="Phone" variant="standard" value={details?.customerPhone} onChange={(e) => setDetails({ ...details, customerPhone: e.target.value })} />
                        <TextField label="Emay" variant="standard" value={details?.customerCity} onChange={(e) => setDetails({ ...details, customerCity: e.target.value })} />
                        <TextField label="Addil" variant="standard" value={details?.customerEmail} onChange={(e) => setDetails({ ...details, customerEmail: e.target.value })} />
                        <TextField label="Citress" variant="standard" value={details?.customerAddress} onChange={(e) => setDetails({ ...details, customerAddress: e.target.value })} />
                        {/* <Button onClick={()=>{}}></Button> */}
                        <ListItemButton>save</ListItemButton>
                    </>}

                </ListItem>



            </List>
        </Box>
    );


    useEffect(() => {
        if (type === 'a') {
        setDetails(thisAssessor);
           
        }

        if (type === 'c') {
            setDetails(thisCustomer);

        } 
    }, [])
    return <div className="aba">
        {/* <div className="t">welcome {user.userFirstName} {user.userLastName}</div> */}
        <div className="t">
            <div>
                {/* <img src="../../../public/five.png" alt="" style={{ width: "350px" }} /> */}
            </div>
            {/* <img src="logo.png" style={{width:"200px" ,margin:"0px 0px 0px 1400px"}} alt=""/> */}

            {/* <Button variant="text" onClick={() => navigate("myDetails")}>my Detalis</Button> */}
            <div>

                {type !== 'u' && ['right'].map((anchor) => (
                    <React.Fragment key={anchor} className="inBox">
                        <Button onClick={toggleDrawer(anchor, true)} >my details</Button>
                        <Drawer
                            anchor={anchor}
                            open={state[anchor]}
                            onClose={toggleDrawer(anchor, false)}
                        >
                            {list(anchor)}
                        </Drawer>
                    </React.Fragment>
                ))}
            </div>
        </div>

        <div className="homeLeft">

            <Button variant="text" onClick={() => navigate("about")}>about</Button><br />
            {/* <a href="./about">about</a> */}
            {type === 'a' &&
                <>
                {!thisAssessor.isManager && <>
                    <Button variant="text" onClick={() => navigate("assessments")}>myAssessments</Button><br />
                    <Button variant="text" onClick={() => navigate("applications")}>myAplications</Button><br />
                    <Button variant="text" onClick={() => navigate("lastTreatment")}>myLastTreatments</Button><br />
                    <Button variant="text" onClick={() => { navigate("customers") }}>myCustomers</Button><br />
                    </>}

                    {/* <a href="./assessments">assessments</a>
                    <a href="./customers">customers</a>
                    <a href="./aplications">aplications</a>
                    <a href="./lastTreatments">lastTreatments</a> */}
                    {thisAssessor.isManager &&
                        <div>
                            <Button variant="text" onClick={() => navigate("customers")}>customers</Button><br />
                            <Button variant="text" onClick={() => navigate("assessors")}>assessors</Button><br />
                            <Button variant="text" onClick={() => navigate("assessments")}>assessments</Button><br />
                            <Button variant="text" onClick={() => navigate("applications")}>applications</Button><br />
                            {/* <a href="./assessors">assessors</a> */}
                        </div>
                    }
                </>
            }
            {type === 'c' &&
                <>
                    <Button variant="text" onClick={() => navigate("myApplications")}>myApplications</Button><br />
                    {/* <Button variant="text" onClick={()=>navigate("myAssessments")}>myAssessments</Button><br/> */}
                    {/* <Button variant="text" onClick={()=>navigate("myApartmentDetails")}>myApartmentDetails</Button><br/> */}
                    {/* <Button variant="text" onClick={()=>navigate("myDetails")}>myDetails</Button><br/> */}
                    <Button variant="text" onClick={() => navigate("newApplication")}>newApplication</Button><br />
                </>
            }
            {type === 'u' &&
                <>
                    <Button variant="text" onClick={() => navigate("newApplication")}>newApplication</Button><br />
                </>
            }
        </div>
        <div className="homeRight">
            <div className="body">
                <Outlet></Outlet>
            </div>
        </div>


    </div>
}
