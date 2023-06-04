import './dashboard.css'
import Sidebar from "../../components/Sidebar/sidebar";
import RightNavbar from '../../components/navbar/RightNavbar';

const dashboard = () => {
    return (
        <div className="dashboard--container">
            <Sidebar />
            <div className="content">
                <div className="heading">
                    <div className="page--title">
                        <h5>Overview</h5>
                    </div>
                    {/* <RightNavbar /> */}
                </div>
            </div>
        </div>
    )
}

export default dashboard;