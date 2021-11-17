var h5El = $("h5")
var searchHistoryBtnEl = $("search-history-btn")
var searchBtnEl = $("search-btn")
var todayUVEl = $("#today-uv")
var todayUVBadgeEl = $("#today-uv-badge")
var date = moment().format('L')
var cityNameEl = $("#city-name")
var todayTempEl = $("#today-temp")
var todayWindEl = $("#today-wind")
var todayHumidty = $("#today-humidity")
var searchHistoryList = $("#search-history-list")
var searchBtnText = $("#text-box")

searchBtnEl.on("click", searchBtnRun);
$("search-history-list").on("click", ".search-history-btn", historyBtnRun)

// retrieving information from the API
function searchBtnRun(coordsSource) {
    var city = searchBtnText.val();
    var APIKey = "eef440075f231dabd98329edc16d0dae";

    console.log(city);
    var coordsSource = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + APIKey;

    // fetching locational information
    fetch(coordsSource).then(function (response) {
        return response.json();
    }).then(function (data) {
        var latitude = data.coord.latitude
        console.log(latitude);

        var longitude = data.coord.longitude
        console.log(longitude);

        var finalAPI = "https://api.openweathermap.org/data/2.5/onecall?lat="+ latitude + "&lon=" + longitude + "&units=imperial&appid=" + APIKey

        fetch(finalAPI).then(function (response) {
            return response.json();
        }).then(function (data) {
            console.log(data);
            
        })
    })
}