import "../nav3/nav3.css"
import dd from "../images/pexels-pixabay-271624.jpg"
import Nav4 from "../nav4/nav4"

function Nav3(){
    return(
        <div className="mm" >
            <div className="mmm" >
            <img style={{width:'100vw',height:"35vw", opacity:".5"}} src={dd}/>

              <div className="nn" >
                <h1 style={{magin:"none",fontSize:"4vw"}} >book your Stay and Enyoy</h1>
                <h1 style={{magin:"none",fontSize:"4vw", marginTop:"-2vw",marginLeft:"6vw"}}  >Luxury Experience</h1>
                <p style={{magin:"none",fontSize:"2vw", marginTop:"-3vw" ,marginLeft:"6vw",marginTop:".1vw"}}  >The best hotel for you and yur family</p>
                <button className="low"  >EXPLORE ROOMS</button>
                <Nav4/>
                </div>  
                
            </div>
           
        
        </div>
    )
}


export default Nav3