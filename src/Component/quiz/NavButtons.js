import React from 'react'
import "./style.css";

 const NavButtons = ({QuestionType,filterTheCatagory}) => {
    return (
        <>
      {
        QuestionType.map((curEle) =>{
            return (
                       <button onClick={() =>filterTheCatagory(curEle)} className="catagory-btn">{curEle}</button>
            )

        })
    }


            
        </>
    )
}

export default NavButtons;
