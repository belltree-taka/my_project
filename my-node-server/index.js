const express = require('express');
const basicAuth = require('express-basic-auth');
const app = express();

const users = {
  'takaharu': 'vitamine1'
};

app.use(basicAuth({
  users: users,
  challenge: true,
  unauthorizedResponse: 'Unauthorized'
}));

app.use(express.static('dist')); // ビルドディレクトリを指定

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
