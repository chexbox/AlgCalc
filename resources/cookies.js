function setcookie(value) {
    document.cookie = "";
    document.cookie = "colors=" + value + "; path=/";
    getCookie();
}

function getCookie() {
    var c = String(document.cookie);
    var bg = c.slice(7, 14);
    var col = c.slice(15, 22);
    var ne = c.slice(23, 30);
    var tx = c.slice(31, 38);
    var ac = c.slice(39, 46);
    console.log(document.cookie);
    var css = ":root{ --main-bg:" + bg + "; --accent:" + col + "; --card:" + ne + "; --text:" + tx + ";--accenttext:" + ac + ";}";

    var customcss = document.createElement('style');
    customcss.type = 'text/css';
    customcss.styleSheet ?
    customcss.styleSheet.cssText = css :
        customcss.appendChild(document.createTextNode(css));

    document.getElementsByTagName("head")[0].appendChild(customcss);
}
