
function menutoggle() {
    'use strict';
    document.getElementById("settings").classList.remove("show");
    document.getElementById("drop").classList.toggle("show");
    document.getElementById("mainbar").classList.toggle("fixed");
};
function settingstoggle() {
    'use strict';
    document.getElementById("drop").classList.remove("show");
    document.getElementById("settings").classList.toggle("show");
    document.getElementById("mainbar").classList.toggle("fixed");
};
// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    'use strict';
    if (!(event.target == document.getElementById("drop")) && !(event.target == document.getElementById("dropbtn")) && !(event.target == document.getElementById("settings")) && !(event.target == document.getElementById("settingsbtn")) && !(event.target == document.getElementById("settingsh1"))) {

        document.getElementById("drop").classList.remove("show");
        document.getElementById("settings").classList.remove("show");
        document.getElementById("mainbar").classList.remove("fixed");
    }
}
/*Inspired and based on a W3Schools tutorial.*/
