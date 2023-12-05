import SideBar from '@organisms/SideBar';
import WorkSpace from '@organisms/WorkSpace';

import classes from './LandingBuilder.module.scss';

const LandingBuilder = () => {
  return (
    <main className={classes.landing}>
      <SideBar />
      <WorkSpace />
    </main>
  );
};

export default LandingBuilder;
