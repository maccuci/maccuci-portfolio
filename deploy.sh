set -e

yarn run build

cd dist
echo > .nojekyll

git init
git checkout -B main
git add -A
git commit -m 'deploy'

cd -