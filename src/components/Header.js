
import { RxDividerVertical } from "react-icons/rx";
import searchIcon from "../assets/icon-1.svg"
import chatIcon from "../assets/icon-2.svg"
import alertICon from "../assets/icon-3.svg"
import logo2 from "../assets/Logo-2.svg"

const Header = () => {
    return ( 
        <div className="p-5  bg-white flex justify-end items-center">
            <img src={searchIcon} alt="App Logo" className=" w-15 h-15 p-2 ml-2" />
            <img src={chatIcon} alt="App Logo" className=" w-15 h-15 p-2 ml-2" />
            <img src={alertICon} alt="App Logo" className=" w-15 h-15 p-2 ml-2" />
            <RxDividerVertical className="text-4xl p-1"/>
            <img src={logo2} alt="App Logo" className=" w-18 h-15 p-2 ml-2" />
            <h1 className="font-medium text-xl mr-6">Acne</h1>
        </div>
    );
}
 
export default Header;