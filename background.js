function modifyGoogleSearchUrl(details) {
    let url = new URL(details.url);

    // check url is a Google search
    if (url.hostname.endsWith("google.com") && url.pathname === "/search" && !url.searchParams.has('udm')) {
        url.searchParams.set('udm', '14');

        return { redirectUrl: url.href };
    }

    return {};
}

// listener for web requests
browser.webRequest.onBeforeRequest.addListener(
    modifyGoogleSearchUrl,
    { urls: ["*://*.google.com/search*"] },
    ["blocking"]
);
