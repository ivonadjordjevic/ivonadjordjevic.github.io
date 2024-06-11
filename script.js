$(".slike").on("click", function(){
  console.log("USAO")
  $("#full-image").attr("src", $(this).attr("src"));
  $('#image-viewer').show();
});

$("#image-viewer .close").click(function(){
  $('#image-viewer').hide();
});