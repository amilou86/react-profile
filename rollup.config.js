import url from '@rollup/plugin-url';

export default {
    input: 'src/main.jsx',
    output: {
        dir: 'output',
        format: 'cjs'
    },
    plugins: [
        url({
            // Specify which files to handle (e.g., PDF files)
            include: ['**/*.pdf', '**/*.jpg', '**/*.jpeg', '**/*.png'],

            // By default, this plugin will emit files into the output directory
            // You can specify a different output directory if needed
            // fileName: '[name][extname]',

            // You can also configure options for handling the files, such as emitting to the output directory
            // emitFiles: true, // Uncomment this if you want the plugin to emit the files to the output directory
        })
    ]
};