import "../nav2/nav2.css"
import nnn from "../images/MicrosoftTeams-image (1).png"

function Nav2(){
    return(
        <div className="ac" >
            <nav style={{marginRight:"vw"}} ><a className="aa" href=""><img style={{width:"3vw"}} src={nnn} alt="oo"/>H COUNTROL</a></nav>
            <nav><a className="aa" href="">HOME</a></nav>
            <nav><a className="aa" href="">FACILITIES</a></nav>
            <nav><a className="aa" href="">ROOM</a></nav>
            <nav><a className="aa" href="">ABOUT</a></nav>
            <nav><a className="aa" href="">CONTACT</a></nav>
            <nav><button className="di" > BOOKING NOW  </button></nav>
            <nav></nav>
        </div>
    )
}

export default Nav2