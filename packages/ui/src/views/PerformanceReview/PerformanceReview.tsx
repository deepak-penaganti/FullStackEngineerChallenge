import React from 'react';
import { connect } from 'react-redux';
import { FETCH_EMPLOYEES } from '../../store/action-types';

export function _PerformanceReview(props: any) {
    const id = props['*'];
    const { fetchEmployeesIfNot } = props;

    fetchEmployeesIfNot(props.employees);

    let employeeDetails: any;
    if (!!id)
        employeeDetails = props.employee(Number(id));

    console.log(employeeDetails);

    return (props.children)
}

const mapStateToProps = (state: any) => ({ employees: state.employees, employee: (id: number) => (state.employees || []).filter((emp: any) => emp.id === id)[0] || {} });
const mapDispatchToProps = (dispatch: any) => ({
    fetchEmployeesIfNot: (employees: any) => {
        if (!employees)
            dispatch({ type: FETCH_EMPLOYEES });
    }
});

export const PerformanceReview = connect(mapStateToProps, mapDispatchToProps)(_PerformanceReview);