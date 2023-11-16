import Button from '@components/Button';
import { useNavigate } from 'react-router-dom';

const EmptyPage = () => {
  const navigate = useNavigate();

  return (
    <div className="absolute inset-0 flex flex-col gap-5 items-center justify-center">
      <h1 className="font-600 text-4xl my-5">
        This is a feature in the future
      </h1>
      <Button
        className="capitalize"
        variant="primary"
        onClick={() => {
          navigate('/');
        }}
      >
        return to home
      </Button>
    </div>
  );
};

export default EmptyPage;
