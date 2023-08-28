const breakpoints = [768, 1440];

const mq = breakpoints.map(bp => `@media screen and (min-width: ${bp}px)`);

export const theme = {
  animation: {
    timingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    duration: '300ms',
  },
  shadow: '2px 2px 4px 0px rgba(0,0,0,0.75);',
  colors: {
    movieCardBg: '#FF85AB',
    white: '#fff',
    red: 'red',
  },
  sizing: value => `${value * 4}px`,
  mq,
};
