// action creator
export const PROFESSOR_HAPPY = 'PROFESSOR_HAPPY';
export const professorHappy = text =>({
  type:PROFESSOR_HAPPY,
  payload:{ text},
});

export const PROFESSOR_MAD = 'PROFESSOR_MAD';
export const professorMad = text =>({
  type:PROFESSOR_MAD,
  payload:{ text},
});