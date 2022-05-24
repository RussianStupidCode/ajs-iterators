export default function canIterate(object) {
  return object[Symbol.iterator] !== undefined;
}
