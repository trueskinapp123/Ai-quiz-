import type { QuizState, Product, SkinType } from '../types/quiz';

const productDatabase: Record<string, Product[]> = {
  normal: [
    {
      name: "Gentle Daily Cleanser",
      description: "A mild, pH-balanced cleanser suitable for normal skin",
      price: "$24.99",
      affiliateLink: "https://example.com/cleanser",
      imageUrl: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=500",
      category: "cleanser",
      keyIngredients: ["Glycerin", "Ceramides", "Green Tea Extract"],
      suitableFor: ["normal", "combination"],
      benefits: ["Gentle cleansing", "Maintains skin barrier", "Soothes skin"]
    },
    {
      name: "Hydrating Toner",
      description: "Alcohol-free toner with hydrating ingredients",
      price: "$22.99",
      affiliateLink: "https://example.com/toner",
      imageUrl: "https://images.unsplash.com/photo-1570194065650-d99fb4b8ccb0?auto=format&fit=crop&q=80&w=500",
      category: "toner",
      keyIngredients: ["Hyaluronic Acid", "Niacinamide", "Panthenol"],
      suitableFor: ["normal", "dry"],
      benefits: ["Hydration", "Balancing", "Prep for other products"]
    },
    {
      name: "Vitamin C Serum",
      description: "Brightening serum with stable Vitamin C",
      price: "$34.99",
      affiliateLink: "https://example.com/serum",
      imageUrl: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=500",
      category: "serum",
      keyIngredients: ["Vitamin C", "Vitamin E", "Ferulic Acid"],
      suitableFor: ["normal", "combination", "oily"],
      benefits: ["Brightening", "Antioxidant protection", "Even skin tone"]
    }
  ],
  oily: [
    {
      name: "Oil Control Cleanser",
      description: "Deep cleansing formula that controls excess sebum",
      price: "$26.99",
      affiliateLink: "https://example.com/oil-cleanser",
      imageUrl: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=500",
      category: "cleanser",
      keyIngredients: ["Salicylic Acid", "Tea Tree Oil", "Niacinamide"],
      suitableFor: ["oily", "combination"],
      benefits: ["Oil control", "Unclogs pores", "Mattifying"]
    },
    {
      name: "Balancing Toner",
      description: "Helps control oil while maintaining hydration",
      price: "$23.99",
      affiliateLink: "https://example.com/balancing-toner",
      imageUrl: "https://images.unsplash.com/photo-1570194065650-d99fb4b8ccb0?auto=format&fit=crop&q=80&w=500",
      category: "toner",
      keyIngredients: ["Witch Hazel", "BHA", "Zinc PCA"],
      suitableFor: ["oily", "combination"],
      benefits: ["Oil control", "Pore refining", "pH balancing"]
    }
  ],
  dry: [
    {
      name: "Cream Cleanser",
      description: "Rich, creamy cleanser that doesn't strip moisture",
      price: "$27.99",
      affiliateLink: "https://example.com/cream-cleanser",
      imageUrl: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=500",
      category: "cleanser",
      keyIngredients: ["Ceramides", "Squalane", "Glycerin"],
      suitableFor: ["dry", "sensitive"],
      benefits: ["Gentle cleansing", "Moisture retention", "Soothing"]
    },
    {
      name: "Intensive Moisturizer",
      description: "Rich moisturizing cream with barrier-supporting ingredients",
      price: "$32.99",
      affiliateLink: "https://example.com/intensive-moisturizer",
      imageUrl: "https://images.unsplash.com/photo-1570194065650-d99fb4b8ccb0?auto=format&fit=crop&q=80&w=500",
      category: "moisturizer",
      keyIngredients: ["Hyaluronic Acid", "Ceramides", "Shea Butter"],
      suitableFor: ["dry", "sensitive"],
      benefits: ["Deep hydration", "Barrier repair", "Soothing"]
    }
  ],
  sensitive: [
    {
      name: "Ultra-Gentle Cleanser",
      description: "Fragrance-free, gentle cleanser for sensitive skin",
      price: "$28.99",
      affiliateLink: "https://example.com/gentle-cleanser",
      imageUrl: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=500",
      category: "cleanser",
      keyIngredients: ["Centella Asiatica", "Allantoin", "Panthenol"],
      suitableFor: ["sensitive", "dry"],
      benefits: ["Gentle cleansing", "Calming", "Non-irritating"]
    },
    {
      name: "Calming Serum",
      description: "Soothing serum with anti-inflammatory ingredients",
      price: "$36.99",
      affiliateLink: "https://example.com/calming-serum",
      imageUrl: "https://images.unsplash.com/photo-1570194065650-d99fb4b8ccb0?auto=format&fit=crop&q=80&w=500",
      category: "serum",
      keyIngredients: ["Centella Asiatica", "Green Tea", "Beta-Glucan"],
      suitableFor: ["sensitive", "combination"],
      benefits: ["Reduces redness", "Calming", "Strengthens skin barrier"]
    }
  ]
};

export const getRecommendations = (quizState: QuizState): Product[] => {
  if (!quizState.skinType) return [];
  
  let recommendations = [...productDatabase[quizState.skinType]];
  
  // Add budget-based filtering
  if (quizState.skincareBudget === 'budget') {
    recommendations = recommendations.filter(product => 
      parseFloat(product.price.replace('$', '')) < 30
    );
  }

  // Add sensitivity-based filtering
  if (quizState.skinSensitivity === 'very') {
    recommendations = recommendations.filter(product => 
      product.suitableFor.includes('sensitive')
    );
  }

  // Prioritize products based on concerns
  if (quizState.concerns.includes('acne')) {
    recommendations = recommendations.filter(product => 
      product.keyIngredients.some(i => 
        ['Salicylic Acid', 'Tea Tree Oil', 'Niacinamide'].includes(i)
      )
    );
  }

  return recommendations;
};