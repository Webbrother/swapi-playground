import axios, { AxiosError } from 'axios';

export interface ForwardAdapter<DTO = unknown, T = unknown, A = unknown> {
  forward(item: DTO, arg?: A): T;
}

export interface BackwardAdapter<DTO = unknown, T = unknown, A = unknown> {
  backward(item: T, arg?: A): DTO;
}

export interface TwoWayAdapter<DTO = unknown, T = unknown, A1 = unknown, A2 = unknown>
  extends ForwardAdapter<DTO, T, A1>,
    BackwardAdapter<DTO, T, A2> {}

interface ErrorResponse {
  msg: string;
}

export type HttpError = AxiosError<ErrorResponse>;

export function isAxiosError(error: unknown): error is HttpError {
  return axios.isAxiosError(error);
}
