export interface Beach {
  id: number;
  name: string;
  imageUrl: string;
  distance: number;
  bestFor: string[];
  restaurants: string[];
  description: string;
  categories: string[];
}

// This is your mock data. You can expand this with all your beaches.
export const allBeaches: Beach[] = [
  {
    id: 1,
    name: "Psarou Beach",
    imageUrl: "/images/psarou-beach.png",
    distance: 5,
    bestFor: ["Luxury", "Couples", "Groups"],
    restaurants: ["Nammos"],
    description:
      "This upmarket sandy beach with its turquoise waters is very popular among celebrities. Many luxury hotels, apartments and restaurants are located here. The most notable one is Nammos, which is considered one of the best beach clubs in Mykonos. Psarou beach is easily accessible from Mykonos Town, just one stop before the last",
    categories: ["Psarou"],
  },
  {
    id: 2,
    name: "Ornos Beach",
    imageUrl: "/images/psarou-beach.png", // Replace with actual image path
    distance: 3,
    bestFor: ["Kids", "Relaxing"],
    restaurants: ["Kuzina"],
    description: "Ornos beach lorent ipsum",
    categories: ["Ornos"],
  },
  {
    id: 3,
    name: "Kalo Livadi",
    imageUrl: "/images/psarou-beach.png", // Replace with actual image path
    distance: 6,
    bestFor: ["Young Crowd", "Music"],
    restaurants: ["Tropicana"],
    description: "Tropicana beach lorent ipsum",
    categories: ["Kalo Livadi"],
  },
  {
    id: 4,
    name: "Tropicana Beach",
    imageUrl: "/images/psarou-beach.png", // Replace with actual image path
    distance: 11,
    bestFor: ["Watersports", "Nudist-friendly"],
    restaurants: ["Tropicana Restaurant"],
    description: "Elia beach lorent ipsum",
    categories: ["Tropicana"],
  },
  {
    id: 5,
    name: "Elia Beach",
    imageUrl: "/images/psarou-beach.png", // Replace with actual image path
    distance: 11,
    bestFor: ["Watersports", "Nudist-friendly"],
    restaurants: ["Elia Restaurant"],
    description: "Elia beach lorent ipsum",
    categories: ["Elia"],
  },
  // Add more beach objects for each category here...
];
