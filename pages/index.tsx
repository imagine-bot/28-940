import Image from 'next/image'
import { Inter } from 'next/font/google'
import ListingCard from '../components/ListingCard'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const listings = [
    {
      imageUrl: 'https://source.unsplash.com/random',
      location: 'New York',
      rating: 4.5,
      distance: '2 km away',
      dates: '1-10 Jan',
      price: '$100 per night'
    },
    {
      imageUrl: 'https://source.unsplash.com/random',
      location: 'Paris',
      rating: 4.7,
      distance: '1 km away',
      dates: '11-20 Feb',
      price: '$120 per night'
    },
    // Add more listings as needed
    {
      imageUrl: 'https://source.unsplash.com/random',
      location: 'London',
      rating: 4.8,
      distance: '3 km away',
      dates: '15-25 Mar',
      price: '$130 per night'
    },
    {
      imageUrl: 'https://source.unsplash.com/random',
      location: 'Tokyo',
      rating: 4.9,
      distance: '4 km away',
      dates: '10-20 Apr',
      price: '$140 per night'
    },
    {
      imageUrl: 'https://source.unsplash.com/random',
      location: 'Sydney',
      rating: 4.6,
      distance: '5 km away',
      dates: '5-15 May',
      price: '$150 per night'
    },
    {
      imageUrl: 'https://source.unsplash.com/random',
      location: 'Berlin',
      rating: 4.7,
      distance: '6 km away',
      dates: '20-30 Jun',
      price: '$160 per night'
    },
    {
      imageUrl: 'https://source.unsplash.com/random',
      location: 'Moscow',
      rating: 4.8,
      distance: '7 km away',
      dates: '25 Jul - 5 Aug',
      price: '$170 per night'
    },
    {
      imageUrl: 'https://source.unsplash.com/random',
      location: 'Rome',
      rating: 4.9,
      distance: '8 km away',
      dates: '10-20 Sep',
      price: '$180 per night'
    },
    {
      imageUrl: 'https://source.unsplash.com/random',
      location: 'Madrid',
      rating: 4.6,
      distance: '9 km away',
      dates: '15-25 Oct',
      price: '$190 per night'
    },
    {
      imageUrl: 'https://source.unsplash.com/random',
      location: 'Beijing',
      rating: 4.7,
      distance: '10 km away',
      dates: '20-30 Nov',
      price: '$200 per night'
    },
  ]

  return (
    <main
      className={`grid grid-cols-5 gap-4 min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      {listings.map((listing, index) => (
        <ListingCard key={index} {...listing} />
      ))}
    </main>
  )
}