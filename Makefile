.PHONY: index
index:
	rm -rf js-xlsx
	git clone --depth=1 https://github.com/SheetJS/js-xlsx
	cd js-xlsx; grip --title "SheetJS Community Edition" --export README.md; cd ..
	mv js-xlsx/README.html index.html
	mv js-xlsx/*.png .
	git add index.html *.png
	#mv js-xlsx/README.md .
	#git add README.md
