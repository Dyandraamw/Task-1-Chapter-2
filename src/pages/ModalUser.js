import { Link, useParams  } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/SideBar";
import { AiFillCloseCircle } from "react-icons/ai";
import {users} from "../data/UserData";
import {userColumns} from "../data/UserColumns";
import UserList from "../components/UserList";

const Modal = () => {
    const {id} = useParams()
    
    return (  
        <div className="flex">
            <div className="fixed w-full h-full bg-slate-900/90">
                <div className="fixed left-1/2 top-1/4 ">
                    <div className="container w-full h-40 bg-slate-50 rounded-lg p-4">
                        <div className="flex-col justify-center ">
                            <Link to="/users"><AiFillCloseCircle className="text-3xl  flex justify-end cursor-pointer hover:bg-red-400 rounded-full p-1"/></Link>    
                            <h1 className="mt- ml-14 font-medium">Hapus User {id}?</h1>
                            <button class="rounded-lg bg-light-purple p-3 text-white font-medium cursor-pointer hover:bg-dark-grey mx-20 mt-3 ">Delete User</button>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
            <Sidebar/>
            <div className="flex flex-col bg-mute-grey max-w-auto w-screen">
                <Header/>
                <UserList users={users} userColumns={userColumns} />
                
            </div>
        </div>
    );
        
    
}
 
export default Modal;