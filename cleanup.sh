echo "*.html" > remove.txt
cd jade
ls -d */ >> ../remove.txt
cd ..
for f in $(cat remove.txt) ; do
	rm -r $f
done
rm remove.txt