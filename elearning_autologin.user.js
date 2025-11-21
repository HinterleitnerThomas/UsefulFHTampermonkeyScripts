// ==UserScript==
// @name         FH Autologin
// @namespace    http://tampermonkey.net/
// @version      2025-11-22
// @description  Clicks the login button on eLearning & selects FH account in Microsoft Online if necessary.
// @author       Thomas H.
// @match        https://elearning.fh-ooe.at/login/index.php*
// @match        https://login.microsoftonline.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=fh-ooe.at
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/HinterleitnerThomas/UsefulFHTampermonkeyScripts/refs/heads/main/elearning_autologin.user.js
// @updateURL    https://raw.githubusercontent.com/HinterleitnerThomas/UsefulFHTampermonkeyScripts/refs/heads/main/elearning_autologin.user.js
// ==/UserScript==

(function() {
    'use strict';

    if(window.location.host == "elearning.fh-ooe.at") {
        // Button "FH OÖ Login" (Hochschulangehörige)
        document.getElementsByClassName("login-identityprovider-btn")[0].click();
    }

    // If not logged in with Microsoft -> This should do nothing
    // If logged in with FH account -> Login continoues automatically, this should do nothing (thus the setTimeout)
    // If logged in with other account -> This should do nothing
    // If logged in with multiple accounts -> Auto selects FH account
    if(window.location.host == "login.microsoftonline.com") {
        if(!(decodeURIComponent(window.location.href).includes("https://elearning.fh-ooe.at/auth/oidc") ||
             decodeURIComponent(window.location.href).includes("https://levis.fh-ooe.at")))
        {
            // False trigger, microsoft login page is for something not FH related
            return;
        }
        
        setTimeout(function() {
            // Each entry displays the Email address ("unsafe_displayName")
            let accountElementList = [...document.getElementsByTagName("small")].filter((x) => x.attributes[0].textContent == "text: session.unsafe_displayName");
            let accountFHElement = accountElementList.filter((x) => x.textContent.endsWith("@fhooe.at"))[0];

            // Select account. Technically not a button but it works
            accountFHElement.click();
        }, 750)
    }
})();
