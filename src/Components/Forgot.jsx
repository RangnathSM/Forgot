import '../Styles/Forgot.css'
import React from "react";
import { AppBar, Toolbar, Typography,Link, TextField } from "@mui/material";
import { Box } from '@mui/system';
import HouseIcon from '@mui/icons-material/House';
import { Button } from "@mui/material";
import { useState } from 'react';
const Forgot = () => {

    let [email, setEmail] = useState()
    let [error, setError] = useState(false)

    let handleEmail = (e) => {
        setEmail(e.target.value);
      };
    
      const handleSend = () => {
        if (validateEmail(email)) {
          console.log('Sending email:', email);
        } else {
          setError(true);
        }
      };

      let validateEmail = (email) => {
        let emailType = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailType.test(email);
      };

    return ( 
         
           <Box width='100%'>
             <Box >
                <AppBar  sx={{background:'#1746A2'}}>
                <Toolbar sx={{ width:{xl:"100%",lg:"100%",md:"100%",sm:"100%",xs:"100%"}, height:'80px'}} >
                <Typography sx={{ width:{xl:"80px",lg:"80px",md:"80px",sm:"80px",xs:"60px"},height:{xl:"80px",lg:"80px",md:"80px",sm:"80px",xs:"65px"},marginTop:'40px'}}><img src="../images/Logo.svg" alt="logo"  /></Typography>
                <Typography sx={{marginLeft:{xl:"80%",lg:"80%",md:"70%",sm:"70%",xs:"65%"}}}><HouseIcon sx={{width:'40px', height:'31.85px',marginTop:'10px' }}></HouseIcon></Typography>
                <Link sx={{color:'#FFFFFF',marginTop:'4px', marginLeft:{xl:"0%",lg:"0%",md:"0%",sm:"0%",xs:""},fontSize:'24px', fontWeight:'500',textDecoration:'none', visibility:{xl:'visible', lg:'visible', md:'visible', sm:'hidden', xs:'hidden'} }}>Home</Link>
                </Toolbar>
            </AppBar>
            </Box>


        <Box sx={{width:{xl:"1002px",lg:"1000px",md:"700px",sm:"500px",xs:"440px"}, borderRadius:'60px', height:{xl:"600px",lg:"600px",md:"500px",sm:"500px",xs:"500px"},border: '2px solid #FF731D80',marginLeft:{xl:"260px",lg:"100px",md:"95px",sm:"50px",xs:"18px"},marginTop:{xl:"240px",lg:"180px",md:"160px",sm:"140px",xs:"120px"}}} >
            <Box marginTop='40px'>
                <Typography sx={{color:'#1746A2', fontSize:{xl:"40px",lg:"40px",md:"30px",sm:"25px",xs:"25px"}, fontWeight:'600' }}>Forgot Password</Typography>
                <Typography sx={{width:{xl:"490px",lg:"490px",md:"490px",sm:"490px",xs:"400px"}, height:'84px',fontSize:{xl:"28px",lg:"28px",md:"25px",sm:"23px",xs:"22px"} ,fontWeight:'500', marginLeft:{xl:"252px",lg:"252px",md:"110px",sm:"5px",xs:"15px"},marginTop:'30px'}}>Please Enter your Email address To Receive a verification code </Typography>
                <form >
                    <Box marginTop={{xl:"40px",lg:"40px",md:"20px",sm:"10px",xs:"10px"}}>
                        <Typography sx={{color:'#1746A2', fontSixe:'20px', fontWeight:'400',marginLeft:{xl:"-410px",lg:"-410px",md:"-340px",sm:"-330px",xs:"-310px"}}}><label>Email</label></Typography>
                        <TextField value={email} onChange={handleEmail} error={error} helperText={error ? 'Please enter a valid email' : ''} sx={{border:' 1px solid #7E7E7E', width:{xl:"460px",lg:"460px",md:"400px",sm:"380px",xs:"360px"}, height:{xl:"56px",lg:"56px",md:"56px",sm:"56px",xs:"56px"}, borderRadius:'8px', background:'#F3F6FA', marginLeft:{xl:"0",lg:"0",md:"20px",sm:"5px",xs:"3px"}}}></TextField>
                    </Box>
                    <Button onClick={handleSend} sx={{border:"none", marginTop:{xl:"80px",lg:"80px",md:"40px",sm:"40px",xs:"10%"},  background:"#1746A2", padding:"12px 20px", width:{xl:"300px",lg:"300px",md:"300px",sm:"300px",xs:"250px"}, height:'60px', boxShadow:"2px 2px 8px -2px rgba(0, 79, 149, 0.1)", color:"white",borderRadius:'40px', textTransform: "none", fontSize:{xl:"20px",lg:"20px",md:"20px",sm:"20px",xs:"18px"}, fontWeight:"600" }} type="submit"  variant="contained"  >Send</Button>
                </form>
                <Typography sx={{color:'#008D6F',fontSize:{xl:"20px",lg:"20px",md:"18px",sm:"14px",xs:"13px"}, fontWeight:'500', marginTop:'40px'}}>“Password Reset link has been Send to your Registered email ID”</Typography>
            </Box>
        </Box>

        
        <footer width={{xl:"100%",lg:"100%",md:"100%",sm:"100%",xs:"100%"}} >
            <Box sx={{ width:{xl:"100%",lg:"100%",md:"100%",sm:"100%",xs:"100%"},background:'#1746A2',height:"80px",marginTop:{xl:"140px",lg:"140px",md:"100px",sm:"",xs:"10%"}}}   display='flex'  >
            <Typography sx={{marginTop:"40px", width:{xl:'400px',lg:'400px',md:'300px', sm:'250px',xs:'220px'} ,color:'#FFFFFF', fontSize:{xl:"18pxpx",lg:"18px",md:"16px",sm:"14px",xs:"12px"}, fontWeight:{xl:"400",lg:"400",md:"300",sm:"400",xs:"300px"},marginLeft:{xl:"30px",lg:"20px",md:"20px",sm:"10px",xs:"10px"} }}>&copy; 2020 VAJRA, All Rights Reserved</Typography>
            <Typography sx={{marginTop:{xl:"40px",lg:"40px",md:"40px",sm:"40px",xs:"40px"},color:'#FFFFFF', fontSize:{xl:"18px",lg:"18px",md:"16px",sm:"14px",xs:"12px"}, fontWeight:{xl:"400",lg:"400",md:"400",sm:"400",xs:"300"},marginLeft:{xl:"800px",lg:"500px",md:"350px",sm:"120px",xs:"80px"} }}>Terms & conditions | FAQ’s</Typography>
        </Box>
        </footer>    
           </Box>
     );
}
 
export default Forgot;