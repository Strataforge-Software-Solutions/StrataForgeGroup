try {
  const requestedPath = sessionStorage.getItem("spa-redirect");
  if (requestedPath) {
    sessionStorage.removeItem("spa-redirect");
    history.replaceState(null, "", requestedPath);
  }
} catch {
  // Session storage can be unavailable in restricted browser contexts.
}
