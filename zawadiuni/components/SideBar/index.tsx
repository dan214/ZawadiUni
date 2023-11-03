"use client"
import React from 'react';
import { Nav } from 'react-bootstrap';
import './sidebar.scss';

import DashboardIcon from '../icons/Dashboard';
import TaskIcon from '../icons/TasksIcon';
import TestIcon from '../icons/testIcon';
import ScheduledIcon from '../icons/ScheduledIcon';
import CalendarIcon from '../icons/CalendarIcon';

const SideBar = () => {

    const MeNuItem = (props: { displayText: any, icon: JSX.Element }) => {
        const { displayText, icon } = props;
        return (
            <Nav.Item className='nav-item-flex'>
                <Nav.Link
                    className="d-flex">
                    {icon}
                    <div>{displayText}</div>
                </Nav.Link>
            </Nav.Item>
        );
    };

    return (
        <div className="sidebar is-open">
            <div
                className="sidebar-header d-flex p-2 justify-content-between align-items-center">
                <p>Zawadi Uni</p>
            </div>
            <div className="side-menu">
                <Nav className='navMainItem'>
                    <MeNuItem
                        displayText="Dashboard"
                        icon={<DashboardIcon />}
                    />
                    <MeNuItem
                        displayText="Test Cases"
                        icon={<TaskIcon />}
                    />
                    <MeNuItem
                        displayText="Test Plans"
                        icon={<TestIcon />}
                    />
                    <MeNuItem
                        displayText="Scheduled"
                        icon={<ScheduledIcon />}
                    />
                    <MeNuItem
                        displayText="Calendar"
                        icon={<CalendarIcon />}
                    />
                </Nav>
            </div>
        </div>
    );
};

export default SideBar;
