import React,{useState} from 'react'
import QuestionApi from './QuestionsApi';
import  NavButtons  from './NavButtons';
import CatagoryDisplay from './CatagoryDisplay';
import "./style.css";



const UniqueCatagory =
     [...new Set( QuestionApi.map((curEle) =>{
        return curEle.catagory;
    }))];

 const MainGame = () => {


    const [QuestionType, setQuestionType] = useState(UniqueCatagory);
    const [SectionDisplay, setSectionDisplay] = useState([]);

    const filterTheCatagory = (catagory) =>{
        const QuesOfCatagoy = QuestionApi.filter((curEle) =>{
             return catagory ===  curEle.catagory;
               
        })
        setSectionDisplay(QuesOfCatagoy);
        document.getElementById("nav1").style.display="none";
    }

    return (
        <>
        
        <div className="heading">
            <p>wellcom to world quiz</p>
            
        </div>
        <div className="nav" id="nav1">
            <div>
        <NavButtons QuestionType={QuestionType} filterTheCatagory={filterTheCatagory} className="catagogy"></NavButtons>
        </div>
        <div className="description">
            <p>No. of Questions 10</p>
            <p>Alloted time : 10 min</p>
        </div>
        </div>
        
        <div className="main-cointain">

        <CatagoryDisplay SectionDisplay={SectionDisplay}></CatagoryDisplay>
        </div>
      
            
        </>
    )
}


export default MainGame;
