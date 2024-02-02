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

const login = true;

const AppRouter = (): ReactElement => {
  return (
    <Routes>
      <Route
        path='/'
        element={login ? <Navigate replace to='/summary' /> : <Login />}
      />
      <Route
        path='/summary'
        element={
          <Layout>
            <Summary />
          </Layout>
        }
      />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route
        path='/addtask'
        element={
          <Layout>
            <AddTask />
          </Layout>
        }
      />
      <Route
        path='/board'
        element={
          <Layout>
            <Board />
          </Layout>
        }
      />
      <Route
        path='/contacts'
        element={
          <Layout>
            <Contacts />
          </Layout>
        }
      />
      <Route path='/legalnotice' element={<LegalNotice />} />
      <Route path='/privacypolicy' element={<PrivacyPolicy />} />
    </Routes>
  );
};

export default AppRouter;
