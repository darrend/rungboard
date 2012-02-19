/* Author: Darren Day

*/
function handlePinboardResponse(data) {
    var source = $("#template").html();
    var template = Handlebars.compile(source);
    var result = template({
        "links": data
    });
    $("#main").append(result);
}

function refreshFromPinboard() {
    $.ajax({
        url: "http://feeds.pinboard.in/json/v1/u:thurston/t:start?format=json",
        dataType: 'jsonp',
        jsonp: 'cb',
        success: handlePinboardResponse
    });
}

$(document).ready(function() {
    refreshFromPinboard();
});





