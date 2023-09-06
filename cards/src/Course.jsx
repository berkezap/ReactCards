import React from "react";
function Course ({title, description}){
    return(
        <div>  
            <div>{title}</div> 
            <div>{description}</div>
        </div>
    );
}

export default Course;