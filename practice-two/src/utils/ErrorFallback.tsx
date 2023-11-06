import Button from '@components/Button';
import { useErrorBoundary } from 'react-error-boundary';

type ErrorFallbackProps = {
  error: Error;
};

const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error }) => {
  const { resetBoundary } = useErrorBoundary();

  return (
    <div className="absolute inset-0 flex flex-col gap-5 items-center justify-center">
      <h1 className="font-600 text-4xl">Error Fallback</h1>
      <pre className="text-red-600">{error.message}</pre>
      <Button variant="primary" onClick={resetBoundary}>
        Try again
      </Button>
    </div>
  );
};

export default ErrorFallback;
