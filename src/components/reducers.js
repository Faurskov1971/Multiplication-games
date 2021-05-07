import { PROFESSOR_HAPPY,PROFESSOR_MAD } from "./actions";


export const professorMode = (state, action) => {
  const { type, payload} = action;

  switch(type){
    case PROFESSOR_HAPPY: {
      break
    }
    case PROFESSOR_MAD: {
      break
    }
    default:
      return state;
  }

  return state;
}