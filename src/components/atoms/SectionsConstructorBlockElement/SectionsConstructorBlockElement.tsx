import LayoutBlockAnchor from "../LayoutBlockAnchor";
import LayoutBlockButton from "../LayoutBlockButton";
import LayoutBlockImage from "../LayoutBlockImage";
import LayoutBlockParagraph from "../LayoutBlockParagraph";
import LayoutBlockTitle from "../LayoutBlockTitle";

type SectionsConstructorBlockElementType = {
  type: string;
  params: {
    [key: string]: string | number | { [key: string]: string | number };
  }
}

const SectionsConstructorBlockElement: React.FC<SectionsConstructorBlockElementType> = ({type = '', params = {}}) => {
  const { props } = params; 

  const isImg = false || type === 'image';
  const isBtn = false || type === 'button';
  const isTitle = false || type === 'title';
  const isParagraph = false || type === 'paragraph';
  const isAnchor = false || type === 'anchor';

  return (
    <>
      { isImg && <LayoutBlockImage props={props}/>}
      { isTitle && <LayoutBlockTitle props={props}/>}
      { isBtn && <LayoutBlockButton props={props}/> }
      { isParagraph && <LayoutBlockParagraph props={props} />}
      { isAnchor && <LayoutBlockAnchor props={props} /> }
    </>
  )
}

export default SectionsConstructorBlockElement;