// Register Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('./sw.js')
      .then(function(registration) {
        console.log('SOLVIX Service Worker registered with scope:', registration.scope);
      })
      .catch(function(error) {
        console.log('SOLVIX Service Worker registration failed:', error);
      });
  });
}
