#!/bin/sh
cd /var/www/html
git pull
sudo yarn install
cd client
yarn install
sudo yarn run build
cd ..
sudo systemctl restart nginx
sudo pm2 restart all
