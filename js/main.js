"use strict";
import { Category } from "./category.js";
// $(function(){alert("hiii")})
$("aside").css("z-index",0);
let element = [],
  search = $("#search");
for (let j = 0; j < 6; j++) {
  element.push($(".nav-link").eq(j));
}
$("#openNavbar").on("click", function () {
  $("aside").css("z-index",9);

  $("aside nav").animate({ left: "0" }, 1000, function () {
    element[0].animate({ left: "0", top: "0", opacity: 1 }, 100, function () {
      element[1].animate({ left: "0", top: "0", opacity: 1 }, 100, function () {
        element[2].animate(
          { left: "0", top: "0", opacity: 1 },
          100,
          function () {
            element[3].animate(
              { left: "0", top: "0", opacity: 1 },
              100,
              function () {
                element[4].animate(
                  { left: "0", top: "0", opacity: 1 },
                  100,
                  function () {
                    element[5].animate(
                      { left: "0", top: "0", opacity: 1 },
                      100
                    );
                  }
                );
              }
            );
          }
        );
      });
    });
  });
  $("#closeNavbar").toggleClass("d-none");
  $("#openNavbar").toggleClass("d-none");
  $("aside aside").animate({ left: "0" }, 1200);
});
$("#closeNavbar").on("click", function () {
  element[0].animate(
    { left: "-50px", top: "150px", opacity: 0 },
    100,
    function () {
      element[1].animate(
        { left: "-50px", top: "150px", opacity: 0 },
        100,
        function () {
          element[2].animate(
            { left: "-50px", top: "150px", opacity: 0 },
            100,
            function () {
              element[3].animate(
                { left: "-50px", top: "150px", opacity: 0 },
                100,
                function () {
                  element[4].animate(
                    { left: "-50px", top: "150px", opacity: 0 },
                    100,
                    function () {
                      element[5].animate(
                        { left: "-50px", top: "150px", opacity: 0 },
                        100,function () {
                          $("aside").css("z-index",0);

                        }
                      );
                    }
                  );
                }
              );
            }
          );
        }
      );
    }
  );
  $("aside nav").animate({ left: "-100%" }, 1000);
  $("#openNavbar").toggleClass("d-none");
  $("#closeNavbar").toggleClass("d-none");
  $("aside aside").animate({ left: `-300px` }, 800);
  // console.log(`${$("aside nav").outerWidth()}px`)
});
element[0].on("click", function () {
  const category = new Category("movie/now_playing?");
});
element[1].on("click", function () {
  const category = new Category("movie/popular?");
});
element[2].on("click", function () {
  const category = new Category("movie/top_rated?");
});
element[3].on("click", function () {
  const category = new Category("trending/all/day?");
});
element[4].on("click", function () {
  const category = new Category("movie/upcoming?");
});
search.change(function (e) {
  e.preventDefault();
  console.log(e.target.value);
  const category = new Category(`search/movie?query=${e.target.value}&`);
});
const category = new Category("movie/now_playing?");


