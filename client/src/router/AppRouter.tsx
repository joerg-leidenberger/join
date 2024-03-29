import { ReactElement } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Summary from '../pages/Summary';
import Login from '../pages/Login';
import AddTask from '../pages/AddTask';
import Board from '../pages/Board';
import Contacts from '../pages/Contacts';
import LegalNotice from '../pages/LegalNotice';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import SignUp from '../pages/SignUp';
import Layout from '../layout/Layout';
import { useAuth } from '../context/AuthContext';
import { TaskPortalProvider } from '../context/TaskCardPortalContext';

const AppRouter = (): ReactElement => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route
        path='/'
        element={
          isAuthenticated ? <Navigate replace to='/summary' /> : <Login />
        }
      />
      <Route
        path='/summary'
        element={
          isAuthenticated ? (
            <Layout>
              <Summary />
            </Layout>
          ) : (
            <Login />
          )
        }
      />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route
        path='/addtask'
        element={
          isAuthenticated ? (
            <Layout>
              <AddTask />
            </Layout>
          ) : (
            <Login />
          )
        }
      />
      <Route
        path='/board'
        element={
          isAuthenticated ? (
            <TaskPortalProvider>
              <Layout>
                <Board />
              </Layout>
            </TaskPortalProvider>
          ) : (
            <Login />
          )
        }
      />
      <Route
        path='/contacts'
        element={
          isAuthenticated ? (
            <Layout>
              <Contacts />
            </Layout>
          ) : (
            <Login />
          )
        }
      />
      <Route
        path='/legalnotice'
        element={
          isAuthenticated ? (
            <Layout>
              <LegalNotice />
            </Layout>
          ) : (
            <Login />
          )
        }
      />
      <Route
        path='/privacypolicy'
        element={
          isAuthenticated ? (
            <Layout>
              <PrivacyPolicy />
            </Layout>
          ) : (
            <Login />
          )
        }
      />
    </Routes>
  );
};

export default AppRouter;
