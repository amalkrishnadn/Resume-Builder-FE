import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import LogoImg from "../assets/bussinesman.jpeg";
import { Link } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import Stack from "@mui/material/Stack";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ backgroundColor: "green" }} position="static">
        <Toolbar sx={{ minHeight: "80px"}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img style={{ width: "70px" }} src={LogoImg} alt="logo image" />
          </IconButton>
          <Typography variant="h6" component={Link} to={'/'} sx={{ flexGrow: 1 ,textDecoration: "none", color: "white" }}>
            Resume Builder
          </Typography>
          <Stack direction={"row"} sx={{ gap: 6 }}>
            <Typography
              sx={{ textDecoration: "none", color: "white" }}
              variant="h6"
              component={Link}
              to={"/all-resumes"}
            >
              All resumes
            </Typography>
            <Typography
              sx={{ textDecoration: "none", color: "white" }}
              variant="h6"
              component={Link}
              to={"/all-downloads"}
            >
              All downloads
            </Typography>
            <Tooltip
              title="An AI rBuilder suggest job-specific keywords, professional summaries, and skill recommendations to make the resume more effective and ATS (Applicant Tracking System) friendly. The main goal of the AI Powered Resume Builder is to simplify the resume creation process and help job seekers build professional, well-structured resumes in a few minutes. Users can select templates, edit content, preview their resume, and download it in formats such as PDF."
              placement="bottom-start"
              sx={{ textDecoration: "none", color: "white" }}
            >
              <Button>About Us</Button>
            </Tooltip>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
