// DATE TIMER
const dataCardMinus = document.querySelector(".correct_data_minus");
const dataCardMinus2 = document.querySelector(".correct_data_minus2");
const dataCardMinus3 = document.querySelector(".correct_data_minus3");
const dataCardMinus4 = document.querySelector(".correct_data_minus4");
const dataCardMinus5 = document.querySelector(".correct_data_minus5");
const dataCardMinus6 = document.querySelector(".correct_data_minus6");
const dataCardMinus7 = document.querySelector(".correct_data_minus7");
const dataCardMinus8 = document.querySelector(".correct_data_minus8");
const dataCardMinus9 = document.querySelector(".correct_data_minus9");
const dataCardMinus10 = document.querySelector(".correct_data_minus10");

if (dataCard !== null) {
  document.addEventListener(
    "DOMContentLoaded",
    function () {
      let dataTomorow = new Date(new Date().getTime() - 24 * 120 * 120 * 1000);
      let dataTomorow2 = new Date(
        new Date().getTime() - 24 * 120 * 120 * 1000 * 2
      );
      let dataTomorow3 = new Date(
        new Date().getTime() - 24 * 120 * 120 * 1000 * 3
      );
      let dataTomorow4 = new Date(
        new Date().getTime() - 24 * 120 * 120 * 1000 * 4
      );
      let dataTomorow5 = new Date(
        new Date().getTime() - 24 * 120 * 120 * 1000 * 5
      );
      let dataTomorow6 = new Date(
        new Date().getTime() - 24 * 120 * 120 * 1000 * 6
      );
      let dataTomorow7 = new Date(
        new Date().getTime() - 24 * 120 * 120 * 1000 * 7
      );
      let dataTomorow8 = new Date(
        new Date().getTime() - 24 * 120 * 120 * 1000 * 8
      );
      let dataTomorow9 = new Date(
        new Date().getTime() - 24 * 120 * 120 * 1000 * 9
      );
      let dataTomorow10 = new Date(
        new Date().getTime() - 24 * 120 * 120 * 1000 * 10
      );

      dataCardMinus.innerHTML = createDate(dataTomorow);
      dataCardMinus2.innerHTML = createDate(dataTomorow2);
      dataCardMinus3.innerHTML = createDate(dataTomorow3);
      dataCardMinus4.innerHTML = createDate(dataTomorow4);
      dataCardMinus5.innerHTML = createDate(dataTomorow5);
      dataCardMinus6.innerHTML = createDate(dataTomorow6);
      dataCardMinus7.innerHTML = createDate(dataTomorow7);
      dataCardMinus8.innerHTML = createDate(dataTomorow8);
      dataCardMinus9.innerHTML = createDate(dataTomorow9);
      dataCardMinus10.innerHTML = createDate(dataTomorow10);
    },
    false
  );
  function createDate(item) {
    return new Date(item).toLocaleDateString();
  }
}
