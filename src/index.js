function importRoute(routeName) {
  return import(/* webpackChunkName: "chunk-[request]" */ `../routes/${routeName}`).then(
    module => module.default.render()
  );
}

importRoute('a');
import(/* webpackChunkName: "chunk-a" */ '../routes/b').then(module =>
  module.default.render()
);
