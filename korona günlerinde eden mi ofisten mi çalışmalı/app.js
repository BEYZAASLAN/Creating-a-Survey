/* Bu dizi, kullanıcının verdiği cevaplarla karşılaştırılacak. */
const correctAnswers = ["E", "E", "E", "E"];
const form = document.querySelector(".question-form ");
const result = document.querySelector(".result");
/* Form elemanına bir submit olay dinleyicisi ekleniyor. Bu, form gönderildiğinde çalışacak olan bir işlev tanımlıyor. */
form.addEventListener('submit', e => {  
  /* form yollanınca refresh olmaması için */
  e.preventDefault();
  let score = 0; /*  Kullanıcının doğru cevapladığı soruların sayısını tutmak için bir değişken oluşturulur ve başlangıçta 0 olarak ayarlanır. */
  /* Kullanıcının formdaki cevaplarını içeren bir dizi oluşturulur. */
  const usersAnswers = [ 
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];
  /* Kullanıcının cevaplarını kontrol etmek için her bir cevabı doğru cevaplarla karşılaştıran bir döngü başlatılır. */
  usersAnswers.forEach((answer, index) => {
    /* hem elemanı doner hemnde elemanın bulundugu indexi doner */
    if (answer === correctAnswers[index]) {
      score += 25;
    }
    /* Kullanıcının cevabı, doğru cevapla eşleşiyorsa, score değişkeni 25 artırılır. */
  });
  /* Sonuçların gösterileceği alanın üzerindeki d-none sınıfı kaldırılır, böylece bu alan görünür hale gelir. */
  result.classList.remove('d-none');
  let puan=0; /* Başlangıçta kullanıcının puanını sıfırlayan bir değişken oluşturulur. */
const press = setInterval(() => {
     result.querySelector('span').textContent=`${puan}%`;
     if(puan >= score){
        clearInterval(press);
     }else{
        puan++;
     }
}, 20);
})
