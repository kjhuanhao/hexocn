#!/usr/bin/env sh

# abort on errors
set -e

# build
#npm run build

# navigate into the build output directory
#cd public

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# please change it to your username

#git@github.com:<username>/hexocn.git
git remote add origin git@github.com:kjhuanhao/hexocn.git

# push
git push --set-upstream origin master

cd -
