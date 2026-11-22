export const INITIAL_BRANCHES = [
  {
    id: 1,
    name: "Nasr City Branch",
    address: "Abbas El Akkad St., Cairo",
    manager: "Omar Hassan",
    phone: "+20 100 123 4567",
    bays: 8,
    limit: 24,
    open: "08:00",
    close: "22:00",
    days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    active: true,
  },
  {
    id: 2,
    name: "Maadi Branch",
    address: "Road 9, Maadi, Cairo",
    manager: "Mariam Adel",
    phone: "+20 100 234 5678",
    bays: 5,
    limit: 16,
    open: "09:00",
    close: "21:00",
    days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    active: true,
  },
  {
    id: 3,
    name: "New Cairo Branch",
    address: "South 90 St., New Cairo",
    manager: "Youssef Ali",
    phone: "+20 100 345 6789",
    bays: 10,
    limit: 30,
    open: "08:00",
    close: "23:00",
    days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    active: false,
  },
];

export const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
export const BRANCHES_STORAGE_KEY = "autocare-operations-branches";

export const readBranches = () => {
  try {
    const saved = localStorage.getItem(BRANCHES_STORAGE_KEY);
    if (saved === null) return { branches: INITIAL_BRANCHES, error: "" };

    const branches = JSON.parse(saved);
    if (!Array.isArray(branches)) throw new Error("Invalid saved branch data");

    return { branches, error: "" };
  } catch {
    return {
      branches: INITIAL_BRANCHES,
      error:
        "Saved branch data could not be read. Showing demo branches instead.",
    };
  }
};
