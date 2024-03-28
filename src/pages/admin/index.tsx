import { AppDispatch } from "@/redux/app/store";
import { fetchAllUserThunk } from "@/redux/feature/admin/adminThunk";
import { Container } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import DataTable from 'react-data-table-component';
import { useDispatch } from "react-redux";
import moment from 'moment';
import BackgroundWave from "@/components/backgroundWave";
import Head from "next/head";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "../auth/ProtectedRoute";
import Header from "@/components/header";

const AdminPortal = () => {

  const dispatch = useDispatch<AppDispatch>()
  const [fetchUser, setFetchUser] = useState<any>()
  const [pageSize, setPageSize] = useState<number>(10)
  const [totalRows, setTotalRows] = useState(0)

  const handleMakeProvider = () => {
    console.log("Make provider")
  }

  const handleResetPasseword = () => {
    console.log("Reset password")
  }

  const fetchData = async (page: number, pageSize: number) => {
    dispatch(fetchAllUserThunk({ page, pageSize })).then((response: any) => {
      if (response?.payload) {
        if (response?.payload?.data) {
          setFetchUser(response?.payload?.data?.data?.data)
          setTotalRows(response?.payload?.data?.data?.totalCount);
        }
      }
    });
  };

  const handlePageChange = (selected: number) => {
    fetchData(selected, pageSize);
  };

  const handleChangePerPageSize = (newPerPage: number, page: any) => {
    setPageSize(newPerPage)
    fetchData(page, newPerPage);
  }

  const columns: any = [
    {
      name: 'Make Provider',
      // selector: (row: any) => 'Make Provider',
      cell: () => <Link href={'#'} onClick={handleMakeProvider}>Make Provider</Link>,
      ignoreRowClick: true,
    },
    {
      name: 'Make Provider',
      // selector: (row: any) => 'Reset Password',
      cell: () => <Link href={'#'} onClick={handleResetPasseword}>Reset Password</Link>,
      ignoreRowClick: true,
    },
    {
      name: 'Application Id',
      selector: (row: any) => 'AppId',
    },
    {
      name: 'User Id',
      selector: (row: { id: number; }) => row.id,
    },
    {
      name: 'User Name',
      selector: (row: { name: string; }) => row.name,
      width: '150px'
    },
    {
      name: 'Lowered User Name',
      selector: (row: { name: string; }) => row.name.toLowerCase(),
      width: '150px'
    },
    {
      name: 'Mobile Alias',
      selector: (row: { name: string; }) => '',
    },
    {
      name: 'Last Activity Date',
      selector: (row: { lastModified: string; }) => moment(row.lastModified).format('MM/DD/YYYY hh:mm:ss A'),
      width: '180px'
    },
    {
      name: 'Provider Id',
      selector: (row: { providerId: number | null; }) => row.providerId,
    },
  ];

  const customStyles = {
    headCells: {
      style: {
        fontSize: '14px',
        fontWeight: 'bold',
      },
    },
  };

  return (
    <div>
      <Head>
        <title>Admin Portal</title>
        <meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=no" />
      </Head>
      <Header />
      <main>
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            className: "",
          }}
          containerStyle={{
            top: 30,
            bottom: 20,
            right: 30,
          }}
        />
        <BackgroundWave />
        <ProtectedRoute>
          <Container sx={{ marginTop: "150px" }}>
            <DataTable
              columns={columns}
              data={fetchUser}
              pagination
              paginationServer
              onChangePage={handlePageChange}
              paginationTotalRows={totalRows}
              // paginationPerPage={pageSize}
              onChangeRowsPerPage={handleChangePerPageSize}
              paginationRowsPerPageOptions={[10, 20, 30, 40, 50]}
              customStyles={customStyles}
            />
          </Container>
        </ProtectedRoute>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default AdminPortal;