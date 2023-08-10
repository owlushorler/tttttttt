import "../nav5/nav5.css"
import man from "../images/4271085.png"
import ma from "../images/3930266.png"
import m from "../images/download.png"
import mann from "../images/3684019.png"
let data = [
    { name:man,
     im:'Free Wifi Zone',
    we:"24/7 hours service"},
    { name:m,
        im:'Family size room',
       we:"available room"},
       { name:mann,
        im:'Conference room',
       we:"Conferance Room"},
       { name:ma,
        im:'customer care',
       we:"24/7 hours service"},
    
]
function Nav5(){

     
    return(
        <div className="lo" >
            <div>
                <hi className="ran" >Your Excellent</hi><br/>
                <hi className="rann" >Choice For Vacation.</hi>
           
            </div>
            <div className="qq"  >
            {data.map(ele=>{
                return (
                   
                       <div className="qqq" >
                        <div >
                        {<img className="pp"  src={ele.name} alt="ll" />}
                       </div>
                       <div className="ppp" >
                        {ele.im}
                       </div>
                       <div className="p" >
                        {ele.we}
                       </div>
                       </div>
                  
                )
            })}  </div>
        </div>
    )
}

export default Nav5