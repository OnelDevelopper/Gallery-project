$(document).ready(function () {
  console.log("hello world");

  var modal = $("#modal");
  var span = $("#modal #image span");
  var images = $("#gallery-photos img");
  var currentImage = 0;

  //récupérer le src des images et attributions du src au modal
  var imageSrc = images.eq(currentImage).attr("src");
  $("#modal #image img").attr("src", imageSrc);

  //ouvrir l'image sélectionné
  $("#gallery-photos img").click(function () {
    var imageSrc = $(this).attr("src");
    $("#modal #image img").attr("src", imageSrc);

    currentImage = $(this).index();

    $(modal).css("display", "block");
  });

  //bouton next pour afficher les images suivantes
  $("#next").click(function () {
    currentImage++;
    if (currentImage >= images.length) {
      currentImage = 0;
    }
    var imageSrc = images.eq(currentImage).attr("src");
    $("#modal #image img").attr("src", imageSrc);
  });

  //bouton previous pour afficher les images précédentes
  $("#previous").click(function () {
    currentImage--;
    if (currentImage < 0) {
      currentImage = images.length - 1;
    }
    var imageSrc = images.eq(currentImage).attr("src");
    $("#modal #image img").attr("src", imageSrc);
  });

  //fermer le modal montrant l'image sélectionné
  span.click(function () {
    $(modal).css("display", "none");
  });
});