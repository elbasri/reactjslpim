/* Performance */
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


/* Cloud */
sudo apt upgrade

/*
# Ubuntu
curl -fsSL https://deb.nodesource.com/setup_current.x | sudo -E bash -
sudo apt-get install -y nodejs

# Debian
curl -fsSL https://deb.nodesource.com/setup_current.x | bash -
apt-get install -y nodejs
*/
sudo apt install npm
npm cache clean -f
sudo npm install -g npm

//update node
sudo n latest

//install react
sudo npm -g install create-react-app

//create reactjs
create-react-app lpimreactjs
//C Start
npm start


//run build
npm install -g serve
sudo npm install -g serve