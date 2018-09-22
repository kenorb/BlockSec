/**
 * @file The entry point for the web extension.
 */

var log = console.log.bind(console)

// @refs: https://developer.chrome.com/extensions/match_patterns
var ALL_SITES = { urls: ['<all_urls>'] }

// Mozilla doesn't use tlsInfo in extraInfoSpec.
var extraInfoSpec = ['blocking'];

// @refs: https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/webRequest/onHeadersReceived
if (typeof browser !== "undefined") {
    log('TLS browser extension loaded.')
    browser.webRequest.onHeadersReceived.addListener(async function(details){
        log('Got a request for ${details.url} with ID ${details.requestId}.')

        // Yeah this is a String, even though the content is a Number
        var requestId = details.requestId

        var securityInfo = await browser.webRequest.getSecurityInfo(requestId, {
            certificateChain: true,
            rawDER: false
        });

        log('securityInfo: ${JSON.stringify(securityInfo, null, 2)}')

    }, ALL_SITES, extraInfoSpec)
    console.log('Added listener.')
}