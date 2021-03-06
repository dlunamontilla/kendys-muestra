jQuery(document).ready(function ($) {
    $('.counter').counterUp({
        delay: 100,
        time: 1200
    });
    $('.circliful-chart').circliful();

    $(".alert").fadeTo(3500, 600).slideUp(400, function () {
        $(".alert").slideUp(600);
    });
});

// BEGIN SVG WEATHER ICON
if (typeof Skycons !== 'undefined') {
    var icons =
        new Skycons({ "color": "#3bafda" }, { "resizeClear": true }),

        list = [
            "clear-day", "clear-night", "partly-cloudy-day",
            "partly-cloudy-night", "cloudy", "rain", "sleet", "snow", "wind",
            "fog"
        ],

        i;

    for (i = list.length; i--;)
        icons.set(list[i], list[i]);
    icons.play();
};