document.addEventListener('DOMContentLoaded', function () {
  let utm = '';

  // Разбиваем URL на части по символу "?" и проверяем наличие параметров запроса
  const queryString = window.location.href.split('?');
  if (queryString.length > 1) {
    utm = queryString.pop();
  }

  // Получаем все ссылки на странице
  let links = document.getElementsByTagName('a');

  // Проходим по каждой ссылке
  for (let i = 0; i < links.length; i++) {
    let originalHref = links[i].getAttribute('href');

    // Если у нас есть параметры utm, добавляем его к каждой ссылке
    if (utm) {
      links[i].setAttribute(
        'href',
        originalHref + (originalHref.includes('?') ? '&' : '?') + utm
      );
    }
  }
});
