var add, step=0, nm;
function reverse_add(inp){
	add = Number(inp.toString().split("").reverse().join(""));
	return add + inp; 
}

function checkPalindrom(str) {
    return str == Number(str.toString().split('').reverse().join(''));
}

function pal_step(number){
	step=0;
	nm=number;
	for(i=0;i<5;i++){
		if(!checkPalindrom(nm)){
			nm = reverse_add(nm);
			step++;
		}
	}

	return step;
}


// 1 ve zaten palindrom olan sayılar 0 adımda palindromdur
// 12 ise 1 adımda palindrom olur...
// 1000 in altında 3 adımda palindrom olan kaç adet sayı vardır?

var number_thstep = 0;
for(x=0;x<1000;x++){
	if(pal_step(x) == 3){
		number_thstep++;
	}
	
}

console.log(number_thstep);

/*
| projeHayyam | Soru 1
| Zorluk 3
| #matematik #programlama #sayılar_teorisi

İki taraftan da okunuşu aynı olan sayılara palindromik sayı denir. Örnek: 1, 2, 3, 33, 101, 202, 1001, ... 

Bir doğal sayıdan palindromik sayı elde etmek amacıyla şu adımların sırasıyla uygulanmasına ise Ters Çevir, Ekle Algoritması diyorum.

1- Bir sayı alın.
2- Eğer sayı zaten palindromik ise algoritmayı bitirin.
3- Sayı palindromik değil ise sayının basamaklarındaki rakamları simetrik olacak şekilde yer değiştirin (196 ise 691 gibi) ve ardından normal sayı ile ters çevrilmiş sayıyı toplayın.
4- Elde ettiğiniz toplam palindromik ise algoritmayı sonlandırın, değilse 3. adıma geri dönün.

Birkaç örnekle algoritmamızı pekiştirelim:

1 sayısı zaten palindromik, demek ki 2.adımda algoritma bitti. (Algoritmamızı hiç tamamlamadık yani 4. adıma hiç gelmedik.)

178 sayısını ele alalım:
178 palindromik değil algoritmaya devam.
178+871=1049 (1049 palindromik değil 3. adıma geri dönüyoruz 4. adıma bir kere geldik.)
1049+9401=10450 (10450 de palindromik değil 4. adıma 2. kez geldik.)
10450+05401=15851 (4. adıma 3. kez geldik. Ve evet, 15851 toplamı palindromik, algoritmamız bitti.)

4. adıma gelme sayımıza ya da bir diğer deyişle algoritmayı kaç kez tam olarak tamamladığımıza "sayıyı palindromik yapmak için gereken adım sayısı" diyorum. 1 sayısını palindromik yapmak için gereken adım sayısı 0 iken, 178'i palindromik yapmak için gereken adım sayısı 3'tür.

Sorumuz ise şu:

1000'in altındaki kaç sayının palindromik olmak için gerektirdiği adım sayısı 3'e eşittir?


===

Cevap: 149
*/