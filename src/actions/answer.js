const RESET_ANSWERS = "RESET_ANSWERS";
export let resetAll = () => ({ type: RESET_ANSWERS });
resetAll.toString = () => RESET_ANSWERS;