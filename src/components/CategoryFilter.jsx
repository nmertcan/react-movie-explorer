import { movieCategories } from "../services/api";

const categories = [
  { value: movieCategories[0], label: "Drama" },
  { value: movieCategories[1], label: "Klasik" },
  { value: movieCategories[2], label: "Aksiyon / Macera" },
  { value: movieCategories[3], label: "Animasyon" },
  { value: movieCategories[4], label: "Komedi" },
  { value: movieCategories[5], label: "Aile" },
  { value: movieCategories[6], label: "Korku" },
];

export default function CategoryFilter({ category, setCategory }) {
  return (
    <select
      className="category-select"
      value={category}
      onChange={(event) => setCategory(event.target.value)}
    >
      {categories.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
}
