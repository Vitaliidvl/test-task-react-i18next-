import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Post } from '../types';
import { getPosts } from '../api';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

type NewsProps = {
  title: string;
};


const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '2rem',
  },
  button: {
    margin: '1rem',
  },
});

const News = ({ title }: NewsProps) => {
  const { t } = useTranslation();
  const classes = useStyles();

  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const result = await getPosts();
      setPosts(result);
    };
    fetchPosts();
  }, []);

  const handleDelete = (id: number) => {
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
  };

  return (
    <div className={classes.container}>
      <h1>{title}</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <Button
            className={classes.button}
            variant="contained"
            color="secondary"
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
        onClick={() => {
          const newPost = {
            userId: 1,
            id: Math.floor(Math.random() * 1000),
            title: 'New Post',
            body: 'This is a new post.',
          };
          setPosts([...posts, newPost]);
        }}
      >
        {t('Load More')}
      </Button>
    </div>
  );
};

export default News;
