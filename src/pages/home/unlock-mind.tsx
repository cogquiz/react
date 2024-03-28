import { Box, Container, Typography } from "@mui/material";
import BrainWithKey from '../../assets/brain.png'
import ListUsers from '../../assets/list-users.png'
import CustomButton from "@/common-components/CustomButton";
import SendIcon from '../../assets/right-arrow.png'
import { Player } from '@lottiefiles/react-lottie-player';
import AnimationSlider from '../../assets/slider-1.json'
import { constantData } from "@/constant/constant";
import Image from "next/image";
import EllipseBall from '../../assets/Ellipse-ball.png'


const UnlockMind = () => {

    return (
        <Box className="unlock-mind" pt={3}>
            <Container className="main-container">
                <Box className="unlock-wrap">
                    <Box className="left-container">
                        <Box>
                            <Typography className="unlock-title" variant="h3">
                                Unlock Your <span className="mind">Mind</span> Take Our <span className="neuropsychological">Neuropsychological</span>
                            </Typography>
                        </Box>
                        <Box className="user-count-main-wrap" mt={3}>
                            <Image height={67} width={177} className="user-list-img" src={ListUsers.src} alt="user-list" />
                            <Box className="user-count-wrapper" textAlign={"center"} >
                                <Typography className="user-count" variant="h4">1.5K</Typography>
                                <Typography fontSize={14} variant="h5">Students</Typography>
                            </Box>
                        </Box>
                        <Box>
                            <CustomButton btnText={"Tests Today!"} className="send-btn" endIcon={<Image height={17} width={17} src={SendIcon.src} alt="send" />} />
                        </Box>
                    </Box>
                    <Box className="right-container">
                        <Player
                            autoplay
                            loop
                            src={AnimationSlider}
                            style={{ height: '400px', width: '400px' }}
                        >

                        </Player>
                    </Box>
                </Box>
                <Box id="about" pt={3}>
                    <Box className="cogquiz-header">
                        <Image height={107} width={143} src={BrainWithKey.src} alt="brain" />
                        <Typography variant="h4" className="cozquiz-title">
                            CogQuiz
                        </Typography>
                        <Typography variant="body1" className="cozquiz-subtitle">
                            Neuropsychological Tests
                        </Typography>
                    </Box>
                    <Box className="cogquiz-wrap">

                        {
                            constantData.map((data) => {
                                return (
                                    <Container key={data.id} className="cogquiz-container">
                                        <Box className="cogquiz-wrapper">
                                            <Image height={80} width={80} src={data.img.src} alt="brain" />
                                            <Typography className="cogquiz-title" variant="h5">{data.title}</Typography>
                                            <Typography className="cogquiz-subtitle" variant="body1">{data.content}</Typography>

                                        </Box>
                                    </Container>
                                )
                            })
                        }
                        <Box className="ellipse-ball-test">
                            <Image height={125} width={125} src={EllipseBall.src} alt="ellipse-ball" />
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default UnlockMind;
