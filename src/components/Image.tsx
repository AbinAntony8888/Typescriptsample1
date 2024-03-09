type img={
imag:string;
}
function Image({imag}:img){
    return(
        <div>
            <img src={imag} alt="sorry" />
        </div>
    )
}
export default Image;