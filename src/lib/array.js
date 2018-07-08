export let limit = (int) => (arr) => arr.slice(0, int);
export let shuffle = (arr) => [ ...arr ].sort(() => 0.5 - Math.random());
export let current = (arr) => arr.map(a => a['jobTitle'] ? a : undefined);
export let ids = (arr) => arr.map(a => a.id);