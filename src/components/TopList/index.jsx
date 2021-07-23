/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  List,
  ListItem,
  Typography,
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  CardHeader,
  CardContent,
  Divider,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { removePost } from '../../reducers/redditSlice';
import { timeAgo } from '../../utils/time';
import styles from './styles';

const useStyles = makeStyles(styles);

const TopList = (props) => {
  const { topData } = props;
  const dispatch = useDispatch();
  const classes = useStyles();

  const renderList = () =>
    topData.map((post, i) => {
      const { data } = post;
      if (!post.visible) return null;
      const currentTimeAgo = timeAgo(data.created_utc);

      return (
        <>
          <ListItem
            key={data.title.replace(' ', '_')}
            alignItems="flex-start"
            className={classes.listItem}
          >
            <Card className={classes.card}>
              <CardActionArea className={classes.actionArea}>
                <CardHeader
                  className={classes.cardHeader}
                  classes={{ content: classes.cardHeaderContent }}
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
                <Button
                  size="small"
                  color="primary"
                  onClick={() => dispatch(removePost({ entryPos: i }))}
                >
                  Remove Post
                </Button>
              </CardActionArea>
            </Card>
          </ListItem>
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
