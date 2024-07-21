import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureAppStore } from '../../store/configureStore';
// import { GlobalStyle, theme } from 'styles/global-styles';
import { Routes } from 'app/Routes';
import { ThemeProvider, StyledEngineProvider } from '@mui/material';
// import { GlobalDisplay } from './GlobalDisplay';
// import { MaintenancePage } from '../../maintenance';
// import { createInstance, OptimizelyFeature, OptimizelyProvider, setLogLevel } from '@optimizely/react-sdk';
import { AxiosWrapper } from '../../utils/AxiosWrapper';
// import { RecentHistory } from './RecentHistory';
import CssBaseline from '@mui/material/CssBaseline';
import { Navbar } from '../components/Navigation/Navigation';
import { GlobalDisplay } from './GlobalDisplay';

export const { store } = configureAppStore();

export const ApplicationRoot: React.FC = () => {
  return (
    <>
    <div></div>
        <StyledEngineProvider injectFirst>
          {/* <GlobalStyle /> */}
          <CssBaseline>
              <Provider store={store}>
                <React.StrictMode>
                    <div>
                      <AxiosWrapper>
                        <BrowserRouter>
                          <GlobalDisplay>
                            {/* <OptimizelyProvider optimizely={optimizely} userId={'all'}> */}
                            {/* <OptimizelyFeature feature="maintenance" autoUpdate> */}
                            <Navbar />
                            <Routes /> 
                          </GlobalDisplay>     
                        </BrowserRouter>
                      </AxiosWrapper>
                    </div>
                </React.StrictMode>
              </Provider>
          </CssBaseline>
        </StyledEngineProvider>
    </>
  );
};
