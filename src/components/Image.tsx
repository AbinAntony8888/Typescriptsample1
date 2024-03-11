type TImg={
imag:string;
}
function Image({imag}:TImg){
    return(
        <div>
            <img src={imag} alt="sorry" />
        </div>
    )
}
export default Image;