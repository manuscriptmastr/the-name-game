const UPDATE_PERSONS = "UPDATE_PERSONS";
export let updateAll = (payload) => ({ type: UPDATE_PERSONS, payload });
updateAll.toString = () => UPDATE_PERSONS;