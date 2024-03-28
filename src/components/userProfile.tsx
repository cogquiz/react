import React, { useEffect, useRef, useState } from 'react'
import CustomButton from '@/common-components/CustomButton'
import { Avatar, Box, Button, Typography } from '@mui/material'
import { DropzoneArea } from 'material-ui-dropzone'
import EditIcon from '../assets/edit-icon.png'
import DeleteIcon from '../assets/delete-icon.png'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/app/store'

const UserProfile = (props: any) => {
  const [profileImg, setProfileImg] = useState(null)
  const fileInputRef = useRef(null)
  const [userAge, setUserAge] = useState(0)

  const userDetails = useSelector(
    (state: RootState) => state?.userProfile?.userDetails
  );
  
  useEffect(() => {
    let birthDate = userDetails?.birth_date
    let birth = new Date(birthDate);
    let current = new Date();
    let age = current.getFullYear() - birth.getFullYear();
    if (current.getMonth() < birth.getMonth() || (current.getMonth() === birth.getMonth() && current.getDate() < birth.getDate())) {
      age--;
    }
    setUserAge(age);
  }, [userDetails])

  return (
    <Box className="profile-outer-main-box-wrap">
      <Box className="profile-details">
        <Box className="profile-section">
          <Box className="profile-image-section">
            <Typography className='title' variant='subtitle1'>Profile Picture</Typography>
            <Box className="profile-update">
              <Avatar className='profile-image' />
              <Image width={20} height={20} src={EditIcon.src} alt="edit" />
              <Image width={20} height={20} src={DeleteIcon.src} alt="delete" />
            </Box>
          </Box>
          <Box className="profile-details-section">
            <Typography className='title' >User name: <span className='details-value'>{userDetails?.name}</span></Typography>
            <Typography className='title'>Email: <span className='details-value'>{userDetails?.email}</span></Typography>
            <Typography className='title' >Age: <span className='details-value'>{userAge}</span></Typography>
          </Box>
        </Box>
        <Box className="upload-result">
          <Typography className='title' >Upload Result</Typography>
          <DropzoneArea
            onChange={(files) => console.log('Files:', files)}
            dropzoneText='Click or drag file to this area to upload'
          />
          <Box className="button-class">
            <CustomButton className="upload-button" btnText="Upload" />
            <Button size="medium">Cancel</Button>
          </Box>
        </Box>
        <Box className="provider-code-wrap">
          <Typography className='title'>Provider Code</Typography>
          <Box className="provider-code">c7a5014f-aa23-4634-8e82-1f98fb337fb8</Box>
        </Box>
        <Box textAlign={"end"}>
          <CustomButton className="save-profile" btnText="Save Profile" />
        </Box>
      </Box>
    </Box >

  )
}

export default UserProfile