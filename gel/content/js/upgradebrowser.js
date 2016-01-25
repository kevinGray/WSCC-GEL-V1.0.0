
        var $buoop = {
            vs: { i: 9, f: 15, o: 12.1, s: 5.1 }, c: 2,
            reminder: 0,
            text: "Upgrade your web browser (the software you use to access the internet), it's out of date",
            url: "/browsers/",
            newwindow: false
        };
function $buo_f() {
    var e = document.createElement("script");
    e.src = "//browser-update.org/update.js";
    document.body.appendChild(e);
};

try { document.addEventListener("DOMContentLoaded", $buo_f, false);} catch (e) { window.attachEvent("onload", $buo_f); }
