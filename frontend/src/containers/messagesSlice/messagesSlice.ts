import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {GetMessages, Message} from '../../types';
import {getAllMessages, postMessage} from './messagesThunks';
import {RootState} from '../../app/store';

interface MessagesState {
  message: Message[],
  isPostMessageLoading: boolean,
  messages: GetMessages[],
  isGetLoadingMessages: boolean,
}

const initialState: MessagesState = {
  message: [],
  isPostMessageLoading: false,
  messages: [],
  isGetLoadingMessages: false,
}

export const messagesSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(postMessage.pending, (state) => {
      state.isPostMessageLoading = true;
    }).addCase(postMessage.fulfilled, (state) => {
      state.isPostMessageLoading = false;
    }).addCase(postMessage.rejected, (state) => {
      state.isPostMessageLoading = false;
    });

    builder.addCase(getAllMessages.pending, (state) => {
      state.isGetLoadingMessages = true;
    }).addCase(getAllMessages.fulfilled, (state, {payload: messages}: PayloadAction<GetMessages[]>) => {
      state.isGetLoadingMessages = false;
      state.messages = messages;
    }).addCase(getAllMessages.rejected, (state) => {
      state.isGetLoadingMessages = false;
    });
  }
})

export const messageReducer = messagesSlice.reducer;
export const sendMessageToServer = (state: RootState) => state.message.isPostMessageLoading;
export const allMessages = (state: RootState) => state.message.messages;