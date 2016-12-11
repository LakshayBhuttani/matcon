<!-- Begin
var slideShowSpeed = 4000;
var crossFadeDuration = 4000;
var Pic = new Array();

Pic[0] = 'images/ban1.jpg'
Pic[1] = 'images/ban2.jpg'
Pic[2] = 'images/ban3.jpg'
Pic[3] = 'images/ban4.jpg'
Pic[4] = 'images/ban5.jpg'
Pic[5] = 'images/ban6.jpg'



var t;
var j = 0;
var p = Pic.length;
var preLoad = new Array();
for (i = 0; i < p; i++) {
preLoad[i] = new Image();
preLoad[i].src = Pic[i];
}

function runSlideShow()
{
	if (document.all)
	{
		document.images.SlideShow.style.filter="revealTrans(duration=2)";
		document.images.SlideShow.style.filter="revealTrans(duration=2,transition=100)";
		document.images.SlideShow.filters.revealTrans.Apply();
	}
	document.images.SlideShow.src = preLoad[j].src;
	if (document.all)
	{
		document.images.SlideShow.filters.revealTrans.Play();
	}
	j = j + 1;
	if (j > (p - 1)) j = 0;
		t = setTimeout('runSlideShow()', slideShowSpeed);
}
// 


