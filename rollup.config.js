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


        })
    ]
};