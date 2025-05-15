// quiz-logic.js - Genel Quiz Mantığı

// --- HTML Elementlerini Seçme ---
const quizContainer = document.getElementById('quiz-container');
// Soru alanı görsel veya metin olabilir, ikisini de seçelim, hangisi varsa onu kullanırız.
const soruGorsel = document.getElementById('soru-gorsel'); 
const soruMetin = document.getElementById('soru-metin'); 
const seceneklerContainer = document.getElementById('secenekler');
const secenekButonlari = seceneklerContainer.querySelectorAll('.secenek-btn'); 
const sonucMesaji = document.getElementById('sonuc');
const sonrakiBtn = document.getElementById('sonraki-btn');
const skorAlani = document.getElementById('skor-alani');
const skorGosterge = document.getElementById('skor');
const tekrarBtn = document.getElementById('tekrar-btn');

// --- Değişkenler ---
let mevcutSoruIndex = 0;
let skor = 0;
let sorularKaristirilmis = []; 
// 'aktifSorular' değişkeni HTML sayfasında tanımlanacak soru dizisini tutacak
// Örnek: <script> const aktifSorular = sorularBrailleAJ; </script> 

// --- Fonksiyonlar ---

// Fisher-Yates shuffle
function shuffleArray(array) {
    if (!array) return []; // Eğer dizi yoksa boş döndür
    let newArray = [...array]; // Orijinal diziyi bozmamak için kopyala
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// Soruyu gösterme (Görsel veya Metin)
function soruyuGoster() {
    // Elementlerin varlığını kontrol et
     if (!quizContainer || !seceneklerContainer || !sonucMesaji || !sonrakiBtn) {
         console.error("Quiz arayüz elemanları bulunamadı!");
         return; 
     }

    secenekButonlari.forEach(btn => {
        btn.classList.remove('dogru', 'yanlis');
        btn.disabled = false; 
    });
    sonucMesaji.textContent = ''; 
    sonrakiBtn.style.display = 'none'; 

    const mevcutSoru = sorularKaristirilmis[mevcutSoruIndex];
    if (!mevcutSoru) return; // Soru yoksa çık

    // Soru görseli mi metni mi?
    if (soruGorsel && mevcutSoru.gorsel) {
        soruGorsel.style.display = 'block'; // Görseli göster
        if(soruMetin) soruMetin.style.display = 'none'; // Metni gizle (varsa)
        soruGorsel.src = mevcutSoru.gorsel;
        soruGorsel.alt = `Soru ${mevcutSoruIndex + 1}`;
    } else if (soruMetin && mevcutSoru.soru) {
        soruMetin.style.display = 'block'; // Metni göster
        if(soruGorsel) soruGorsel.style.display = 'none'; // Görseli gizle (varsa)
        soruMetin.textContent = mevcutSoru.soru; 
    } else {
        console.error("Soru içeriği (görsel veya metin) bulunamadı veya ilgili HTML elementi eksik!");
        // Belki varsayılan bir mesaj gösterebiliriz
         if(soruMetin) soruMetin.textContent = "Soru yüklenemedi.";
    }


    const karisikSecenekler = shuffleArray([...mevcutSoru.secenekler]); 
    secenekButonlari.forEach((button, index) => {
        if (karisikSecenekler[index] !== undefined) { // Seçenek undefined değilse göster
            button.textContent = karisikSecenekler[index];
            button.style.display = 'inline-block'; 
        } else {
            button.style.display = 'none'; 
        }
    });
}

// Seçenek seçildiğinde
function secenekSecildi(event) {
    const secilenButon = event.target;
    const secilenCevap = secilenButon.textContent;
    const dogruCevap = sorularKaristirilmis[mevcutSoruIndex].dogruCevap;

    secenekButonlari.forEach(btn => {
        btn.disabled = true;
    });

    if (secilenCevap === dogruCevap) {
        skor++;
        secilenButon.classList.add('dogru');
        sonucMesaji.textContent = 'Doğru!';
        sonucMesaji.style.color = 'var(--dogru-renk, #28a745)'; // CSS değişkeni veya varsayılan
    } else {
        secilenButon.classList.add('yanlis');
        sonucMesaji.textContent = `Yanlış! Doğru cevap: ${dogruCevap}`;
        sonucMesaji.style.color = 'var(--yanlis-renk, #dc3545)'; // CSS değişkeni veya varsayılan
        secenekButonlari.forEach(btn => {
            if (btn.textContent === dogruCevap) {
                btn.classList.add('dogru');
            }
        });
    }
    sonrakiBtn.style.display = 'inline-block';
}

// Sonraki soru
function sonrakiSoru() {
     mevcutSoruIndex++;
    if (mevcutSoruIndex < sorularKaristirilmis.length) {
        soruyuGoster();
    } else {
        testiBitir();
    }
}

// Testi bitir
function testiBitir() {
    if (!quizContainer || !skorAlani || !skorGosterge) return; // Element kontrolü
    quizContainer.style.display = 'none'; 
    skorGosterge.textContent = `${skor} / ${sorularKaristirilmis.length}`; 
    skorAlani.style.display = 'block'; 
}

// Testi başlat/tekrar başlat 
function testiBaslat() {
     // Hangi soru setinin kullanılacağını HTML'den almamız lazım.
     // Bu fonksiyonu çağırmadan önce 'aktifSorular' değişkeninin tanımlanmış olması gerekiyor.
     if (typeof aktifSorular === 'undefined' || !Array.isArray(aktifSorular)) {
         console.error("Test başlatılamadı: 'aktifSorular' dizisi tanımlı değil veya bir dizi değil.");
          if(quizContainer) quizContainer.innerHTML = "<p style='color:red;'>Test yüklenirken bir hata oluştu.</p>";
         return;
     }

     mevcutSoruIndex = 0;
     skor = 0;
     sorularKaristirilmis = shuffleArray([...aktifSorular]); // HTML'de tanımlanan diziyi kullan

     // Element kontrolleri
     if (!skorAlani || !quizContainer) return; 

     skorAlani.style.display = 'none'; 
     quizContainer.style.display = 'block'; 
     soruyuGoster(); // İlk soruyu göster
}

// --- Olay Dinleyicileri ---
// Dinleyicileri sadece elementler varsa ekle
if(seceneklerContainer){
    seceneklerContainer.addEventListener('click', (event) => {
        // Tıklanan öğe bir seçenek butonu ise fonksiyonu çalıştır
        if (event.target.classList.contains('secenek-btn')) {
            secenekSecildi(event);
        }
    });
}

if(sonrakiBtn) {
   sonrakiBtn.addEventListener('click', sonrakiSoru);
}

if(tekrarBtn) {
    tekrarBtn.addEventListener('click', testiBaslat);
}

// --- Testin Başlaması ---
// Testi doğrudan başlatmıyoruz, HTML sayfasının kendisi başlatacak.
// DOMContentLoaded genellikle iyi bir pratiktir ama basitlik için şimdilik doğrudan başlatacağız.
// document.addEventListener('DOMContentLoaded', testiBaslat); // Daha sağlam yöntem