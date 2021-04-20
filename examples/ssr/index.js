const React = require('react');
const ReactDOM = require('react-dom/server');
const { Circle } = require('simple-react-spinners');
const express = require('express');

const port = 3000;
const app = express();

app.get('*', (req, res) => {
  const circleElement = React.createElement(Circle);
  const html = ReactDOM.renderToString(circleElement);

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
    </head>
    <body>
      ${html}      
    </body>
    </html>
  `);
});

app.listen(port, () => console.log(`http://localhost:${port}`));
