import React from 'react';

interface ListingCardProps {
  imageUrl: string;
  location: string;
  rating: number;
  distance: string;
  dates: string;
  price: string;
}

const ListingCard: React.FC<ListingCardProps> = ({ imageUrl, location, rating, distance, dates, price }) => {
  return (
    <div className="border rounded-md overflow-hidden shadow-lg max-w-sm m-4">
      <img src={imageUrl} alt="Listing" className="w-full h-48 object-cover"/>
      <div className="p-4">
        <div className="flex justify-between">
          <p className="text-gray-700 font-medium">{location}</p>
          <p className="text-gray-500 text-sm">{distance}</p>
        </div>
        <div className="flex justify-between mt-2">
          <div className="flex items-center">
            <span className="text-yellow-400">⭐</span>
            <p className="text-gray-700 ml-1">{rating}</p>
          </div>
          <p className="text-gray-700 font-medium">{price}</p>
        </div>
        <p className="text-gray-500 text-sm mt-2">{dates}</p>
      </div>
    </div>
  );
}

export default ListingCard;