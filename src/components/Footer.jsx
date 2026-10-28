import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { MdAttachEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Stack } from "@mui/material";


const Footer = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ backgroundColor: "black",height:"320px" }} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Box>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1,mt:'20px',fontSize:"25px" }}>
              Resume Builder
              <Typography sx={{ width: "50%",fontSize:'16px',mt:'15px',textAlign:"justify" }} variant="h6" component="div">
                An AI rBuilder suggest job-specific keywords, professional
                summaries, and skill recommendations to make the resume more
                effective and ATS (Applicant Tracking System) friendly. The main
                goal of the AI Powered Resume Builder is to simplify the resume
                creation process and help job seekers build professional,
                well-structured resumes in a few minutes.
              </Typography>
            </Typography>
            <Typography sx={{ml:70,mt:4}}>Designed & built with ❤️ using React</Typography>
          </Box>
          <Box sx={{ width: "100%" }}>
            <Typography sx={{fontSize:"25px"}}>Contact Us</Typography>
            <Typography sx={{mt:1}}>
              <MdAttachEmail />
              resumebuilder@gmail.com
            </Typography>
            <Typography sx={{mt:1}}>
              <IoCallSharp />
              9087654321
            </Typography>
            <Typography sx={{ mt: 2 }}>Connect With Us</Typography>
            <Stack direction={"row"} sx={{ gap: 1 ,mt:1 }}>
              <Typography >
                <FaInstagram />
              </Typography>
              <Typography>
                <FaFacebookSquare />
              </Typography>
              <Typography>
                <FaWhatsapp />
              </Typography>
            </Stack>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Footer;