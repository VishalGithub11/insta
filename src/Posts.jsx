import React from 'react'
import users from "./assets/user.json";


const Posts = () => {
    return (
        <div style={{width: "60vw"}}>
        {users.map((item)=>{
    return (
        <div style={{margin:"0 5em 1em", border: "1px solid grey"}} >

<div style={{display: "flex"}}>
<div style={{textAlign: "left", marginLeft: "4em", marginBottom:"1em"}}>  <img
                src={item.avatar}
                alt="story"
                style={{ borderRadius: "50%", height: "3em", width: "3em" }}
              /> </div>

<div style={{textAlign: "left", margin:"1em"}} >
{item.last_name}</div>

</div>


        <div style={{height: "40vh"}}><img  src={item.avatar} style={{height: "40vh", width: "40vw"}} /></div>



<div >
<ul style={{listStyle: "none", display:"flex", justifyContent:"space-between", margin:"1em 4em 0.5em 2em"}}>
<li>like</li>
<li>share</li>
</ul>

<div style={{textAlign:"left", marginLeft:"4em"}}>Views 5125</div>
</div>





        </div>





    )
        })}
        
        </div>
    )
}

export default Posts
