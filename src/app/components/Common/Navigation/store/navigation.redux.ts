import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { isNullOrUndefined } from '../../../../helpers/objectHelpers';

export type NavigationTypes =
  | 'tables'
  | 'chairs'
  | 'lighting'

export type NavigationHomeTypes =
  | 'credentialingDashboard'
  | 'recruiterWorkDesk'
  | 'accountManagementWorkDesk'
  | 'credentialingWorkDesk'
  | 'pricingWorkDesk';
export type NavigationFacilityTypes = 'facilityOverview' | 'facilityCreateOrder' | 'facilityCreateUnit';
export type NavigationRecentTypes = 'recentCandidate' | 'recentPlacement' | 'recentOrder' | 'recentFacility';
export type NavigationSettingTypes = 'userManagement' | 'templateEditor';
export type NavigationTemplateEditorTypes = 'templateEditor.clientConfirmation' | 'templateEditor.candidateContracts';
export type NavigationAction = 'candidateDrawer' | 'facilityDrawer' | 'orderDrawer' | 'placementDrawer';
export type NavigationSubTypes =
  | NavigationHomeTypes
  | NavigationFacilityTypes
  | NavigationRecentTypes
  | NavigationSettingTypes
  | NavigationTemplateEditorTypes;
export type INavigation = NavigationMenu<NavigationTypes, NavigationSubTypes, string>;

export interface NavigationMenu<T, P, C = {}> extends NavigationOption<T> {
  tag: string;
  /** icon to use */
  icon: number;
  /** Sub menu options */
  subMenu?: NavigationOption<P, C>[];
}

// new navigation structure
export interface NavigationOption<T, P = {}> {
  /** key for translation and selection */
  key: T;
  /** label name */
  name?: string;
  /** nav path */
  path?: string;
  /** state variables for navigation */
  pushState?: string;
  /** access roles */
                                    //   roles?: (keyof IRoles)[];
  /** disable menu option */
  disabled?: boolean;
  /** link only active when on the given route */
  enableOnlyForRoute?: string;
  /** Sub menu options */
                                     //   subMenu?: NavigationOption<P>[];
  /** Limit to one submenu opened at a time */
  singleSubMenuExpandable?: boolean;
  /** option is not disabled, but there is no action when clicking on the menu. Default is true */
  clickable?: boolean;
  /** custom action to perform instead of navigation */
  action?: {
    type: NavigationAction;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: any;
  };
  /** Adds Overflow tooltip for text */
  removeTextOverflow?: boolean;
  // title attribute for the element
  title?: string;
}

export interface INavigationMenu {
  navigationMenu: INavigation[];
  selectedMenu: INavigation | undefined;
  selectedSubMenu?: NavigationOption<NavigationSubTypes> | NavigationOption<string>;
  navigationExpanded?: boolean;
}

const tablesMenu: INavigation = {
  key: 'tables',
  icon: 3,
  name: 'navMenu.tables',
  tag: 'tables',
  path: '/shop/tables',
};

const chairsMenu: INavigation = {
    key: 'chairs',
    icon: 3,
    name: 'navMenu.chairs',
    tag: 'chairs',
    path: '/shop/chairs',
  };

  const lightingMenu: INavigation = {
    key: 'lighting',
    icon: 3,
    name: 'navMenu.lighting',
    tag: 'lighting',
    path: '/shop/lighting',
  };

export const initialState: INavigationMenu = {
  navigationMenu: [
    tablesMenu,
    chairsMenu,
    lightingMenu,
  ],
  selectedMenu: tablesMenu,
  navigationExpanded: undefined,
};

const navigationSlice = createSlice({
    name: 'navigation',
    initialState,
    reducers: {
        // new navigation strucutre
        expandNavigation(state, action: PayloadAction<boolean>) {
        return { ...state, navigationExpanded: action.payload };
        },
    }
});

export const {
  actions: navigationActions,
  name: navigationSliceKey,
  reducer: navigationReducers,
} = navigationSlice;
