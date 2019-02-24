const ogProps = {
    updated_time: new Date(),
    type: 'website',
    url: 'https://ccdcafe.com',
    title: 'Beijing CCD Coffee CO., Ltd.',
    description:
        'The website for Beijing CCD Coffee CO., Ltd.'
};
/**
 * HTML frame component
 * @method start
 * @return {string}
 */
export const start = () => {
    return `<!DOCTYPE html><html lang="en-us">
        <head>
            <link rel="stylesheet" href="/static/styles.css" type="text/css" />
            <link rel="stylesheet" href="https://api.mapbox.com/mapbox.js/v3.1.1/mapbox.css" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <title>
                Beijing CCD Coffee CO., Ltd
            </title>
            <link rel="manifest" href="/static/manifest.json" />
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <meta name="ROBOTS" content="INDEX, FOLLOW" />
            <meta property="og:title" content="${ogProps.title}" />
            <meta property="og:description" content="${ogProps.description}" />
            <meta property="og:type" content="${ogProps.type}" />
            <meta property="og:url" content="${ogProps.url}" />
            <meta property="og:updated_time" content="${ogProps.updated_time}" />
            <meta itemProp="description" content="${ogProps.description}" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content="${ogProps.title}" />
            <meta name="twitter:description" content="${ogProps.description}" />
            <meta property="ccdcafe:tag" content="Coffee" />
        </head>
        <body>
            <div id="app">
    `;
};

/**
 * Write the end content for SSR
 * @method end
 * @param  {object} reduxState redux state
 * @return {string}
 */
export const end = reduxState => {
    return `</div>
        <script id="initialState">
            window.__INITIAL_STATE__ = ${JSON.stringify(reduxState)};
        </script>
        <script src="https://cdn.ravenjs.com/3.17.0/raven.min.js" type="text/javascript"></script>
        <script src="https://api.mapbox.com/mapbox.js/v3.1.1/mapbox.js" type="text/javascript"></script>
        <script src="/static/bundle.js" type="text/javascript"></script>
        </body>
    </html>`;
};
