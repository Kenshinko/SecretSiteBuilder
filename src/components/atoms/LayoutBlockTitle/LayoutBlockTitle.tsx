import { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react';

type LayoutBlockTitleProps = {
<<<<<<< Updated upstream
  props: { text: string; wrapperStyle: {}, textStyle: {}; inputStyle: {} };
=======
  props: {
    text: string;
    wrapperStyle: { [key: string]: string | number };
    textStyle: { [key: string]: string | number };
    inputStyle: { [key: string]: string | number };
  };
>>>>>>> Stashed changes
};

const LayoutBlockTitle: React.FC<LayoutBlockTitleProps> = ({ props }) => {

  const [isEdit, setEdit] = useState(false);
  const [text, setText] = useState(props.text);

  useEffect(() => {
    setText(props.text)
  }, [props.text])

  const handleDoubleClick = () => {
    setEdit(true);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') setEdit(false);
  };

  return (
    <div style={props.wrapperStyle}>
      {isEdit ? (
        <input
          type="text"
          style={{ ...props.textStyle, ...props.inputStyle }}
<<<<<<< Updated upstream
          value={title}
=======
          value={props.text}
>>>>>>> Stashed changes
          onChange={handleChange}
          onKeyDown={handleSubmit}
          autoFocus
          onFocus={(e) => e.target.select()}
        />
      ) : (
        <h1 style={props.textStyle} onDoubleClick={handleDoubleClick}>
<<<<<<< Updated upstream
          {title}
=======
          {text}
>>>>>>> Stashed changes
        </h1>
      )}
    </div>
  );
};

export default LayoutBlockTitle;
