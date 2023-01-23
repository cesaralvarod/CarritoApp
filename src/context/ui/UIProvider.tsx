import React, {useReducer} from 'react';
import {UIState} from '../../interfaces/ui.interface';
import UIContext from './UIContext';
import {uiReducer} from './uiReducer';

const INITIAL_STATE: UIState = {
  loading: false,
};

interface Props {
  children: React.ReactNode;
}

export default function UIProvider({children}: Props) {
  const [uiState, dispatch] = useReducer(uiReducer, INITIAL_STATE);

  // Actions

  const setLoading = (isLoading: boolean) => {
    dispatch({type: 'setLoading', payload: isLoading});
  };

  return (
    <UIContext.Provider value={{ui: uiState, actions: {setLoading}}}>
      {children}
    </UIContext.Provider>
  );
}
