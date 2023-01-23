import {useContext} from 'react';
import UIContext from '../context/ui/UIContext';
import {UIActions, UIState} from '../interfaces/ui.interface';

interface HookReturns extends UIState, UIActions {}

export const useUI = (): HookReturns => {
  const {ui, actions} = useContext(UIContext);

  const {loading} = ui;
  const {setLoading} = actions;

  return {loading, setLoading};
};
