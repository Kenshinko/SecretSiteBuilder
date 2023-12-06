import { lazy, Suspense, useRef, useEffect, useState } from 'react';
import ResponsiveGridLayout from 'react-grid-layout';

import { addElement } from '@/store/landingBuilder/layoutSlice';
import { useAppDispatch, useAppSellector } from '@hooks/cvTemplateHooks';
import ComponentPreloader from '@components/atoms/ComponentPreloader';

import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import classes from './ContainerDIV.module.scss';

// Отрисовываем динамический компонент
const DynamicComponentRenderer = ({ Component, props, children, layout }) => {
  const DynamicComponent = lazy(() => import(`@atoms/${Component}/index.ts`));

  return (
    <Suspense fallback={<ComponentPreloader />}>
      <DynamicComponent key={Component} props={props} children={children} layout={layout} />
    </Suspense>
  );
};

const ContainerDIV: React.FC = ({ children, layout, onLayoutChange }) => {
  const dispatch = useAppDispatch();
  const containerRef = useRef(null);
  const [width, setWidth] = useState(0);
  const draggableItem = useAppSellector((state) => state.layout.currentDraggableItem);

  useEffect(() => {
    const containerWidth = containerRef.current.getBoundingClientRect().width;
    setWidth(containerWidth);
  }, []);

  const onDrop = (layout, layoutItem, _event) => {
    const parentElement = _event.target.closest('.wrapper').dataset.id;

    dispatch(addElement({ draggableItem, layoutItem, parentElement }));
  };

  const workspaceLayout = children.reduce((acc, el) => {
    return [...acc, el.layout];
  }, []);

  return (
    <div ref={containerRef} className="wrapper" data-id={layout.i}>
      <ResponsiveGridLayout
        layout={workspaceLayout}
        cols={2}
        width={width}
        rowHeight={30}
        margin={[0, 0]}
        isDraggable
        isDroppable
        onDrop={onDrop}
        onLayoutChange={(temp) => onLayoutChange(layout.i, temp)}
      >
        {children.map((el, indx) => {
          return (
            <div className={classes['item']} key={workspaceLayout[indx].i}>
              <DynamicComponentRenderer
                Component={el.name}
                props={el.props}
                children={el.children}
                layout={el.layout}
              />
            </div>
          );
        })}
      </ResponsiveGridLayout>
    </div>
  );
};

export default ContainerDIV;
