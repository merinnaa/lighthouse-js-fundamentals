const judgeVegetable = (vegetables, metric) => {
  let bestVeggie = vegetables[0];
  for (let i = 1; i < vegetables.length; i++) {
    if (vegetables[i][metric] > bestVeggie[metric]) {
      bestVeggie = vegetables[i];
    }
  }
  return bestVeggie.submitter;
}