const requestedPath = `${location.pathname}${location.search}${location.hash}`;
const projectBase = location.pathname.match(/^\/StrataForgeGroup(?:\/|$)/i)
  ? "/StrataForgeGroup/"
  : "/";

try {
  sessionStorage.setItem("spa-redirect", requestedPath);
} finally {
  location.replace(projectBase);
}
