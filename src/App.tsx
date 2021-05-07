import styled from 'styled-components';
import Questions from './components/Questions';
import Board from './components/Board';
import { useState } from 'react';
import professer from './graphics/professor.png';

// Styles
const Container = styled.div`
  background-color:#eee;
  min-height:600px;
  padding:10px;
`
const Left = styled.div`
  width: 323px;
  float: left;
`;

const Right = styled.div`
float: left;
padding: 30px;
`;

const ImgText = styled.div`
  font-size: 24px;
  text-align: center;
  color: green;
`

const Img = styled.img`
  cursor: pointer;
`

function App() {
  const [level, setLevel]                               = useState("");
  const [game, setGame]                                 = useState(0);
  const [range, setRange]                               = useState<Array<number>>([]);
  const [rangeAnswer, setRangeAnswer]                   = useState<Array<number>>([]);
  const [randomAnswer, setRandomAnswer]                 = useState(false);
  const [actualQuestionNumber, setActualQuestionNumber] = useState(1);

  // 1. Chose level
  const levelF=(e:any)=>{
    const tmpLevel = e.target.value;
    setLevel(tmpLevel);
  }
  // 2. Tabel (game) selected
  const gameF=(e:any)=>{
    let tmpGame = e.target.innerHTML;
    if(tmpGame === "regnespurt"){
      tmpGame = 10;
    }else{
      tmpGame = Number(e.target.innerHTML);
    }
    
    setGame(tmpGame);
    // Random numbers (possible answers)
    setRangeAnswer(random2F(tmpGame*10));
    // Random questions
    setRange(random2F(10))
  }
  // 3. Answer evaluated right/wrong
  const judgeF = (e:any) => {
    const tmpAnswer   = Number(e.target.innerHTML);
    const realAnswer  = range[(actualQuestionNumber-1)]*game;
    const tmpId       = e.target.id;
    let answerValue   = false;

    if(level==="level1"){
      if(tmpAnswer%game === 0){
        answerValue = true;
      }
    }


    if(level==="level2"){
      if(tmpAnswer===realAnswer){
        answerValue=true;
      }
    }

    if(answerValue){
        document.getElementById(tmpId)!.style.backgroundColor  = "green";
    }else{
      document.getElementById(tmpId)!.style.backgroundColor    = "red";
    }
    if(actualQuestionNumber<range.length){
      setActualQuestionNumber(actualQuestionNumber+1);
    }else{
      document.getElementById("question")!.innerHTML           = "Du er færdig med opgaven";
    }
    
  }
  // Select a random order (questions and possible answers)
  const random2F=(antal:number)=> {

    const startArray:number[]	=	[];
    const slutArray:number[]  =	[];
    for (let i = 0; i < antal; i++) {
      startArray[i]   = i+1;
    }
    while (startArray.length > 0) {
      let tmpTal             = Math.random() * startArray.length;
      tmpTal                 = Math.floor(tmpTal);
      slutArray.push(startArray[tmpTal]);
      startArray.splice(tmpTal, 1);
    }
    return slutArray;
  }

    
  return (
    <Container>
    <Left>
      <Img src={professer} alt="professor" onClick={()=>setRandomAnswer(true)} />
      {!randomAnswer?<ImgText>Du skal aldrig kilde mig!</ImgText>:<ImgText>Ups!</ImgText>}
    </Left>
      <Right>
      <Questions 
          game                  = {game}  
          gameF                 = {gameF}
          range                 = {range}
          actualQuestionNumber  = {actualQuestionNumber}
          levelF                = {levelF}
          level                 = {level} />
      <Board 
          game                  = {game} 
          judgeF                = {judgeF}
          range                 = {range}
          rangeAnswer           = {rangeAnswer}
          actualQuestionNumber  = {actualQuestionNumber}
          randomAnswer          = {randomAnswer} />
      </Right>
      
    </Container>
  );
}

export default App;
