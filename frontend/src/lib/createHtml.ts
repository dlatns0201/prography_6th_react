export default (title: string, root: string, stateScript: string) => `
<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta name="viewport" content="width=device-width, user-scalable=no">
      <meta name="google" content="notranslate">
      ${title}
    </head>
    <body>
      <div id="root">${root}</div>
      ${stateScript}
      <script type="text/javascript" src="main.js"></script>
    </body>
  </html>
`;
