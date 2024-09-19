// DATE TIMER
const dataCard = document.querySelector(".correct_data");
const dataCard2 = document.querySelector(".correct_data2");
const dataCard3 = document.querySelector(".correct_data3");
const dataCard4 = document.querySelector(".correct_data4");

if (dataCard !== null) {
  document.addEventListener(
    "DOMContentLoaded",
    function () {
      let dataTomorow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
      let dataTomorow2 = new Date(
        new Date().getTime() + 24 * 60 * 60 * 1000 * 2
      );
      let dataTomorow3 = new Date(
        new Date().getTime() + 24 * 60 * 60 * 1000 * 3
      );
      let dataTomorow4 = new Date(
        new Date().getTime() + 24 * 60 * 60 * 1000 * 4
      );

      if (dataCard4 !== null) {
        dataCard.innerHTML = createDate(dataTomorow);
        dataCard2.innerHTML = createDate(dataTomorow2);
        dataCard3.innerHTML = createDate(dataTomorow3);
        dataCard4.innerHTML = createDate(dataTomorow4);
      }
    },
    false
  );
  function createDate(item) {
    return new Date(item).toLocaleDateString();
  }
}
