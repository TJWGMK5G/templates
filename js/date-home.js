// DATE TIMER
const dataCard = document.querySelector(".correct_data");

if (dataCard !== null) {
  document.addEventListener(
    "DOMContentLoaded",
    function () {
      let dataTomorow = new Date(new Date().getTime() + 24 * 120 * 120 * 1000);

      dataCard.innerHTML = createDate(dataTomorow);
    },
    false
  );
  function createDate(item) {
    return new Date(item).toLocaleDateString();
  }
}
