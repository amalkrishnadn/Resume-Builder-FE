import React from "react";
import { Box, Paper, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import ResumeImg from "../assets/resume.png";
const Home = () => {
  return (
    <Box>
      <Box
        sx={{
          height: "100vh",
          width: "100%",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          backgroundImage:
            "url('https://ai-resume-builder-may26.vercel.app/landing.png')",

          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <Paper
          elevation={0}
          sx={{
            width: "50%",
            padding: 5,
            borderRadius: 2,
            textAlign: "center",

            backgroundColor: "rgba(0, 0, 0, 0.4)",
            color: "white",
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: "bold",
            }}
          >
            Designed To Get Hired. Your Skills, Your Story, Your Next Job - All
            In One.
          </Typography>

          <Button
            component={Link}
            to="/resume"
            variant="contained"
            sx={{
              mt: 3,
              backgroundColor: "rgb(117, 88, 70)",

              "&:hover": {
                backgroundColor: "rgb(95, 70, 55)",
              },
            }}
          >
            Make your Resume with AI
          </Button>
        </Paper>
      </Box>
      <Box
        sx={{
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            component="h1"
            align="center"
            sx={{
              fontWeight: "bold",
              mb: 8,
            }}
          >
            What's AI rBuilder
          </Typography>

          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                sx={{
                  textAlign: "justify",
                  mb: 3,
                  lineHeight: 1.8,
                }}
              >
                An AI rBuilder is a web application that helps users create
                professional resumes quickly and efficiently using artificial
                intelligence. Traditional resume creation can be time-consuming
                and difficult, especially for freshers who may not know the
                correct format or keywords required for modern recruitment
                systems.
              </Typography>

              <Typography
                sx={{
                  textAlign: "justify",
                  mb: 3,
                  lineHeight: 1.8,
                }}
              >
                The system can suggest job-specific keywords, professional
                summaries, and skill recommendations to make the resume more
                effective and ATS (Applicant Tracking System) friendly.
              </Typography>

              <Typography
                sx={{
                  textAlign: "justify",
                  mb: 3,
                  lineHeight: 1.8,
                }}
              >
                The main goal of the AI rBuilder is to simplify the resume
                creation process and help job seekers build professional,
                well-structured resumes in a few minutes. Users can edit
                content, preview their resume, and download it in formats such
                as PDF.
              </Typography>

              <Typography
                sx={{
                  textAlign: "justify",
                  lineHeight: 1.8,
                }}
              >
                This type of system is especially useful for students & fresh
                graduates, who want to create high-quality resumes that increase
                their chances of getting shortlisted for job interviews.
              </Typography>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                component="img"
                src={ResumeImg}
                alt="resume"
                sx={{
                  width: "100%",
                  height: 550,
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        sx={{
          height: "80vh",
          backgroundImage: "url('https://ai-resume-builder-may26.vercel.app/team.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />
      <Box sx={{ my: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            component="h1"
            align="center"
            sx={{
              mb: 6,
            }}
          >
            Testimony
          </Typography>

          <Grid container spacing={6} alignItems="center">
            {/* Empty space */}
            <Grid size={{ xs: 0, lg: 1 }} />

            {/* Text */}
            <Grid size={{ xs: 12, lg: 5 }}>
              <Typography
                variant="h5"
                sx={{
                  mb: 2,
                  fontWeight: "bold",
                }}
              >
                Trusted by professionals worldwide.
              </Typography>

              <Typography
                sx={{
                  textAlign: "justify",
                  mb: 2,
                }}
              >
                At rBuilder, we don't just help you create résumés — we help you
                land the job. Whether you're a seasoned professional or just
                starting out, our tools are designed to get results.
              </Typography>

              <Typography
                sx={{
                  textAlign: "justify",
                  mb: 2,
                }}
              >
                In fact, users who used rBuilder reported getting hired an
                average of 48 days faster.
              </Typography>

              <Typography
                sx={{
                  textAlign: "justify",
                }}
              >
                Join thousands of job-seekers who’ve fast-tracked their careers
                with a résumé that truly stands out
              </Typography>
            </Grid>

            <Grid size={{ xs: 0, lg: 1 }} />

            <Grid size={{ xs: 12, lg: 5 }}>
              <Grid container>
                <Grid size={3}>
                  <Box
                    component="img"
                    src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png"
                    alt="user"
                    sx={{ width: "100%", p: 1 }}
                  />
                </Grid>

                <Grid size={3}>
                  <Box
                    component="img"
                    src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid7.png"
                    alt="user"
                    sx={{ width: "100%", p: 1 }}
                  />
                </Grid>

                <Grid size={3}>
                  <Box
                    component="img"
                    src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid2.png"
                    alt="user"
                    sx={{ width: "100%", p: 1 }}
                  />
                </Grid>

                <Grid size={3}>
                  <Box
                    component="img"
                    src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid3.png"
                    alt="user"
                    sx={{ width: "100%", p: 1 }}
                  />
                </Grid>

                <Grid size={3}>
                  <Box
                    component="img"
                    src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg"
                    alt="user"
                    sx={{ width: "100%", p: 1 }}
                  />
                </Grid>

                <Grid size={3}>
                  <Box
                    component="img"
                    src="https://tse3.mm.bing.net/th/id/OIP.2i5UaEHaQM3PYAYXQyM1AAAAAA?pid=Api&P=0&h=180"
                    alt="user"
                    sx={{ width: "100%", p: 1 }}
                  />
                </Grid>

                <Grid size={3}>
                  <Box
                    component="img"
                    src="https://img.freepik.com/premium-photo/girl-happy-portrait-user-profile-by-ai_1119669-10.jpg"
                    alt="user"
                    sx={{ width: "100%", p: 1 }}
                  />
                </Grid>

                <Grid size={3}>
                  <Box
                    component="img"
                    src="https://writestylesonline.com/wp-content/uploads/2018/11/Three-Statistics-That-Will-Make-You-Rethink-Your-Professional-Profile-Picture-1024x1024.jpg"
                    alt="user"
                    sx={{ width: "100%", p: 1 }}
                  />
                </Grid>

                <Grid size={3}>
                  <Box
                    component="img"
                    src="https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png"
                    alt="user"
                    sx={{ width: "100%", p: 1 }}
                  />
                </Grid>

                <Grid size={3}>
                  <Box
                    component="img"
                    src="https://tse3.mm.bing.net/th/id/OIP.wPWx97qT9JbAIeh4t6TDVQHaHa?pid=Api&P=0&h=180"
                    alt="user"
                    sx={{ width: "100%", p: 1 }}
                  />
                </Grid>

                <Grid size={3}>
                  <Box
                    component="img"
                    src="https://img.freepik.com/premium-photo/design-professional-profile-picture-with-sharp-focus-natural-lighting-clean-neutral-background_880763-20280.jpg?w=1060"
                    alt="user"
                    sx={{ width: "100%", p: 1 }}
                  />
                </Grid>

                <Grid size={3}>
                  <Box
                    component="img"
                    src="https://tse2.mm.bing.net/th/id/OIP.4oYqJqInuQd2TAlPPdggLgHaHa?pid=Api&P=0&h=180"
                    alt="user"
                    sx={{ width: "100%", p: 1 }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
