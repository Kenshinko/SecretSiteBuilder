import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

import { insertChildrenElement } from '@/utils';

const initialState = {
  activeElements: [],
  currentDraggableItem: null,
};

const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    // Добавляем блок в рабочую область
    addElement(state, action) {
      const { draggableItem, layoutItem, parentElement } = action.payload;
      // Задаем уникльный ID элементу и параметры
      const newElement = {
        ...draggableItem,
        layout: {
          ...layoutItem,
          i: nanoid(),
          x: layoutItem.x,
          y: layoutItem.y,
          w: draggableItem.layout.w,
          h: draggableItem.layout.h,
          minW: draggableItem.layout.minW ? draggableItem.layout.minW : undefined,
          maxW: draggableItem.layout.maxW || Infinity,
          minH: draggableItem.layout.minH ? draggableItem.layout.minH : undefined,
          maxH: draggableItem.layout.maxH || Infinity,
        },
      };

      const renewElements = insertChildrenElement(state.activeElements, parentElement, newElement);
      state.activeElements = [...renewElements];
    },
    copyElement(state, action) {
      const indx = state.activeElements.findIndex(
        (element) => element.layout.i === action.payload.i,
      );

      console.log(newElement);
    },
    // Удаляем блок из рабочей области
    deleteElement(state, action) {
      const indx = state.activeElements.findIndex(
        (element) => element.layout.i === action.payload.i,
      );

      state.activeElements.splice(indx, 1);
    },
    // Увеличиваем количество колонок в блоке
    increaseElementColumns(state, action) {
      const indx = state.activeElements.findIndex(
        (element) => element.layout.i === action.payload.i,
      );

      state.activeElements[indx].layout.w = state.activeElements[indx].layout.w + 1;
      state.activeElements[indx].columns = state.activeElements[indx].columns + 1;
    },
    // Уменьшаем количество колонок в блоке
    decreaseElementColumns(state, action) {
      const indx = state.activeElements.findIndex(
        (element) => element.layout.i === action.payload.i,
      );

      state.activeElements[indx].layout.w = state.activeElements[indx].layout.w - 1;
      state.activeElements[indx].columns = state.activeElements[indx].columns - 1;
    },
    // Помещаем информацию о текущем перемещаемом блоке в стор
    setDraggableItem(state, action) {
      state.currentDraggableItem = action.payload;
    },
  },
});

export default layoutSlice.reducer;
export const {
  addElement,
  copyElement,
  deleteElement,
  increaseElementColumns,
  decreaseElementColumns,
  setDraggableItem,
} = layoutSlice.actions;
