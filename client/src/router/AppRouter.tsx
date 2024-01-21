import { ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';

import Summary from '../pages/Summary';
import Login from '../pages/Login';
import AddTask from '../pages/AddTask';
import Board from '../pages/Board';
import Contacts from '../pages/Contacts';
import LegalNotice from '../pages/LegalNotice';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import SignUp from '../pages/SignUp';

const AppRouter = (): ReactElement => {
  return (
    <Routes>
      <Route path='/' element={<Summary />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/addtask' element={<AddTask />} />
      <Route path='/board' element={<Board />} />
      <Route path='/contacts' element={<Contacts />} />
      <Route path='/legalnotice' element={<LegalNotice />} />
      <Route path='/privacypolicy' element={<PrivacyPolicy />} />
    </Routes>
  );
};

export default AppRouter;
