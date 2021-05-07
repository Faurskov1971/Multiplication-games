import styled from 'styled-components';
import Timer from './Timer';

// styles
const Question = styled.div`
  margin: 10px;
  color: green;
  width: 460px;
  text-align: left;
`
const QuestionText = styled.div`
  font-size: 24px;
  font-family: Arial, Helvetica, sans-serif;
`

interface PropsQuestionText{
  range:Array<number>;
  actualQuestionNumber:number;
  game:number;
  level:string;
}

function QuestionLevel(props:PropsQuestionText) {

    let tmpResult:any = "";
    if(props.level === "level1"){
      tmpResult="Find tal fra "+props.game+"-tabellen";
    }else if(props.level==="level2"){
      tmpResult="Hvad er "+props.range[(props.actualQuestionNumber-1)]+" gange "+props.game+"?";
    }else if(props.level==="level3"){
      const tasks=[];
      let i,j;
      for(i = 1; i <= 10; i++){
        for(j = 1; j <=10 ; j++){
          tasks.push(i+"-"+j);
        }
      }
      tmpResult = <Timer />;
    }


  return (
    <Question id="question">
        <QuestionText>{tmpResult}</QuestionText>
    </Question>
    )
}
export default QuestionLevel;