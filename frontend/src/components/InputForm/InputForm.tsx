import React, {useState} from 'react';
import {useAppDispatch} from '../../app/hooks';
import {postMessage} from '../../containers/messagesSlice/messagesThunks';
import {Box, Button, TextField} from '@mui/material';
import FileInput from '../FileInput/FileInput';
import {Message} from '../../types';
import SendIcon from '@mui/icons-material/Send';

const InputForm = () => {
  const dispatch = useAppDispatch();

  const [message, setMessage] = useState<Message>({
    author: '',
    message: '',
    image: null,
  });

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!message.author) {
      message.author = 'Anonymous';
    }
    const {name, value} = e.target;

    setMessage((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  const fileInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, files} = e.target;

    if (files) {
      setMessage((prevState) => ({
        ...prevState,
        [name]: files[0],
      }))
    }
  };


  const onsFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await dispatch(postMessage(message));
    } catch (e) {
      console.log(`Fetched task is error ${e}`);
    } finally {
      setMessage((prevState) => ({
        ...prevState,
        author: '',
        message: '',
      }));
    }
  };


  return (
    <Box sx={{marginTop: 10}}>
      <form onSubmit={onsFormSubmit}>
        <Box display="flex" flexDirection="column">
          <TextField
            id="authorInput"
            name="author"
            type="text"
            value={message.author}
            onChange={inputChange}
            label="Input author"
            sx={{marginBottom: 3}}
          />
          <TextField
            id="messageInput"
            name="message"
            type="text"
            value={message.message}
            onChange={inputChange}
            label="Input message"
            required
            multiline
            rows={4}
            sx={{marginBottom: 3}}
          />
          <FileInput
            onChange={fileInputChangeHandler}
            name="image"
            label="Choose file"
          />
          <Box maxWidth="sx">
            <Button
              startIcon={<SendIcon/>}
              variant="contained"
              color="primary"
              type="submit">
              Send
            </Button>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default InputForm;