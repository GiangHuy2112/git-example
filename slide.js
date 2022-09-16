var kichThuoc = document.querySelector(".slide").clientWidth;
var chuyenSlide = document.querySelector(".chuyen-slide");
var imgLength = chuyenSlide.children.length;
var max = kichThuoc * imgLength;
max -= kichThuoc;
var chuyen = 0;
var Next = function() {
    if(chuyen < max) {
        chuyen += kichThuoc;
    }
    else chuyen = 0
    chuyenSlide.style.marginLeft = '-' + chuyen + 'px';
    console.log(chuyen);
}

function Back() {
    if(chuyen == 0) chuyen = max 

    else{
        chuyen -= kichThuoc;
    }
 
    chuyenSlide.style.marginLeft = '-' + chuyen + 'px';
    console.log(chuyen);
}

setInterval(Next,3000)