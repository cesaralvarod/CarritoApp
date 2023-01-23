import {UIState} from '../../interfaces/ui.interface';

type UIAction = {type: 'setLoading'; payload: boolean};

export const uiReducer = (state: UIState, action: UIAction) => {
  switch (action.type) {
    case 'setLoading':
      return {
        ...state,
        loading: action.payload,
      };

    default:
      return state;
  }
};
