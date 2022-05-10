$("h1").css("color", "white");

$("h4").css("color", "white");

$("p").css("color", "white");

const settings = {
  async: true,
  crossDomain: true,
  url: "https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all",
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    "X-RapidAPI-Key": "71be4c9ca8mshfdcb95a793439fap16331cjsn50e00623cedf",
  },
};
// how do we get the data from this?
$.ajax(settings).done(function (body) {
  // most of your work in here
  console.log(body.response);

  let fullData = body.response;

  fullData.forEach(function (fixtureData) {
    let homeTeam = {
      name: fixtureData.teams.home.name,
      score: fixtureData.goals.home,
      logo: fixtureData.teams.home.logo,
    };

    let awayTeam = {
      name: fixtureData.teams.away.name,
      score: fixtureData.goals.away,
      logo: fixtureData.teams.away.logo,
    };

    let currentMin = fixtureData.fixture.status.elapsed;

    console.log(homeTeam);
    console.log(awayTeam);
    console.log("current time is " + currentMin + " \n");
  });
});

//  do we do let kickOff = settings
