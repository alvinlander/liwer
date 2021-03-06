export default {
    generate: {
        fallback: true
    },
    /*
     ** Nuxt target
     ** See https://nuxtjs.org/api/configuration-target
     */
    target: "server",
    /*
     ** Headers of the page
     ** See https://nuxtjs.org/api/configuration-head
     */
    head: {
        title: process.env.npm_package_name || "",
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            {
                hid: "description",
                name: "description",
                content: process.env.npm_package_description || ""
            }
        ],
        link: [
            { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },

            {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&display=swap"
            }
        ],
        script: [{
                src: "https://code.jquery.com/jquery-3.5.1.slim.min.js",
                type: "text/javascript"
            },
            {
                src: "https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js",
                type: "text/javascript"
            },
            {
                src: "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js",
                type: "text/javascript"
            }
        ]
    },
    /*
     ** Global CSS
     */
    css: [],
    /*
     ** Plugins to load before mounting the App
     ** https://nuxtjs.org/guide/plugins
     */
    plugins: [{
        src: "~/plugins/index.js",
        ssr: false
    }],
    /*
     ** Auto import components
     ** See https://nuxtjs.org/api/configuration-components
     */
    components: true,
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        // Doc: https://github.com/nuxt-community/eslint-module
        // '@nuxtjs/eslint-module'
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://bootstrap-vue.js.org
        "bootstrap-vue/nuxt",
        // Doc: https://axios.nuxtjs.org/usage
        "@nuxtjs/axios",
        "@nuxtjs/pwa"
    ],
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {},
    /*
     ** Build configuration
     ** See https://nuxtjs.org/api/configuration-build/
     */
    build: {}
};