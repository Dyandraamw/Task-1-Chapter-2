import { Link } from 'react-router-dom';
import { BsFillTrashFill } from "react-icons/bs";
import PropTypes from "prop-types"

const UserList = ({users,userColumns}) => {

    return ( 
        <div className="container mx-auto my-6  bg-white rounded-lg ">
            
            <div className="  p-6 mx-auto">
                <table className="table min-w-full">
                    <thead>
                    <tr className="bg-slate-100 text-base">
                        {userColumns.map((column) => (
                            <th key={column.id} className="px-4 py-5 text-slate-600">{column.title}</th>
                        
                        ))}
                        
                    </tr>
                    </thead>
                    <tbody>
                        { users.map((user)=> 
                            <tr key={user.id}>
                                <td className="border-b-4 border-slate-100 px-6  py-4 ml-5 font-medium text-right "><img src={user.profilePicture} alt="img" className="h-20 w-20 rounded-full " /></td>
                                <td className="border-b-4 border-slate-100 px-6  py-4  font-medium  text-center">
                                    {user.username}</td>
                                <td className="border-b-4 border-slate-100 px-4 py-4 font-medium text-center">{user.email}</td>
                                <td className="border-b-4 border-slate-100  text-center"><Link to={'/users/delete/'+user.username}>
                                <BsFillTrashFill className="text-5xl text-right ml-4 bg-light-blue px-2 rounded-full hover:bg-light-purple"/></Link></td>
                                
                            </tr>
                        )}
                        
                    
                    </tbody>
                </table>
            </div>
        </div>
    );
}

UserList.propTypes = {
    users: PropTypes.array,
    userColumns: PropTypes.array,
}
 
export default UserList;