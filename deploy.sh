# Aim: update website

# update source code
git status
git add -A
git commit -am 'Update website'
git push
# update actual website
cd robinlovelace.github.io
ls
git status
git add -A
git commit -am 'Update site'
git push
cd ..
