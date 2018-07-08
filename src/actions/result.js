let SUBMIT_RESULT = "SUBMIT_RESULT";
export let submit = (boolean) => ({ type: SUBMIT_RESULT, payload: boolean });
submit.toString = () => SUBMIT_RESULT;