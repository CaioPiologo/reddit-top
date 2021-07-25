/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Typography,
  Card,
  CardMedia,
  CardHeader,
  CardContent,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { timeAgo } from '../../utils/time';
import styles from './styles';

const useStyles = makeStyles(styles);

const RedditPreview = (props) => {
  const classes = useStyles();
  const { post } = props;
  if (!post || !post.visible) return null;
  const { data } = post;

  const currentTimeAgo = timeAgo(data.created);

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.cardHeader}
        classes={{ subheader: classes.cardSubHeader }}
        title={
          <div className={classes.cardHeaderTitle}>
            <span>{data.author}</span>
            <span>r/{data.subreddit}</span>
          </div>
        }
        subheader={currentTimeAgo}
      />
      <CardContent>
        <Typography variant="h4" color="text" component="p">
          {data.title}
        </Typography>
        <CardMedia
          component={data.is_video ? 'video' : 'img'}
          image={data.url}
          title={data.title}
          autoPlay
        />
      </CardContent>
    </Card>
  );
};

RedditPreview.propTypes = {
  post: PropTypes.object.isRequired,
};

export default RedditPreview;
