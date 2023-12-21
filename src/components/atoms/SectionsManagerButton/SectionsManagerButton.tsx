import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import './SectionsManagerButton.scss';

const SectionsManagerButton = () => {
  return (
    <div className="sections-manager-btn">
      <button>
        <ViewQuiltIcon />
        <span>Section Creator</span>
      </button>
    </div>
  )
};

export default SectionsManagerButton;