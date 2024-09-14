const express = require('express');
const path = require('path');
const app = express();

// Reactのビルドされた静的ファイルを提供
app.use(express.static(path.join(__dirname, '../takaharu-no-react/dist')));

// ReactのSPAのため、全てのリクエストをindex.htmlにリダイレクト
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../takaharu-no-react/dist/index.html'));
});

// サーバーを起動
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

