import { RouteComponentProps } from '@reach/router';
import { PropsWithDispatch } from '../../store/action.types';
import { PropsWithChildren } from 'react';

export declare type EmployeesProps = PropsWithChildren<any> & RouteComponentProps & PropsWithDispatch & {
    fetchEmployees: Function,
    employees: Array<any>;
    title?: string
};