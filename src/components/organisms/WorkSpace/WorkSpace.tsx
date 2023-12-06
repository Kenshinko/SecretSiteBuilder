import { lazy, Suspense, useEffect, useMemo, useState } from 'react';
import ResponsiveGridLayout from 'react-grid-layout';

import { addElement } from '@store/landingBuilder/layoutSlice';
import { useAppDispatch, useAppSellector } from '@hooks/cvTemplateHooks';
import ComponentPreloader from '@components/atoms/ComponentPreloader';
import ElementToolsPanel from '@components/organisms/ElementToolsPanel';

import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import classes from './WorkSpace.module.scss';

// Отрисовываем динамический компонент
const DynamicComponentRenderer = ({ Component, props, children, layout, onLayoutChange }) => {
  // const DynamicComponent = lazy(() => import(`@atoms/${Component}/index.ts`));
  const DynamicComponent = lazy(() => import(`../../atoms/${Component}/index.ts`));

  return (
    <Suspense fallback={<ComponentPreloader />}>
      <DynamicComponent
        key={Component}
        props={props}
        children={children}
        layout={layout}
        onLayoutChange={onLayoutChange}
      />
    </Suspense>
  );
};

const WorkSpace: React.FC = () => {
  const dispatch = useAppDispatch();
  const [width, setWidth] = useState(window.innerWidth);
  const draggableItem = useAppSellector((state) => state.layout.currentDraggableItem);
  const activeElements = useAppSellector((state) => state.layout.activeElements);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const onDrop = (layout, layoutItem, _event) => {
    dispatch(addElement({ draggableItem, layoutItem, layout }));
  };

  // Вытаскиваем макеты наших активных компонентов
  const workspaceLayout = activeElements.reduce((acc, el) => {
    return [...acc, el.layout];
  }, []);

  const handleChangeLayout = (layout) => {
    // handleChangeNestedLayout();
    // console.log('Основная разметка', layout);
  };

  const handleChangeNestedLayout = (id, layout) => {
    // console.log('Вложенная разметка', id, layout);
  };

  return (
    <div className={classes['workspace']}>
      <ResponsiveGridLayout
        className={classes['grid']}
        layout={workspaceLayout}
        cols={6}
        rowHeight={30}
        isDraggable
        // 76 пикселей зарезервировано под сайдбар + отступ слева.
        width={width - 76 - (width - 120) * 0.3}
        margin={[8, 8]}
        resizeHandles={['sw', 'se']}
        isDroppable={true}
        onDrop={onDrop}
        onLayoutChange={handleChangeLayout}
        draggableHandle=".drag-area"
      >
        {/* Динамически подгружаем компоненты и прокидывааем в них пропсы из одноимменных объектов */}
        {activeElements.map((el) => {
          return (
            <div key={el.layout.i} className={classes['item']}>
              <ElementToolsPanel layout={el.layout} />
              <DynamicComponentRenderer
                Component={el.name}
                props={el.props}
                children={el.children}
                layout={el.layout}
                onLayoutChange={handleChangeNestedLayout}
              />
            </div>
          );
        })}
      </ResponsiveGridLayout>
    </div>
  );
};

export default WorkSpace;
