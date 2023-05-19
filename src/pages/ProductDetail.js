import Header from "../components/Header";
import Sidebar from "../components/SideBar";
import { useParams } from "react-router-dom";

const ProducDetail = () => {
    const {id} = useParams()
    return (  
        <div className="flex h-screen">
            <Sidebar/>
            <div className="flex flex-col bg-mute-grey max-w-auto w-screen">
                <Header/>
                <h1 className="p-5 text-3xl font-medium">{id}</h1>
            </div>
        </div>
    );
}
 
export default ProducDetail;