export default {
  install(Vue) {
    Vue.directive('autosize', {
      inserted(el, { value }) {
        el.addEventListener('input', e => {
          console.log(el.scrollHeight);
          const scrollHeight = el.scrollHeight;
          const height = parseInt(el.style.height);
          if (el.scrollTop) {
            el.style.height = el.scrollHeight + 'px';
          }
        })
      }
    })

  }
}