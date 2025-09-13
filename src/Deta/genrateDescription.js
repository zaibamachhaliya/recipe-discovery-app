

export function generateDescriptionFromName(mealName) {
  if (!mealName) return "A delicious recipe crafted with authentic flavors.";

  return `${mealName} — a flavorful recipe crafted with fresh ingredients and authentic taste, perfect for any occasion.`;
}
