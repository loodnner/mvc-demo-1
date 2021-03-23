import $ from "jquery";
import "./app2.css";
const $tabBar = $("#tabBar");
const $tabContent = $("#tabContent");
$tabBar.on("click", "li", (e) => {
  const $li = $(e.currentTarget);
  const index = $li.index();
  $tabContent
    .children()
    .eq(index)
    .addClass("active")
    .siblings()
    .removeClass("active");
});

$tabBar.children().eq(0).trigger("click");
