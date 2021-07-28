import React,{useEffect, useState} from 'react'
import QuestionApi from './QuestionsApi';



 const CatagoryDisplay = ({SectionDisplay}) => {

    const [increment, setincrement] = useState(0);
    const [total, settotal] = useState(0);

const StoreAns = (SectionDisplay,increment) =>{
    console.log("kjdh");

    console.log(QuestionApi,"i am data")

    if(SectionDisplay.length>0 &&increment >=0&& increment < SectionDisplay.length &&
         SectionDisplay[increment].selectedAnswer !=="" )
    {
        let i;
        const ele = document.getElementsByName(SectionDisplay[increment].id);
        console.log("isko chck karo",ele);
        for( i = 0; i < ele.length; i++) {
            
            if(ele[i].value==SectionDisplay[increment].selectedAnswer){
             ele[i].checked=true;
             console.log("isko chck karo",ele[i]);
           
            break;
            }
        }

        
    }

}


    
const Check =  (SectionDisplay,increment) =>{




    console.log('ia md checked')
    let ansGiven;
   const ele = document.getElementsByName(SectionDisplay[increment].id);
   console.log(ele);
   let i;
   for( i = 0; i < ele.length; i++) {
       console.log(ele[i])
       if(ele[i].checked){
       ansGiven = ele[i].value;
      
       break;
       }
   }
   
      console.log(ansGiven);
      SectionDisplay[increment].selectedAnswer = ansGiven;
   if(SectionDisplay[increment].answer === ansGiven)
    SectionDisplay[increment].points = 1;



    // document.getElementsByClassName('options').style.checked=false
}

useEffect(()=>{console.log("USEFFECT")
if(SectionDisplay.length>0 && increment < SectionDisplay.length && increment >=0){
const ele = document.getElementsByName(SectionDisplay[increment].id);

console.log(ele);
let i;
for( i = 0; i < ele.length; i++) {
    console.log(ele[i])
    if(ele[i].checked){
   ele[i].checked = false;
   
    break;
    }
}


}

StoreAns(SectionDisplay,increment);
  
})

    const GetResult = (SectionDisplay) =>{
        console.log("valid")
        const TotalPoints=   SectionDisplay.reduce((accum,curEle) =>{
               return accum + curEle.points;
           },0);
           console.log(TotalPoints);
           settotal(TotalPoints);
           console.log("totaluse sate",total);
           console.log("total variable",TotalPoints);
           document.getElementById("re").disabled = true;
       }
       var x ;
       var distance;
   useEffect (()=>{
 const re = document.getElementById("result");
 if(re)
{
 re.innerHTML   =`score out of 10 s ${total}`;
    document.getElementById("su").disabled = true;
    // clearInterval(x);
    // setTimmerStop(false);
   
}

   },[total])    
       
useEffect(() => {
    if(SectionDisplay.length>0 && increment < SectionDisplay.length && increment >=0){
    
    getTime();
    }
}, [SectionDisplay])

       ////
     const [TimmerStop, setTimmerStop] = useState(true);
       const getTime =() =>{
        var countDownDate = 1*60*1000 + new Date().getTime();
    
        // Update the count down every 1 second
         x = setInterval(function() {
        
          // Get today's date and time
          var now = new Date().getTime();
            
          // Find the distance between now and the count down date
           distance = countDownDate - now;
            console.log(distance);
          // Time calculations for days, hours, minutes and seconds
          
          var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
          // Output the result in an element with id="demo"
         
         const k3= document.getElementById("time");
         if(k3)
         k3.innerHTML = ` ${minutes} m ${seconds} s `;
            
          // If the count down is over, write some text 
          if (distance < 0 || !TimmerStop) {
            clearInterval(x);
    
            setincrement(3);
            document.getElementById("re").disabled = true;
               if(k3)
            k3.innerHTML ="time up"

            GetResult(SectionDisplay);



            
    
          }
        }, 1000);
    };

       ////
      
       
    if(SectionDisplay.length > 0 && increment <SectionDisplay.length && increment>=0){
       
      
        

    return (
        <>
          
        <div className="main-cointain-q">
        <p id="time"></p>
            <div className="questions" >
                question :
                <p>{ 
                SectionDisplay[increment].question}</p>
                
            </div>
            <div className="options">
               <div className="change-color"> <input type="radio" name={SectionDisplay[increment].id} value={SectionDisplay[increment].option1 } onClick={() =>Check(SectionDisplay,increment)}  ></input>{SectionDisplay[increment].option1}</div>
              <div className="change-color">  <input type="radio" name={SectionDisplay[increment].id} value={SectionDisplay[increment].option2} onClick={() =>Check(SectionDisplay,increment)}></input>{SectionDisplay[increment].option2}</div>
             <div className="change-color">   <input type="radio" name={SectionDisplay[increment].id} value={SectionDisplay[increment].option3} onClick={() =>Check(SectionDisplay,increment)}  ></input>{SectionDisplay[increment].option3}</div>



            </div>
            <div className="changeQuestion">
            <button className="previous" onClick={()=>{setincrement(increment-1); }}>previous</button>
            <button className="next" onClick={()=>{setincrement(increment+1)} }>next</button>
            
            </div>   
            </div>
            
        </>
    )
                }
                else{
                    if(increment >=SectionDisplay.length && SectionDisplay.length !== 0){
                    return (

                        <>
                         
                        
                        <h3 id="result"> </h3>
                        <div className="submit">

                            
                            <button className="getResult" id="su" onClick={()=>GetResult(SectionDisplay)}>Submit</button>
                            
                                
                            
                       
                            <button className="reCheck" id="re" onClick={()=>setincrement(0)}>Recheck</button>
                        </div>
                        </>
                    )
                    }
                    else{
                        return(
                            <>
                            </>
                        )
                    }
                }
                               
}

export default CatagoryDisplay;
