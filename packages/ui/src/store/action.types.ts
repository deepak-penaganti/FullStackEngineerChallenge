import { Dispatch } from "redux"

export declare type StoreActionType = {
    type: string;
    payload: any;
    [key: string]: any
}

export declare type PropsWithDispatch = {
    dispatch: Dispatch
}