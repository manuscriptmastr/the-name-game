import { pipe } from '../lib/utility';
import { shuffle, limit, current, withHeadshot, withFilter, ids } from '../lib/array';

export let resetAll = (state) => {
  let { allPersons, settings } = state;
  let answers = pipe(current, withFilter(settings.filter), withHeadshot, shuffle, limit(5), ids)(allPersons);
  let question = shuffle(answers)[0];
  return {
    ...state,
    question,
    answers
  };
};