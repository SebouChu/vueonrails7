const vuePlugin = require('esbuild-plugin-vue-next')
const args = process.argv.splice(2)

require('esbuild').build({
    entryPoints: [
        './app/javascript/application.js',
        './app/javascript/application.vue.js'
    ],
    bundle: true,
    sourcemap: true,
    minify: process.env.NODE_ENV === 'production',
    outdir: 'app/assets/builds',
    watch: args.includes("--watch"),
    logLevel: "info",
    plugins: [vuePlugin()],
    define: {
        __VUE_OPTIONS_API__: true,
        __VUE_PROD_DEVTOOLS__: false
    }
}).catch(() => process.exit(1))