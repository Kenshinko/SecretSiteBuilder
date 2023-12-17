import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

import { insertChild } from '@/utils';

const initialState = {
  activeElements: [],
  currentDraggableItem: null,
};

const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    // Добавляем элемент в рабочую область
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

      const renewElements = insertChild(state.activeElements, parentElement, newElement);
      state.activeElements = [...renewElements];
    },
    setDraggableItem(state, action) {
      state.currentDraggableItem = action.payload;
      console.log(action.payload);
    },
  },
});

export default layoutSlice.reducer;
export const { addElement, setDraggableItem } = layoutSlice.actions;
