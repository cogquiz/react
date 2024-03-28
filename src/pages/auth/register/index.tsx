import React from 'react'
import Image from 'next/image'
import Layout from '@/components/layout'
import { Box, Container } from '@mui/material'
import authImg from '../../../assets/auth-img.png'
import RegisterForm from '@/components/registerForm'


const Register = () => {
  return (
    <Layout title="Register | CozQuiz" >
      <Container className='main-container'>
        <Box className="auth-container">
          <RegisterForm />
          <Image height={350} width={650} src={authImg.src} alt="login" />
        </Box>
      </Container>
    </Layout>
  )
}

export default Register