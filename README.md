MOVIES REACT APP WITH CONTEXT API 
APP DEPLOYED IN NETLIFY : https://movies-react-app-contextapi.netlify.app/

Modul 4

"Film orqonayzerinin təkmilləşdirilməsi" layihəsi

Bu layihə üzərində işə başqa bir developer başladı, lakin onu bitirə bilmədi.
Layihəni TT-ə(Texniki Tapşırıq) uyğun düzəltməlisiz. İstənilən kod istədiyiniz kimi dəyişdirilə və ya silinə bilər. 

Layihənin hazırkı versiyası repozitoriyadadır — https://github.com/afon-himself/bootcamp-m4-starter 

Yekun nəticə nümunəsinə keçid linki — http://mustsee-bootcamp-sample.s3-website.eu-west-3.amazonaws.com/

Təsviri

Tətbiq, filmlərin siyahısını tərtib etməyə və onları dostlarınızla paylaşmağa imkan verir.

Əsas səhifənin əsas hissəsini axtarış formu və tapılan filmlərin siyahısı tutur. Səhifənin sağ tərəfində seçilmiş filmlərin siyahısı yerləşir.

İstifadəçi filmi axtarır, “Siyahıya əlavə et” düyməsinə klikləyir, film seçilmiş filmlər siyahısına düşür.

İstifadəçi filmi seçilmiş filmlər siyahısından silə bilər.

İstifadəçi "Siyahını yadda saxla" düyməsini klikləyir. Siyahı serverdə saxlanılır və unikal id əldə edir. Bu id əsasında http://localhost:3000/list/<id> kimi bir keçid linki yaranır. Link "Siyahı yadda saxla" düyməsinin yerində görünür.

  Linklə keçid zamanı siyahının adı və əlaqəli filmlər ayrıca səhifədə göstərilir. Hər bir film üçün IMDB-də müvafiq səhifəyə aparan keçid linki qeyd olunur.
  
API istifadə olunması
  
Film məlumatlarını əldə etmək üçün OMDb API istifadə olunur. Sorğunu tamamlamaq üçün açar əldə etməlisiniz. Diqqət: bir açar üçün gündəlik sorğu limiti 1000-dir.
  
Filmi adına görə axtarmaq üçün s parametri ilə GET-sorğusundan istifadə edilir.
  
Nümunə: http://www.omdbapi.com/?s=godfather&apikey=açar 
  
Filmi id ilə axtarmaq üçün i parametri ilə GET sorğusundan istifadə edilir.
  
Nümunə: http://www.omdbapi.com/?i=tt3896198&apikey=açar
  
Siyahını yadda saxlamaq üçün API-yə POST sorğusu istifadə edilir.
  
https://acb-api.algoritmika.org/api/movies/list 
Sorğunun gövdəsində siyahının adı və sətir-id-dən təşkil olunmuş imdbID filmlərin massivi var. Sorğuya application/json dəyəri olan Content-type başlıq daxil edilməlidir.

  {
    "title": "Example List",
    "movies": [
        "tt0068646",
        "tt0098019"
    ]
}


  
Siyahı yaradılması sorğusuna cavabda yaradılmış siyahının identifikatorundan ibarət id sahəsi var
{
    "id": "d2514e41-9349-446e-9cee-a8fe25a1332c",
    "title": "Example List",
    "movies": [
        "tt0068646",
        "tt0098019"
    ]
}

Texniki tələblər
  
Layihə React kitabxanasından istifadə etməklə həyata keçirilməlidir. 
  
İşə başlamazdan əvvəl fork layihəni GitHub deponuza köçürməlisiniz.
  
Əlavə tələblər
  
Tətbiq mobil cihazlarda istifadə üçün əlçatan olmalıdır.

Çeklist
  
İlkin vəziyyət: səhifə yüklənib, axtarış formu və tapılan filmlərin siyahısı boşdur, seçilmiş filmlər siyahısında heç nə yoxdur, siyahının adı “Yeni Siyahı”dır.
  

Axtarış formuna "Godfather" daxil edin və axtarış düyməsi basın. Tapılan filmlərin siyahısında bir neçə kart görünür.

Seçilmişlər siyahısına üç film əlavə edin. Filmlər ekranın sağ tərəfindəki siyahıda görünür. Eyni filmi iki dəfə əlavə etmək olmur.

Seçilmişlər siyahısından bir film silmək.
   
Seçilmiş filmlərin siyahısının adını "Mənim Siyahım" olaraq dəyişdirmək.

"Siyahını yadda saxla" düyməsini basın. Ad dəyişdirmə sahəsi qeyri-aktiv olur. "Siyahını yadda saxla" düyməsinin yerində keçid görünür.

Linkə klikləməklə səhifə yeni tabda açılır. Səhifədə filmlərin adı və siyahısı göstərilir. Filmə klikləməklə, filmin IMDB səhifəsi yeni tabda açılır.




