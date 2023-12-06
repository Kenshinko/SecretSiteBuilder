import { IconButton } from '@mui/material';
import {
  OpenWith,
  Settings,
  ContentCopy,
  Delete,
  AddCircleOutline,
  RemoveCircleOutline,
} from '@mui/icons-material';

import classes from './ElementToolsPanel.module.scss';

const ElementToolsPanel: React.FC = ({ layout }) => {
  return (
    <div className={classes['tools-panel']}>
      <IconButton aria-label="Move Item" color="primary" className="drag-area">
        <OpenWith />
      </IconButton>
      <IconButton
        aria-label="Decrease Item Width"
        color="primary"
        className="Decrease Width"
        onClick={() => console.log(layout)}
      >
        <RemoveCircleOutline />
      </IconButton>
      <IconButton
        aria-label="Increase Item Width"
        color="primary"
        className="Increase Width"
        onClick={() => console.log(layout)}
      >
        <AddCircleOutline />
      </IconButton>
      <IconButton
        aria-label="Configure Item"
        color="primary"
        className="Configure Item"
        onClick={() => console.log(layout)}
      >
        <Settings />
      </IconButton>
      <IconButton
        aria-label="Copy Item"
        color="primary"
        className="Copy Item"
        onClick={() => console.log(layout)}
      >
        <ContentCopy />
      </IconButton>
      <IconButton
        aria-label="Remove Item"
        color="primary"
        className="Remove Item"
        onClick={() => console.log(layout)}
      >
        <Delete />
      </IconButton>
    </div>
  );
};

export default ElementToolsPanel;
