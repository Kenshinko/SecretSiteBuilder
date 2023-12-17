import { useEffect, useState } from 'react';
import { Tab, Tabs } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ExtensionIcon from '@mui/icons-material/Extension';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';

import { importFiles } from '@/utils';
import TabPanel from '@molecules/TabPanel';
import NestedList from '@molecules/NestedList';

import classes from './SideBar.module.scss';

const SideBar: React.FC = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [isActiveTab, setSctiveTab] = useState(false);
  const [isPromiseResolve, setPromiseResolved] = useState(false);
  const [sidebarMenuList, setSidebarMenuList] = useState({});
  const tabsIcons = [<DashboardIcon />, <ExtensionIcon />, <ViewCarouselIcon />];

  useEffect(() => {
    importFiles().then((data) => {
      setSidebarMenuList({ ...sidebarMenuList, ...data });
    });

    setPromiseResolved(true);
  }, []);

  const handleChangeTab = (_event: React.SyntheticEvent, indxBtn: number) => {
    setCurrentTab(indxBtn);
  };

  const openPanel = () => {
    setSctiveTab(true);
  };

  const closePanel = () => {
    setSctiveTab(false);
  };

  return (
    <>
      {isPromiseResolve && (
        <Tabs
          className={classes['sidebar']}
          value={currentTab}
          orientation="vertical"
          aria-label="sidebar"
          onChange={handleChangeTab}
        >
          {Object.keys(sidebarMenuList).map((item, indx) => {
            return (
              <Tab
                key={item}
                className={classes['tab']}
                icon={tabsIcons[indx]}
                aria-label={item}
                onClick={openPanel}
              />
            );
          })}
        </Tabs>
      )}

      {isPromiseResolve &&
        Object.entries(sidebarMenuList).map(([key, items], indx) => {
          return (
            isActiveTab && (
              <TabPanel
                key={key}
                value={currentTab}
                index={indx}
                label={key}
                closePanel={closePanel}
              >
                {items.map((item) => {
                  return (
                    <NestedList key={item.name} name={item.name} items={item.list}></NestedList>
                  );
                })}
              </TabPanel>
            )
          );
        })}
    </>
  );
};

export default SideBar;
