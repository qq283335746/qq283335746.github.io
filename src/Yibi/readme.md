
How to deploy Ionic 4 app to Github pages?
https://stackoverflow.com/questions/53036381/how-to-deploy-ionic-4-app-to-github-pages

ionic start Yibi
npm i angular-cli-ghpages --save
ionic build --prod -- --base-href https://qq283335746.github.io/
npx angular-cli-ghpages --branch=master --dir=www