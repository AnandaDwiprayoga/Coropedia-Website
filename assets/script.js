var icon = document.querySelector('.icon');
var lists = document.querySelectorAll('nav li:not(:first-child):not(:last-child)');
var buttonFollow = document.querySelector('.follow-berita');
var buttonTest = document.querySelector('.button.test');

icon.addEventListener("click", function(){
	for(const list of lists){
		list.classList.toggle('show');
	}
});

buttonFollow.addEventListener("click", function(){
	alert('Kamu akan mendapatkan info terbaru dari kami');
});

buttonTest.addEventListener('click', function(){
	var tua = confirm("Apakah umur kamu diatas 40 tahun ?");
	var gejala = confirm("Apakah kamu mengalami gejala flue/demam/sesak nafas ?");
	var kontak = confirm("Apakah kamu pernah melakukan perjalanan negara positif corona?");

	if (tua && gejala && kontak) {
		alert("Anda mungkin terpapar virus ini, segera lakukan test di fasilitas kesehatan");
	}else if(!tua && kontak){
		alert("Anda harus melakukan isolasi mandiri sampai 14 hari");
	}else if(tua && kontak){
		alert("Jika terjadi gejala langsung periksa ke fasilitas kesehatan");
	}else{
		alert("Selalu jaga kesehatan, jangan keluar rumah, dan taati peraturan")
	}
});





