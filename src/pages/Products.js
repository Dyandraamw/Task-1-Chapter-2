
import Header from "../components/Header";
import ProductList from "../components/ProductList";
import Sidebar from "../components/SideBar";
import {products} from "../data/ProductData.js"
import {productColumns} from "../data/ProductColumns.js"


const Products = () => {

    return (  
        <div className="flex">
            
            <Sidebar/>
            <div className="flex flex-col bg-mute-grey max-w-auto w-screen">
                <Header/>
                <ProductList products={products} productColumns={productColumns} />
                
            </div>
        </div>
    );
}
 
export default Products;