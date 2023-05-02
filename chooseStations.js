function chooseStations(stations) {
  let appropriateStations = [];

  for (let station of stations) {
    let capacity = station[1];
    let venueType = station[2];

    if (capacity >= 20 && (venueType === "school" || venueType === "community centre")) {
      appropriateStations.push(station[0]);
    }
  }

  return appropriateStations;
}