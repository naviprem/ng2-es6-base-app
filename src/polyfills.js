require("core-js");
require("reflect-metadata");
require("rxjs");
require("zone.js");

if (process.env.ENV === 'production') {
    // Production
} else {
    // Development
    Error['stackTraceLimit'] = Infinity;
    require('zone.js/dist/long-stack-trace-zone');
}