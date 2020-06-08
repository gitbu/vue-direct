import directives from './directives';

const plugin = (Vue) => {
  for (let directive in directives) {
      directives[directive].install(Vue);
  }
}

export default plugin;