import { animate, motion } from 'framer-motion'
 import React from 'react'

// for container elements
// 控制時間
const containerVariants = {
  show: {
    transition: {
      staggerChildren: 0.2, //控制每個子項目的開始動作時間
      delayChildren: 0.05, //控制整個子項目的開始動作時間
    },
  },
  hide: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

// form default/template
// 控制樣式
const itemVariants = {
  fadeIn: {
    hide: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.5, ease: 'easeIn' } },
  },
  fadeInUp: {
    hide: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeIn',
      },
    },
  },
  fadeInRight: {
    hide: {
      opacity: 0,
      x: -50,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: 'easeIn',
      },
    },
  },
  fadeInLeft: {
    hide: {
      opacity: 0,
      x: 50,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: 'easeIn',
      },
    },
  },
}
// 控制效果 時間 
// item use: calculate input porps and return new variants
const calcItemVariants = (
  type = '',
  duration = 0.5,
  ease = 'easeIn',
  x = [0, 0],
  y = [0, 0], 
) => {
  // type 3選1
  const typesMap = { up: 'fadeInUp', left: 'fadeInLeft', right: 'fadeInRight' }

  const vType = Object.keys(typesMap).includes(type) ? typesMap[type] : ''

  const newVariant = vType ? itemVariants[vType] : itemVariants['fadeIn']

  if (Number(duration) !== 0.5 && Number(duration) > 0) {
    newVariant.show.transition.duration = Number(duration)
  }

  // Out or InOut r bad options...
  const easeList = [
    'linear',
    //'easeIn', // default
    'easeOut',
    'easeInOut',
    'circIn',
    'circOut',
    'circInOut',
    'backIn',
    'backOut',
    'backInOut',
    'anticipate',
  ]

  if (easeList.includes(ease)) {
    newVariant.show.transition.ease = ease
  }

  if (vType === 'fadeInUp' && y[0] !== y[1]) {
    newVariant.hide.y = y[0]
    newVariant.show.y = y[1]
  }

  if ((vType === 'fadeInRight' || vType === 'fadeInLeft') && x[0] !== x[1]) {
    newVariant.hide.x = x[0]
    newVariant.show.x = x[1]
  }

  // console.log(newVariant)

  return newVariant
}


 
export const ScrollMotionContainer = ({
  element = 'div',
  once = false, // once is if play only once
  amount = 'some',
  children,
  ...otherProps
}) => {
  // 定義一個函數，根據傳入的 element 返回相應的 motion 組件
  const myComponent = (element) => {
    switch (element) {
      case 'ul':
        return motion.ul;
      case 'p':
        return motion.p;
      case 'section':
        return motion.section;
      case 'span':
        return motion.span;
      case 'div':
      default:
        return motion.div;
    }
  };

  // 定義要傳遞給創建的 motion 組件的 props
  const myProps = {
    ...otherProps,
    variants: containerVariants,
    initial: 'hide',
    whileInView: 'show',
    viewport: { once, amount },
  };

  // 使用 React.createElement 創建動態組件並返回
  return React.createElement(myComponent(element), myProps, children);
};

export function ScrollMotionItem({
  element = 'div',
  type = '', // up | left | right
  duration = 0.5, // default is 0.5
  ease = 'linear', // 'linear' |  'easeOut' | 'circIn'
  x = [20, 0],
  y = [-100, 0],
  children,
  ...otherProps
}) {
  const myComponent = (element) => {
    switch (element) {
      case 'span':
        return motion.span
      case 'li':
        return motion.li
      case 'img':
        return motion.img
      case 'p':
        return motion.p
      case 'a':
        return motion.a
      case 'h1':
        return motion.h1
      case 'h2':
        return motion.h2
      case 'div':
      default:
        return motion.div
    }
  }

  const myProps = {
    ...otherProps,
    variants: calcItemVariants(type, duration, ease, x, y,animate),
  }

  return React.createElement(myComponent(element), myProps, children)
}

export function ScrollNullMotionItem({ children}) { 
 
  return React.createElement(myComponent(element), myProps, children)
}