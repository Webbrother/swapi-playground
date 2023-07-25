import { Alert, Button } from 'antd';

interface ErrorMessageProps {
  message: string;
  onRetry: () => void;
  pending?: boolean;
}

export const ErrorMessage = ({ message, onRetry, pending = false }: ErrorMessageProps) => (
  <Alert
    message='Oops, there is an error!'
    description={message}
    action={
      <Button danger onClick={onRetry} loading={pending}>
        Try again?
      </Button>
    }
    type='error'
  ></Alert>
);
