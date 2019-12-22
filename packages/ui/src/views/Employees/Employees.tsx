import React, { Fragment, useState } from 'react'

import { EmployeesProps } from './Employees.types';
import { FETCH_EMPLOYEES, SAVE_EMPLOYEE, DELETE_EMPLOYEE } from '../../store/action-types';
import { connect } from 'react-redux';
import { EmployeeDetails } from '../../components/EmployeeDetails/EmployeeDetails';

import './Employees.styles.scss';

function _Employees(props: EmployeesProps) {
    const [newEmployee, setNewEmployeeName] = useState('');
    const { employees, title, saveEmployee, deleteEmployee, addEmployee = true, actions = [
        (emp: any) => <button key="delete-emp" onClick={() => deleteEmployee(emp.id)}>Delete</button>
    ] } = props;

    if (employees === undefined)
        props.fetchEmployees();

    console.log(props);
    return <div className="pa__employeelist grid">
        <div className="headers grid">
            <h4>{title ? title : 'Employees list'}</h4>
            <h6>
                Id
            </h6>
            <h6>
                Name
            </h6>
        </div>
        <div className={`${actions.length ? 'list' : ''} grid`}>
            {employees && employees.map((employee: any) => (<Fragment key={employee.id}>
                <EmployeeDetails empId={employee.id} />
                {actions.map((action: any) => action(employee))}
            </Fragment>))}
        </div>
        {addEmployee && <div className="add-employee grid">
            <input onChange={(e) => setNewEmployeeName(e.target.value)} value={newEmployee} /><button onClick={() => {
                if (newEmployee) {
                    setNewEmployeeName('');
                    saveEmployee(newEmployee)
                }
            }}>Add</button>
        </div>}
    </div>
}

const mapStateToProps = (state: any) => ({
    employees: state.employees
})

const mapDispatchToProps = (dispatch: any) => ({
    fetchEmployees: () => dispatch({ type: FETCH_EMPLOYEES }),
    saveEmployee: (emp: any) => dispatch({ type: SAVE_EMPLOYEE, payload: { name: emp } }),
    deleteEmployee: (id: string) => dispatch({ type: DELETE_EMPLOYEE, payload: id })
});

export const Employees = connect(mapStateToProps, mapDispatchToProps)(_Employees);