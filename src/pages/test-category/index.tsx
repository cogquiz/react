import Layout from '@/components/layout'
import { Box, Container, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { AllTestAvailable, TestCategoryContent } from '@/constant/constant';
import Image from 'next/image';
import SendGreenIcon from '../../assets/right-green-arrow.png'
import { StaticImport } from 'next/dist/shared/lib/get-img-props';


const TestCategories = () => {
    const router = useRouter()
    const { name }: any = router.query
    const [fetchContent, setfetchContent] = useState<any>([])
    const [filterTests, setFilterTests] = useState<any>([])

    const handleAvailableTest = (title: string) => {
        router.push(`/available-test?name=${title}`)
    }

    useEffect(() => {
        const testCategory = name?.split(" ")[0];
        if (testCategory) {
            const filteredTests = AllTestAvailable.filter((test) => test.category.includes(testCategory))
            setFilterTests(filteredTests)
            const filterCategory = TestCategoryContent.filter(category => category.category.includes(testCategory))
            setfetchContent(filterCategory)
        }
    }, [name])


    const renderContentOfList = (fetchContent: any) => {
        return (
            <Box>
                {
                    fetchContent?.map((data: { content: string }, index: number) => {
                        return (
                            <Box mt={2} key={index}>
                                <Typography dangerouslySetInnerHTML={{ __html: data?.content }} ></Typography>
                            </Box>
                        )
                    })
                }
            </Box>
        )
    }

    return (
        <Layout title="Test Category | CozQuiz" footer>
            <Container className='main-container'>
                <Box display={"flex"} color={"#2D4F44"} style={{ width: "fit-content" }}>
                    <Typography style={{ fontWeight: "600", cursor: 'pointer' }}
                        onClick={() => router.push('/#test-category')}
                    >Test Categories</Typography>
                    <KeyboardArrowRightIcon />
                    <Typography style={{ color: "#584E4E" }}> {name}</Typography>
                </Box>
                <Box mt={5}>
                    <Typography variant='h5' mb={2} sx={{ textAlign: 'center' }}>{name}</Typography>
                    <hr style={{ margin: "0 150px 0 150px" }} />
                    <Typography mt={3} variant='body1'>
                        {fetchContent?.length > 0 && renderContentOfList(fetchContent)}
                    </Typography>
                </Box>
                <Typography className="color-title">{name}</Typography>
                <Box className="test-cat-container" pt={4}>
                    {
                        filterTests?.map((test: { id: React.Key | null | undefined; img: { src: string | StaticImport; }; title: string }) => {
                            return (
                                <Container className='available-test-container' key={test.id}>
                                    <Image height={240} width={465} src={test.img.src} alt="card-sort" />
                                    <Typography className="test-cat-title" onClick={() => handleAvailableTest(test.title)} >{test.title} <span><Image height={19} width={19} src={SendGreenIcon.src} alt="next" /></span></Typography>
                                </Container>
                            )
                        })
                    }
                </Box>
            </Container>
        </ Layout>
    )
}

export default TestCategories