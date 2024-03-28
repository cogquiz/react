import { Box, Typography, Container } from "@mui/material"
import TestCategoryImg from '../../assets/test-category-read.png'
import CustomButton from "@/common-components/CustomButton"
import SendIcon from '../../assets/right-arrow.png'
import SendGreenIcon from '../../assets/right-green-arrow.png'
import BrainAi from '../../assets/brain-ai.png'
import Planning from '../../assets/planning.png'
import SpeedProcessing from '../../assets/speed-processing.png'
import QuizImg from '../../assets/quiz.png'
import DotWave from '../../assets/dots-wave.png'
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { AllTestAvailable, TestCategorysForHome } from "@/constant/constant";

const TestCategories = () => {
    const router = useRouter()
    const [selectedCategory, setSelectedCategory] = useState("All");

    const handleReadMore = (title: string) => {
        router.push(`/test-category?name=${title}`)
    }

    const handleAvailableTest = (title: string) => {
        router.push(`/available-test?name=${title}`)
    }


    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
    };

    const filteredTests = selectedCategory === "All" ? AllTestAvailable : AllTestAvailable.filter(test => test.category === selectedCategory);

    return (
        <Box className="test-category-wrap" pt={5} id="test-category">
            <Box className="test-category">
                <Image width={98} height={119} src={TestCategoryImg.src} alt="test-cat-image" />
                <Typography className="text-cat-title"> Test <span className="category">Categories</span> </Typography>
                <Typography className="text-cat-subtitle">Understand Your Brain and Boost Your Potential. Discover Your Cognitive Profile.</Typography>
                <Box className="container-wrap">
                    {
                        TestCategorysForHome.map((data: { image: any, title: string, id: number }) => {
                            return (
                                <Container className="single-container">
                                    <Image height={128} width={128} src={data.image} alt="brain-ai" />
                                    <Typography className="container-title" variant="h5">{data.title}</Typography>
                                    <CustomButton onBtnClick={() => handleReadMore(data.title)} className="test-cat-btn" btnText={"Read More"} endIcon={<Image height={17} width={17} src={SendIcon.src} alt="send" />} />
                                </Container>
                            )
                        })
                    }
                    {/* <Container className="single-container">
                        <Image height={128} width={128} src={BrainAi.src} alt="brain-ai" />
                        <Typography className="container-title" variant="h5">Memory With AI</Typography>
                        <CustomButton onBtnClick={() => handleReadMore("Memory With AI")} className="test-cat-btn" btnText={"Read More"} endIcon={<Image height={17} width={17} src={SendIcon.src} alt="send" />} />
                    </Container>
                    <Container className="single-container">
                        <Image height={128} width={128} src={Planning.src} alt="brain-ai" />
                        <Typography className="container-title" variant="h5">Executive function and Planning</Typography>
                        <CustomButton onBtnClick={() => handleReadMore("Executive function and Planning")} className="test-cat-btn" btnText={"Read More"} endIcon={<Image height={17} width={17} src={SendIcon.src} alt="send" />} />
                    </Container>
                    <Container className="single-container">
                        <Image height={128} width={128} src={SpeedProcessing.src} alt="brain-ai" />
                        <Typography className="container-title" variant="h5">Processing Speed</Typography>
                        <CustomButton onBtnClick={() => handleReadMore("Processing Speed")} className="test-cat-btn" btnText={"Read More"} endIcon={<Image height={17} width={17} src={SendIcon.src} alt="send" />} />
                    </Container> */}
                </Box>
            </Box>

            <Box id="available-test" className="all-available-test" position={"absolute"}>
                <Box className="ab-bg-dot-wrap">
                    <Image width={100} height={100} layout="responsive" src={DotWave.src} alt="dot" />
                </Box>
                <Box className="image-section">
                    <Image height={119} width={98} src={QuizImg.src} alt="quiz" />
                    <Typography className="available-test-title" variant="h5">
                        All <span className="custom-style-title">Available Test</span>
                    </Typography>
                </Box>
                <Box>
                    <Box className="all-nav-bar">
                        <Typography className={selectedCategory === "All" ? "active-nav-title" : "nav-title"} onClick={() => handleCategoryClick("All")}>All</Typography>
                        <Typography className={selectedCategory === "Memory" ? "active-nav-title" : "nav-title"} onClick={() => handleCategoryClick("Memory")}>Memory</Typography>
                        <Typography className={selectedCategory === "Executive" ? "active-nav-title" : "nav-title"} onClick={() => handleCategoryClick("Executive")}>Executive Function</Typography>
                        <Typography className={selectedCategory === "Processing" ? "active-nav-title" : "nav-title"} onClick={() => handleCategoryClick("Processing")}>Processing Speed</Typography>
                    </Box>
                    <Box className="available-container" pt={4}>
                        {
                            filteredTests.map((test) => {
                                return (
                                    <Container key={test.id}>
                                        <Image height={240} width={465} src={test.img.src} alt="card-sort" />
                                        <Typography className="available-title" onClick={() => handleAvailableTest(test.title)} >{test.title} <span><Image height={19} width={19} src={SendGreenIcon.src} alt="next" /></span></Typography>
                                    </Container>
                                )
                            })
                        }
                    </Box>
                </Box>
            </Box>
        </Box>
    )
};

export default TestCategories;