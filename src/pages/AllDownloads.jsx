import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { getResume } from '../services/allAPI'
import { Box, Typography } from '@mui/material'
import Preview from '../components/Preview'
import Grid from '@mui/material/Grid'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
const AllDownloads = () => {

  const[resumeDatas,setResumeDatas]=useState([])

  useEffect(()=>{
    getData()
  },[])

  const getData=async()=>{
    try {
      let apiResponse=await getResume()
      if(apiResponse.status==200)
      {
        setResumeDatas(apiResponse.data)
      }
      else
      {
        toast.error("Api call failed")
      }
    } catch (error) {
      console.log(error)
      toast.error("Api call failed")
    }
  }

  return (
    <Box>
      {
        resumeDatas?.length > 0
          ? <Box>
            <Typography variant="h4" sx={{textAlign:'center',p:4}}>All Downloads</Typography>
              <Grid sx={{p:5}} spacing={5} container>
                {resumeDatas.map((eachResume,index) => (
               <Grid size={6}>
                <Button sx={{ml:4}} as={Link} to={`/resumes/${eachResume.id}`}>
                  View
                </Button>
                 <Preview key={index} resumeData={eachResume} />
               </Grid>
              ))}
              </Grid>
            </Box>
          : <Typography>no resume available</Typography>
      }
    </Box>
  )
}

export default AllDownloads