
// document.addEventListener("DOMContentLoaded", function() {
//     const marqueeWrapper = document.querySelector('.marquee-wrapper');
//     const marqueeContent = document.querySelector('.marquee-content');
//     let direction = 'left';
//     let marqueeSpeed = 2;
 
//     function moveMarquee() {
//       const contentWidth = marqueeContent.offsetWidth;
//       const wrapperWidth = marqueeWrapper.offsetWidth;
//       let currentPosition = parseInt(window.getComputedStyle(marqueeContent).left, 10);
 
//       if (direction === 'left') {
//         currentPosition -= marqueeSpeed;
//         if (currentPosition <= -contentWidth) {
//           currentPosition = wrapperWidth;
//         }
//       } else {
//         currentPosition += marqueeSpeed;
//         if (currentPosition >= wrapperWidth) {
//           currentPosition = -contentWidth;
//         }
//       }
 
//       marqueeContent.style.left = currentPosition + 'px';
//       requestAnimationFrame(moveMarquee);
//     }
 
//     marqueeContent.style.left = '80%';
//     requestAnimationFrame(moveMarquee);
 
//     marqueeWrapper.addEventListener('mousemove', function(event) {
//       const wrapperWidth = marqueeWrapper.offsetWidth;
//       const mouseX = event.clientX - marqueeWrapper.getBoundingClientRect().left;
 
//       if (mouseX > wrapperWidth / 2) {
//         direction = 'right';
//       } else {
//         direction = 'left';
//       }
//     });
 
//     marqueeWrapper.addEventListener('mouseleave', function() {
//       direction = 'left';
//     });
//   });
 
 
 