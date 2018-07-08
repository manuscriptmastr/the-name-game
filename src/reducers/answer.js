import { pipe } from '../lib/utility';
import { shuffle, limit, current, ids } from '../lib/array';

export let resetAll = (state) => {
  let { allPersons } = state;
  let answers = pipe(current, shuffle, limit(5), ids)(allPersons);
  let question = shuffle(answers)[0];
  return {
    ...state,
    question,
    answers
  };
};