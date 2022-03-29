import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import theme from 'themes/theme';

const blue = {
  50: '#F0F7FF',
  100: '#C2E0FF',
  200: '#80BFFF',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
  800: '#004C99',
  900: '#003A75'
};

const Tab = styled(TabUnstyled)`
  font-family: 'Poppins', sans-serif;
  color: ${theme.palette.black};
  cursor: pointer;
  font-size: 0.675rem;
  font-weight: bold;
  background-color: transparent;
  width: 100%;
  padding: 6px 12px;
  margin: 6px 6px;
  border: none;
  border-radius: 8px;
  display: flex;
  justify-content: center;

  &:hover {
    // background-color: ${blue[400]};
  }

  &:focus {
    color: #fff;
    // outline: 2px solid ${blue[200]};
    // outline-offset: 2px;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: ${theme.palette.dark.main};
    color: white;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanelCustom = styled(TabPanelUnstyled)`
  width: 100%;
  font-size: 0.875rem;
`;

const TabsList = styled(TabsListUnstyled)`
  min-width: 320px;
  border-radius: 8px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`;

function TabPanel(props) {
  const { children, value, index, variant, ...other } = props;

  return (
    <TabPanelCustom value={value} {...other}>
      {value === index &&
        (variant === 'contained' ? (
          <Box p={2} bgcolor={theme.palette.dark.light} borderRadius={2}>
            {children}
          </Box>
        ) : (
          <Box>{children}</Box>
        ))}
    </TabPanelCustom>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

export default function BaseTabs(props) {
  const { labels, children, variant } = props;
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <TabsUnstyled defaultValue={0}>
        <TabsList value={value} onChange={handleChange} aria-label="basic tabs example">
          {labels.map((label, index) => (
            <Tab key={index}>{label}</Tab>
          ))}
        </TabsList>
        {Array.isArray(children) ? (
          children.map((child, index) => (
            <TabPanel key={index} value={index} index={index} variant={variant}>
              {child}
            </TabPanel>
          ))
        ) : (
          <TabPanel value={0} index={0}>
            {children}
          </TabPanel>
        )}
      </TabsUnstyled>
    </Box>
  );
}
