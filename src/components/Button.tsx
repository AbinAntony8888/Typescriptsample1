type TButn={
    btn:string;
}
function Button({btn}:TButn){
    return(
        <div >
            <button className="border-solid  text-[white] bg-[blue] p-1">{btn}</button>
        </div>
    )
}export default Button;