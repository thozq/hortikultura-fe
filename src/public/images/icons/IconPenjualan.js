import * as React from 'react';
import { SvgIcon as MuiSvgIcon, styled } from '@mui/material';

const SvgIcon = styled(MuiSvgIcon, {
  name: 'MopeimIcon',
  shouldForwardProp: (prop) => prop !== 'fill'
})(() => ({
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  strokeWidth: '0px'
}));

SvgIcon.defaultProps = {
  viewBox: '0 0 24 24',
  focusable: 'false',
  'aria-hidden': 'true'
};

const IconPenjualan = (props) => {
  return (
    <SvgIcon {...props}>
      <path
        d="M16.1667 10V22C16.1667 22 8.16666 20 8.16666 11V10C8.16666 9.27 8.56666 8.63 9.16666 8.28L10.4167 9L12.1667 8L13.9167 9L15.1667 8.28C15.7667 8.63 16.1667 9.27 16.1667 10ZM12.1667 6.5L13.9167 7.5L15.4367 6.63C14.8867 5.66 14.0767 4.94 13.1367 4.65C13.0519 3.92126 12.7028 3.24894 12.1553 2.7605C11.6079 2.27206 10.9003 2.00146 10.1667 2V4C10.6067 4 10.9667 4.29 11.1067 4.69C10.1967 5 9.42666 5.7 8.89666 6.63L10.4167 7.5L12.1667 6.5Z"
        fill="white"
      />
    </SvgIcon>
  );
};

export default IconPenjualan;
