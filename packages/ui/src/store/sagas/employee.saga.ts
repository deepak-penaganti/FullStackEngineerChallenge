import { FETCH_EMPLOYEES, FETCH_EMPLOYEES_SUCCESS, SAVE_EMPLOYEE, DELETE_EMPLOYEE } from './../action-types';
import { takeLatest, put, call, takeEvery } from 'redux-saga/effects';
import { StoreActionType } from '../action.types';

function* fetchEmployees() {
    const data = yield call(function () {
        return fetch('/api/employee/list').then(resp => resp.json())
    });
    yield put({ type: FETCH_EMPLOYEES_SUCCESS, payload: data });
}

function* saveEmployee(action: StoreActionType) {
    const data = yield call(function () {
        return fetch('/api/employee', {
            method: 'post',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(action.payload)
        }).then(resp => resp.json())
    });
    yield put({ type: FETCH_EMPLOYEES });
}

function* deleteEmployee(action: StoreActionType) {
    const data = yield call(function () {
        return fetch(`/api/employee/${action.payload}`, {
            method: 'delete'
        }).then(resp => resp.json())
    });
    yield put({ type: FETCH_EMPLOYEES });
}

export function* employeeSaga() {
    yield takeLatest(FETCH_EMPLOYEES, fetchEmployees);
    yield takeEvery(SAVE_EMPLOYEE, saveEmployee);
    yield takeEvery(DELETE_EMPLOYEE, deleteEmployee);
}