export interface UIState {
  loading: boolean;
}

export interface UIActions {
  setLoading: (isLoading: boolean) => void;
}
