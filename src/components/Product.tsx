import Heading from "./Heading";
import Image from "./Image";
import tye from "./Types";
function Product({imgg,hed}:tye){
    return(
        <div>
            <Image imag={imgg}/>
            <Heading head={hed} />
        </div>
    )
}
export default Product;