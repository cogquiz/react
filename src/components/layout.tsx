import { useEffect } from 'react';
import Head from 'next/head';
import Header from './header';
import Footer from './footer';
import BackgroundWave from './backgroundWave';
import ProtectedRoute from '@/pages/auth/ProtectedRoute';
import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/app/store';
import { fetchUserThunk } from '@/redux/feature/user-profile/userProfileThunk';

const Layout = ({ children, title = 'CogQuiz', footer, margintop }: any) => {
  const dispatch = useDispatch<AppDispatch>()
  const userDetails = useSelector(
    (state: RootState) => state?.userProfile?.userDetails
  );

  useEffect(() => {
    if (userDetails) return
    const userId = localStorage.getItem("userId");
    if (userId) {
      dispatch(fetchUserThunk(userId))
    }
    // eslint-disable-next-line
  }, [userDetails]);

  return (
    <div>
      <Head>
        <title>{title}</title>
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
        <BackgroundWave margintop={margintop} />
        <ProtectedRoute>
          {children}
        </ProtectedRoute>
      </main>
      {footer && <Footer />}
    </div>
  );
};

export default Layout;
