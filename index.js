module.exports = {
    book: {
        assets: "./book",
        js: [
            "flowchart-1.6.2.js",
            "plugin.js"
        ],
        html: {
            "head:end": function() {
                // Required to including this way because raphael is non-AMD compliant
                return "<script src='//cdnjs.cloudflare.com/ajax/libs/raphael/2.1.2/raphael-min.js'></script>";
            }
        }
    }
};
