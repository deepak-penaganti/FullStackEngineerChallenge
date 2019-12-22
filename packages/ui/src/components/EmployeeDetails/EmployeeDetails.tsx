import React, { Fragment } from 'react'
import { Link } from '@reach/router'

import './EmployeeDetails.styles.scss';
import { connect } from 'react-redux';

function _EmployeeDetails(props: any) {
    const { preventNavigation, empId, getEmployeeDetails } = props;
    const employeeDetails = getEmployeeDetails(Number(empId));

    return <div className="pa__employeedetails grid">
        <div className="emp-id">
            {preventNavigation ? props.empId : <Link to={`/employees/${empId}`}>{empId}</Link>}
        </div>
        <div className="emp-name">{employeeDetails.name}</div>
    </div>
}

const mapStateToProps = (state: any) => ({
    getEmployeeDetails: (id: number) => (state.employees || []).filter((employee: any) => employee.id === id)[0] || {}
})

export const EmployeeDetails = connect(mapStateToProps)(_EmployeeDetails);