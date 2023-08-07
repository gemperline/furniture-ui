import { createTheme } from '@mui/material/styles';
import { createGlobalStyle } from 'styled-components';
import { colors, container } from './style-variables';

declare module '@mui/material/styles' {
  interface Palette {
    system: Palette['primary'];
  }
  interface PaletteOptions {
    system: PaletteOptions['primary'];
  }

  interface PaletteColor {
    primary?: string;
    white?: string;
    shadedGray?: string;
    lightBlue?: string;
    lightGray?: string;
    black?: string;
    fadedBlue?: string;
    blue?: string;
    gray?: string;
    fadedGray?: string;
  }
  interface SimplePaletteColorOptions {
    primary?: string;
    white?: string;
    shadedGray?: string;
    lightBlue?: string;
    lightGray?: string;
    black?: string;
    fadedBlue?: string;
    blue?: string;
    gray?: string;
    fadedGray?: string;
  }
}

declare module '@mui/material/styles/createBreakpoints' {
    interface BreakpointOverrides {
      xs: true;
      sm: true;
      md: true;
      lg: true;
      xl: true;
    }
  }

const inputRoot = {
  backgroundColor: 'rgba(0,0,0, 0.04)',
  '&:hover': {
    backgroundColor: 'rgba(0,0,0, 0.10)',
    '&:before': {
      borderBottom: '1px solid #009AD9 !important',
    },
    '&.Mui-disabled:before': {
      borderBottom: '1px dotted rgba(0, 0, 0, 0.87) !important',
    },
  },
  '&.Mui-focused': {
    backgroundColor: 'rgba(0,0,0, 0.10)',
  },
};

export const theme = createTheme({
  spacing: 6,
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    values: {
      xs: 0,
      sm: 380,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      main: '#006FB9',
    },
    secondary: {
      main: '#009AD9',
    },
    system: {
      primary: '#006FB9',
      main: '#009AD9',
      shadedGray: '#E2E2E2',
      white: '#FFFFFF',
      lightGray: '#FAFAFA',
      lightBlue: '#009AD9',
      gray: '#F4F5F7',
      black: '#333333',
      fadedBlue: '#F4FBFF',
      blue: '#199AD9',
      fadedGray: '#E0E0E0',
    },
  },
  typography: {
    body1: {
      fontSize: '14px',
    },
    body2: {
      fontSize: '12px',
    },
  },
  components: {
    MuiTableCell: {
      styleOverrides: {
        stickyHeader: {
          backgroundColor: '#F4F5F7',
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: inputRoot,
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: inputRoot,
      },
    },
    // Commented out since it's not necessary for button focus, in favor of internal MUI style
    // MuiButton: {
    //   root: {
    //     '&:focus': {
    //       '-webkit-box-shadow': `0px 0px 0px 1.5px ${colors.amnBlue}`,
    //       boxShadow: `0px 0px 0px 1.5px ${colors.amnBlue}`,
    //       opacity: 0.8,
    //     },
    //   },
    // },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          padding: 12,
        },
      },
    },
  },
});

theme.typography.body1 = {
  fontSize: '12px',
  [theme.breakpoints.up('lg')]: {
    fontSize: '14px',
  },
};

export const secondaryTheme = createTheme({
  ...theme,
  palette: {
    primary: {
      main: '#009AD9',
    },
    secondary: {
      main: '#006FB9',
    },
  },
});

