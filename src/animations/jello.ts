export const jello: ja.IAnimationMixin = {
  keyframes: [
    {
      offset: 0,
      transform: 'none'
    },
    {
      offset: 0.111,
      transform: 'none'
    },
    {
      offset: 0.222,
      transform: 'skewX(-12.5deg) skewY(-12.5deg)'
    },
    {
      offset: 0.333,
      transform: 'skewX(6.25deg) skewY(6.25deg)'
    },
    {
      offset: 0.444,
      transform: 'skewX(-3.125deg) skewY(-3.125deg)'
    },
    {
      offset: 0.555,
      transform: 'skewX(1.5625deg) skewY(1.5625deg)'
    },
    {
      offset: 0.666,
      transform: 'skewX(-0.78125deg) skewY(-0.78125deg)'
    },
    {
      offset: 0.777,
      transform: 'skewX(0.390625deg) skewY(0.390625deg)'
    },
    {
      offset: 0.888,
      transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)'
    },
    {
      offset: 1,
      transform: 'none'
    }
  ],
  to: 1000,
    fill: 'both',
    easing: 'ease-in-out',
  name: 'jello'
};