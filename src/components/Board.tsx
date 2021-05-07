import styled from 'styled-components';

const Status = styled.div`
  text-align: left;
  padding: 4px;
  float: left;
`
const Number = styled.div`
  width: 40px;
  height: 30px;
  float: left;
  padding: 0px;
  padding-top: 10px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  background-color: #ddd;
  margin: 2px;
`
const Canvas = styled.div`
  width: 460px;
  height: 430px;
  margin: 10px;
  text-align: center;
`
interface PropsBoard{
  game:number;
  judgeF:any;
  actualQuestionNumber:number;
  range:Array<number>;
  rangeAnswer:Array<number>;
  randomAnswer:boolean;
}
const Board=(props:PropsBoard): any => {
  let numbers = []
if(props.randomAnswer){
  // Tal i tilfældig rækkefølge
  numbers = props.rangeAnswer;
}else{
  // Tal i rækkefølge
  for(let i=1;i<=(props.game*10);i++){
    numbers.push(i);
  }
}
  return (
    <Canvas>
    {numbers.map(
      (number:number, key:number)=>
      <Number
        id        = {"number"+number}
        key       = {key}
        onClick   = {props.judgeF}
      >
        {number}
      </Number>
      )
    }
    <Status 
      id = "status" 
      style = {(props.game===0)?{display: "none"}:{display: "block"}}>
      Opgave {props.actualQuestionNumber} af {props.range.length}
    </Status>
  </Canvas>
  );
}

export default Board;