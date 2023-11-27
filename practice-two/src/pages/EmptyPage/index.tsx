import Button from '@components/Button';
import { NOTIFIES_MSG } from '@constants/messages';
import { PATH_NAME } from '@constants/services';
import { useNavigate } from 'react-router-dom';

const EmptyPage = () => {
  const navigate = useNavigate();

  return (
    <div className="absolute inset-0 flex flex-col gap-5 items-center justify-center">
      <h1 className="font-600 text-4xl my-5">{NOTIFIES_MSG.FUTURE_FEATURE}</h1>
      <Button
        className="capitalize"
        primary
        onClick={() => {
          navigate(PATH_NAME.HOME);
        }}
      >
        return to home
      </Button>
    </div>
  );
};

export default EmptyPage;
