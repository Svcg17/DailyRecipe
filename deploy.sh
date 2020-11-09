#!/bin/sh
git checkout master
git reset --hard origin/master
nvm use node
sudo chown ubuntu:ubuntu /home/ubuntu/.pm2/rpc.sock /home/ubuntu/.pm2/pub.sock
sudo chown -R ubuntu:ubuntu /var/www/html/
cd /var/www/html
git pull origin master
rm -rf node_modules/
yarn install
cd client
rm -rf node_modules/
yarn install
yarn run build
cd ..
sudo systemctl restart nginx
sudo pm2 restart all
