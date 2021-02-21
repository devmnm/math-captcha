import { terser } from 'rollup-plugin-terser'

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
            terser()
        ]
    }
]