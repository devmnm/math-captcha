import { terser } from 'rollup-plugin-terser'
// import css from 'rollup-plugin-import-css'

export default [
    {
        input: 'src/index.js',
        output: {
            file: 'dist/captcha.min.js',
            sourcemap: 'captcha.min.js.map',
            format: 'iife',
            name: 'Captcha'
        },
        plugins:[
            terser(),
            // css({ ouput: 'captcha.min.css', minify: true })
        ]
    }
]