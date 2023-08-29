import { RotatingLines } from 'react-loader-spinner';

export const Loader = () => (
  <RotatingLines
    strokeColor="grey"
    strokeWidth="5"
    q
    animationDuration="0.75"
    width="296"
    visible={true}
  />
);
