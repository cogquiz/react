import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link'
import { Box, Container, IconButton, InputAdornment, OutlinedInput, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import SendIcon from '../assets/right-arrow.png'
import {
    Visibility, VisibilityOff
} from '@mui/icons-material'
import { useDispatch } from 'react-redux';
import { userSignupThunk } from '@/redux/feature/auth/authThunk';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';
import { AppDispatch } from '@/redux/app/store';
import * as Yup from "yup";
import { useFormik } from 'formik'
import CustomButton from '@/common-components/CustomButton';


const RegisterForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch<AppDispatch>()
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)

    const handleClickShowPassword = () => setShowPassword((show) => !show)

    const SignupValidationSchema = Yup.object({
        email: Yup.string().required("Email or Username required"),
        name: Yup.string().required("Password is required"),
        role: Yup.string().required("Role is required"),
        password: Yup.string().required("Password is required"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password')], 'Passwords must match')
            .required("Confirm Password is required"),
    })

    const formik = useFormik({
        initialValues: {
            email: "",
            name: "",
            // role: 2,
            role: "",
            password: "",
            confirmPassword: ""
        } as unknown as SignUpDetails,
        validateOnChange: true,
        validationSchema: SignupValidationSchema,
        enableReinitialize: true,
        // regular signup
        onSubmit: async (values: SignUpDetails) => {
            setIsLoading(true)
            const signupValue: SignUpDetails = {
                email: values.email,
                name: values.name,
                password: values.password,
                role: values.role,
                confirmPassword: values.confirmPassword,
            };
            dispatch(userSignupThunk(signupValue)).then((response: any) => {
                if (response?.payload) {
                    setIsLoading(false)
                    if (response?.payload?.data) {
                        if (response?.payload?.data?.message) {
                            toast.success(response?.payload?.data?.message);
                            formik.resetForm()
                        }
                        router.push("/auth/login");
                    }
                }
            });
        },
    });

    return (
        <Container className='form-container'>
            <Box className="form-details">
                <Typography className='auth-title' variant="h3">
                    Signup
                </Typography>
                <Typography variant="body1" textAlign={"center"}>
                    Don’t have an account? <Link className='auth-link' href={"/auth/login"}> Login </Link>
                </Typography>

                <OutlinedInput className="auth-input"
                    startAdornment={
                        <InputAdornment position="start">
                            <EmailIcon />
                        </InputAdornment>
                    }
                    {...formik.getFieldProps("email")}
                    placeholder="Enter Your Email" name="email"
                    error={formik.touched.email && Boolean(formik.errors.email)}
                />

                <OutlinedInput className="auth-input" startAdornment={
                    <InputAdornment position="start">
                        <PersonIcon />
                    </InputAdornment>
                }
                    {...formik.getFieldProps("name")}
                    placeholder="Enter Username" name="name"
                    error={formik.touched.name && Boolean(formik.errors.name)}
                />

                <ToggleButtonGroup
                    color="primary"
                    value={formik.values.role}
                    exclusive
                    onChange={(e: any) => {
                        formik.setFieldValue("role", e.target.value)
                    }}
                >
                    <ToggleButton fullWidth style={{
                        borderColor: "#c4c4c4",
                        borderRadius: "6px 0 0 6px"
                    }} value="User">User</ToggleButton>
                    <ToggleButton fullWidth style={{
                        borderColor: "#c4c4c4",
                        borderRadius: "0 6px 6px 0"
                    }} value="Provider">Provider</ToggleButton>
                </ToggleButtonGroup>

                <OutlinedInput className="auth-input" type={showPassword ? 'text' : 'password'} startAdornment={
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
                    {...formik.getFieldProps("password")}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    placeholder="Enter Your Password" name="password" />

                <OutlinedInput className="auth-input" type={showPassword ? 'text' : 'password'} startAdornment={
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
                    {...formik.getFieldProps("confirmPassword")}
                    error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                    placeholder="Enter Confirm Password" name="confirmPassword" />

                <CustomButton className="send-btn" disabled={isLoading} loadingPosition={"end"} btnText={"Sign Up"} endIcon={<Image height={18} width={18} src={SendIcon.src} alt={"send-icon"} />} onBtnClick={formik.handleSubmit} />

            </Box>
        </Container>
    )
}

export default RegisterForm