export interface IMessage {
  success?: string;
  error?: string;
  prefix?: string;
}

export interface AlertState {
  visible: boolean;
  message?: IMessage;
  timeout?: number;
}
