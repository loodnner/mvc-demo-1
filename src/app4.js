import $ from "jquery";
import "./app4.css";

const $circle = $("#circle");
$circle.on("mouseenter", () => {
  $circle.addClass("selected");
});
$circle.on("mouseleave", () => {
  $circle.removeClass("selected");
});
