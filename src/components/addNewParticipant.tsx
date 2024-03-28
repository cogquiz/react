import React, { useState } from 'react'
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import CustomButton from '@/common-components/CustomButton'
import { Box, Checkbox, FormControlLabel, IconButton, InputAdornment, OutlinedInput, Typography } from '@mui/material'
import LockIcon from '@mui/icons-material/Lock';
import {
  Visibility, VisibilityOff
} from '@mui/icons-material'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { addNewParticipantThunk } from '@/redux/feature/user-profile/userProfileThunk';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/app/store';
import toast from 'react-hot-toast';


interface AddParticipantDetails {
  email: string;
  userName: string;
  password: string;
  viewResult: boolean;
  providerId?: string | null;
}

const AddNewParticipant = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch<AppDispatch>()
  const userId = localStorage.getItem("providerId")
  const [isLoading, setIsLoading] = useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const AddParticipantValidationSchema = Yup.object({
    email: Yup.string().required("Email is required"),
    userName: Yup.string().required("User Name is required"),
    password: Yup.string().required("Password is required"),
  })

  console.log('isLoading', isLoading)

  const formikParticipant = useFormik({
    initialValues: {
      email: "",
      userName: "",
      password: "",
      viewResult: false
    } as unknown as AddParticipantDetails,
    validateOnChange: true,
    validationSchema: AddParticipantValidationSchema,
    enableReinitialize: true,
    onSubmit: async (values: AddParticipantDetails) => {
      setIsLoading(true)
      const payload: AddParticipantDetails = {
        email: values.email,
        userName: values.userName,
        password: values.password,
        viewResult: values.viewResult,
        providerId: userId
      };
      dispatch(addNewParticipantThunk(payload)).then((response: any) => {
        if (response?.payload?.data) {
          toast.success(response?.payload?.data.message)
          formikParticipant.resetForm()
          setIsLoading(false)
        }
      });
    }
  });

  return (
    <Box className="add-participant-wrap">
      <Box className="participant-details">
        <Box className="participant-form">
          <Box className="form-details">
            <Typography className='add-participant-title' variant="h3">
              Create New User
            </Typography>
            <OutlinedInput className="participant-input"
              startAdornment={
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              }
              {...formikParticipant.getFieldProps("email")}
              placeholder="Enter User Email" name="email"
              error={formikParticipant.touched.email && Boolean(formikParticipant.errors.email)}
            />

            <OutlinedInput className="participant-input" startAdornment={
              <InputAdornment position="start">
                <PersonIcon />
              </InputAdornment>
            }
              {...formikParticipant.getFieldProps("userName")}
              placeholder="Enter Username" name="userName"
              error={formikParticipant.touched.userName && Boolean(formikParticipant.errors.userName)}
            />

            <OutlinedInput className="participant-input" type={showPassword ? 'text' : 'password'} startAdornment={
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            }
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              {...formikParticipant.getFieldProps("password")}
              error={formikParticipant.touched.password && Boolean(formikParticipant.errors.password)}
              placeholder="Enter Your Password" name="password" />
            <FormControlLabel control={<Checkbox
              name='viewResult' />}
              checked={formikParticipant.values.viewResult}
              {...formikParticipant.getFieldProps("viewResult")}
              label="Allow User View Results" />
          </Box>
        </Box>
        <Box textAlign={"end"}>
          <CustomButton onBtnClick={formikParticipant.submitForm} className="save-profile" btnText="Create User" disabled={isLoading} />
        </Box>
      </Box>
    </Box>
  )
}

export default AddNewParticipant;
