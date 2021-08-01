import React, { useState } from "react";
import QuestionApi from "./QuestionsApi";
import NavButtons from "./NavButtons";
import CatagoryDisplay from "./CatagoryDisplay";
import "./style.css";

const UniqueCatagory = [
  ...new Set(
    QuestionApi.map((curEle) => {
      return curEle.catagory;
    })
  ),
];

const MainGame = () => {
  const [QuestionType, setQuestionType] = useState(UniqueCatagory);
  const [SectionDisplay, setSectionDisplay] = useState([]);
  console.log("catagory", QuestionType);

  const filterTheCatagory = (catagory) => {
    const QuesOfCatagoy = QuestionApi.filter((curEle) => {
      return catagory === curEle.catagory;
    });
    setSectionDisplay(QuesOfCatagoy);
    document.getElementById("page1").style.display = "none";
  };

  return (
    <>
      <div className="page" id="page1">
        <div className="heading">
          <img src="images/quiz.jpg"></img>
          <p>QUIZ</p>
        </div>
        <div className="main-content">
          <div className="about">
            <p>
              A quiz is a form of game or mind sport in which players attempt to
              answer questions correctly about a certain or variety of subjects.
              Quizzes can be used as a brief assessment in educatio n and
              similar fields to measure growth in knowledge, abilities, or
              skills.
            </p>
          </div>
        </div>
        <div className="pic">
          <img src="images/thnking.png"></img>
        </div>
        <div className="nav" id="nav1">
          <div>
            <NavButtons
              QuestionType={QuestionType}
              filterTheCatagory={filterTheCatagory}
              className="catagogy"
            ></NavButtons>
          </div>
          <div className="description">
            <p>No. of Questions 10</p>
            <p>Alloted time : 2 min</p>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "2px",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          <p> ©copywrite to krishna kanta kandar</p>
        </div>
      </div>
      <div className="main-cointain-of-q">
        <CatagoryDisplay SectionDisplay={SectionDisplay}></CatagoryDisplay>
      </div>
    </>
  );
};

export default MainGame;
