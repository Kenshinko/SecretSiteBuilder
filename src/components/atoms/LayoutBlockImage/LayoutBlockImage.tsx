type LayoutBlockImageProps = {
  props: { text: string; wrapperStyle: {}; inputStyle: {} };
};

const LayoutBlockImage: React.FC<LayoutBlockImageProps> = ({ props }) => {

  return (
    <div style={props.wrapperStyle}>
      <img 
        src={props.text}
        style={props.inputStyle}>
      </img>
    </div>
  );
};

export default LayoutBlockImage;