import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    secondary: {
      main: '#ffffff'
    },
    error: {
      main: '#d93025',
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          width: '100%',
          '&:hover': {
            boxShadow: 'inset 100px 0 0px #2962ff',
            color: '#fff',
          }
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          maxWidth: '370px',
          borderColor: 'white',
          boxShadow: '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)'
        }
      }
    }
  },
});

export default theme;
