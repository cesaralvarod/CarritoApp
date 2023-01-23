import {createContext} from 'react';
import {UIActions, UIState} from '../../interfaces/ui.interface';

export type UIContextProps = {
  ui: UIState;
  actions: UIActions;
};

const UIContext = createContext<UIContextProps>({} as UIContextProps);

export default UIContext;
