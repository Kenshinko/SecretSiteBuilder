export const insertChild = (obj, target, element) => {
  if (!target) {
    return [...obj, element];
  }

  if (Array.isArray(obj)) {
    const newArr = obj.map((item) => insertChild(item, target, element));
    return newArr;
  } else if (typeof obj === 'object' && obj !== null) {
    if (obj.layout?.i === target) {
      const newObj = { ...obj };
      newObj.children = newObj.children ? [...newObj.children, element] : [element];
      return newObj;
    }

    const newObj = { ...obj };
    for (const key in newObj) {
      newObj[key] = insertChild(newObj[key], target, element);
    }
    return newObj;
  }

  return obj;
};
