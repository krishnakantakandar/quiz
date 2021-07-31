import React, { useEffect, useState } from "react";
import QuestionApi from "./QuestionsApi";

const CatagoryDisplay = ({ SectionDisplay }) => {
  const [increment, setincrement] = useState(0);
  const [total, settotal] = useState(0);
  const fucPrintStar = () => {
    let arr = new Array(total);
    console.log("lll", arr);

    for (let i = 0; i < total; i++) arr[i] = 1;

    return arr.map((val) => {
      return (
        <img
          src="images/star.png"
          style={{ width: "30px", height: "30px" }}
        ></img>
      );
    });

    // console.log(img);

    // return [img1,im2........im10]
  };

  const StoreAns = (SectionDisplay, increment) => {
    console.log("kjdh");

    console.log(QuestionApi, "i am data");

    if (
      SectionDisplay.length > 0 &&
      increment >= 0 &&
      increment < SectionDisplay.length &&
      SectionDisplay[increment].selectedAnswer !== ""
    ) {
      let i;
      const ele = document.getElementsByName(SectionDisplay[increment].id);
      console.log("isko chck karo", ele);
      for (i = 0; i < ele.length; i++) {
        if (ele[i].value == SectionDisplay[increment].selectedAnswer) {
          ele[i].checked = true;
          console.log("isko chck karo", ele[i]);

          break;
        }
      }
    }
  };

  const Check = (SectionDisplay, increment) => {
    console.log("ia md checked");
    let ansGiven;
    const ele = document.getElementsByName(SectionDisplay[increment].id);
    console.log(ele);
    let i;
    for (i = 0; i < ele.length; i++) {
      console.log(ele[i]);
      if (ele[i].checked) {
        ansGiven = ele[i].value;

        break;
      }
    }

    console.log(ansGiven);
    SectionDisplay[increment].selectedAnswer = ansGiven;
    if (SectionDisplay[increment].answer === ansGiven)
      SectionDisplay[increment].points = 1;

    // document.getElementsByClassName('options').style.checked=false
  };

  useEffect(() => {
    console.log("USEFFECT");
    if (
      SectionDisplay.length > 0 &&
      increment < SectionDisplay.length &&
      increment >= 0
    ) {
      const ele = document.getElementsByName(SectionDisplay[increment].id);

      console.log(ele);
      let i;
      for (i = 0; i < ele.length; i++) {
        console.log(ele[i]);
        if (ele[i].checked) {
          ele[i].checked = false;

          break;
        }
      }
    }

    StoreAns(SectionDisplay, increment);
  });

  const GetResult = (SectionDisplay) => {
    console.log("valid");
    const TotalPoints = SectionDisplay.reduce((accum, curEle) => {
      return accum + curEle.points;
    }, 0);
    console.log(TotalPoints);
    settotal(TotalPoints);
    console.log("totaluse sate", total);
    console.log("total variable", TotalPoints);
    document.getElementById("re").disabled = true;

    document.getElementById("time").style.display = "none";
    document.getElementById("table").style.display = "block";
    document.getElementById("button-re").style.display = "none";
    document.getElementById("re-play").style.display = "block";
  };
  var x;
  var distance;
  useEffect(() => {
    const re = document.getElementById("result");
    if (re) {
      re.innerHTML = ` ${total}`;
      document.getElementById("su").disabled = true;
      // clearInterval(x);
      // setTimmerStop(false);
    }
  }, [total]);

  useEffect(() => {
    if (
      SectionDisplay.length > 0 &&
      increment < SectionDisplay.length &&
      increment >= 0
    ) {
      getTime();
    }
  }, [SectionDisplay]);

  ////
  const [TimmerStop, setTimmerStop] = useState(true);
  const getTime = () => {
    var countDownDate = 1 * 60 * 1000 + new Date().getTime();

    // Update the count down every 1 second
    x = setInterval(function () {
      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      distance = countDownDate - now;
      console.log(distance);
      // Time calculations for days, hours, minutes and seconds

      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Output the result in an element with id="demo"

      const k3 = document.getElementById("p-mi");
      const krishna = document.getElementById("p-se");
      if (k3) k3.innerHTML = ` ${minutes}`;
      if (krishna) krishna.innerHTML = `${seconds} `;

      // If the count down is over, write some text
      if (distance < 0 || !TimmerStop) {
        clearInterval(x);

        setincrement(3);
        document.getElementById("re").disabled = true;
        if (k3) k3.innerHTML = "time up";

        GetResult(SectionDisplay);
      }
    }, 1000);
  };

  ////

  if (
    SectionDisplay.length > 0 &&
    increment < SectionDisplay.length &&
    increment >= 0
  ) {
    return (
      <>
        <div
          className="main-cointain-q"
          id="main-cointain-q"
          // style={{ border: "1px solid blue" }}
        >
          <div className="header">
            <img
              src="images/ideas.png"
              style={{ height: "50px", width: "50px" }}
            ></img>
            <p
              onClick={() => {
                window.location.reload();
              }}
              style={{ cursor: "pointer" }}
            >
              HOME
            </p>
          </div>

          {/* <div style={{ width: "100%", height: "10%", background: "red" }}>
            <p>HOME</p>
          </div> */}
          <div id="time">
            <div id="minutes">
              <p id="p-mi">00</p>
              <p id="sec">MINUTES</p>
            </div>
            <div id="seconds">
              <p id="p-se">00</p>
              <p id="minu">SECONDS</p>
            </div>
          </div>
          <div class="card-view">
            <div className="questions">
              <p>
                {`${increment + 1}.`} {SectionDisplay[increment].question}
              </p>
            </div>
            <div className="options">
              <div className="change-color1">
                {" "}
                <input
                  type="radio"
                  name={SectionDisplay[increment].id}
                  value={SectionDisplay[increment].option1}
                  onClick={() => Check(SectionDisplay, increment)}
                ></input>
                {SectionDisplay[increment].option1}
              </div>
              <div className="change-color2">
                {" "}
                <input
                  type="radio"
                  name={SectionDisplay[increment].id}
                  value={SectionDisplay[increment].option2}
                  onClick={() => Check(SectionDisplay, increment)}
                ></input>
                {SectionDisplay[increment].option2}
              </div>
              <div className="change-color3">
                {" "}
                <input
                  type="radio"
                  name={SectionDisplay[increment].id}
                  value={SectionDisplay[increment].option3}
                  onClick={() => Check(SectionDisplay, increment)}
                ></input>
                {SectionDisplay[increment].option3}
              </div>
              <div className="change-color4">
                {" "}
                <input
                  type="radio"
                  name={SectionDisplay[increment].id}
                  value={SectionDisplay[increment].option3}
                  onClick={() => Check(SectionDisplay, increment)}
                ></input>
                {SectionDisplay[increment].option3}
              </div>
            </div>
          </div>
          <div className="changeQuestion">
            <button
              className="previous"
              onClick={() => {
                setincrement(increment - 1);
              }}
            >
              previous
            </button>
            <button
              className="next"
              onClick={() => {
                setincrement(increment + 1);
              }}
            >
              next
            </button>
          </div>

          <div className="footer">
            <p>©copywrite to krishna kanta kandar</p>
          </div>
        </div>
      </>
    );
  } else {
    if (increment >= SectionDisplay.length && SectionDisplay.length !== 0) {
      return (
        <>
          <div className="result-page">
            <div className="header" style={{ position: "absolute", top: "0" }}>
              <img
                src="images/ideas.png"
                style={{ height: "50px", width: "50px" }}
              ></img>
              <p
                onClick={() => {
                  window.location.reload();
                }}
                style={{ cursor: "pointer" }}
              >
                HOME
              </p>
            </div>
            <div id="time" style={{ position: "absolute", right: "10%" }}>
              <div id="minutes">
                <p id="p-mi"></p>
                <p id="sec">MINUTES</p>
              </div>
              <div id="seconds">
                <p id="p-se"></p>
                <p id="minu">SECONDS</p>
              </div>
            </div>
            <div className="block">
              <p>RESULT</p>
            </div>
            <div className="your-result">
              <div className="result-star">{fucPrintStar()}</div>
              <div className="score-text">{` YOUR SCORE :${total}`}</div>
              <div className="total-text">MAX SCORE : 10</div>
              <div className="button-re" id="button-re">
                <div className="btn-submit">
                  <button
                    className="getResult"
                    id="su"
                    onClick={() => GetResult(SectionDisplay)}
                  >
                    Submit
                  </button>
                </div>
                <div className="btn-rechck">
                  {" "}
                  <button
                    className="reCheck"
                    id="re"
                    onClick={() => setincrement(0)}
                  >
                    Recheck
                  </button>
                </div>
              </div>
              <p
                id="re-play"
                onClick={() => {
                  window.location.reload();
                }}
                style={{ cursor: "pointer", display: "none" }}
              >
                RE-PLAY
              </p>
            </div>
            <div className="table" id="table">
              <table class="styled-table">
                <thead>
                  <tr>
                    <th>Question</th>
                    <th>Answer</th>
                    <th>Your Answer</th>
                  </tr>
                </thead>
                <tbody>
                  {SectionDisplay.map((curEle) => {
                    return (
                      <tr>
                        <td>{curEle.question}</td>
                        <td>{curEle.answer}</td>
                        <td>{curEle.selectedAnswer}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div
              className="footer"
              style={{ position: "absolute", bottom: "0" }}
            >
              <p>©copywrite to krishna kanta kandar</p>
            </div>
          </div>
        </>
      );
    } else {
      return <></>;
    }
  }
};

export default CatagoryDisplay;
