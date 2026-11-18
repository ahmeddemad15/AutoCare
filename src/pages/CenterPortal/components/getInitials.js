// "Speed Auto Center" -> "SA"
const getInitials = (name = "") => {
  const letters = name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word.charAt(0).toUpperCase())
    .join("");

  return letters || "AC";
};

export default getInitials;
