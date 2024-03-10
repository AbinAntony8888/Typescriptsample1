type butn={
    btn:string;
}
function Button({btn}:butn){
    return(
        <div >
            <button className="border-solid  text-[white] bg-[blue] p-1">{btn}</button>
        </div>
    )
}export default Button;