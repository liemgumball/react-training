import Button from '@components/Button';
import { NOTIFIES_MSG } from '@constants/messages';
import { useErrorBoundary } from 'react-error-boundary';

type ErrorFallbackProps = {
  error: Error;
};

const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error }) => {
  const { resetBoundary } = useErrorBoundary(); // reset boundary for hooks

  return (
    <div className="absolute inset-0 flex flex-col gap-5 items-center justify-center">
      <h1 className="font-600 text-4xl">{NOTIFIES_MSG.ERROR_FALLBACK}</h1>
      <p className="text-red-600 normal-case ">{error.message}</p>
      <Button primary onClick={resetBoundary}>
        Reload the page
      </Button>
    </div>
  );
};

export default ErrorFallback;
