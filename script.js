let container = document.getElementById("container");

// we made an API call.
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
//that settings is getting information on the API called (body).
$.ajax(settings).done(function (body) {
  console.log(body.response);
  // what we need is to get the API called response (JSON), whats under response is what we need to make our fixtures.
  let fullData = body.response;
  //  to make it easier we say full data instead of body.response

  //  what we need to do is create a function that could list the team name score and logo.

  //   we loop through every single fixture, forEach fixture data (game), we are looking homeTeam information by accessing it by objects using teams.home.name.
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

    addMatches(homeTeam, awayTeam, currentMin);

    // after getting data from api. make it show up on webpage instead of just console log

    // get whole document

    // create element for each fixture

    // populate that element with above parsed data, ie.. "awayTeam.name", "HomeTeam.logo"

    // append that new element with the populated data to the document (hint: use .append(you element goes here))
    // this console is the ending it with the ajax.
    console.log(homeTeam);
    console.log(awayTeam);
    console.log("current time is " + currentMin + " \n");
  });
});

//  we translate this to our webpage. we add a varaible and combine all hometeam,awayteam,and the timer.
function addMatches(homeTeam, awayTeam, currentMin) {
  //   we create our div template and create a copy of the template. I also removed Id because we cant have the 2 names that are same (templates)
  let fixtureHtml = document.getElementById("template").cloneNode(true);
  fixtureHtml.removeAttribute("id");
  // We created a varible called homeTeamLogo. We said go into the template called .homeBadge and put in a logo by setting up the attribe and putting the object. the TextContent is what we use to put it the website.
  let homeTeamLogo = fixtureHtml.querySelector(".homeBadge");
  homeTeamLogo.setAttribute("src", homeTeam.logo);
  let homeTeamName = fixtureHtml.querySelector(".homeClub");
  homeTeamName.textContent = homeTeam.name;

  let goals = fixtureHtml.querySelector(".goals");
  goals.textContent = homeTeam.score + " - " + awayTeam.score;

  let awayTeamLogo = fixtureHtml.querySelector(".awayBadge");
  awayTeamLogo.setAttribute("src", awayTeam.logo);
  let awayTeamName = fixtureHtml.querySelector(".awayClub");
  awayTeamName.textContent = awayTeam.name;

  console.log(fixtureHtml);

  container.append(fixtureHtml);
}

function testPage() {
  let testhomeTeam = {
    name: "Abdiqani",
    score: 10,
    logo: "",
  };

  let testawayTeam = {
    name: "Khalid",
    score: 0,
    logo: "",
  };

  console.log(testhomeTeam);
  console.log(testawayTeam);

  addMatches(testhomeTeam, testawayTeam, 77);

  testhomeTeam.name = "Liverpool";
  testhomeTeam.score = 5;

  testawayTeam.name = "Arsenal";
  testawayTeam.score = 7;

  addMatches(testhomeTeam, testawayTeam, 55);
}

//testPage();
