import React from "react";
import users from "./assets/user.json";
import HorizontalScroll from "react-scroll-horizontal";

const Stories = () => {
  return (
    <div style={{width:"80vw", height: "8em"}}>
 <HorizontalScroll 
 style={{padding: "0px",position:"relative"}}
  reverseScroll={true}  > 
      {users.map((item) => {
        return (
          <>
            <div style={{
             display: "flex", flexDirection:"column",margin:"1em"
              }}>
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
  );
};

export default Stories;
