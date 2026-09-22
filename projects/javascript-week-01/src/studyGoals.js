export function summarizeGoals(goals) {
  const minutesList = Array.isArray(goals) ? Array.from(goals) : null;

  if (!minutesList || minutesList.some((minutes) => !Number.isFinite(minutes) || minutes < 0)) {
    throw new Error('Informe uma lista de minutos não negativos');
  }

  return {
    totalMinutes: minutesList.reduce((total, minutes) => total + minutes, 0),
    completedGoals: minutesList.length,
  };
}
