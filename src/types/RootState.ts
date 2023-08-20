
import { INavigationMenu } from '../app/components/Navigation/store/navigation.redux';
import { IBreadcrumbNavigation } from '../app/components/Common/BreadcrumbNavigation/BreadcrumbNavigation.redux';
import { ILookupState } from '../store/redux-store/lookup/initialState';

export interface RootState {
//   global?: IGlobal;
  navigationMenu?: INavigationMenu;
  lookup: ILookupState;
  breadcrumb?: IBreadcrumbNavigation;
};
