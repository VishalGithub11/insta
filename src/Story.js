import React from 'react'

const Story = ({img, handleBackdrop}) => {

console.log("image", img);


const backdropDiv = {
position:"absolute",
top: "35%",
left: "0",
width: "100%",
height: "100%",
backgroundColor: "#000000",
opacity: "0.9"

}
const backdropImg={
display:"flex",
width:"60%",
height: "60%",
margin: "10%",
border: "2px solid white",
}


    return (
        <div>
            <div className="backdropDiv" style={backdropDiv}

             onClick={handleBackdrop}
             
             >
            <img src={img} alt="" style={backdropImg} />
            </div>
        </div>
    )
}

export default Story
