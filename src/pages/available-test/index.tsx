import Layout from '@/components/layout'
import { Box, Container, Typography } from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import CustomButton from '@/common-components/CustomButton'
import PlayIcon from '../../assets/icons/playIcon.png'
import { AllTestAvailable } from '@/constant/constant'

const AvailableTest = () => {
    const router = useRouter()
    const { name } = router.query
    const filterData = AllTestAvailable.filter((testData) => testData.title === name)

    return (
        <Layout title="Available Test | CozQuiz" footer>
            <Container className='main-container'>
                <Box className="available-test-header-wrap">
                    <Image src={filterData[0]?.img.src} height={310} width={386} alt={"card"} />
                    <Box>
                        <Typography className='title'>{filterData[0]?.title}</Typography>
                        <Typography className='content'>CogQuiz’s card sorting test like other sorting tests might be administered to individuals with brain injury (e.g., TBI, stroke, etc.), neurological/neurodegenerative disorders (e.g., Parkinson’s disease, Alzheimer’s disease, etc.), psychological/mental disorders (e.g., schizophrenia, depression, etc.), or to assess development in children and decline in elderly.</Typography>
                        <CustomButton btnText="Run Test" className="run-test-btn" endIcon={<Image src={PlayIcon.src} height={15} width={15} alt='play-button' />} />
                    </Box>
                </Box>
                <Box className="specification">
                    <Typography className='available-test-title'>Specifications:</Typography>
                    <Box mt={2}>
                        <Typography className='specification-list'>1. This test will take about 20 minutes to complete</Typography>
                        <Typography className='specification-list'>2. Recommended minimum screen resolution is <strong>1000 x 700.</strong></Typography>
                    </Box>
                </Box>
                <Box className="availabe-test-points">
                    <Typography className='available-test-title'>Description</Typography>
                    <Typography className='available-test-description'>In normal individuals, the task is a measure of cognitive flexibility. We provide several normed response parameters for individuals from 5 to 89 years of age. Results from the CogQuiz card sorting tests administered alone or without input or supervision from a licensed mental health specialist are not valid for assessing brain or cognitive function.</Typography>
                </Box>
                <Box className="availabe-test-points">
                    <Typography className='available-test-title'>Research</Typography>
                    <Typography className='available-test-description'>Berg, E. A. (1948). A simple objective for measuring flexibility in thinking. Journal of General Psychology, 39, 15-22. Eling, P., Derckx, K., & Maes, R. (2008). On the historical and conceptual background of the Wisconsin Card Sorting Test. Brain and Cognition, 67, 247-253. Flashman, L. A., Horner, M. D., Freides, D. (1991). Note on scoring perseveration on the Wisconsin Card Sorting Test. The Clinical Neurologist, 5, 2, 190-194. Feldstein, S. N., Keller, F. R., Portman, R. E., Durham, R. L., Klebe, K. J., Davis, H. P. (1999). A comparison of computerized and standard versions of the Wisconsin Card Sorting Test. The Clinical Neurologist, 13, 3, 303-313</Typography>
                </Box>
                <Box className="availabe-test-points">
                    <Typography className='available-test-title'>Measure:</Typography>
                    <Typography className='available-test-description'>Card sorting tests measure cognitive flexibility by assessing the test taker’s ability to switch a response strategy when the rules for responding along a dimension change (e.g., size, location, etc.). These tests allow mental health professionals to assess planning strategy, inhibition of responding, shift strategy in response to performance feedback, and working memory as reflected by holding task relevant information in conscious awareness.</Typography>
                </Box>
            </Container>
        </Layout>
    )
}

export default AvailableTest