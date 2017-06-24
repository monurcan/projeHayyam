# projeHayyam

https://youtu.be/dP0M_70eLBs

Ekran görüntüleri:
https://www.dropbox.com/sh/3vgly63v5i3v0sy/AADpLZZ3311XSpg-Yu7qwxKGa?dl=0


**mongoDB**

**news**

<pre>
{"_id":{"$oid":"55b43794d0e8b4945c2eb752"},"title":"Beta Süreci Duyurusu","content":"12 Eylül 2015'te siteye ilk problemi ekledim.<br><br>2 ay önce felan sitenin scripti bitmişti. Zamanım olursa problem ekleyeceğim buraya.<br><br>Proje şu an beta sürecinde, domain, host para bulursam alırım. IP üzerinden ulaşabilirsin bu süreçte.","date":{"$date":1382878787653}}
</pre>

**problems**

<pre>
{"_id":1,"title":"Palindromik için işlem sayısı","content":"İki taraftan da okunuşu aynı olan sayılara <b>palindromik sayı</b> denir. Örnek: 1, 2, 3, 33, 101, 202, 1001, ... <br><br>Bir doğal sayıdan palindromik sayı elde etmek amacıyla şu adımların sırasıyla uygulanmasına ise <b>Ters Çevir, Ekle Algoritması</b> diyorum.<br><br>1- Bir sayı alın.<br>2- Eğer sayı zaten palindromik ise algoritmayı bitirin.<br>3- Sayı palindromik değil ise sayının basamaklarındaki rakamları simetrik olacak şekilde yer değiştirin (196 ise 691 gibi) ve ardından normal sayı ile ters çevrilmiş sayıyı toplayın.<br>4- Elde ettiğiniz toplam palindromik ise algoritmayı sonlandırın, değilse 3. adıma geri dönün.<br><br>Birkaç örnekle algoritmamızı pekiştirelim:<br><br>1 sayısı zaten palindromik, demek ki 2.adımda algoritma bitti. (Algoritmamızı hiç tamamlamadık yani 4. adıma hiç gelmedik.)<br><br>178 sayısını ele alalım:<br>| 178 palindromik değil algoritmaya devam.<br>| 178+871=1049 (1049 palindromik değil 3. adıma geri dönüyoruz 4. adıma bir kere geldik.)<br>| 1049+9401=10450 (10450 de palindromik değil 4. adıma 2. kez geldik.)<br>| 10450+05401=15851 (4. adıma 3. kez geldik. Ve evet, 15851 toplamı palindromik, algoritmamız bitti.)<br><br>4. adıma gelme sayımıza ya da bir diğer deyişle algoritmayı kaç kez tam olarak tamamladığımıza <b>\"sayıyı palindromik yapmak için gereken adım sayısı\"</b> diyorum. 1 sayısını palindromik yapmak için gereken adım sayısı 0 iken, 178'i palindromik yapmak için gereken adım sayısı 3'tür.<br><br>Sorumuz ise şu:<br><br>1000'in altındaki kaç sayının palindromik olmak için gerektirdiği adım sayısı 3'e eşittir?","solved":3,"tags":[{"name":"matematik","css":"m"},{"name":"programlama","css":"p"},{"name":"sayılar_teorisi","css":"ml"}],"diff":3,"created":"12.09.2015","hit":106,"answer":149}
</pre>

**users**

<pre>
{"_id":{"$oid":"55b434597d4d9bb695a98afd"},"uname":"monurcan","pass":"123","fname":"Mehmet Onurcan KAYA","about":"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.<br><br>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.<br><br>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.<br><br>","email":"monurcan55@gmail.com","verify":1,"solve_after":[],"friends":[{}],"solved":[{"_id":1}]}
</pre>
