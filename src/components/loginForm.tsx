import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CustomButton from '@/common-components/CustomButton'
import { Box, Checkbox, Container, FormControlLabel, IconButton, InputAdornment, OutlinedInput, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import SendIcon from '../assets/right-arrow.png'
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { useDispatch } from 'react-redux'
import { userLoginThunk } from '@/redux/feature/auth/authThunk'
import toast from 'react-hot-toast'
import { AppDispatch } from '@/redux/app/store'
import * as Yup from "yup";
import { useFormik } from 'formik'


const LoginForm = () => {
    const router = useRouter()
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch<AppDispatch>()
    const [isLoading, setIsLoading] = useState(false)

    const handleClickShowPassword = () => setShowPassword((show) => !show)

    const LoginValidationSchema = Yup.object({
        emailOrName: Yup.string().required("Email or Username required"),
        password: Yup.string().required("Password is required"),
    });

    const formik = useFormik({
        initialValues: {
            emailOrName: "",
            password: "",
            remember: false
        } as unknown as LoginDetails,
        validateOnChange: true,
        validationSchema: LoginValidationSchema,
        enableReinitialize: true,
        // regular login
        onSubmit: async (values: LoginDetails) => {
            setIsLoading(true)
            const loginValue: LoginDetails = {
                emailOrName: values.emailOrName,
                password: values.password,
            };
            dispatch(userLoginThunk(loginValue)).then((response: any) => {
                if (response?.payload) {
                    setIsLoading(false)
                    if (response?.payload?.data) {
                        localStorage.setItem(
                            "authToken",
                            response?.payload?.data?.token
                        );
                        localStorage.setItem(
                            "userId",
                            response?.payload?.data?.id
                        );
                        localStorage.setItem(
                            "providerId",
                            response?.payload?.data?.providerId
                        );
                        localStorage.setItem(
                            "userDetail",
                            JSON.stringify(response?.payload?.data)
                        )
                        if (response?.payload?.data?.role === "Admin") {
                            router.push("/admin");
                        } else {
                            router.push("/profile?tab=user-profile");
                        }
                        if (response?.payload?.message) {
                            toast.success(response?.payload?.message);
                            formik.resetForm()
                        }
                    }
                }
            });
        },
    });


    return (
        <Container className='form-container'>
            <Box className="form-details">
                <Typography className='auth-title' variant="h3">
                    Login
                </Typography>
                <Typography variant="body1" textAlign={"center"}>
                    Don’t have an account? <Link className='auth-link' href={"/auth/register"}> Sign up </Link>
                </Typography>

                <OutlinedInput
                    className='auth-input'
                    startAdornment={
                        <InputAdornment position="start">
                            <EmailIcon />
                        </InputAdornment>
                    }
                    {...formik.getFieldProps("emailOrName")}
                    placeholder="Enter Your Email / Username"
                    name="emailOrName"
                    error={formik.touched.emailOrName && Boolean(formik.errors.emailOrName)}

                />


                <OutlinedInput
                    className='auth-input'
                    startAdornment={
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
                    type={showPassword ? 'text' : 'password'} placeholder="Enter Your Password"
                    {...formik.getFieldProps("password")}
                    name="password"
                    error={formik.touched.password && Boolean(formik.errors.password)}
                />


                <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                    <FormControlLabel control={<Checkbox
                        name='remember' />}
                        {...formik.getFieldProps("remember")}
                        label="Remember me" />
                    <Link style={{
                        color: "#4181E0"
                    }} href={"/forget-password"}>Forget password?</Link>
                </Box>
                <CustomButton className="send-btn" onBtnClick={formik.handleSubmit} disabled={isLoading} loadingPosition={"end"} btnText={"Login"} endIcon={<Image height={18} width={18} src={SendIcon.src} alt={"send-icon"} />} />
            </Box>
        </Container>
    )
}

export default LoginForm