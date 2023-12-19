import { createAction, props } from '@ngrx/store';

//Get Data
export const loadDatas = createAction('[Data] Load Datas');
export const loadDatasSuccess = createAction(
  '[Data] Load Datas Success',
  props<{ datas: any[] }>()
);
export const loadDatasFailure = createAction(
  '[Data] Load Datas Failure',
  props<{ error: any }>()
);

//Create
export const createData = createAction(
  '[Data] Create Data',
  props<{ data: any }>()
);
export const createDataSuccess = createAction(
  '[Data] Create Data Success',
  props<{ data: any }>()
);
export const createDataFailure = createAction(
  '[Data] Create Data Failure',
  props<{ error: any }>()
);

// Update
export const updateData = createAction(
  '[Data] Update Data',
  props<{ id: number; data: any }>()
);
export const updateDataSuccess = createAction(
  '[Data] Update Data Success',
  props<{ id: number; data: any }>()
);
export const updateDataFailure = createAction(
  '[Data] Update Data Failure',
  props<{ error: any }>()
);

// Delete
export const deleteData = createAction(
  '[Data] Delete Data',
  props<{ id: number }>()
);
export const deleteDataSuccess = createAction(
  '[Data] Delete Data Success',
  props<{ id: number }>()
);
export const deleteDataFailure = createAction(
  '[Data] Delete Data Failure',
  props<{ error: any }>()
);
