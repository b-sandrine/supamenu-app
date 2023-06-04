import './sidebar.css'
import { FaChartPie,FaLightbulb } from 'react-icons/fa'
import {IoMdSettings, IoMdTabletLandscape } from 'react-icons/io'
import {SlBadge} from 'react-icons/sl'
import {MdGroups2} from 'react-icons/md'

import logo from '../../assets/SupaMenu.png'

const sidebar = () => {
    return (
        <div className="sidebar2--container">
            <img src={logo} alt="App logo" />
            <div className="links--container">
                <div className="upper--links">
                    <div className="single--link">
                        <FaChartPie />
                        <p>Overview</p>
                    </div>
                    <div className="single--link">
                        <IoMdTabletLandscape/>
                        <p>Tables</p>
                    </div>
                    <div className="single--link">
                        <FaLightbulb />
                        <p>Orders</p>
                    </div>
                    <div className="single--link">
                        <MdGroups2 />
                        <p>Menus</p>
                    </div>
                </div>
                <div className="lower--links">
                    <div className="single--link">
                        <IoMdSettings />
                        <p>Settings</p>
                    </div>
                    <div className="single--link">
                        <SlBadge />
                        <p>My Account</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default sidebar;