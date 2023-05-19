import Header from "../components/Header";
import Sidebar from "../components/SideBar";
import UserList from "../components/UserList";
import {users} from "../data/UserData";
import {userColumns} from "../data/UserColumns";

const Users = () => {
    return (  
        <div className="flex">
            <Sidebar/>
            <div className="flex flex-col bg-mute-grey max-w-auto w-screen">
                <Header/>
                <UserList users={users} userColumns={userColumns} />
            </div>
        </div>
    );
}
 
export default Users;