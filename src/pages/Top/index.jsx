import {
  Drawer,
  CssBaseline,
  AppBar,
  Toolbar,
  IconButton,
  Divider,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TopList from '../../components/TopList';
import RedditPreview from '../../components/RedditPreview';
import { fetchTopAsync } from '../../reducers/redditSlice';
import styles from './styles';

const useStyles = makeStyles(styles);

const RedditTop = () => {
  const [openDrawer, setOpenDrawer] = useState(true);
  const [selectedPreview, setSelectedPreview] = useState(0);
  const { rawData, entries, isLoading } = useSelector((state) => state.reddit);
  const dispatch = useDispatch();
  const classes = useStyles();
  const theme = useTheme();

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  const handleClickPost = (pos) => {
    setSelectedPreview(pos);
  };

  const getRedditTopEffect = () => {
    const params = {
      limit: 50,
    };
    dispatch(fetchTopAsync(params));
  };

  useEffect(getRedditTopEffect, []);
  useEffect(() => {
    if (!isLoading) {
      console.log(rawData);
    }
  }, [isLoading]);

  return (
    <div id="dashboard" className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: openDrawer,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, openDrawer && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={openDrawer}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <TopList topData={entries} clickPost={handleClickPost} />
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: openDrawer,
        })}
      >
        <div className={classes.drawerHeader} />
        <RedditPreview post={entries[selectedPreview]} />
      </main>
    </div>
  );
};

export default RedditTop;
