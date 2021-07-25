/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  ListItem,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardHeader,
  CardContent,
  Slide,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { removePost } from '../../reducers/redditSlice';
import { timeAgo } from '../../utils/time';
import styles from './styles';

const useStyles = makeStyles(styles);

const TopListItem = (props) => {
  const { post, postPosition, onClick } = props;
  const { data } = post;
  const [removed, setRemoved] = useState(false);
  const dispatch = useDispatch();
  const classes = useStyles();

  if (!post.visible) return null;
  const currentTimeAgo = timeAgo(data.created);

  const onClickRemovePost = () => {
    setRemoved(true);
    setTimeout(() => {
      dispatch(removePost({ entryPos: postPosition }));
    }, 200);
  };

  return (
    <ListItem
      key={data.title.replace(' ', '_')}
      alignItems="flex-start"
      className={classes.listItem}
    >
      <Slide direction="left" in={!removed} mountOnEnter unmountOnExit>
        <Card className={classes.card}>
          <CardActionArea
            className={classes.actionArea}
            onClick={() => onClick(postPosition)}
          >
            <CardHeader
              className={classes.cardHeader}
              classes={{
                subheader: classes.cardHeaderSubheader,
              }}
              title={data.author}
              subheader={currentTimeAgo}
            />
            <CardContent className={classes.content}>
              <CardMedia
                className={classes.media}
                style={{
                  width: data.thumbnail_width,
                  height: data.thumbnail_height,
                }}
                image={data.thumbnail}
                title={data.title}
              />
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className={classes.description}
              >
                {data.title}
              </Typography>
            </CardContent>
            <Button size="small" color="primary" onClick={onClickRemovePost}>
              Remove Post
            </Button>
          </CardActionArea>
        </Card>
      </Slide>
    </ListItem>
  );
};

TopListItem.propTypes = {
  post: PropTypes.object.isRequired,
  postPosition: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default TopListItem;
