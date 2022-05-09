// we will use the fetch method

function getData(){
    fetch("https://v3.football.api-sports.io/fixtures?live=all",{
        method: "GET",
        headers: {
            "x-rapidapi-host"
        }

    }
}