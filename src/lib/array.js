export let limit = (int) => (arr) => arr.slice(0, int);
export let shuffle = (arr) => [ ...arr ].sort(() => 0.5 - Math.random());
export let current = (arr) => arr.filter(a => a['jobTitle']);
export let withHeadshot = (arr) => arr.filter(a => a['headshot']['url']);
export let ids = (arr) => arr.map(a => a.id);