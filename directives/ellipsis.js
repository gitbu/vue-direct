export default {
  install(Vue) {
    Vue.directive('ellipsis', {
      inserted(el, { value }) {
        if (!value || value === 1) {
          el.style.overflow = 'hidden';
          el.style.textOverflow = 'ellipsis';
          el.style.whiteSpace = 'nowrap';
        } else {
          el.style.display =  '-webkit-box';
          el.style['-webkit-box-orient'] = 'vertical'
          el.style['-webkit-line-clamp'] = value;
          el.style.overflow =  'hidden';
        }
      }
    })
  }
}