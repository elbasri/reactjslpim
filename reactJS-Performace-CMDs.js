npm run build

<script src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>

npm install --save-dev terser-brunch
yarn add --dev terser-brunch
brunch build -p

const webpack = require('terser-webpack-plugin');
 
module.exports = {
 mode: 'production',
 optimization: {
   minimizer: [new webpack({ })],
 },
};
