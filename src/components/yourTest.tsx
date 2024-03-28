import React from 'react'
import { finishedTest, paidTest } from '@/constant/constant'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useRouter } from 'next/router';


const YourTest = () => {
  const router = useRouter()
  const handleCellClick = (id: number) => {
    router.push(`/profile/view?id=${id}`)
  }
  return (
    <Box className="profile-outer-main-box-wrap your-test-out-wrap">
      <Box p={2.5}>
        <Typography mb={1} color={"#E53A41"} fontSize={"14px"} fontWeight={600}>Paid Test (not finished):</Typography>
        <Box className="cus-table-wrap">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Paid On</TableCell>
                  <TableCell>Test Name</TableCell>
                  <TableCell align="right">Start</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {paidTest.map((row, index) => (
                  <TableRow
                    key={row.id}
                    style={{ backgroundColor: index % 2 === 0 ? '#F1FAFF' : 'white' }}
                  >
                    <TableCell component="th" scope="row">
                      {row.date}
                    </TableCell>
                    <TableCell >{row.name}</TableCell>
                    <TableCell align="right" style={{
                      cursor: "pointer",
                      color: "#5141B0",
                      fontSize: "14px",
                      fontWeight: "700"
                    }} onClick={() => handleCellClick(row?.id)}>
                      Start
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
      <Box>

        <Box p={2.5}>
          <Typography mb={1} color={"#39ADFE"} fontSize={"14px"} fontWeight={600}>Finished Tests:</Typography>
          <Box className="cus-table-wrap">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Paid On</TableCell>
                    <TableCell>Test Name</TableCell>
                    <TableCell align="right">View</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {finishedTest.map((row, index) => (
                    <TableRow
                      key={row.id}
                      style={{ backgroundColor: index % 2 === 0 ? '#F1FAFF' : 'white' }}
                    >
                      <TableCell component="th" scope="row">
                        {row.date}
                      </TableCell>
                      <TableCell >{row.name}</TableCell>
                      <TableCell align="right" style={{
                        cursor: "pointer"
                      }} onClick={() => handleCellClick(row.id)}>
                        <VisibilityIcon color="primary" />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default YourTest