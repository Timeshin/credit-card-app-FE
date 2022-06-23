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
          boxShadow: '1px 3px 5px 0px rgba(0,0,0,0.75)'
        }
      }
    }
  },
});

export default theme;
