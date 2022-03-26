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
  strokeWidth: '1.75px'
}));

SvgIcon.defaultProps = {
  viewBox: '0 0 24 24',
  focusable: 'false',
  'aria-hidden': 'true'
};

const IconPenjualan = (props) => {
  return (
    <SvgIcon {...props}>
      <path d="M16.1666 10V22C16.1666 22 8.16663 20 8.16663 11V10C8.16663 9.27 8.56663 8.63 9.16663 8.28L10.4166 9L12.1666 8L13.9166 9L15.1666 8.28C15.7666 8.63 16.1666 9.27 16.1666 10ZM12.1666 6.5L13.9166 7.5L15.4366 6.63C14.8866 5.66 14.0766 4.94 13.1366 4.65C13.0519 3.92126 12.7027 3.24894 12.1553 2.7605C11.6079 2.27206 10.9003 2.00146 10.1666 2V4C10.6066 4 10.9666 4.29 11.1066 4.69C10.1966 5 9.42663 5.7 8.89663 6.63L10.4166 7.5L12.1666 6.5Z" />
    </SvgIcon>
  );
};

export default IconPenjualan;
