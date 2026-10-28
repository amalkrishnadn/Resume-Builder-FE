import React, { useEffect, useState } from "react";
import {
  Box,
  TextField,
  Typography,
  InputAdornment,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import { FaSearch } from "react-icons/fa";
import {
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight,
} from "@mui/icons-material";
import { toast } from "react-toastify";
import { deleteResume, getResume } from "../services/allAPI";
import { IoTrashBin } from "react-icons/io5";
import { Button } from "@mui/material";
import { useMemo } from "react";
import { Link } from "react-router-dom";
const AllResumes = () => {
  const [resumeDatas, setResumeDatas] = useState([]);
  const [duplicateDatas, setDuplicateDatas] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    getResumeDatas();
  }, []);

  const getResumeDatas = async () => {
    try {
      let apiResponse = await getResume();
      console.log(apiResponse);
      setResumeDatas(apiResponse.data);
      setDuplicateDatas(apiResponse.data);
    } catch (error) {
      console.log(error);
      toast.error("failed to get resume data");
    }
  };

  const onDeleteClick = async (id) => {
    try {
      let apiResponse = await deleteResume(id);
      if (apiResponse.status == 200) {
        toast.success("succesfully deleted");
      } else {
        toast.error("failed to delete resume");
      }
    } catch (error) {
      console.log(error);
      toast.error("failed to delete resume");
    }
  };
  const onSearchClick = useMemo(() => {
    let filteredData = duplicateDatas.filter((eachData) =>
      eachData.jobTitle.toLowerCase().includes(searchValue.toLowerCase()),
    );
    setResumeDatas(filteredData);
  }, [searchValue]);
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        px: { xs: 2, md: 7 },
        py: 4,
        boxSizing: "border-box",
        bgcolor: "#fff",
      }}
    >
      <Typography
        variant="h3"
        align="center"
        sx={{
          fontWeight: 800,
          color: "#25282b",
          mb: 4,
          fontSize: { xs: "30px", md: "52px" },
        }}
      >
        All Saved Resumes
      </Typography>

      <Typography
        sx={{
          fontSize: { xs: "15px", md: "21px" },
          lineHeight: 1.5,
          fontWeight: 400,
          color: "#252525",
          mb: 7,
        }}
      >
        All resumes submitted to the platform in one place, allowing
        administrators or recruiters to efficiently view, search, filter, and
        manage candidate profiles. It provides a quick overview of available
        candidates and their key details, making the recruitment and
        candidate-selection process more organized and efficient.
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          mb: 5,
        }}
      >
        <TextField
          onChange={(e) => setSearchValue(e.target.value)}
          fullWidth
          placeholder="Search Candidate by their Job Roles"
          variant="outlined"
          size="small"
          sx={{
            maxWidth: 910,
            "& .MuiOutlinedInput-root": {
              height: 54,
              borderRadius: 2,
              fontSize: 18,
            },
          }}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <FaSearch
                    style={{
                      fontSize: "22px",
                      color: "#25282b",
                    }}
                  />
                </InputAdornment>
              ),
            },
          }}
        />
      </Box>

      <TableContainer
        component={Paper}
        elevation={0}
        sx={{
          width: "100%",
          overflowX: "auto",
          borderRadius: 0,
          borderBottom: "1px solid #dee2e6",
        }}
      >
        <Table sx={{ minWidth: 600 }}>
          <TableHead>
            <TableRow
              sx={{
                backgroundColor: "#212529",
              }}
            >
              <TableCell
                sx={{
                  color: "#fff",
                  fontWeight: 800,
                  fontSize: 20,
                  width: "12%",
                  py: 1.5,
                }}
              >
                #
              </TableCell>

              <TableCell
                sx={{
                  color: "#fff",
                  fontWeight: 800,
                  fontSize: 20,
                  width: "36%",
                  py: 1.5,
                }}
              >
                Resume
              </TableCell>

              <TableCell
                align="center"
                sx={{
                  color: "#fff",
                  fontWeight: 800,
                  fontSize: 20,
                  width: "36%",
                  py: 1.5,
                }}
              >
                Job Role
              </TableCell>

              <TableCell
                align="center"
                sx={{
                  color: "#fff",
                  fontWeight: 800,
                  fontSize: 20,
                  width: "16%",
                  py: 1.5,
                }}
              >
                ...
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {resumeDatas?.map((eachData, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>

                <TableCell>{eachData?.fullName}</TableCell>

                <TableCell align="center">{eachData?.jobTitle}</TableCell>
                <TableCell align="center">
                  <Button onClick={() => onDeleteClick(eachData.id)}>
                    {" "}
                    <IoTrashBin />
                  </Button>
                  <Button as={Link} to={`/resumes/${eachData.id}`}>
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 0.5,
          mt: 5,
        }}
      >
        <IconButton
          disabled
          sx={{
            border: "1px solid #8a8d91",
            borderRadius: 1.5,
            width: 58,
            height: 53,
          }}
        >
          <KeyboardDoubleArrowLeft fontSize="large" />
        </IconButton>

        <Typography
          sx={{
            fontSize: 18,
            color: "#222",
            whiteSpace: "nowrap",
          }}
        >
          1 of 0
        </Typography>

        <IconButton
          disabled
          sx={{
            border: "1px solid #8a8d91",
            borderRadius: 1.5,
            width: 58,
            height: 53,
          }}
        >
          <KeyboardDoubleArrowRight fontSize="large" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default AllResumes;
