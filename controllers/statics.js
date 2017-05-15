function indexRoute(req, res) {
  res.render('static/index');
}

function notFoundRoute(req, res) {
  res.render('static/404');
}

module.exports = {
  index: indexRoute,
  notFound: notFoundRoute
};
