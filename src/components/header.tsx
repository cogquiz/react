import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container'
import Button from '@mui/material/Button';
import Logo from "../assets/logo/logo.png";
import LoginIcon from "../assets/login-icon.png"
import LogoutIcon from "../assets/logout.png"
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/app/store';

const Header = () => {
  const router = useRouter()
  const profileData = useSelector((state: RootState) => state.auth?.data?.data?.data)
  const [user, setUser] = useState<any>(profileData)
  const [userRole, setUserRole] = useState<any>()

  const handleLogout = () => {
    localStorage.clear()
    router.push('/')
  }
  useEffect(() => {
    const userEmail = localStorage.getItem("authToken")
    setUser(userEmail)
    const fetchRole: any = localStorage.getItem("userDetail")
    setUserRole(JSON.parse(fetchRole))
  }, [])

  return (
    <AppBar className="fixed-header-wrap">
      <Container className="header-container">
        <Box className="inner-header-wrap">
          <Box className="logo-left-wrap">
            <Link href="/"><Image height={100} width={200} src={Logo.src} alt="Logo" /></Link>
          </Box>
          {userRole?.role !== "Admin" &&
            <Box className="menu-list-wrap">
              <Link className={`menu-title-list-wrap ${router.asPath === '/' ? 'active-nav' : ''}`} href="/">Home</Link>
              <Link className={`menu-title-list-wrap ${router.asPath.includes('about') ? 'active-nav' : ''}`} href="/#about">About</Link>
              <Link className={`menu-title-list-wrap ${router.asPath.includes('test-category') ? 'active-nav' : ''}`} href="/#test-category">Test Categories</Link>
              <Link className={`menu-title-list-wrap ${router.asPath.includes('available-test') ? 'active-nav' : ''}`} href="/#available-test">Available Tests</Link>
              <Link className={`menu-title-list-wrap ${router.asPath.includes('custom-test') ? 'active-nav' : ''}`} href="/#custom-test">Custom Tests</Link>
              <Link className={`menu-title-list-wrap ${router.asPath.includes('desktop-test') ? 'active-nav' : ''}`} href="/#desktop-test">Desktop Tests</Link>
              <Link className={`menu-title-list-wrap ${router.asPath.includes('connect') ? 'active-nav' : ''}`} href="/#connect">Connect</Link>
              {
                user &&
                <Link className={`menu-title-list-wrap ${router.asPath.includes('profile') ? 'active-nav' : ''}`} href="/profile?tab=user-profile">Profile</Link>
              }
            </Box>
          }
          {!user ? <Button className='login-btn-warp' onClick={() => router.push('/auth/login')} >
            <Image width={19} height={19} src={LoginIcon.src} alt="login" /> Login
          </Button> :
            <Button className='logout-btn-warp' onClick={handleLogout} >
              <Image width={19} height={19} src={LogoutIcon.src} alt="logout" /> Logout
            </Button>}
        </Box>
      </Container>
    </AppBar>
  );
};

export default Header;

