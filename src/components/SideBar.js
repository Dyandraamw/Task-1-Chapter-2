import { FaCube } from "react-icons/fa";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { Link } from 'react-router-dom';
import AppLogo from "../assets/Logo-1.svg"

const  Sidebar = () => {
    return (  
        <div className="bg-dark-grey flex-2 items-center  p-5 w-80">
            <div className="inline-flex">
                <img src={AppLogo} alt="App Logo" className=" w-20 p-2 ml-2" />
                
            </div>
            <ul className="mt-5 pt-3">
                <li className="text-white font-medium text-xl mt-5 cursor-pointer hover:bg-navy hover:text-light-purple rounded p-3">
                    <Link to="/products"><FaCube className="inline-flex ml-2 mr-6 text-2xl"/> Products </Link>
                    
                </li>
                <li className="text-white font-medium text-xl mt-5 cursor-pointer hover:bg-navy rounded hover:text-light-purple p-3">
                    <Link to="/users"><MdOutlinePeopleAlt className="inline-flex ml-2 mr-6 text-2xl"/>Users</Link>
                    
                </li>
            </ul>
        </div>
        
    );
}
 
export default Sidebar;