const question= document.querySelector('.question')
const gif = document.querySelector('.gif')
const yesBtn = document.querySelector('.yes-btn')
const noBtn = document.querySelector('.no-btn')

yesBtn.addEventListener("click", ()=>{
question.innerHTML = "Yayy, I love you.......";
gif.src = "https://64.media.tumblr.com/dc13865a046cc22ae84fe54c3c8d01fb/0ac36e3ceb64aa91-98/s400x600/3f177feeebd8fd4698ddf3ed94023271774923e9.gifv"
alert(
  "I Wonnnnnn!!!!!"
)

})

noBtn.addEventListener("click", ()=>{
      const noBtnRect = noBtn.getBoundingClientRect();
      const maxX = window.innerWidth - noBtnRect.width;
      const maxY  = window.innerHeight - noBtnRect.height;

      const randomX = Math.floor(Math.random() * maxX);
      const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px"
})

 
        const observer= new IntersectionObserver((entries)=>{
            entries.forEach(entry=>{
                if(entry.isIntersecting){
                    entry.target.classList.add("show");
                }
            });
        });
        document.querySelectorAll('.wrapper','.hidden-left','.hidden-right','fadeInLeft').forEach(el=>observer.observe(el));
  