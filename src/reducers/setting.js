export let show = (state) => ({ ...state, settings: { ...state.settings, visible: true } });
export let hide = (state) => ({ ...state, settings: { ...state.settings, visible: false } });
export let toggleHints = (state) => ({ ...state, settings: { ...state.settings, hints: !state.settings.hints } });
export let updateFilter = (state, { payload }) => ({ ...state, settings: { ...state.settings, filter: payload } });