import React from 'react';
import { connect } from 'react-redux';
import { Router } from '@reach/router';

import { HomepageProps } from './Homepage.types';
import { Header } from '../../components/Header/Header';
import { Employees } from '../Employees/Employees';
import { PerformanceReview } from '../PerformanceReview/PerformanceReview';
import { SideNav } from '../../components/SideNav/SideNav';

import './Homepage.styles.scss';
import { EmployeeDetails } from '../../components/EmployeeDetails/EmployeeDetails';

function _Homepage(props: HomepageProps) {
    return (<div className="pa__homepage--container grid">
        <Header />
        <SideNav />
        <main>
            <Router>
                <Employees path="/employees" />
                <EmployeeDetails path="/employees/:empId" preventNavigation />
                <PerformanceReview path="/review">
                    <Employees addEmployee={false} path="/" actions={[
                        (emp: any) => <button onClick={() => alert(JSON.stringify(emp))}>Initiate review</button>
                    ]} title="Performance Review" />
                    <EmployeeDetails path=":empId" preventNavigation />
                </PerformanceReview>
            </Router>
        </main>
        <footer>
            footer content
        </footer>
    </div>);
}

export const Homepage = connect()(_Homepage);