import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTopAsync } from '../../reducers/redditSlice';
import './styles.scss';

const RedditTop = () => {
  const { top, isLoading } = useSelector((state) => state.reddit);
  const dispatch = useDispatch();

  const getRedditTopEffect = () => {
    const params = {
      limit: 1,
    };
    dispatch(fetchTopAsync(params));
  };

  useEffect(getRedditTopEffect, []);
  useEffect(() => {
    if (!isLoading) {
      console.log(top);
    }
  }, [isLoading]);

  return (
    <div>Hello World</div>
  );
};

export default RedditTop;
