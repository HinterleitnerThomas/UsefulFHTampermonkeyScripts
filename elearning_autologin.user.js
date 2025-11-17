// ==UserScript==
// @name         eLearning Autologin
// @namespace    http://tampermonkey.net/
// @version      2025-11-17_2
// @description  Clicks the login button on eLearning
// @author       You
// @match        https://elearning.fh-ooe.at/login/index.php*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=fh-ooe.at
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/HinterleitnerThomas/UsefulFHTampermonkeyScripts/refs/heads/main/elearning_autologin.user.js
// @updateURL    https://raw.githubusercontent.com/HinterleitnerThomas/UsefulFHTampermonkeyScripts/refs/heads/main/elearning_autologin.user.js
// ==/UserScript==

(function() {
    'use strict';

    document.getElementsByClassName("login-identityprovider-btn")[0].click();
})();
