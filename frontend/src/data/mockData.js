// Mock data for demonstrating NutriLens functionality
export const mockData = {
  sampleAnalysis: {
    healthScore: 3,
    explanation: "This product has a low health rating due to high levels of processed ingredients, artificial additives, and excessive sodium content. The ingredient list contains several preservatives and flavor enhancers that offer little nutritional value. While it provides some protein, the overall nutritional profile is dominated by refined carbohydrates and unhealthy fats.",
    keyFindings: [
      "High sodium content (740mg per serving) - exceeds daily recommended intake",
      "Contains multiple artificial preservatives (BHA, BHT, sodium benzoate)",
      "High in saturated fats (8g per serving)",
      "Refined wheat flour as primary ingredient with minimal fiber",
      "Artificial colors and flavors present",
      "Low protein-to-calorie ratio"
    ],
    recommendations: [
      "Look for products with less than 300mg sodium per serving",
      "Choose whole grain alternatives when available",
      "Opt for products with natural preservatives or shorter ingredient lists",
      "Consider homemade alternatives to reduce processed ingredients",
      "Balance this product with fresh fruits and vegetables"
    ],
    ingredients: [
      "Refined wheat flour",
      "Vegetable oil (palm, soybean)",
      "Salt",
      "Sugar",
      "Monosodium glutamate",
      "Artificial flavoring",
      "Preservatives (BHA, BHT)",
      "Artificial coloring"
    ],
    nutritionalInfo: {
      calories: 320,
      protein: 6,
      carbs: 58,
      fat: 12,
      fiber: 2,
      sodium: 740,
      sugar: 8
    }
  },

  analysisInProgress: {
    stage: "extracting",
    message: "Extracting text from image...",
    progress: 45
  },

  sampleProducts: [
    {
      id: 1,
      name: "Organic Granola",
      healthScore: 8,
      category: "Breakfast",
      lastScanned: "2024-01-15"
    },
    {
      id: 2,
      name: "Instant Noodles",
      healthScore: 3,
      category: "Convenience Food",
      lastScanned: "2024-01-14"
    },
    {
      id: 3,
      name: "Whole Grain Crackers",
      healthScore: 7,
      category: "Snacks",
      lastScanned: "2024-01-13"
    }
  ]
};

export default mockData;