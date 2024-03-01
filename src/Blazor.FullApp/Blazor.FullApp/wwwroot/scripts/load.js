function OnLoad() {
    if ($("#main-menu-bar").length <= 0) {
        $("#page-container").addClass("p-t-0");
    }

    //Load Button Handlers
    $(".button-handler").click(function () {
        Redirect(this);
    });

    // ==============================================================
    // Notes sidebar options
    // ==============================================================
    $(".notes-right-side-toggle").click(function () {
        $(".right-sidebar").slideDown(50);
        $(".right-sidebar").toggleClass("shw-rside");
    });

    $('.notes-scrollright').slimScroll({
        height: '100%'
        , position: 'right'
        , size: "5px"
        , color: '#dcdcdc'
    });
}

// Register last() méthod for arrays
if (!Array.prototype.last) {
    Array.prototype.last = function () {
        try {
            return this[this.length - 1];
        }
        catch
        {
            return null;
        }
    };
}

if (!Array.prototype.first) {
    Array.prototype.first = function () {
        try {
            return this[0];
        }
        catch
        {
            return null;
        }
    };
}

$(document).ready(OnLoad);