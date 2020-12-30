export default function debounce(callback, prop) {
  const timerId = setTimeout(() => {
    callback(prop);
  }, 1000);
  return timerId;
}
