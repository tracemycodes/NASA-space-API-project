class Ui {
  constructor() {
    this.profileData = document.getElementById("profile__data");
    this.body = document.body;
  }

  layout(result) {
    let output = ``;
    result.forEach((element) => {
      output += `
      <article class="card">
        <div class="card__header">
          <figure class="card__figure">
            <img src="${element.url}" class="card__image" alt="image" />
          </figure>
        </div>
        <div class="card__body">
          <h2 class="card__title">${element.title}</h2>
          <h3 class="card__subtitle">${element.date}</h3>
          <p class="card__copy">
            ${element.explanation}
          </p>
          <div class="card__body__overlay">
              <button class="read__more">Read more</button>
            </div>
        </div>
        <footer class="card__footer">
          <div class="card__actions">
            <button class="button">
              <!-- <i class="fas fa-thumbs-up"></i> -->
              <span class="anime__text">Liked!</span>
              <i class="far fa-thumbs-up"></i>
            </button>
          </div>
        </footer>
      </article>
      `;
    });

    this.profileData.innerHTML = output;
  }

  animateButton(button) {
    let UIlikeButton = button.firstElementChild;
    let UIlikeText = button.lastElementChild;

    UIlikeButton.classList.toggle("animation__text");

    if (UIlikeButton.classList.contains("animation__text")) {
      console.log("object");
      UIlikeText.classList.replace("far", "fas");
    } else {
      UIlikeText.classList.replace("fas", "far");
    }
  }

  navbar() {
    let lastScroll = 0;
    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll <= 0) {
        this.body.classList.remove("scroll-Up");
        return;
      }
      if (
        currentScroll > lastScroll &&
        !this.body.classList.contains("scroll-Down")
      ) {
        this.body.classList.remove("scroll-Up");
        this.body.classList.add("scroll-Down");
      } else if (
        currentScroll < lastScroll &&
        this.body.classList.contains("scroll-Down")
      ) {
        this.body.classList.remove("scroll-Down");
        this.body.classList.add("scroll-Up");
      }
      lastScroll = currentScroll;
    });
  }

  readMore(item) {
    item.parentElement.classList.toggle("card__body__overlay__read");
    item.parentElement.previousElementSibling.classList.toggle(
      "card__copy__read"
    );

    if (item.textContent == "Read more") {
      item.textContent = "Read less";
    } else {
      item.textContent = "Read more";
    }
  }
}
