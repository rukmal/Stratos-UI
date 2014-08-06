# Compiling jade and moving files around
mkdir tmp_site/
cp -R jade/* tmp_site/
jade tmp_site
find tmp_site -name '*.jade' -delete
mv -f tmp_site/* .
rm -r tmp_site
rm layout.html
rm indexlayout.html