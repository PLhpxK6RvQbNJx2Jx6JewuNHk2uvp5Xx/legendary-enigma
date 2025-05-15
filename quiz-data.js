// quiz-data.js - Tüm Test Soruları Merkezi Veri Dosyası

// Tarayıcı penceresine bağlı bir nesne oluşturarak verilere kolay erişim sağlıyoruz.
window.quizData = {

    // ==================================
    // İşaret Dili Test Soruları
    // ==================================
    // ÖNEMLİ: Aşağıdaki 'gorsel' yolları varsayımsaldır. 
    // Kendi görsellerinizi 'images' klasörüne ekleyip dosya adlarını düzeltmelisiniz!

    sorularIsaretAlfabe: [
        { gorsel: 'images/isaret-a.png', secenekler: ['A', 'E', 'S', 'O'], dogruCevap: 'A' },
        { gorsel: 'images/isaret-b.png', secenekler: ['D', 'F', 'B', 'P'], dogruCevap: 'B' },
        { gorsel: 'images/isaret-c.png', secenekler: ['G', 'Ö', 'Ş', 'C'], dogruCevap: 'C' },
        { gorsel: 'images/isaret-d.png', secenekler: ['D', 'B', 'M', 'L'], dogruCevap: 'D' },
        { gorsel: 'images/isaret-e.png', secenekler: ['F', 'E', 'A', 'M'], dogruCevap: 'E' },
        { gorsel: 'images/isaret-f.png', secenekler: ['F', 'T', 'V', 'Y'], dogruCevap: 'F' },
        { gorsel: 'images/isaret-g.png', secenekler: ['Ğ', 'G', 'C', 'H'], dogruCevap: 'G' },
        { gorsel: 'images/isaret-g-yumusak.png', secenekler: ['G', 'H', 'Y', 'Ğ'], dogruCevap: 'Ğ' }, 
        { gorsel: 'images/isaret-h.png', secenekler: ['H', 'U', 'N', 'K'], dogruCevap: 'H' },
        { gorsel: 'images/isaret-i-noktali.png', secenekler: ['I', 'J', 'İ', 'L'], dogruCevap: 'İ' }, 
        { gorsel: 'images/isaret-i-noktasiz.png', secenekler: ['İ', 'I', 'J', 'Ş'], dogruCevap: 'I' }, 
        { gorsel: 'images/isaret-j.png', secenekler: ['J', 'Z', 'C', 'G'], dogruCevap: 'J' },
        { gorsel: 'images/isaret-k.png', secenekler: ['H', 'K', 'L', 'M'], dogruCevap: 'K' },
        { gorsel: 'images/isaret-l.png', secenekler: ['L', 'İ', 'T', 'U'], dogruCevap: 'L' },
        { gorsel: 'images/isaret-m.png', secenekler: ['N', 'M', 'W', 'V'], dogruCevap: 'M' },
        { gorsel: 'images/isaret-n.png', secenekler: ['M', 'N', 'H', 'U'], dogruCevap: 'N' },
        { gorsel: 'images/isaret-o.png', secenekler: ['Ö', 'U', 'O', 'C'], dogruCevap: 'O' },
        { gorsel: 'images/isaret-o-noktali.png', secenekler: ['O', 'P', 'Ö', 'Ü'], dogruCevap: 'Ö' }, 
        { gorsel: 'images/isaret-p.png', secenekler: ['R', 'P', 'B', 'F'], dogruCevap: 'P' },
        { gorsel: 'images/isaret-r.png', secenekler: ['P', 'R', 'S', 'Ş'], dogruCevap: 'R' },
        { gorsel: 'images/isaret-s.png', secenekler: ['Ş', 'C', 'Z', 'S'], dogruCevap: 'S' },
        { gorsel: 'images/isaret-s-cedil.png', secenekler: ['S', 'Z', 'C', 'Ş'], dogruCevap: 'Ş' }, 
        { gorsel: 'images/isaret-t.png', secenekler: ['F', 'T', 'L', 'I'], dogruCevap: 'T' },
        { gorsel: 'images/isaret-u.png', secenekler: ['Ü', 'O', 'U', 'V'], dogruCevap: 'U' },
        { gorsel: 'images/isaret-u-noktali.png', secenekler: ['U', 'V', 'Y', 'Ü'], dogruCevap: 'Ü' }, 
        { gorsel: 'images/isaret-v.png', secenekler: ['Y', 'W', 'V', 'Z'], dogruCevap: 'V' },
        { gorsel: 'images/isaret-y.png', secenekler: ['V', 'Y', 'Z', 'T'], dogruCevap: 'Y' },
        { gorsel: 'images/isaret-z.png', secenekler: ['S', 'Ş', 'J', 'Z'], dogruCevap: 'Z' }
    ],

    sorularIsaretTanisma: [
        { gorsel: 'images/isaret-merhaba.png', secenekler: ['Nasılsın?', 'Merhaba', 'Teşekkür ederim', 'Adın ne?'], dogruCevap: 'Merhaba' },
        { gorsel: 'images/isaret-nasilsin.png', secenekler: ['İyiyim', 'Kötüyüm', 'Nasılsın?', 'Memnun oldum'], dogruCevap: 'Nasılsın?' },
        { gorsel: 'images/isaret-iyiyim.png', secenekler: ['Merhaba', 'İyiyim', 'Şöyle Böyle', 'Kötüyüm'], dogruCevap: 'İyiyim' },
        { gorsel: 'images/isaret-tesekkur.png', secenekler: ['Adın ne?', 'Memnun oldum', 'Lütfen', 'Teşekkür ederim'], dogruCevap: 'Teşekkür ederim' },
        { gorsel: 'images/isaret-adin-ne.png', secenekler: ['Benim adım...', 'Nasılsın?', 'Adın ne?', 'Merhaba'], dogruCevap: 'Adın ne?' },
        // Buraya daha fazla tanışma/selamlaşma sorusu eklenebilir
    ],

    sorularIsaretAile: [
        { gorsel: 'images/isaret-anne.png', secenekler: ['Baba', 'Kardeş', 'Anne', 'Çocuk'], dogruCevap: 'Anne' },
        { gorsel: 'images/isaret-baba.png', secenekler: ['Dede', 'Amca', 'Abi', 'Baba'], dogruCevap: 'Baba' },
        { gorsel: 'images/isaret-kardes.png', secenekler: ['Kuzen', 'Kardeş', 'Arkadaş', 'Aile'], dogruCevap: 'Kardeş' },
        { gorsel: 'images/isaret-erkek-kardes.png', secenekler: ['Kız Kardeş', 'Erkek Kardeş', 'Baba', 'Oğul'], dogruCevap: 'Erkek Kardeş' },
        { gorsel: 'images/isaret-dede.png', secenekler: ['Baba', 'Amca', 'Nine', 'Dede'], dogruCevap: 'Dede' },
        // Buraya daha fazla aile bireyi sorusu eklenebilir
    ],

    sorularIsaretRenkler: [
        { gorsel: 'images/isaret-kirmizi.png', secenekler: ['Mavi', 'Sarı', 'Kırmızı', 'Yeşil'], dogruCevap: 'Kırmızı' },
        { gorsel: 'images/isaret-mavi.png', secenekler: ['Siyah', 'Beyaz', 'Gri', 'Mavi'], dogruCevap: 'Mavi' },
        { gorsel: 'images/isaret-beyaz.png', secenekler: ['Beyaz', 'Sarı', 'Açık', 'Siyah'], dogruCevap: 'Beyaz' },
        { gorsel: 'images/isaret-siyah.png', secenekler: ['Kahverengi', 'Koyu', 'Siyah', 'Gri'], dogruCevap: 'Siyah' },
        { gorsel: 'images/isaret-yesil.png', secenekler: ['Sarı', 'Turuncu', 'Yeşil', 'Mavi'], dogruCevap: 'Yeşil' },
        // Buraya daha fazla renk sorusu eklenebilir
    ],

    // ==================================
    // Braille Test Soruları
    // ==================================

    sorularBrailleAJ: [
         { soru: 'Nokta 1 hangi harftir?', secenekler: ['B', 'A', 'C', 'E'], dogruCevap: 'A' },
         { soru: 'Nokta 1-2 hangi harftir?', secenekler: ['B', 'L', 'K', 'D'], dogruCevap: 'B' },
         { soru: 'Nokta 1-4 hangi harftir?', secenekler: ['F', 'D', 'C', 'G'], dogruCevap: 'C' },
         { soru: 'Nokta 1-4-5 hangi harftir?', secenekler: ['D', 'N', 'M', 'H'], dogruCevap: 'D' },
         { soru: 'Nokta 1-5 hangi harftir?', secenekler: ['E', 'O', 'I', 'A'], dogruCevap: 'E' },
         { soru: 'Nokta 1-2-4 hangi harftir?', secenekler: ['F', 'P', 'L', 'C'], dogruCevap: 'F' },
         { soru: 'Nokta 1-2-4-5 hangi harftir?', secenekler: ['Q', 'G', 'N', 'D'], dogruCevap: 'G' },
         { soru: 'Nokta 1-2-5 hangi harftir?', secenekler: ['H', 'R', 'B', 'E'], dogruCevap: 'H' },
         { soru: 'Nokta 2-4 hangi harftir?', secenekler: ['S', 'I', 'C', 'F'], dogruCevap: 'I' },
         { soru: 'Nokta 2-4-5 hangi harftir?', secenekler: ['T', 'G', 'D', 'J'], dogruCevap: 'J' },
         { soru: 'A harfinin Braille karşılığı?', secenekler: ['1-2', '1', '2', '1-5'], dogruCevap: '1' },
         { soru: 'B harfinin Braille karşılığı?', secenekler: ['1', '1-3', '1-2', '1-4'], dogruCevap: '1-2' },
         { soru: 'C harfinin Braille karşılığı?', secenekler: ['1-3', '1-4', '1-2-3', '2-4'], dogruCevap: '1-4' },
         { soru: 'D harfinin Braille karşılığı?', secenekler: ['1-4', '1-4-5', '1-3-4-5', '1-2-5'], dogruCevap: '1-4-5' },
         { soru: 'E harfinin Braille karşılığı?', secenekler: ['1', '1-5', '1-3-5', '2-5'], dogruCevap: '1-5' },
    ],
    
    sorularBrailleKT: [
         { soru: 'Nokta 1-3 hangi harftir?', secenekler: ['K', 'L', 'M', 'A'], dogruCevap: 'K' },
         { soru: 'Nokta 1-2-3 hangi harftir?', secenekler: ['B', 'K', 'L', 'P'], dogruCevap: 'L' },
         { soru: 'Nokta 1-3-4 hangi harftir?', secenekler: ['M', 'C', 'X', 'N'], dogruCevap: 'M' },
         { soru: 'Nokta 1-3-4-5 hangi harftir?', secenekler: ['D', 'N', 'Y', 'Q'], dogruCevap: 'N' },
         { soru: 'Nokta 1-3-5 hangi harftir?', secenekler: ['O', 'E', 'Z', 'R'], dogruCevap: 'O' },
         { soru: 'Nokta 1-2-3-4 hangi harftir?', secenekler: ['F', 'P', 'Q', 'L'], dogruCevap: 'P' },
         { soru: 'Nokta 1-2-3-4-5 hangi harftir?', secenekler: ['G', 'N', 'Q', 'Y'], dogruCevap: 'Q' },
         { soru: 'Nokta 1-2-3-5 hangi harftir?', secenekler: ['H', 'R', 'O', 'Z'], dogruCevap: 'R' },
         { soru: 'Nokta 2-3-4 hangi harftir?', secenekler: ['S', 'I', 'T', 'M'], dogruCevap: 'S' },
         { soru: 'Nokta 2-3-4-5 hangi harftir?', secenekler: ['J', 'S', 'T', 'N'], dogruCevap: 'T' },
         { soru: 'K harfinin Braille karşılığı?', secenekler: ['1-3', '1-2-3', '1', '3'], dogruCevap: '1-3' },
         { soru: 'L harfinin Braille karşılığı?', secenekler: ['1-2', '1-3', '1-2-3', '1-2-4'], dogruCevap: '1-2-3' },
         { soru: 'O harfinin Braille karşılığı?', secenekler: ['1-5', '1-3-5', '1-2-5', '3-5'], dogruCevap: '1-3-5' },
         { soru: 'R harfinin Braille karşılığı?', secenekler: ['1-2-5', '1-3-5', '1-2-3-5', '1-2-3'], dogruCevap: '1-2-3-5' },
         { soru: 'S harfinin Braille karşılığı?', secenekler: ['2-4', '3-4', '2-3-4', '1-3-4'], dogruCevap: '2-3-4' },
    ],

    sorularBrailleUZ: [
         { soru: 'Nokta 1-3-6 hangi harftir?', secenekler: ['U', 'V', 'X', 'Ö'], dogruCevap: 'U' },
         { soru: 'Nokta 1-2-3-6 hangi harftir?', secenekler: ['V', 'Ü', 'Y', 'L'], dogruCevap: 'V' },
         { soru: 'Nokta 1-3-4-6 hangi harftir?', secenekler: ['Ö', 'X', 'Ç', 'Ş'], dogruCevap: 'X' },
         { soru: 'Nokta 1-3-4-5-6 hangi harftir?', secenekler: ['Y', 'Q', 'Ğ', 'Z'], dogruCevap: 'Y' },
         { soru: 'Nokta 1-3-5-6 hangi harftir?', secenekler: ['O', 'Z', 'R', 'V'], dogruCevap: 'Z' },
         { soru: 'Nokta 2-4-5-6 hangi harftir?', secenekler: ['W', 'T', 'Ü', 'Ğ'], dogruCevap: 'W' },
         { soru: 'Nokta 1-6 hangi harftir?', secenekler: ['A', 'Ç', 'K', 'Ö'], dogruCevap: 'Ç' }, 
         { soru: 'Nokta 1-2-3-4-5-6 hangi harftir?', secenekler: ['Ğ', 'Q', 'Y', 'W'], dogruCevap: 'Ğ' }, 
         { soru: 'Nokta 3-4 hangi harftir?', secenekler: ['M', 'S', 'I', 'İ'], dogruCevap: 'I' },
         { soru: 'Nokta 2-4-6 hangi harftir?', secenekler: ['Ö', 'O', 'U', 'Ş'], dogruCevap: 'Ö' },
         { soru: 'Nokta 1-4-6 hangi harftir?', secenekler: ['Ş', 'X', 'Ç', 'Ü'], dogruCevap: 'Ş' },
         { soru: 'Nokta 1-2-5-6 hangi harftir?', secenekler: ['Ü', 'V', 'H', 'Ö'], dogruCevap: 'Ü' },
         { soru: 'U harfinin Braille karşılığı?', secenekler: ['1-3-6', '1-2-6', '1-3-5', '2-3-6'], dogruCevap: '1-3-6' },
         { soru: 'X harfinin Braille karşılığı?', secenekler: ['1-3-4', '1-4-6', '1-3-4-6', '1-2-4-6'], dogruCevap: '1-3-4-6' },
         { soru: 'Z harfinin Braille karşılığı?', secenekler: ['1-3-5', '1-3-6', '1-3-5-6', '2-3-5-6'], dogruCevap: '1-3-5-6' },
         { soru: 'I harfinin Braille karşılığı?', secenekler: ['2-4', '3-4', '2-5', '3-5'], dogruCevap: '3-4' },
         { soru: 'Ö harfinin Braille karşılığı?', secenekler: ['1-3-5', '2-4-5', '2-4-6', '1-2-6'], dogruCevap: '2-4-6' },
         { soru: 'Ş harfinin Braille karşılığı?', secenekler: ['2-3-4', '1-4-6', '1-3-6', '2-3-4-6'], dogruCevap: '1-4-6' },
    ],
    
    sorularRakamNoktalama: [ 
         { soru: 'Rakam işaretinin Braille karşılığı nedir?', secenekler: ['3-4-5-6', '1-2-3', '6', '2-5-6'], dogruCevap: '3-4-5-6' },
         { soru: '1 rakamını yazmak için rakam işaretinden sonra hangi harf kullanılır?', secenekler: ['A', 'B', 'J', 'I'], dogruCevap: 'A' },
         { soru: '0 rakamını yazmak için rakam işaretinden sonra hangi harf kullanılır?', secenekler: ['A', 'J', 'I', 'H'], dogruCevap: 'J' },
         { soru: 'Braille\'de 5 rakamı nasıl yazılır?', secenekler: ['Rakam İşareti + E', 'Rakam İşareti + A', 'Rakam İşareti + F', 'Sadece E'], dogruCevap: 'Rakam İşareti + E' },
         { soru: 'Braille\'de 12 sayısı nasıl yazılır?', secenekler: ['Rakam İşareti + A + Rakam İşareti + B', 'Rakam İşareti + A + B', 'A + B', 'Rakam İşareti + L'], dogruCevap: 'Rakam İşareti + A + B' },
         { soru: 'Braille\'de 90 sayısı nasıl yazılır?', secenekler: ['Rakam İşareti + I + J', 'Rakam İşareti + I + Rakam İşareti + J', 'I + J', 'Rakam İşareti + S'], dogruCevap: 'Rakam İşareti + I + J' },
         { soru: 'Nokta (.) işaretinin Braille karşılığı nedir?', secenekler: ['2', '2-5-6', '2-3', '3'], dogruCevap: '2-5-6' },
         { soru: 'Virgül (,) işaretinin Braille karşılığı nedir?', secenekler: ['2', '3', '2-3', '2-5-6'], dogruCevap: '2' },
         { soru: 'Soru İşareti (?) işaretinin Braille karşılığı nedir?', secenekler: ['2-6', '2-3-6', '2-3-5', '3-5-6'], dogruCevap: '2-3-6' },
         { soru: 'Ünlem İşareti (!) işaretinin Braille karşılığı nedir?', secenekler: ['2-3-5', '2-5-6', '2-3-6', '2-3-4'], dogruCevap: '2-3-5' },
         { soru: 'Kesme İşareti (\') işaretinin Braille karşılığı nedir?', secenekler: ['2', '3', '5', '6'], dogruCevap: '3' },
         { soru: 'Kısa Çizgi (-) işaretinin Braille karşılığı nedir?', secenekler: ['3-6', '6', '3', '2-5'], dogruCevap: '3-6' },
    ]

}; // window.quizData nesnesinin sonu