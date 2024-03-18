import Heading from '@/app/components/Heading'
import React from 'react'
import AuctionForm from '../AuctionForm'

export default function Create() {
  return (
    <div className='mx-auto max-w-[75%] shadow-lg p-10 bg-white rounded-lg'>
      <Heading title='Sell your car!' subtitle='Please enter the details of your car' />
      <AuctionForm auction={{
        reservePrice: 0,
        seller: '',
        winner: undefined,
        soldAmount: 0,
        currentHighBid: 0,
        createdAt: '',
        updatedAt: '',
        auctionEnd: '',
        status: '',
        make: '',
        model: '',
        year: 0,
        color: '',
        mileage: 0,
        imageUrl: '',
        id: ''
      }} />
    </div>
  )
}
