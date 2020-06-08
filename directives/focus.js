const focus = {
  install(Vue) {
    Vue.directive('focus', {
      inserted: function(el, { value }) {
        if (typeof(value) === 'boolean' && value === false) return;

        el.focus();
      }
    })
  }
}

export default focus;