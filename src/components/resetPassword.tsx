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
import { addNewParticipantThunk, resetPasswordThunk } from '@/redux/feature/user-profile/userProfileThunk';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/app/store';
import toast from 'react-hot-toast';

interface ResetPasswordDetails {
  oldPassword: string;
  newPassword: string;
}

const ResetPassword = () => {
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const dispatch = useDispatch<AppDispatch>()
  const userId = localStorage.getItem("userId")
  const [isLoading, setIsLoading] = useState(false)

  const handleClickShowOldPassword = () => setShowOldPassword((show) => !show)
  const handleClickShowNewPassword = () => setShowNewPassword((show) => !show)

  const ResetPasswordValidationSchema = Yup.object({
    oldPassword: Yup.string().required("User Name is required"),
    newPassword: Yup.string().required("Password is required").notOneOf([Yup.ref('oldPassword')], 'New password must be different from old password'),
  })

  const formikResetPassword = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: ""
    } as unknown as ResetPasswordDetails,
    validateOnChange: true,
    validationSchema: ResetPasswordValidationSchema,
    enableReinitialize: true,
    onSubmit: async (values: ResetPasswordDetails) => {
      setIsLoading(true)
      let finalRes = {
        userId: userId,
        ...values
      }
      dispatch(resetPasswordThunk(finalRes)).then((response: any) => {
        if (response?.payload?.data) {
          toast.success(response?.payload?.data.message)
          formikResetPassword.resetForm()
        }
      })
      setIsLoading(false)
    }
  });

  return (
    <Box className="add-participant-wrap">
      <Box className="participant-details">
        <Box className="participant-form">
          <Box className="form-details">
            <Typography className='add-participant-title' variant="h3">
              Reset password
            </Typography>
            <OutlinedInput className="participant-input" type={showOldPassword ? 'text' : 'password'} startAdornment={
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            }
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowOldPassword}
                    edge="end"
                  >
                    {showNewPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              {...formikResetPassword.getFieldProps("oldPassword")}
              error={formikResetPassword.touched.oldPassword && Boolean(formikResetPassword.errors.oldPassword)}
              placeholder="Enter Your Old Password" name="oldPassword" />
            <OutlinedInput className="participant-input" type={showNewPassword ? 'text' : 'password'} startAdornment={
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            }
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowNewPassword}
                    edge="end"
                  >
                    {showNewPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              {...formikResetPassword.getFieldProps("newPassword")}
              error={formikResetPassword.touched.newPassword && Boolean(formikResetPassword.errors.newPassword)}
              placeholder="Enter Your New Password" name="newPassword" />
          </Box>
        </Box>
        <Box textAlign={"end"}>
          <CustomButton onBtnClick={formikResetPassword.submitForm} className="save-profile" btnText="Reset password" disabled={isLoading} />
        </Box>
      </Box>
    </Box>
  )
}

export default ResetPassword;
