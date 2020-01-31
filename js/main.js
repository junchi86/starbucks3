var cbpHorizontalMenu = (function () {

    var $listItems = $('.mainnav > ul > li'),
        $menuItems = $listItems.children('a'),
        $body = $('body'),
        current = -1;

    function init() {
        $menuItems.on('click', open);
        $listItems.on('click', function (event) {
            event.stopPropagation();
        });
    }

    function open(event) {

        if (current !== -1) {
            $listItems.eq(current).removeClass('cbp-hropen');
        }

        var $item = $(event.currentTarget).parent('li'),
            idx = $item.index();

        if (current === idx) {
            $item.removeClass('cbp-hropen');
            current = -1;
        } else {
            $item.addClass('cbp-hropen');
            current = idx;
            $body.off('click').on('click', close);
        }

        return false;

    }

    function close(event) {
        $listItems.eq(current).removeClass('cbp-hropen');
        current = -1;
    }

    return {
        init: init
    };

})();

var cbpHorizontalMenu = (function () {
    var b = $(".mainnav > ul > li"),
        g = b.children("a"),
        c = $("body"),
        d = -1;

    function f() {
        g.on("click", a);
        b.on("click", function (h) {
            h.stopPropagation()
        })
    }

    function a(j) {
        if (d !== -1) {
            b.eq(d).removeClass("cbp-hropen")
        }
        var i = $(j.currentTarget).parent("li"),
            h = i.index();
        if (d === h) {
            i.removeClass("cbp-hropen");
            d = -1
        } else {
            i.addClass("cbp-hropen");
            d = h;
            c.off("click").on("click", e)
        }
        return false
    }

    function e(h) {
        b.eq(d).removeClass("cbp-hropen");
        d = -1
    }
    return {
        init: f
    }
})();
