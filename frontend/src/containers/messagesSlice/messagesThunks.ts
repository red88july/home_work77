import {createAsyncThunk} from '@reduxjs/toolkit';
import {GetMessages, Message, MessagesList} from '../../types';
import axiosApi from '../../axiosApi';

export const postMessage = createAsyncThunk<void, Message>(
  'message/postMessage', async (message) => {

    const formData = new FormData();
    formData.append('author', message.author);
    formData.append('message', message.message);

    if(message.image) {
      formData.append('image', message.image);
    }

    await axiosApi.post('/messages', formData)
  }
)

export const getAllMessages = createAsyncThunk<GetMessages[]>(
  'message/getAllMessages', async () => {
    const response = await axiosApi.get<MessagesList | null>('/messages');
    const message = response.data;

    let newMessage: GetMessages[] = [];

    if (message) {
      newMessage = Object.keys(message).map(key => {
        const dish = message[key];
        return {
          ...dish,
          id: key,
        };
      });
    }
    return newMessage;
  }
);