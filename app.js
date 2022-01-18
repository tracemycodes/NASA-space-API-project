const nasa = new Nasa();
const ui = new Ui();

document.addEventListener("DOMContentLoaded", getNasa);
const main = document.getElementById("profile__data")

function load() {
  let loadTime;

  loadTime = true;
  if (loadTime) {
    main.innerHTML = `<div class="lds-ellipsis">
	<div></div>
	<div></div>
	<div></div>
	<div></div>
</div>`;
  }
}

function getNasa(params) {
  load();

  nasa
    .getNasa()
    .then((result) => {
      loadTime = false;
      
      if (!loadTime) {
        ui.layout(result);

        const UIbutton = document.querySelectorAll(".button");
        UIbutton.forEach((button) => {
          button.addEventListener("click", function (e) {
            ui.animateButton(button);
            e.preventDefault();
          });
        });
      }
    })
}

ui.navbar();
