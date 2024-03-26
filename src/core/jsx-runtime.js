import { effect, Ref, Computed } from './reactivity'

const appendChild = (parent, children) => {
  if (Array.isArray(children)) {
    children.forEach((child) => appendChild(parent, child))
    return
  }

  if (children.nodeType) {
    parent.appendChild(children)
    return
  }

  const textNode = document.createTextNode('')
  if (children instanceof Ref || children instanceof Computed) {
    effect(() => {
      textNode.textContent = children.value
    })
  } else if (typeof children === 'function') {
    effect(() => {
      textNode.textContent = children()
    })
  } else {
    textNode.textContent = children
  }
  parent.appendChild(textNode)
}

export const jsx = (tag, props, ...children) => {
  if (typeof tag === 'function') {
    return tag(props, children)
  }

  const element = document.createElement(tag)

  Object.entries(props ?? {}).forEach(([name, value]) => {
    if (name.startsWith('on') && name.toLowerCase() in window) {
      element.addEventListener(name.toLocaleLowerCase().substring(2), value)
    } else {
      element.setAttribute(name, value)
    }
  })

  if (children) {
    appendChild(element, children)
  }

  return element
}

export const render = (node, component) => node.appendChild(component)
