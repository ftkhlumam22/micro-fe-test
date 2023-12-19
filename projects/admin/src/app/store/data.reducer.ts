import { createReducer, on } from '@ngrx/store';
import * as DataActions from './data.action';

export interface DataState {
  datas: any[];
  loading: boolean;
  error: any;
}

export const initialState: DataState = {
  datas: [],
  loading: false,
  error: null,
};

export const dataReducer = createReducer(
  initialState,

  on(DataActions.loadDatas, (state) => ({ ...state, loading: true })),
  on(DataActions.loadDatasSuccess, (state, { datas }) => ({
    ...state,
    datas,
    loading: false,
  })),
  on(DataActions.loadDatasFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  //Handle Create
  on(DataActions.createData, (state) => ({ ...state, loading: true })),
  on(DataActions.createDataSuccess, (state, { data }) => ({
    ...state,
    datas: [...state.datas, data],
    loading: false,
  })),
  on(DataActions.createDataFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  // Handle update
  on(DataActions.updateData, (state) => ({ ...state, loading: true })),
  on(DataActions.updateDataSuccess, (state, { id, data }) => ({
    ...state,
    datas: state.datas.map((item) => (item.id === id ? { ...data } : item)),
    loading: false,
  })),
  on(DataActions.updateDataFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  // Handle delete
  on(DataActions.deleteData, (state) => ({ ...state, loading: true })),
  on(DataActions.deleteDataSuccess, (state, { id }) => ({
    ...state,
    datas: state.datas.filter((item) => item.id !== id),
    loading: false,
  })),
  on(DataActions.deleteDataFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
