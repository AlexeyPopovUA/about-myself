module.exports = {
    "presets": ["@babel/react", "@babel/preset-typescript", ["@babel/preset-env", {
        //"debug": true,
        "useBuiltIns": "usage",
        "corejs": 3,
        "targets": {
            "browsers": [
                "defaults"
            ]
        }
    }]],
    "plugins": [
        "@babel/plugin-syntax-dynamic-import",
        "@babel/plugin-transform-runtime",
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-proposal-optional-chaining",
        "@babel/plugin-proposal-nullish-coalescing-operator",
        "@babel/plugin-proposal-export-namespace-from"
    ]
};
