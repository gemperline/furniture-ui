
import { INavigationMenu } from '../../src/app/components/Common/Navigation/store/navigation.redux';
import { ILookupState } from '../store/redux-store/lookup/initialState';

export interface RootState {
//   global?: IGlobal;
  navigationMenu?: INavigationMenu;
  lookup: ILookupState;
}
