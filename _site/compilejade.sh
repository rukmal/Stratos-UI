rm -r _site
jade .
rm layout.html
rm indexlayout.html
jekyll build .
find . -name '*.html' ! -path "./_site/*" -delete
find _site/ -name '*.jade' -delete