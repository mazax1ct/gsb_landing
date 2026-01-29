var mapShowed = false;

var ymapsInserted = false;

window.onload = () => {
  let target = document.getElementById('contacts_map');

  if(target) {
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.25
    }

    let callback = function(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting > 0) {
          if(mapShowed != true) {
            var elem = document.createElement('iframe');
            elem.width = '100%';
            elem.height = '500px';
            elem.setAttribute('frameborder', '0');

            if (document.querySelector('body').offsetWidth < 768) {
              let url = new URL('https://yandex.ru/map-widget/v1/?um=constructor%3Ade80474c9df453bd90d141a23c23a976e1e8359c348c30f4430e5898b05ebc2d');
              url.searchParams.set('theme', 'dark');
              url.searchParams.append('scroll', 'false');
              elem.src = url;
            } else {
              let url = new URL('https://yandex.ru/map-widget/v1/?um=constructor%3A880ca292f9cc0ef7a1e3b4fb94a9df2c783cb7cf435e99969b19099f7dab20ee');
              url.searchParams.set('theme', 'dark');
              url.searchParams.append('scroll', 'false');
              elem.src = url;
            }

            target.appendChild(elem);
            mapShowed = true;
          }
        }
      });
    }

    let observer = new IntersectionObserver(callback, options);

    observer.observe(target);
  }
}
