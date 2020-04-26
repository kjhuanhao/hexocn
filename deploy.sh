#!/usr/bin/env sh
# author: Huanhao
#des:这是一个部署脚本，本站部署人员专用
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


# git push ！！warning 
#git push -f git@e.coding.net:huanhao/hexocnwebsite.git master
git push -f git@github.com:kjhuanhao/hexocnsite.git master



cd -

echo "成功部署！"