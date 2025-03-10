document.querySelector('body').addEventListener('mousemove',
    eyeball);
document.querySelector('body').addEventListener('touchmove', eyeball); // پشتیبانی از لمس گوشی
    function eyeball(){
        const eye = document.querySelectorAll('.eye');
         eye.forEach(function(eye){
            let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
            let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);

              // اگر تاچ بود، مختصات انگشت رو بگیریم
        let pageX = event.pageX || event.touches[0].pageX;
        let pageY = event.pageY || event.touches[0].pageY;


            let radian = Math.atan2(event.pageX - x, event.pageY - y);
            let rotation = (radian * (180 / Math.PI) * -1) + 270;
             eye.style.transform = "rotate("+rotation+"deg)"
            });
            
    }
  