import ContainerDIV from '@components/atoms/ContainerDIV';

type LayoutBlockArticleProps = {
  props: { text: string; wrapperStyle: {}; textStyle: {}; inputStyle: {} };
  children: [];
  layout: {};
};

const LayoutBlockArticle: React.FC<LayoutBlockArticleProps> = (props) => {
  return <ContainerDIV children={props.children} layout={props.layout} />;
};

export default LayoutBlockArticle;
