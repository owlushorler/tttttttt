import "../nav4/nav4.css"

function Nav4(){
    return(
        <div className="bo" >
            <div style={{display:"flex",flexDirection:"column",width:"15vw" , fontSize:"1.1vw"}} >
                Check in
                <input style={{width:"15vw", fontSize:".9vw"}} type="date" />
            </div>

            <div style={{display:"flex",flexDirection:"column",width:"15vw" , fontSize:"1.1vw"}} >
                Aldult
                <input style={{width:"15vw", fontSize:".9vw"}} type="number" />
            </div>

            <div style={{display:"flex",flexDirection:"column",width:"15vw" , fontSize:"1.1vw"}} >
                Rooms
                <input style={{width:"15vw", fontSize:".9vw"}} type="number" />
            </div>

            <div style={{display:"flex",flexDirection:"column",width:"15vw" , fontSize:"1.1vw"}} >
                Check out
                <input style={{width:"15vw", fontSize:".9vw"}} type="date" />
            </div>

            <div style={{display:"flex",flexDirection:"column",width:"15vw" , fontSize:"1.1vw"}} >
                Children
                <input style={{width:"15vw", fontSize:".9vw"}} type="number" />
            </div>

            <button className="dii" > Check Availability  </button>
        </div>
    )
}

export default Nav4