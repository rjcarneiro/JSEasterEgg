// [UP] [DOWN] [LEFT] [RIGHT] A S D
var konami_keys = [38, 40, 37, 39, 65, 83, 68];
var konami_index = 0;

$(document).keydown(function(e) {
    if (e.keyCode === konami_keys[konami_index++]) {
        if (konami_index === konami_keys.length) {
            $(document).unbind('keydown', arguments.callee);
            goAmericanGuy();
        }
    } else {
        konami_index = 0;
    }
});

var goAmericanGuy = function goAmericanGuy() {
    var html = "<img src='wewantyou.png' id='wewantyou' style='position: fixed; left:40%; top: -150px; z-index: 999;' />";
    $('body').append(html);

    $('#wewantyou').animate({
        top: $(window).height() / 7
    }, 1500, function() {
        setTimeout(function() {
            $('#wewantyou').toggle('explode', function() {
                $('#wewantyou').remove();
            });
        }, 1500);
    });
}