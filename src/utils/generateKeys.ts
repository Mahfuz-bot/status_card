export function generateRandomKey() {
   return Math.floor(Math.random() * 1e9) + Date.now();
}
