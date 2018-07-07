const SHOW_SETTINGS = "SHOW_SETTINGS";
export let show = () => ({ type: SHOW_SETTINGS });
show.toString = () => SHOW_SETTINGS;

const HIDE_SETTINGS = "HIDE_SETTINGS";
export let hide = () => ({ type: HIDE_SETTINGS });
hide.toString = () => HIDE_SETTINGS;