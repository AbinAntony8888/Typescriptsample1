import Button from "./Button";
import Heading from "./Heading";
import Image from "./Image";
import TProduct from "./Types";
function Product({imgg,hed,bt}:TProduct){
    return(
        <div >
            <Image imag={imgg}/>
            <Heading head={hed} />
            <Button btn={bt}/>
        </div>
    )
}
export default Product;