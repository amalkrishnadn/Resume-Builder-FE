import React from "react";
import { Box, Typography, Grid, Paper, Button } from "@mui/material";
import { FaFileAlt, FaFilePdf } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CgEnter } from "react-icons/cg";

const ResumeGenerate = () => {
  return (
    <Box sx={{ padding: "50px" }}>
      <Typography variant="h4" align="center" fontWeight="bold" mb={6}>
        Create an ATS Friendly Resume in Minutes with AI
      </Typography>

      <Grid container spacing={8} justifyContent="center">
        <Grid size={{ xs: 12, md: 5 }} sx={{ ml: 13, mt: 10 }}>
          <Paper sx={{ padding: "60px", textAlign: "center" }}>
            <FaFileAlt size={60} color="blue" />

            <Typography variant="h5" fontWeight="bold" mt={2}>
              Add Your Details
            </Typography>

            <Typography mt={2}>
              Our AI will generate Skills & Summary
            </Typography>

            <Typography variant="h6" fontWeight="bold" mt={3}>
              Step 1
            </Typography>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 5 }} sx={{ mt: 10 }}>
          <Paper sx={{ padding: "60px", textAlign: "center" }}>
            <FaFilePdf size={60} color="red" />

            <Typography variant="h5" fontWeight="bold" mt={2}>
              Download your Resume
            </Typography>

            <Typography mt={2}>
              Download CV as PDF and start applying
            </Typography>

            <Typography variant="h6" fontWeight="bold" mt={3}>
              Step 2
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 6,
        }}
      >
        <Button
          variant="contained"
          component={Link}
          to={"/resume-details"}
          sx={{
            backgroundColor: "#80502f",
            mt: 5,
          }}
        >
          LET'S START
        </Button>
      </Box>
    </Box>
  );
};

export default ResumeGenerate;
