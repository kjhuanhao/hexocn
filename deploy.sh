#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd public

# if you are deploying to a custom domain
#echo 'hexocn.cn' > CNAME

git init
git add -A
git commit -m 'deploy'

# please change it to your username

#git@github.com:<username>/hexocn.git
#git remote add origin git@e.coding.net:huanhao/hexocn.git
#git@e.coding.net:huanhao/hexocn.git
#git remote rm origin
git pull origin master 
git remote add origin git@github.com:kjhuanhao/hexocnwebsite.git
# push
git push --set-upstream origin master
#git push

cd -
