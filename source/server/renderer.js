import { Helmet } from 'react-helmet';
import serialize from 'serialize-javascript';

export default (store, content) => {
  const helmet = Helmet.renderStatic();
  return `
    <html>
        <head>
        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-105071304-3"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'UA-105071304-3');
        </script>
        

        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        <meta charset="UTF-8">        
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="/main.css">  
        </head>
        <body>
            <div id="root">${content}</div>
            <script>
              window.INITIAL_STATE=${serialize(store.getState())}
            </script>
            <script src="/assets/bundle.js"></script>
        </body>
    </html>`;
}