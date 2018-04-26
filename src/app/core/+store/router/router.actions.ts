import { Action } from '@ngrx/store';

import { NavigationExtras } from '@angular/router';

export class RouterActionTypes {
    static readonly GO      = '[Router] GO';
}

export class Go implements Action {
    readonly type = RouterActionTypes.GO;
    constructor(
        public payload: {
            path: any[],
            queryParams?: object,
            extras?: NavigationExtras
    }) { }
}

export type RouterActions
 = Go;

