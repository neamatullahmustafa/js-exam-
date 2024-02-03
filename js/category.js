export class Category {
  constructor(category) {
    this.category = category;
    this.fetching();
  }
  fetching() {
    fetch(
      `https://api.themoviedb.org/3/${this.category}api_key=45862df62bec8b227a434f74e673abff`
    )
      .then((response) => response.json())
      .then((data) => {
        // this.load();
        this.displayCategory(data.results);
      })
      .catch((err) => console.error(err));
  }
  load() {
    $("#loader").css({ display: `none` }, 1000);
  }
  displayCategory(movies) {
    let moviesContainer = $("#moviesContainer");
    let capt, star, title, date;
    moviesContainer.empty();
    for (let index = 0; index < movies.length; index++) {
      movies[index].title
        ? (title = movies[index].title)
        : (title = movies[index].name);
      movies[index].release_date
        ? (date = movies[index].release_date)
        : (date = movies[index].first_air_date);
      star = $(`<div class="my-3"></div>`);
      for (let i = 0; i < Math.floor(movies[index].vote_average); i++) {
        star.append(`<i class="fa-solid fa-star"></i>`);
      }
      capt = $(`<figcaption>  </figcaption>`).append(
        $(`<h3></h3>`).text(title),
        $(`<p></p>`).text(movies[index].overview.slice(0, 180) + "..."),
        $(`<p></p>`).append(`release date :`, `<span>${date}</span>`),
        $(star),
        $(`<div class="rating"> </div>`).text(
          movies[index].vote_average.toFixed(1)
        )
      );
      moviesContainer.append(
        $(`<figure></figure> `).append(
          `<img src="https://image.tmdb.org/t/p/w500/${movies[index].poster_path}" alt="${title}">`,
          capt
        )
      );
    }
    this.load();
    this.name();
  }
  name() {
    $("figure").hover(
      function () {
        $(this).find("img").animate({ scale: 1.2, rotate: "5deg" }, 500);
        $(this).find("figcaption h3").animate({ top: 0 }, 500);
        $(this).find("figcaption p").animate({ top: 0 }, 500);
        $(this).find("figcaption div").animate({ top: 0 }, 500);
        $(this).find("figcaption").animate({ opacity: 1 }, 300);
      },
      function () {
        // out
        $(this).find("img").animate({ scale: 1, rotate: "0deg" }, 500);
        $(this).find("figcaption h3").animate(
            {
              right: 200,
            },
            500,
            function () {
              $(this).css({ top: -100, right: 0 });
            }
          );
          $(this).find("figcaption p").animate({
            right: 200, }, 500,  function () {
            $(this).css({ top: 100, right: 0 });
          });
          $(this).find("figcaption div").animate({
            right: 200,}, 500,  function () {
            $(this).css({ top: 100, right: 0 });
          });
        $(this).find("figcaption").animate({ opacity: 0 }, 300);
      }
    );
  }
}
