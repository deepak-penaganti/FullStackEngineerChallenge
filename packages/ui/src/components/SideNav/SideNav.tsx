import React from 'react'

import './SideNav.styles.scss';
import { Link, LinkGetProps } from '@reach/router';

export function SideNav(props: any) {
    const menuItems = [
        {
            label: 'Employees',
            to: '/employees'
        },
        {
            label: 'Initiate performance review',
            to: '/review'
        }
    ]
    const activeLink = (data: LinkGetProps) => {
        console.log(data.isCurrent);
        return {
            className: (data.isCurrent || data.isPartiallyCurrent) ? 'active-link' : ''
        }
    }
    return (<nav className="pa__sidenav">
        <ul className="grid">
            {menuItems.map(item => (<li key={item.to} className="grid">
                <Link getProps={activeLink} to={item.to}>{item.label}</Link>
            </li>))}
        </ul>
    </nav>);
}