import "../topNav/topNav.css"
import lol from "../images/725624.png"
import ll from "../images/2838912.png"
import l from "../images/386220.png"


function Topnav(){
    return(
        <div className="na" >
            <nav className="ab">
            <img style={{width:"1vw"}} src={lol} alt="klk" />
            <p>+1234566777</p>
            </nav>
            <nav style={{width:"1px", backgroundColor:"black", height:"1vw",marginTop:".8vw"}}></nav>
            <nav className="ab" >
            <img style={{width:"1vw"}} src={l} alt="klk" />
            <p>assdddff@gmai.com</p>
            </nav>
            <nav style={{width:"1px", backgroundColor:"black", height:"1vw",marginTop:".8vw"}}></nav>
            <nav className="ab" >
            <img style={{width:"1vw"}} src={ll} alt="klk" />
            <p>3,lagos islan ibadan</p>
            </nav>
            <nav></nav>
        
       
        
       
        </div>
    )
}


export default Topnav