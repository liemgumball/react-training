import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Loader = () => (
  <div className="absolute inset-0 flex items-center justify-center">
    <FontAwesomeIcon
      icon={faSpinner}
      spinPulse
      className="text-custom-yellow text-6xl"
    />
  </div>
);

export default Loader;
