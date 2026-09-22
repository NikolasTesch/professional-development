import assert from 'node:assert/strict';
import { summarizeGoals } from '../src/studyGoals.js';

assert.deepEqual(summarizeGoals([30, 45]), { totalMinutes: 75, completedGoals: 2 });
assert.deepEqual(summarizeGoals([]), { totalMinutes: 0, completedGoals: 0 });
assert.throws(() => summarizeGoals([30, -1]), /minutos não negativos/);
assert.throws(() => summarizeGoals([NaN]), /minutos não negativos/);
assert.throws(() => summarizeGoals([Infinity]), /minutos não negativos/);
assert.throws(() => summarizeGoals(new Array(2)), /minutos não negativos/);
console.log('studyGoals tests passed');
