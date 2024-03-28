import { Box, Container, Typography } from "@mui/material";
import HeadReact from '../../assets/head-react.png'
import BlueCircle from '../../assets/blue circle.png'
import HalfWave from '../../assets/half-wave.png'
import { carouselData } from "@/constant/constant";
import Image from "next/image";
import EllipseBall from '../../assets/Ellipse-ball.png'
import "swiper/css";
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';



const WhyChooseUs = () => {
    return (
        <Container className="main-container">
        <Box id="custom-test" className="why-choose-us-wrap" >
            <Box className="choose-us-header">
                <Image height={98} width={106} src={HeadReact.src} alt="Head react" />
                <Typography variant="subtitle1" className="choose-us-title">Why <span className="choose">Choose</span> Us</Typography>
                <Typography variant="subtitle1" className="choose-us-subtitle">Understand Your Brain and Boost Your Potential. <br /> Discover Your Cognitive Profile.</Typography>
            </Box>
            <Box className="carousel-warpper">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                >
                    {carouselData?.map((data: any) => {
                        const titleWords = data.title.split(' ');
                        const lastWord = titleWords.pop();
                        return (
                            <SwiperSlide key={data.id} >
                                <Container className="carousel-container">
                                    <Box overflow={"hidden"}>
                                        <Image height={100} width={100} layout="responsive" className="carousel-wave" src={HalfWave.src} alt="" />
                                        <Box className="carousel-header">
                                            <Box>
                                                <Image height={50} width={50} src={BlueCircle.src} alt="" />
                                                <Typography className="carousel-counting" variant="h5">{data.id}</Typography>
                                            </Box>
                                            <Typography className="carousel-title" variant="subtitle2"> {titleWords.join(' ')}<span className="last-title"> {lastWord}</span></Typography>
                                        </Box>
                                        <Typography variant="body1" className="carousel-data">
                                            {data.content}
                                        </Typography>
                                    </Box>
                                </Container>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
                <Box>
                    <Box className="ellipse-ball-left">
                        <Image height={98} width={98} src={EllipseBall.src} alt="EllipseBall" />
                    </Box>
                    <Box className='ellipse-ball-right'>
                        <Image height={98} width={98} src={EllipseBall.src} alt="EllipseBall" />
                    </Box>
                </Box>
            </Box>
        </Box>
        </Container>
    );
};

export default WhyChooseUs;