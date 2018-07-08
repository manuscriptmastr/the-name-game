const SHOW_SETTINGS = "SHOW_SETTINGS";
export let show = () => ({ type: SHOW_SETTINGS });
show.toString = () => SHOW_SETTINGS;

const HIDE_SETTINGS = "HIDE_SETTINGS";
export let hide = () => ({ type: HIDE_SETTINGS });
hide.toString = () => HIDE_SETTINGS;

const TOGGLE_HINTS = "TOGGLE_HINTS";
export let toggleHints = () => ({ type: TOGGLE_HINTS });
toggleHints.toString = () => TOGGLE_HINTS;