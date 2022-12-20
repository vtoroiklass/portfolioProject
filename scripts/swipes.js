let touchstartX = 0;
let touchendX = 0;
let touchstartY = 0;
let touchendY = 0;

function checkMessageDirection() {
   if (touchendY > touchstartY) {
    closeMessageBlock.click()
   }
}

function checkDirection() {
  

  // left
  if (touchendX < touchstartX) closeSidebar();

  // right
  if (
    touchendX > touchstartX + 10 &&
    touchstartY - touchendY <= 30 &&
    touchendY - touchstartY <= 30
  )
    openSidebar();
}

messageBlock.addEventListener("touchstart", (e) => {
    touchstartY = e.changedTouches[0].screenY;
});

messageBlock.addEventListener("touchend", (e) => {
    touchendY = e.changedTouches[0].screenY;
    checkMessageDirection();
  });
  

document.addEventListener("touchstart", (e) => {
  touchstartX = e.changedTouches[0].screenX;
  touchstartY = e.changedTouches[0].screenY;
});

document.addEventListener("touchend", (e) => {
  touchendX = e.changedTouches[0].screenX;
  touchendY = e.changedTouches[0].screenY;
  checkDirection();
});
