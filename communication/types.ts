export type ChannelMessage =
  | RoomTextChannelMessage
  | RoomIsTypingChannelMessage;

export interface RoomTextChannelMessage {
  kind: "text";
  message: string;
  from: UserView;
}

export interface RoomIsTypingChannelMessage {
  kind: "isTyping";
  from: UserView;
}

export interface UserView {
  name: string;
  avatarUrl: string;
}

export interface MessageView {
  message: string;
  from: UserView;
}

export interface RoomView {
  roomId: number;
  name: string;
  lastMessageAt: string;
}

export type ApiSendMessage = ApiTextMessage | ApiIsTypingMessage;

export interface ApiTextMessage {
  kind: "text";
  roomId: number;
  message: string;
}

export interface ApiIsTypingMessage {
  kind: "isTyping";
  roomId: number;
}
