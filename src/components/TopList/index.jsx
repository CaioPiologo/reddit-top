/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { List, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TopListItem from '../TopListItem/index';
import styles from './styles';

const useStyles = makeStyles(styles);

const TopList = (props) => {
  const { topData } = props;
  const classes = useStyles();

  const renderList = () =>
    topData.map((post, i) => {
      if (!post.visible) return null;

      return (
        <>
          <TopListItem post={post} postPosition={i} />
          <Divider variant="inset" component="li" />
        </>
      );
    });

  return <List className={classes.root}>{renderList()}</List>;
};

TopList.propTypes = {
  topData: PropTypes.array,
};
TopList.defaultProps = {
  topData: [],
};

export default TopList;
