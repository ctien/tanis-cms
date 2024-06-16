"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    seo: {
        enable: true,
    },
    ckeditor5: {
        enabled: true,
    },
    guide: {
        enabled: true,
        resolve: "./src/plugins/guide",
    },
    graphql: {
        config: {
            endpoint: "/graphql",
            shadowCRUD: true,
            playgroundAlways: true,
            depthLimit: 7,
            amountLimit: 100,
            apolloServer: {
                tracing: false,
            },
        },
    },
});
