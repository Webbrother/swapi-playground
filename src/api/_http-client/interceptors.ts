import { notification } from 'antd';

import { HttpError } from '../types';

export const clientErrorInterceptor = (error: HttpError) => {
  const { status } = error.response || {};

  if (status && status >= 500) {
    notification.error({
      message: 'Error',
      description: error.response?.data.msg || 'Network Error',
    });
  }

  return Promise.reject(error);
};
