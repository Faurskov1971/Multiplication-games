import QuestionLevel from './QuestionLevel';
import QuestionsTabeller from './QuestionsTabeller';

interface PropsQuestions{
  game                  :number;
  gameF                 :any;
  range                 :Array<number>;
  actualQuestionNumber  :number;
  levelF                :any;
  level                 :string;
}

function Questions(props:PropsQuestions) {

  return (
  ( props.game === 0 )?
  <QuestionsTabeller 
    level   = { props.level } 
    levelF  = { props.levelF } 
    gameF   = { props.gameF }
  />
  :<QuestionLevel 
    range                 = { props.range } 
    actualQuestionNumber  = { props.actualQuestionNumber }
    game                  = { props.game } 
    level                 = { props.level } />
  );
}

export default Questions;