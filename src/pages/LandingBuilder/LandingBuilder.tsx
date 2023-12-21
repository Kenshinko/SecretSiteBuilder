import SideBar from '@organisms/SideBar';
import WorkSpace from '@organisms/WorkSpace';

import classes from './LandingBuilder.module.scss';
import SectionsManager from '@/components/organisms/SectionsManager';
import { Route, Routes } from 'react-router-dom';
// import { useEffect } from 'react';

const LandingBuilder = () => {


  return (
    <main className={classes.landing}>
      <SideBar />
      <Routes>
        <Route path="/" element={<WorkSpace />} />
        <Route path="/sections-creator" element={<SectionsManager />} />
      </Routes>
    </main>
  );
};

export default LandingBuilder;
