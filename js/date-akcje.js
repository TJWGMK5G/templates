// DATE TIMER
const dataCard = document.querySelector(".correct_data");
const dataCard2 = document.querySelector(".correct_data2");
const dataCard3 = document.querySelector(".correct_data3");
const dataCard4 = document.querySelector(".correct_data4");
const dataCard5 = document.querySelector(".correct_data5");
const dataCard6 = document.querySelector(".correct_data6");
const dataCard7 = document.querySelector(".correct_data7");
const dataCard8 = document.querySelector(".correct_data8");
const dataCard9 = document.querySelector(".correct_data9");
const dataCard10 = document.querySelector(".correct_data10");

if (dataCard !== null) {
  document.addEventListener(
    "DOMContentLoaded",
    function () {
      let dataTomorow = new Date(new Date().getTime() + 24 * 120 * 120 * 1000);
      let dataTomorow2 = new Date(
        new Date().getTime() + 24 * 120 * 120 * 1000 * 2
      );
      let dataTomorow3 = new Date(
        new Date().getTime() + 24 * 120 * 120 * 1000 * 3
      );
      let dataTomorow4 = new Date(
        new Date().getTime() + 24 * 120 * 120 * 1000 * 4
      );
      let dataTomorow5 = new Date(
        new Date().getTime() + 24 * 120 * 120 * 1000 * 5
      );
      let dataTomorow6 = new Date(
        new Date().getTime() + 24 * 120 * 120 * 1000 * 6
      );
      let dataTomorow7 = new Date(
        new Date().getTime() + 24 * 120 * 120 * 1000 * 7
      );
      let dataTomorow8 = new Date(
        new Date().getTime() + 24 * 120 * 120 * 1000 * 8
      );
      let dataTomorow9 = new Date(
        new Date().getTime() + 24 * 120 * 120 * 1000 * 9
      );
      let dataTomorow10 = new Date(
        new Date().getTime() + 24 * 120 * 120 * 1000 * 10
      );

      dataCard.innerHTML = createDate(dataTomorow);
      dataCard2.innerHTML = createDate(dataTomorow2);
      dataCard3.innerHTML = createDate(dataTomorow3);
      dataCard4.innerHTML = createDate(dataTomorow4);
      dataCard5.innerHTML = createDate(dataTomorow5);
      dataCard6.innerHTML = createDate(dataTomorow6);
      dataCard7.innerHTML = createDate(dataTomorow7);
      dataCard8.innerHTML = createDate(dataTomorow8);
      dataCard9.innerHTML = createDate(dataTomorow9);
      dataCard10.innerHTML = createDate(dataTomorow10);
    },
    false
  );
  function createDate(item) {
    return new Date(item).toLocaleDateString();
  }
}
