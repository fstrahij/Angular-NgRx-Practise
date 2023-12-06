import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of, switchMap, tap, withLatestFrom } from "rxjs";

import { decrement, increment, init, set } from "./counter.actions";
import { selectCount } from "./counter.selectors";

@Injectable()
export class CounterEffects {
    loadCount = createEffect(
        () => this.actions$.pipe(
            ofType(init),
            switchMap(() => {
                const counterStored = localStorage.getItem('count') || 0;

                return of( set({value: +counterStored}) );
            })
        )
    );

    saveCount = createEffect(
        () => this.actions$.pipe(
                ofType(increment, decrement),
                withLatestFrom(this.store.select(selectCount)),
                tap(([action, counter]) => {
                    console.log(action);
                    localStorage.setItem('count', counter.toString());
                })
            ),
        { dispatch: false }    
    );

    constructor(private actions$: Actions, private store: Store<{counter: number}>){}
}