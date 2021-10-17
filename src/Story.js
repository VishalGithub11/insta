import React from 'react'

const Story = ({img, handleBackdrop}) => {

console.log("image", img);


const backdropDiv = {
position:"absolute",
top: "20%",
left: "0",
width: "100%",
height: "100%",
backgroundColor: "#000000",
opacity: "0.7"
}


const backdropImg={
display:"flex",
width:"60%",
height: "60%",
margin: "0 10%",
border: "2px solid white",
opacity: "1"
}


    return (
        <div>
            <div style={backdropDiv}
            //  onClick={()=>{setSelected(null)}}
             
             >
            <img src={img} alt="" style={backdropImg} />
            </div>
        </div>
    )
}

export default Story
