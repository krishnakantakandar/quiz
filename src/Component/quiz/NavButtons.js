import React from 'react'
import "./style.css";
import Catagogypictures from './catagoryPic';

 const NavButtons = ({QuestionType,filterTheCatagory}) => {
     console.log(Catagogypictures.html);
    return (
        <>
      {
        QuestionType.map((curEle) =>{
            return (
                       <button onClick={() =>filterTheCatagory(curEle)} className="catagory-btn"><div className="nav-image"><img src={Catagogypictures[curEle]} alt="image" ></img></div>{curEle}</button>
            )

        })
    }


            
        </>
    )
}

export default NavButtons;
