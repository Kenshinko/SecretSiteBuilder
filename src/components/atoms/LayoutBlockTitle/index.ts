import LayoutBlockTitle from './LayoutBlockTitle';

export const props = {
  name: 'LayoutBlockTitle',
  type: 'Simple Elements',
  source: 'atoms',
  props: {
    title: 'Default Title',
    titleStyle: { textAlign: 'center', fontSize: 30 },
    inputStyle: { width: '100%', border: 'none', fontWeight: 'bold' },
  },
  children: [],
  layout: { i: null, x: 0, y: 0, w: 1, h: 3 },
};

export default LayoutBlockTitle;
