#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cp -rf public/ ~/hexocnwebsite
#cp -rf public ./deploy/
cd public
# if you are deploying to a custom domain
#echo 'hexocn.cn' > CNAME

git init
git add -A
git commit -m 'deploy'


# git push ！！warning 
git push -f git@e.coding.net:huanhao/hexocnwebsite.git master
git push -f git@github.com:kjhuanhao/hexocnsite.git master





cd -
