$("#search-button").click(function (event) {
    event.preventDefault()
    var city = $("#search-input").val()
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=2921e641a3561c823923759f2052229b&units=metric"
    fetch(queryURL)
        .then(function (res) {
            return res.json()
        })
        .then(function (data) {
            console.log(data)
            $("#city").text(data.city.name);
            $("#date").text(moment.unix(data.list[0].dt).format("DD/MM/YYYY"));
            $("#temperature").text(data.list[0].main.temp);
            $("#humidity").text(data.list[0].main.humidity);
            $("#wind-speed").text(data.list[0].wind.speed);
            var index = 1

            for(var i = 7; i < data.list.link; i+=8){
                $("#date-" + index).text(moment.unix(data.list[i].dt).format("DD/MM/YYYY"));
                index++
            }
        })
})

