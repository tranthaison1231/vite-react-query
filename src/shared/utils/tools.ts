import { notification } from 'antd';

export const showError = (error: Error | string) => {
  const message = (() => {
    if (typeof error === 'string') return error;
    return error?.message ?? 'Server Internall Error. Please try later !!!!';
  })();

  return notification.error({
    message: message,
  });
};
