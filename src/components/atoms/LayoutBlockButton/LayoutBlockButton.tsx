type LayoutBlockButtonProps = {
  props: {
    text: string;
    url: string,
    wrapperStyle: { [key: string]: string | number };
    textStyle: { [key: string]: string | number };
    inputStyle: { [key: string]: string | number };
  };
};

const LayoutBlockButton: React.FC<LayoutBlockButtonProps> = ({ props }) => {
  
  return (
    <div style={props.wrapperStyle}>
      <button style={props.textStyle}>{props.text}</button>
    </div>
  );
};

export default LayoutBlockButton;