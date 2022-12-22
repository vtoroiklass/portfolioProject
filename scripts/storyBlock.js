const story = document.querySelectorAll(".story-block-el");
const storyName = document.querySelectorAll(".story-name");
const storyDate = document.querySelectorAll(".date");
const durationWrapper = document.querySelectorAll(".duration-wrapper");
const duration = document.querySelectorAll(".duration");
let durationWidth = 0;

function closeStory() {}

for (let i = 0; i < story.length; i++) {
  story[i].addEventListener("click", (e) => {
    story[i].classList.add("story-block-el-active");
    storyName[i].style.display = "none";
    storyDate[i].style.display = "none";
    let setDuration = setInterval(() => {
      if (duration[i].clientWidth > durationWrapper[i].clientWidth) {
        clearInterval(setDuration);
        story[i].classList.remove("story-block-el-active");
        durationWidth = 0;
        duration[i].style.width = durationWidth + "px";
        storyName[i].style.display = "block";
        storyDate[i].style.display = "block";
        if (i < story.length - 1) {
          story[i + 1].click();
        }
        return;
      }
      //   if (document.composedPath().includes(story)) {
      // return;
      // console.log(1)
      //   }
    //   story[i].onclick() = null;
      durationWidth += 1;
      duration[i].style.width = durationWidth + "px";
      document.querySelector("body").style.overflowY = "auto";
    }, 10);
    document.querySelector("body").style.overflow = "hidden";
  });
}
