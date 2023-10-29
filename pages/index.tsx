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
  ]

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      {listings.map((listing, index) => (
        <ListingCard key={index} {...listing} />
      ))}
    </main>
  )
}