export const GlobalStyle = createGlobalStyle({
  /** ----------- Global ----------- */
  html: {
    overflow: 'hidden',
  },
  body: {
    height: '100%',
    width: '100%',
    fontFamily: 'Roboto, Helvetica Neue, Helvetica, Arial, sans-serif',
    '&[data-dialog="true"] [role="tooltip"]': {
      zIndex: 1302,
    },
  },
  '#app-component-access-id, .MuiDataGrid-virtualScroller, .MuiPaper-root.MuiTableContainer-root': {
    '&::-webkit-scrollbar': {
      /* Uncomment to have the scrollbar actually hide/show on hover instead of being transparent. May cause screen to adjust a few pixels */
      /* display: 'none', */
      width: '16px',
      height: '16px',
      backgroundColor: '#FAFAFA',
    },
    '&::-webkit-scrollbar-button': {
      display: 'none',
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: 9999,
      backgroundColor: '#C7C7C7',
      minHeight: 64,
      border: '4px solid rgba(0,0,0,0.0)',
      '&:hover': {
        backgroundColor: '#7C7C7C',
      },
    },
    '&::-webkit-scrollbar-corner': {
      backgroundColor: '#FAFAFA',
    },
  },
  '.MuiDataGrid-virtualScroller': {
    '&::-webkit-scrollbar': {
      ':horizontal': {
        borderTop: '1px solid #CCCCCC',
      },
      ':vertical': {
        borderLeft: '1px solid #CCCCCC',
      },
    },
  },
  '&::-webkit-scrollbar': {
    opacity: 0,
    background: 'transparent',
    width: '12px',
    height: '12px',
  },
  '&::-webkit-scrollbar-button': {
    display: 'none',
  },
  '&::-webkit-scrollbar-thumb': {
    borderRadius: 9999,
    minHeight: 44,
    border: '3px solid rgba(0,0,0,0.0)',
    backgroundClip: 'padding-box',
  },
  '&::-webkit-scrollbar-track': {
    background: 'transparent',
  },
  '&:not(.MuiDataGrid-virtualScroller):hover': {
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#C7C7C7',
    },
  },
  '#root': {
    minHeight: '100%',
    minWidth: '100%',
  },
  'p label': {
    lineHeight: '1.5em',
    fontSize: '14px',
    color: colors.text,
  },
  'input select': {
    fontFamily: 'inherit',
    fontSize: 'inherit',
  },
  '.link': {
    cursor: 'pointer',
    color: colors.amnBlue,
    '&:visited': {
      color: colors.amnBlue,
    },
  },
  '.small-text': {
    fontSize: '12px',
  },
  '.label': {
    color: colors.text,
  },
  '.detail-text': {
    color: colors.amnDeeperBlue,
    fontSize: '14px',
  },
  '.title-standard': {
    color: colors.amnPurple,
  },
  '.subtitle1': {
    color: colors.amnPurple,
    fontSize: '16px',
  },
  '.subtitle2': {
    color: colors.darkText,
    fontSize: '16px',
  },
  '.filter-title': {
    color: '#707070',
    fontSize: '12px',
  },
  '.disabled': {
    color: 'rgba(0, 0, 0, 0.38)',
    '&.input': {
      cursor: 'not-allowed',
    },
  },
  /** ----------- Material UI Overrides ----------- */
  '.MuiAlert-root': {
    fontSize: '14px',
  },
  /** ----------- Layout ----------- */
  '.page': {
    padding: '12px',
  },
  '.page-section': {
    padding: '12px',
  },
  '.page-section-vertical': {
    padding: '12px 0px',
  },
  '.page-section-horizontal': {
    padding: '0px 12px',
  },
  '.page-title': {
    fontSize: '18px',
    color: colors.darkText,
    fontWeight: 450,
  },
  '.layout': {
    padding: '12px',
  },
  '.divider-horizontal': {
    margin: '20px 0px',
  },
  '.divider-horizontal > div': {
    height: '1px',
    backgroundColor: '#D1D1D1',
  },
  /** Tabs */
  '.tab-container': {
    borderLeft: 'none',
    borderRight: 'none',
    borderTop: 'none',
    borderBottom: '1px solid #e3dfdf',
  },
  '.tab': {
    width: '100%',
  },
  '.tab-box': {
    padding: '24px 0 !important',
  },
  '.default-tab': {
    color: '#333333',

    opacity: 1,
    '&.profileTab': {
      backgroundColor: '#fff',
      color: colors.text,
      textTransform: 'none',
      fontSize: '16px',
      width: 'inherit',
    },
  },
  '.active-tab': {
    color: colors.amnPurple,
  },
  '.active-tab-profile': {
    color: colors.amnBlue,
    backgroundColor: colors.white,
    textTransform: 'none',
    fontSize: '16px',
    width: '20px',
  },

  '.tab-indicator': {
    height: 4,
    backgroundColor: colors.amnPurple,
    '&.profileTab': {
      backgroundColor: colors.amnBlue,
    },
  },
  /** ----------- Containers ----------- */
  '.paper': {
    width: '100%',
    border: `1px solid ${colors.containerBorder}`,
    borderRadius: container.borderRadius,
    padding: '10px 25px 25px 22px',
    '&.paper-small': {
      padding: '1px',
    },
  },
  '.paper-2': {
    border: '1px solid #CCCCCC',
    borderRadius: '0px',
  },
  '.center': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  '.center-fullscreen': {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
  },

  /** ----------- Controls ----------- */
  /** Buttons */
  '.cancelButton': {
    backgroundColor: colors.amnGrey,
    marginRight: '10px',

    color: colors.white,
    '&:hover': {
      backgroundColor: colors.amnGrey,
    },
  },
  '.button': {
    backgroundColor: colors.amnBlue,
    color: colors.white,
    '&:hover': {
      backgroundColor: colors.amnBlue,
    },
  },
  '.action-button': {
    backgroundColor: '#006FB9',
    paddingLeft: '25px',
    paddingRight: '25px',
    color: 'white',
    '&:hover': {
      backgroundColor: '#006FB9',
    },
  },
  '.button-focus': {
    '&:focus': {
      '-webkit-box-shadow': `0px 0px 0px 1.5px ${colors.amnBlue}`,
      boxShadow: `0px 0px 0px 1.5px ${colors.amnBlue}`,
      opacity: 0.8,
    },
  },
  /** Checkbox */
  '.checkbox.MuiCheckbox-colorSecondary.Mui-checked': {
    color: colors.amnLightBlue,
  },
  '.checkboxIcon': {
    '&:hover': {
      fill: colors.amnLightBlue,
    },
  },
  /** ToolTip  */
  '.customGlobalTooltip': {
    backgroundColor: colors.white,
    color: colors.amnNavyBlue,
    opacity: 1,
    minWidth: 100,
    textAlign: 'center',
    fontFamily: 'IBM Plex Sans, sans-serif',
    font: 'normal normal normal 12px/20px IBM Plex Sans',
    border: `1px solid ${colors.amnDarkGrey}`,
    display: 'inline-block',
  },
  '.customGlobalArrow': {
    color: colors.white,
    opacity: 1,
    marginRight: 15,
    '&::before': {
      border: `1px solid ${colors.amnDarkGrey}`,
    },
  },
  /** Toggle Button Group */
  '.toggle-button-group': {
    '& .Mui-selected': {
      backgroundColor: colors.amnPurple,
      color: 'white',
      '&:hover': {
        backgroundColor: colors.amnPurple,
        color: 'white',
      },
    },
  },
  /** Textfield */
  '.outlined-textfield': {
    backgroundColor: '#fff',
    borderRadius: '4px',
  },
  '.outlined-textfield-input': {
    backgroundColor: '#fff',
    borderRadius: '4px',
    fontSize: '14px',
  },
  /** Snackbar */
  '.absoluteSnackbar': {
    position: 'absolute',
    bottom: 84,
    width: '100%',
  },
  '.unordered-list': {
    margin: '0px',
    padding: '0px',
    paddingLeft: '16px',
    listStyleType: 'disc',
    '& > li': {
      lineHeight: 1.5,
    },
  },
  '.unordered-list-item': {
    paddingTop: '3px',
    '&:not(:last-child)': {
      paddingTop: '3px !important',
      paddingBottom: '3px !important',
    },
    '&:first-child': {
      paddingTop: '0px !important',
      paddingBottom: '3px !important',
    },
    '&:only-child': {
      paddingTop: '0px !important',
      paddingBottom: '0px !important',
    },
  },
  /** ----------- Notifications ----------- */
  '.snackbar-success': {
    color: 'green',
  },
  '.snackbar-error': {
    color: 'red',
  },
  '.disable-scroll': {
    overflowY: 'hidden',
    marginRight: 17,
  },
  /** ---------Dialog---------- **/
  '.labelDialog': {
    color: '#0c0c0c',
    paddingBottom: 4,
  },
  /** ---------X-Grid---------- **/
  '.x-grid-centered-cell': {
    // center items if alignment is set to center
    margin: '0 auto',
    // padding to account for header menu icon
    paddingRight: '20px',
  },
  '.x-grid-header': {
    backgroundColor: '#F4F5F7',
  },
  '*[role="tooltip"][x-placement="right-start"]': {
    'max-width': '50%',
    'white-space': 'break-spaces',
    'max-height': '150px',
    'overflow-y': 'scroll',
    'box-shadow':
      '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
  },
  '.xgrid-row-highlight': {
    backgroundColor: '#BADAEE',
  },
  '#columns-filter-operator-select-label': {
    marginRight: '-2px',
  },
});
