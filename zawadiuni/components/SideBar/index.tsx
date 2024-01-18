"use client"
import React from 'react';
import './sidebar.scss';
import Link from 'next/link'

import DashboardIcon from '../icons/Dashboard';
import TaskIcon from '../icons/TasksIcon';
import TestIcon from '../icons/testIcon';
import ScheduledIcon from '../icons/ScheduledIcon';
import CalendarIcon from '../icons/CalendarIcon';
import { Nav, NavItem } from 'reactstrap';

const SideBar = () => {

    const MenuItem = (props: { displayText: any, icon: JSX.Element, url: string }) => {
        const { displayText, icon, url } = props;
        return (
            <NavItem className='nav-item-flex'>
                <Link
                    className="d-flex"
                    href={url}>
                    {icon}
                    {displayText}
                </Link>
            </NavItem>
        );
    };

    return (
        <div className="sidebar is-open">
            <Link href="/">
                <div
                    className="sidebar-header d-flex p-2 justify-content-between align-items-center">
                    <p>Zawadi Uni</p>
                </div>
            </Link>
            <div className="side-menu">
                <Nav className='navMainItem'>
                    <MenuItem
                        displayText="Departments"
                        url="/departments"
                        icon={<DashboardIcon />}
                    />
                    <MenuItem
                        displayText="Courses"
                        url="/courses"
                        icon={<TaskIcon />}
                    />
                    <MenuItem
                        displayText="Departments"
                        url="/students"
                        icon={<TestIcon />}
                    />
                    <MenuItem
                        displayText="Examinations"
                        url="/examinations"
                        icon={<ScheduledIcon />}
                    />
                    <MenuItem
                        displayText="Calendar"
                        url="/calendar"
                        icon={<CalendarIcon />}
                    />
                </Nav>
            </div>
        </div>
    );
};

export default SideBar;
