import {Box} from '@mui/material';
import {useAppDispatch, useAppSelector} from '../../app/hooks.ts';
import {allMessages} from '../../containers/messagesSlice/messagesSlice.ts';
import {useEffect} from 'react';
import {getAllMessages} from '../../containers/messagesSlice/messagesThunks.ts';

const Posts = () => {
  const posts = useAppSelector(allMessages);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllMessages());
  }, [dispatch]);


  return (
    <Box maxWidth="md" border={2} padding={1}>
      {posts.map((post) => (
        <div key={post.id}>
          <div>Author: {post.author}</div>
          <div>Message: {post.message}</div>
            <img src={post.image} alt="Post Image" />
        </div>
      ))}
    </Box>
  );
};

export default Posts;