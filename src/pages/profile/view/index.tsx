import React from 'react'
import { Box, Container, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import Layout from '@/components/layout'
import { useRouter } from 'next/router';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import StackedChart from '@/components/chart/AreaChart/stackedChart';
import CustomButton from '@/common-components/CustomButton';
import Image from 'next/image';
import PdfIcon from '../../../assets/icons/pdfIcon.png'
import ExcelIcon from '../../../assets/icons/excelIcon.png'

const View = () => {
  const router = useRouter();
  const { id } = router.query;


  const viewResult = [
    { id: 1, correct: "true", response: "true", responseLat: "3219ms", certainlyRate: "3" },
    { id: 2, correct: "false", response: "true", responseLat: "1758ms", certainlyRate: "3" },
    { id: 3, correct: "true", response: "false", responseLat: "1572mx", certainlyRate: "3" },
    { id: 4, correct: "false", response: "false", responseLat: "2568mx", certainlyRate: "3" },
  ]

  const rows = [
    { id: id, totalCorrect: 2, totalIncorrect: 4, certAvg: 3.00, certRateCorrect: 3.00 }
  ]

  return (
    <Layout title="Profile | CozQuiz" footer>
      <Container className='main-container'>
        <Box display={"flex"} color={"#2D4F44"} style={{
          cursor: "pointer",
          width: "fit-content",
        }}
          onClick={() => router.back()}
        >
          <KeyboardArrowLeftIcon />
          <Typography style={{
            fontWeight: "600"
          }}>Back</Typography>
        </Box>

        <Box mt={2} >
          <Grid container spacing={2}>
            <Grid item xs={5}>
              <StackedChart />
            </Grid>
            <Grid item xs={7}>
              <Typography variant='h6' textAlign={"center"} mb={2} fontWeight={600} fontSize={16}>Results for Syllogisms Test for participant admin</Typography>
              <Box className="cus-table-wrap">
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead >
                      <TableRow style={{ backgroundColor: "#0F214F" }}>
                        <TableCell style={{ color: "#fff", fontWeight: "600" }}>Id</TableCell>
                        <TableCell style={{ color: "#fff", fontWeight: "600" }} align="center" >Total Correct</TableCell>
                        <TableCell style={{ color: "#fff", fontWeight: "600" }} align="center">Total Incorrect</TableCell>
                        <TableCell style={{ color: "#fff", fontWeight: "600" }} align='right' >Cert Average</TableCell>
                        <TableCell style={{ color: "#fff", fontWeight: "600" }} align='right' >Cert Rating Correct</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row: any) => (
                        <TableRow key={row.id}>
                          <TableCell component="th" scope="row">
                            {row.id}
                          </TableCell>
                          <TableCell align="center">{row.totalCorrect}</TableCell>
                          <TableCell align="center">{row.totalIncorrect}</TableCell>
                          <TableCell align="right">{row.certAvg.toFixed(2)}</TableCell>
                          <TableCell align="right">{row.certRateCorrect.toFixed(2)}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
              <Typography variant='subtitle1' textAlign={"center"} fontSize={14} mt={2}>Total Correct Count:Your performance did not fall within the average range for someone your age. There are a large number of factors that may have contributed to your performance. This test is not diagnostic. There are a range of scores and some will be above and some will be below average. If you have any concerns about your performance you might consider consulting with a licensed professional health provider. Your results can be printed and provided to anyone you consult with.</Typography>
            </Grid>
            <Grid item xs={9}>
              <Box className="cus-table-wrap">
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Correct answer</TableCell>
                        <TableCell>Response</TableCell>
                        <TableCell >Response latency</TableCell>
                        <TableCell align='center'>Certainty rating</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {viewResult.map((row, index) => (
                        <TableRow
                          key={row.id}
                          style={{ backgroundColor: index % 2 === 0 ? '#F1FAFF' : 'white' }}
                        >
                          <TableCell component="th" scope="row">
                            {row.correct}
                          </TableCell>
                          <TableCell>{row.response}</TableCell>
                          <TableCell >{row.responseLat}</TableCell>
                          <TableCell align='center' >{row.certainlyRate}</TableCell>

                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </Grid>
            <Grid item xs={3} className='export-btn-wrap'>
              <CustomButton className="export-btn" btnText="Export to PDF" startIcon={<Image height={20} width={20} src={PdfIcon.src} alt='pdf-icon' />} />
              <CustomButton className="export-btn" btnText="Export to Excel one Line" startIcon={<Image height={20} width={20} src={ExcelIcon.src} alt='excel-icon' />} />
              <CustomButton className="export-btn" btnText="Export to Excel Traditional" startIcon={<Image height={20} width={20} src={ExcelIcon.src} alt='excel-icon' />} />
            </Grid>
          </Grid>
        </Box>

      </Container>
    </Layout >
  )
}

export default View