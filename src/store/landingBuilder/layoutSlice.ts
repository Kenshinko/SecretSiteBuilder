import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

import { insertChild } from '@/utils';

const initialState = {
  activeElements: [
    {
      name: 'TitleH1',
      props: { title: 'Заголовок H1' },
      children: [],
      layout: { i: nanoid(), x: 2, y: 0, w: 1, h: 1 },
    },
    {
      name: 'ContainerDIV',
      props: {},
      children: [
        {
          name: 'TitleH1',
          props: { title: 'Заголовок H1' },
          children: [],
          layout: { i: nanoid(), x: 0, y: 0, w: 1, h: 1 },
        },
        {
          name: 'TitleH1',
          props: { title: 'Заголовок H1' },
          children: [],
          layout: { i: nanoid(), x: 0, y: 0, w: 1, h: 1 },
        },
      ],
      layout: { i: nanoid(), x: 0, y: 0, w: 2, h: 2 },
    },
    {
      name: 'ContainerDIV',
      props: {},
      children: [
        {
          name: 'TitleH1',
          props: { title: 'Заголовок H1' },
          children: [],
          layout: { i: nanoid(), x: 0, y: 0, w: 1, h: 1 },
        },
      ],
      layout: { i: nanoid(), x: 0, y: 0, w: 2, h: 2 },
    },
    {
      name: 'ContainerDIV',
      props: {},
      children: [
        {
          name: 'TitleH1',
          props: { title: 'Заголовок H1' },
          children: [],
          layout: { i: nanoid(), x: 0, y: 0, w: 1, h: 1 },
        },
        {
          name: 'TitleH1',
          props: { title: 'Заголовок H1' },
          children: [],
          layout: { i: nanoid(), x: 0, y: 0, w: 1, h: 1 },
        },
      ],
      layout: { i: nanoid(), x: 0, y: 0, w: 2, h: 2 },
    },
    {
      name: 'ContainerDIV',
      props: {},
      children: [
        {
          name: 'TitleH1',
          props: { title: 'Заголовок H1' },
          children: [],
          layout: { i: nanoid(), x: 0, y: 0, w: 1, h: 1 },
        },
        {
          name: 'TitleH1',
          props: { title: 'Заголовок H1' },
          children: [],
          layout: { i: nanoid(), x: 0, y: 0, w: 1, h: 1 },
        },
        {
          name: 'TitleH1',
          props: { title: 'Заголовок H1' },
          children: [],
          layout: { i: nanoid(), x: 0, y: 0, w: 1, h: 1 },
        },
      ],
      layout: { i: nanoid(), x: 0, y: 0, w: 2, h: 2 },
    },
  ],
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
