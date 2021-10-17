import React,{useState} from "react";
import users from "./assets/user.json";
import HorizontalScroll from "react-scroll-horizontal";
import Story from "./Story"

const Stories = () => {

const [selected, setSelected] = useState(null)

const handleStory = (item, i)=>{
console.log(item.stories);
setSelected(item.stories)

}



  return (
    <>
    <div style={{width:"80vw", height: "8em"}}>
 <HorizontalScroll 
 style={{padding: "0px",position:"relative"}}
  reverseScroll={true}  > 
      {users.map((item, i) => {
        return (
          <>
            <div style={{
             display: "flex", flexDirection:"column",margin:"1em"
              }} onClick={()=>handleStory(item, i)}>
              <img
                src={item.avatar}
                alt="story"
                style={{ borderRadius: "50%", height: "4em", width: "4em" }}
              />
            
            <div style={{textAlign: "center", fontSize:"1em" ,marginTop: "1em"}}>{item.first_name}</div>
            </div>
          </>
        );
      })}
    </HorizontalScroll>
    </div>



{selected ? <Story img={selected} /> : ""}

    </>
  );
};

export default Stories;
