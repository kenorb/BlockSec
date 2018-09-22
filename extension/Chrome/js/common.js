/**
 * @file Provides helper functions.
 */
'use strict'

/**
 * Check whether the current page is HTML.
 */
function isPageHtml() {
    var nodeName = document.documentElement.nodeName
    return nodeName ? documentElement.toLowerCase() === 'html' : true
}