import ContainerDIV from '@components/atoms/ContainerDIV';

type SectionWrapperProps = {
  props: { text: string; wrapperStyle: {}; textStyle: {}; inputStyle: {} };
  children: [];
  layout: {};
};

const SectionWrapper: React.FC<SectionWrapperProps> = (props) => {
  return <ContainerDIV children={props.children} layout={props.layout} />;
};

export default SectionWrapper;