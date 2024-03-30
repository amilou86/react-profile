// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import url from '@rollup/plugin-url';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';

export default {
    input: 'src/index.js', // Your entry file
    output: {
        file: 'dist/bundle.js', // Your desired output file for JavaScript
        format: 'umd', // Or any other format you prefer
        sourcemap: true,
    },
    plugins: [
        resolve(), // Resolve node_modules dependencies
        commonjs(), // Convert CommonJS modules to ES6
        babel({ babelHelpers: 'bundled' }), // Transpile JSX/ES6 with Babel
        url({
            // By default, this plugin will emit files into the output directory
            // You can specify a different output directory if needed
            fileName: '[name][extname]',

            // Specify which files to handle (e.g., PDF files)
            include: ['**/*.pdf', '**/*.jpg', '**/*.jpeg', '**/*.png']

            // You can also configure options for handling the files, such as emitting to the output directory
            // emitFiles: true, // Uncomment this if you want the plugin to emit the files to the output directory
        }),
        terser(), // Minify the output bundle (optional)
    ],
};