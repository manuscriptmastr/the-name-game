export let submit = (state, { payload: wasCorrect }) => {
  let { results } = { ...state };
  if (wasCorrect) {
    results.correct ++;
  } else {
    results.incorrect ++;
  }

  return { ...state, results };
};