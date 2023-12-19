import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { DataService } from '../services/data.service';
import * as DataActions from './data.action';

@Injectable()
export class DataEffects {
  //Handle Get
  loadData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DataActions.loadDatas),
      mergeMap(() =>
        this.dataService.getAllData().pipe(
          map((datas) => DataActions.loadDatasSuccess({ datas })),
          catchError((error) => of(DataActions.loadDatasFailure({ error })))
        )
      )
    )
  );

  // Handle create
  createData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DataActions.createData),
      mergeMap((action) =>
        this.dataService.createData(action.data).pipe(
          map((data) => DataActions.createDataSuccess({ data })),
          catchError((error) => of(DataActions.createDataFailure({ error })))
        )
      )
    )
  );

  // Handle update
  updateData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DataActions.updateData),
      mergeMap((action) =>
        this.dataService.updateData(action.id, action.data).pipe(
          map((data) => DataActions.updateDataSuccess({ id: action.id, data })),
          catchError((error) => of(DataActions.updateDataFailure({ error })))
        )
      )
    )
  );

  // Handle delete
  deleteData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DataActions.deleteData),
      mergeMap((action) =>
        this.dataService.deleteData(action.id).pipe(
          map(() => DataActions.deleteDataSuccess({ id: action.id })),
          catchError((error) => of(DataActions.deleteDataFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private dataService: DataService) {}
}
