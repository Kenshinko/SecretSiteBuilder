import { useState, FC } from "react";

type LayoutBlockImageProps = {
  props: {
    text: string;
    wrapperStyle: { [key: string]: string | number };
    inputStyle: { [key: string]: string | number };
  };

};

const LayoutBlockImage: React.FC<LayoutBlockImageProps> = ({ props }) => {
  return (
    <div style={props.wrapperStyle}>
      <img src={props.text} style={props.inputStyle}></img>
    </div>

  props: {
    text: string;
    wrapperStyle: { [key: string]: string | number };
    textStyle: { [key: string]: string | number };
  };
};

const LayoutBlockImage: FC<LayoutBlockImageProps> = ({ props }) => {

  const [ url, setUrl ] = useState<string>(props.text);

  const [ isEditing, setIsEditing ] = useState<boolean>(false);

  const wrapperStyle = {
    ...props.textStyle,
    backgroundImage: `url(${url})`,
    backgroundSize: 'contain',
    height: '100%',
    widht: 'auto',
    backgroundRepeat: 'no-repeat'
  };

  const handleDoubleClick: (e: React.MouseEvent) => void = (e) => {
    e.preventDefault();
    setIsEditing(true);
  }


  const handleUrl: (e: React.ChangeEvent<HTMLTextAreaElement>) => void = (e) => {
    const url  = e.target.value;
    setUrl(url);
  }

  const handleKeyDown: (e: React.KeyboardEvent) => void = (e) => {
    if (e.key === 'Enter') {
      setIsEditing(false);
    }
  }

  const inputPannel:() => JSX.Element = () => {
    return (
      <div className="anchor__input-pannel">
        <label>
        url:
        <textarea 
          value={url} 
          onChange={(e) => handleUrl(e)}
          onKeyDown={(e) => handleKeyDown(e)}
          style={{
            width: '200px',
            height: '200px'
          }}
        >
          </textarea>
        </label>
      </div>
    )
  }
  
  return (
    <>
      <div style={wrapperStyle} onContextMenu={(e) => handleDoubleClick(e)}>
      .{ isEditing && inputPannel() }
      </div>
    </>
  );
};

export default LayoutBlockImage;
