import React from 'react';
import type { Product } from '../types/quiz';
import { Button } from './Button';

interface ResultsProps {
  products: Product[];
  onRestart: () => void;
}

export const Results: React.FC<ResultsProps> = ({ products, onRestart }) => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-neutral-800 mb-2">Your Personalized Skincare Routine</h2>
        <p className="text-neutral-600">Based on your skin profile, we recommend these products:</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden border border-neutral-100">
            <img 
              src={product.imageUrl} 
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="mb-2">
                <span className="inline-block px-2 py-1 text-xs font-medium bg-[#C17F59] text-white rounded-full">
                  {product.category}
                </span>
              </div>
              <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
              <p className="text-neutral-600 text-sm mb-3">{product.description}</p>
              <div className="mb-3">
                <h4 className="text-sm font-medium text-neutral-700 mb-1">Key Ingredients:</h4>
                <div className="flex flex-wrap gap-1">
                  {product.keyIngredients.map((ingredient, i) => (
                    <span key={i} className="inline-block px-2 py-1 text-xs bg-neutral-100 text-neutral-600 rounded-full">
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <h4 className="text-sm font-medium text-neutral-700 mb-1">Benefits:</h4>
                <ul className="text-sm text-neutral-600">
                  {product.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-1">
                      <span className="text-[#C17F59]">•</span> {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-[#C17F59] font-medium mb-4">{product.price}</p>
              <a 
                href={product.affiliateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button variant="primary" className="w-full">
                  Shop Now
                </Button>
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center pt-8">
        <Button variant="secondary" onClick={onRestart}>
          Retake Quiz
        </Button>
      </div>
    </div>
  );
};