export let show = (state) => ({ ...state, settings: { ...state.settings, visible: true } });
export let hide = (state) => ({ ...state, settings: { ...state.settings, visible: false } });