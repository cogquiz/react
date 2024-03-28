import Layout from '@/components/layout'
import { Avatar, Box, Container, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ProfileHeader from './profileHeader'
import UserProfileImg from '../../assets/user-profile.png'
import ProfileFormImg from '../../assets/profile-form.png'
import YourTestImg from '../../assets/your-test.png'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import UserProfile from '@/components/userProfile';
import ProfileForm from '@/components/profileForm';
import YourTest from '@/components/yourTest';
import Image from 'next/image'
import { useRouter } from 'next/router'
import FullScreenLoader from '@/common-components/fullScreenLoader'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/app/store'
import AddNewParticipant from '@/components/addNewParticipant'
import { AllTestAvailable, TestCategorysForProfile } from "@/constant/constant";
import SendGreenIcon from '../../assets/right-green-arrow.png'
import CustomButton from '@/common-components/CustomButton'
import { pdfUrl } from '@/services/apis/fetcher'
import ResetPassword from '@/components/resetPassword'

const ProfileDetails = () => {
    const router = useRouter()
    const { tab } = router.query;

    const profileData = useSelector((state: RootState) => state.auth?.data?.data?.data)


    const navMenu = [
        {
            id: 1,
            title: "User Profile",
            img: UserProfileImg,
            url: "user-profile"
        },
        {
            id: 2,
            title: "Profile Form",
            img: ProfileFormImg,
            url: "profile-form"
        },
        {
            id: 3,
            title: "Your Tests",
            img: YourTestImg,
            url: "your-tests"
        },
        {
            id: 4,
            title: "Add Participant",
            img: YourTestImg,
            url: "add-participant"
        },
        {
            id: 5,
            title: "Reset password",
            img: YourTestImg,
            url: "reset-password"
        }
    ]

    const [currentNav, setCurrentNav] = useState<any>({})

    useEffect(() => {
        const matchedNav = navMenu.find(nav => nav.url === tab);
        if (matchedNav) {
            setCurrentNav(matchedNav);
        }
        // eslint-disable-next-line
    }, [tab])

    const handleNavClick = (item: any) => {
        router.push(`/profile?tab=${item.url}`)
        setCurrentNav(item)
    }

    const renderComponent = () => {
        switch (currentNav?.title) {
            case 'User Profile':
                return <UserProfile profileData={profileData} />;
            case 'Profile Form':
                return <ProfileForm />;
            case 'Your Tests':
                return <YourTest />;
            case 'Add Participant':
                return <AddNewParticipant />;
            case 'Reset password':
                return <ResetPassword />;
            default:
                return null;
        }
    };

    const handleAvailableTest = (title: string) => {
        router.push(`/available-test?name=${title}`)
    }

    const handleNavigateTestCategory = (title: string) => {
        router.push(`/test-category?name=${title}`)
    }


    return (
        <Layout title="Profile | CozQuiz" footer>
            <Container className='main-container'>
                {currentNav?.id ? <>
                    <ProfileHeader currentNav={currentNav} />
                    <Box>
                        <Grid container spacing={2}>
                            <Grid item xs={2.5} lg={3} xl={2.3}>
                                <Box className="nav-menu">
                                    {navMenu.map((item) => {
                                        const isActive: any = item?.url === tab
                                        return (
                                            <Box className="nav-item" color={isActive && "#69A6D1"} key={item.id} onClick={() => handleNavClick(item)}>
                                                <Image height={36} width={36} src={item.img.src} alt={item.title} />
                                                <Typography>{item.title}</Typography>
                                                <KeyboardArrowRightIcon />
                                            </Box>
                                        )
                                    })}
                                </Box>
                            </Grid>
                            <Grid item xs={9.5} lg={9} xl={9.7}>
                                {renderComponent()}
                                <Box mt={3} className="profile-outer-main-box-wrap">
                                    <Box className="profile-details">
                                        <Typography className='main-title' variant="h3">
                                            Available Test
                                        </Typography>
                                        <Box className="profile-available-container" pt={4}>
                                            {
                                                AllTestAvailable.map((test) => {
                                                    return (
                                                        <Container key={test.id}>
                                                            <Image height={240} width={465} src={test.img.src} alt="card-sort" />
                                                            <Typography className="profile-available-title" onClick={() => handleAvailableTest(test.title)} >{test.title} <span><Image height={13} width={15} src={SendGreenIcon.src} alt="next" /></span></Typography>
                                                        </Container>
                                                    )
                                                })
                                            }
                                        </Box>
                                    </Box>

                                </Box >
                                <Box mt={3} className="profile-outer-main-box-wrap">
                                    <Box className="profile-details">
                                        <Typography className='main-title' variant="h3">
                                            Norms Tables
                                        </Typography>
                                        <Box className="norms-tables">
                                            <CustomButton className="norms-tables-btn save-profile" btnText="TOL Drexel Adult"
                                                onBtnClick={() => window.open(`${pdfUrl}AdultDrexelNorms.pdf`, '_blank')}
                                            />
                                            <CustomButton className="norms-tables-btn save-profile" btnText="TOL Drexel Child"
                                                onBtnClick={() => window.open(`${pdfUrl}ChildGroupsNorms.pdf`, '_blank')}
                                            />
                                            <CustomButton className="norms-tables-btn save-profile" btnText="Card Sort Test"
                                                onBtnClick={() => window.open(`${pdfUrl}CardSort_norms.pdf`, '_blank')}
                                            />
                                            <CustomButton className="norms-tables-btn save-profile" btnText="N-back"
                                                onBtnClick={() => window.open(`${pdfUrl}NbackNorms.pdf`, '_blank')}
                                            />
                                        </Box>
                                    </Box>
                                </Box >
                                <Box mt={3} className="profile-outer-main-box-wrap">
                                    <Box className="profile-details">
                                        <Typography className='main-title' variant="h3">
                                            Instructional Videos
                                        </Typography>
                                        <Box className="norms-tables">
                                            <Box className="norms-tables-btn instructional-videos">
                                                <Typography>Provider Dash Part 1</Typography>
                                                <iframe
                                                    width="100%"
                                                    height="100%"
                                                    src="https://www.youtube.com/embed/-SPAjSEuBNA?si=aopT80MjBDYA_i8v"
                                                    title="YouTube video player"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                />
                                            </Box>
                                            <Box className="norms-tables-btn instructional-videos">
                                                <Typography>Provider Dash Part 2</Typography>
                                                <iframe
                                                    width="100%"
                                                    height="100%"
                                                    src="https://www.youtube.com/embed/k_aoilEl8h8?si=qqg-36ebKSy7wVgi"
                                                    title="YouTube video player"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                />
                                            </Box>
                                            <Box className="norms-tables-btn instructional-videos">
                                                <Typography>Provider Dash Part 3</Typography>
                                                <iframe
                                                    // width="175"
                                                    // height="100"
                                                    width="100%"
                                                    height="100%"
                                                    src="https://www.youtube.com/embed/0JwN9Np1TmE?si=h6sPt__Bum8BXBN9"
                                                    title="YouTube video player"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                />
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box >
                                <Box mt={3} className="profile-outer-main-box-wrap">
                                    <Box className="profile-details">
                                        <Typography className='main-title' variant="h3">
                                            Test Categories
                                        </Typography>
                                        <Grid container spacing={2} sx={{ textAlign: 'center', textTransform: 'uppercase' }}>
                                            {
                                                TestCategorysForProfile?.map((data: { image: any, title: string, id: number }) => {
                                                    return (
                                                        <Grid item xs={6} key={data.id}>
                                                            <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                                                                <Image className='testcategory-title' height={100} width={100} src={data.image} alt="brain-ai" onClick={() => handleNavigateTestCategory(data.title)} />
                                                            </Box>
                                                            <Typography variant="subtitle1" className='testcategory-title' onClick={() => handleNavigateTestCategory(data.title)}>
                                                                {data.title}
                                                            </Typography>
                                                        </Grid>
                                                    )
                                                })
                                            }
                                        </Grid>
                                    </Box>
                                </Box >
                            </Grid>
                        </Grid>

                    </Box>
                </> : <FullScreenLoader />}
            </Container>
        </Layout >
    )
}

export default ProfileDetails