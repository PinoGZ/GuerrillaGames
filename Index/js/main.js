var bg = document.querySelector(".item-bg");
var items = document.querySelectorAll(".game__item");

function cLog(content) {
  console.log(content);
}

if (window.innerWidth > 800) {
  items.forEach(function (element, index) {
    element.addEventListener("mouseover", function () {
      var x = this.getBoundingClientRect().left;
      var y = this.getBoundingClientRect().top;
      var width = this.getBoundingClientRect().width;
      var height = this.getBoundingClientRect().height;

      // Remueve la clase "active" de todos los elementos con la clase "game__item"
      items.forEach(function (item) {
        item.classList.remove("active");
      });

      // Añade la clase "active" al elemento actual
      this.classList.add("active");

      // Añade la clase "active" al elemento con la clase "item-bg"
      bg.classList.add("active");

      bg.style.width = width + "px";
      bg.style.height = height + "px";
      bg.style.transform = "translateX(" + x + "px ) translateY(" + y + "px)";
    });

    element.addEventListener("mouseleave", function () {
      // Remueve la clase "active" de todos los elementos con la clase "game__item"
      items.forEach(function (item) {
        item.classList.remove("active");
      });

      // Remueve la clase "active" del elemento con la clase "item-bg"
      bg.classList.remove("active");
    });
  });
}
