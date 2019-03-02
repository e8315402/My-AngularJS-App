export default function auth(req, res, next) {
  if (!req.isAuthenticated()) res.redirect(401, '/login');
  else next();
}