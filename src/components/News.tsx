import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { AppDispatch, NewsProps, Post } from '../types';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {
  selectPosts,
  addPost,
  deletePost,
  fetchPosts,
} from '../reducers/postsSlice';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '600px',
    height: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(4),
  },
  button: {
    margin: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  postContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(3),
    padding: theme.spacing(3),
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3],
  },
  postTitle: {
    fontSize: '2rem',
    marginBottom: theme.spacing(2),
    color: theme.palette.primary.main,
  },
  postBody: {
    fontSize: '1.2rem',
    marginBottom: theme.spacing(2),
    textAlign: 'justify',
  },
}));

const News = ({ title }: NewsProps) => {
  const { t } = useTranslation();
  const classes = useStyles();
  const dispatch = useDispatch<AppDispatch>();
  const posts = useSelector(selectPosts);

  const [limit, setLimit] = useState(5);

  useEffect(() => {
    dispatch(fetchPosts(limit));
  }, [dispatch, limit]);

  const handleLoadMore = () => {
    setLimit(limit + 5);
    dispatch(fetchPosts(limit + 5)).then((result) => {
      dispatch(addPost(result));
    });
  };

  const handleDelete = (id: number) => {
    dispatch(deletePost(id));
  };

  const handleAddPost = () => {
    const newPost = {
      userId: 1,
      id: Math.floor(Math.random() * 1000),
      title: 'New Post',
      body: 'This is a new post.',
    };
    dispatch(addPost(newPost));
  };

  return (
    <div className={classes.container}>
      <h1>{title}</h1>
      {posts.map((post) => (
        <div className={classes.postContainer} key={post.id}>
          <h2 className={classes.postTitle}>{post.title}</h2>
          <p className={classes.postBody}>{post.body}</p>
          <Button
            className={classes.button}
            variant="contained"
            onClick={() => handleDelete(post.id)}
          >
            {t('Delete')}
          </Button>
        </div>
      ))}
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={handleAddPost}
      >
        {t('Add Post')}
      </Button>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={handleLoadMore}
      >
        {t('Load More')}
      </Button>
    </div>
  );
};

export default News;
