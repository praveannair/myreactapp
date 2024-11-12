export default function reducer(value, action) {
    switch (action.type) {
      case "increment":
        return value + 1;
      case "decrement":
        return value - 1;
      default:
        return value;
    }
  }