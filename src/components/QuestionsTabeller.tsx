import styled from 'styled-components';
const Info = styled.div`
  text-align: left;
  width: 500px;
  margin: 10px;
`
const Button = styled.button`
  background-color: olive;
  color: antiquewhite;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 2vw;
  margin-right: 5px;
  border: 0;
  padding: 4px;
  min-width: 40px;
  cursor: pointer;
`
const Select = styled.select`
    width: 100%;
    max-width: 490px;
    height: 30px;
    font-size: 20px;
    color: gray;
    margin-bottom:5px;
`
interface PropsQuestionsTabeller{
  gameF   :any;
  levelF  :any;
  level   :string; 
}

const QuestionsTabeller=(props:PropsQuestionsTabeller)=>{
  const levels=[
    {
      level:'level1',
      name:'Find tal', 
      tabels:[1,2,3,4,5,10,11]
    },
    {
      level:'level2',
      name:'Lav opgaver',
      tabels:[1,2,3,4,5,6,7,8,9,10]
    },
    {
      level:'level3',
      name:'Hvor mange opgaver kan du nå?',
      tabels:['regnespurt']
    }
  ];
  return(
<Info>
  
  
  <Select 
    onChange={ props.levelF } 
    style = {(props.level!=="")?{display: "none"}:{display: "block"}}
    >
  <option value="">Hvad skal vi lave?</option>
    {
      levels.map((level,index) => 
      <option key={index} value={level.level}>{level.name}</option>
  )}
  </Select>
  {
    (props.level==="level1")?
    levels[0].tabels.map(
      (tabel:any, index:any)=>
      <Button key={index} onClick={ props.gameF }>{tabel}</Button>)
    : ""
  }
  {
    (props.level==="level2")?
    levels[1].tabels.map(
      (tabel:any, index:any)=>
      <Button key={index} onClick={ props.gameF }>{tabel}</Button>)
      : ""
    }
  {
    (props.level==="level3")?
    levels[2].tabels.map(
      (tabel:any ,index:any)=>
      <Button key={index} onClick={ props.gameF }>{tabel}</Button>)
      : ""
    }
</Info>
)
}
export default QuestionsTabeller;