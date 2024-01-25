export interface Message {
  author: string;
  message: string;
  image: File | null;
}

export interface GetMessages {
  id: string;
  author: string;
  message: string;
  image: string | null;
}

export type ApiMessages = Omit<GetMessages, 'id'>

export interface MessagesList {
  [id: string]: ApiMessages;
}