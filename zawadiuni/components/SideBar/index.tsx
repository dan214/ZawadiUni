"use client"
import React from 'react';
import { Nav } from 'react-bootstrap';
import './sidebar.scss';
import Link from 'next/link'

import DashboardIcon from '../icons/Dashboard';
import TaskIcon from '../icons/TasksIcon';
import TestIcon from '../icons/testIcon';
import ScheduledIcon from '../icons/ScheduledIcon';
import CalendarIcon from '../icons/CalendarIcon';

const SideBar = () => {

    const MeNuItem = (props: { displayText: any, icon: JSX.Element, url: string }) => {
        const { displayText, icon, url } = props;
        return (
            <Nav.Item className='nav-item-flex'>
                <Link
                    className="d-flex"
                    href={url}>
                    {icon}
                    <div>{displayText}</div>
                </Link>
            </Nav.Item>
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
                    <MeNuItem
                        displayText="Dashboard"
                        url="/dashboard"
                        icon={<DashboardIcon />}
                    />
                    <MeNuItem
                        displayText="Courses"
                        url="/courses"
                        icon={<TaskIcon />}
                    />
                    <MeNuItem
                        displayText="Students"
                        url="/students"
                        icon={<TestIcon />}
                    />
                    <MeNuItem
                        displayText="Examinations"
                        url="/examinations"
                        icon={<ScheduledIcon />}
                    />
                    <MeNuItem
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
