export default {
  install(Vue) {
    Vue.directive('autosize', {
      inserted(el, { value }) {
        el.addEventListener('input', e => {
          const style = window.getComputedStyle(el);

          const scrollHeight = el.scrollHeight
          const height = parseInt(style.height);
          const borderWidth = parseInt(style.borderWidth);
          const padding = parseInt(style.padding);
          const boxSizing = style.boxSizing;

          if (boxSizing === 'border-box') {
            if ((scrollHeight + borderWidth*2) - height >= 0) {
              el.style.height = (el.scrollHeight + borderWidth*2) + 'px';
            }
          }
          if (boxSizing === 'content-box') {
            if (scrollHeight - height - padding*2 >= 0) {
              el.style.height = (el.scrollHeight - padding*2) + 'px';
            }
          }
        })
      }
    })
  }
}