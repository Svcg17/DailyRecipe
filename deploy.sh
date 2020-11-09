#!/bin/sh
cd /var/www/html
git pull origin master
yarn install
cd client
yarn install
yarn run build
cd ..
sudo systemctl restart nginx
sudo pm2 restart all
