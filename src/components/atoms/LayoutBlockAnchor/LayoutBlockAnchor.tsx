import { useState } from "react";

import './LayoutBlockAnchor.scss';

type LayoutBlockAnchorProps = {
  props: {
    text: string;
    url: string,
    wrapperStyle: { [key: string]: string | number };
    textStyle: { [key: string]: string | number };
    inputStyle: { [key: string]: string | number };
  };
};

type StyleType = {
  [key: string]: string | number ;
}

const LayoutBlockAnchor: React.FC<LayoutBlockAnchorProps> = ({ props }) => {

  const [ text, setText ] = useState<string>(props.text);
  const [ url, setUrl ] = useState<string>(props.url);
  const [ fs, setFs ] = useState<string|number>(props.textStyle.fontSize);
  const [ isEditing, setIsEditing ] = useState<boolean>(false);

  const wrapperStyle: StyleType = {
    ...props.wrapperStyle,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    flexDirection: 'column'
  }

  const textStyle = {
    ...props.textStyle,
    fontSize: fs,
  }

  const handleText: (e: React.ChangeEvent<HTMLInputElement>) => void = (e) => {
    const text = e.target.value;
    setText(text);
  }

  const handleUrl: (e: React.ChangeEvent<HTMLInputElement>) => void = (e) => {
    const url = e.target.value;
    setUrl(url);
  }

  const handleFontSize: (e: React.ChangeEvent<HTMLInputElement>) => void = (e) => {
    const fs = e.target.value;
    setFs(fs);
  }

  const handleDoubleClick: (e: React.MouseEvent) => void = (e) => {
    e.preventDefault();
    setIsEditing(true);
  }

  const handleKeyDown: (e: React.KeyboardEvent) => void = (e) => {
    if (e.key === 'Enter') {
      setIsEditing(false);
    }
  }

  const inputPannel = () => {
    return (
      <div className="anchor__input-pannel">
        <label>
          text:
          <input 
            value={text} 
            onChange={(e) => handleText(e)}
            onKeyDown={(e) => handleKeyDown(e)}
          >
          </input>
        </label>
        <label>
        url:
        <input 
          value={url} 
          onChange={(e) => handleUrl(e)}
          onKeyDown={(e) => handleKeyDown(e)}
        >
          </input>
        </label>
        <label>
          font-size:
          <input 
            value={fs} 
            onChange={(e) => handleFontSize(e)}
            onKeyDown={(e) => handleKeyDown(e)}
          >
          </input>
        </label>
      </div>
    )
  }

  const content = () => {
    return (
      <a  
          href={url} 
          style={textStyle}
          onContextMenu={(e) => handleDoubleClick(e)}
        >
          {text}
        </a>
    )
  }

  return (
    <div style={wrapperStyle}>
      { isEditing && inputPannel() }
      { !isEditing && content() }
    </div>
  );
};

export default LayoutBlockAnchor;