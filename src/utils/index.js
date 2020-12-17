// 向上寻找指定 className 的父元素
export function findParentElement (node, parentClassName) {
  let parentElement;
  while (node) {
    if (node.classList.contains(parentClassName)) {
      parentElement = node;
      break;
    }
    node = node.parentElement;
  }
  return parentElement;
}