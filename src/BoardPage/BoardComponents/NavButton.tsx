type buttonProp = {src:string, label:string}

export function NavButton({src, label}:buttonProp){
    return (
    <div className=" @container bg-violet-300 max-w-7xl mx-auto p-3 text-center relative z-10 text-violet-700 rounded-xl overflow-x-auto">
        <img src = {src}> </img>
        {label}
    </div>
    )
}    
export default NavButton;