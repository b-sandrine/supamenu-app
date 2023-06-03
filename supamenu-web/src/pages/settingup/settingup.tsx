import './settingup.css'
import Navbar from '../../components/navbar/navbar';
import Sidebar from '../../components/sidebar/sidebar';

const settingup = () => {
    return (
        <div className="settingup--container">
            <Navbar />
            <Sidebar />
        </div>
    )
}

export default settingup;