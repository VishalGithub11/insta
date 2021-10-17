import React,{useState} from 'react'
import users from "./assets/user.json";
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { FiSend } from 'react-icons/fi';

const Posts = () => {

const [text, setText]= useState("your friend and 24 others likes this")

const [heart , setHeart] = useState({
    like:false,
    id: ""
})




const handlelike = (i)=>{
setText("you and 25 others like this")
setHeart({...heart, like:!heart.like, id: i})
}

    return (
        <div style={{width: "60vw"}}>
        {users.map((item, i)=>{
    return (
        <div style={{margin:"0 5em 1em", border: "1px solid grey"}} >

<div style={{display: "flex"}}>
<div style={{textAlign: "left", marginLeft: "4em", marginBottom:"1em"}}  onClick={()=> handlelike(i)} >  <img
                src={item.avatar}
                alt="story"
                style={{ borderRadius: "50%", height: "3em", width: "3em" }}
               
              /> </div>

<div style={{textAlign: "left", margin:"1em"}} >
{item.last_name}</div>

</div>


        <div ><img  src={item.post} style={{height: "38.3em", width: "35.81em"}} /></div>



<div >
<ul style={{listStyle: "none", display:"flex", justifyContent:"space-between", margin:"1em 4em 0.5em 2em"}}>
<li >{heart.like && heart.id === i ? <BsHeartFill style={{color: "red"}} onClick={handlelike}/>: <BsHeart  onClick={()=>handlelike(i)}/>}</li>
<li><FiSend/></li>
</ul>


<div style={{textAlign:"left", marginLeft:"4em", color:"grey"}}>{text} </div>

<div style={{textAlign:"left", marginLeft:"4em", color:"grey"}}>views 5124</div>
</div>





        </div>





    )
        })}
        
        </div>
    )
}

export default Posts
