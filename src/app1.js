import $ from "jquery";
const $addNumber = $("#addNumber");
const $minusNumber = $("#minusNumber");
const $multiNumber = $("#multiNumber");
const $divideNumber = $("#divideNumber");
const $number = $("#number");
let n = $number.text();
$addNumber.on("click", () => {
  n++;
  $number.text(n);
});
$minusNumber.on("click", () => {
  n = n - 1;
  $number.text(n);
});
$multiNumber.on("click", () => {
  n = n * 2;
  $number.text(n);
});
$divideNumber.on("click", () => {
  n = n / 2;
  $number.text(n);
});
