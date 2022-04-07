import { AddCircleRounded, ExitToAppRounded } from '@mui/icons-material';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomButton = styled(Button)({
  borderRadius: '8px',
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '8px 16px',
  border: 'none',
  lineHeight: 1.5,
  backgroundColor: '#2EB086',
  '&:hover': {
    backgroundColor: '#2EB086',
    boxShadow: 'none'
  },
  '&:active': {
    boxShadow: 'none',
    border: 'none'
  },
  '&:focus': {
    // boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    border: 'none'
  }
});

const BaseButton = (props) => {
  const { shape, children, ...rest } = props;

  return (
    <>
      {shape === 'withicon' ? (
        <CustomButton
          sx={{
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
          {...rest}>
          {children}
          <AddCircleRounded />
        </CustomButton>
      ) : shape === 'error' ? (
        <Button
          sx={{
            borderRadius: '8px',
            boxShadow: 'none',
            textTransform: 'none',
            fontSize: 16,
            padding: '8px 16px',
            lineHeight: 1.5
          }}
          color="error"
          variant="outlined"
          {...rest}>
          {children}
        </Button>
      ) : shape === 'exit' ? (
        <Button
          sx={{
            borderRadius: '8px',
            boxShadow: 'none',
            textTransform: 'none',
            fontSize: 16,
            padding: '8px 16px',
            lineHeight: 1.5
          }}
          color="error"
          variant="outlined"
          startIcon={<ExitToAppRounded />}
          {...rest}>
          {children}
        </Button>
      ) : (
        <CustomButton
          sx={{
            color: 'white',
            display: 'flex',
            alignItems: 'center'
          }}
          {...rest}>
          {children}
        </CustomButton>
      )}
    </>
  );
};

export default BaseButton;
