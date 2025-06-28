import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function HotelCardItem({ hotel }) {


    const [PhotoUrl, setPhotoUrl] = useState();
    
        useEffect(() => {
            hotel && GetPlacePhoto();
        }, [hotel]);
    
        const GetPlacePhoto = async () => {
            const data = {
                textQuery: hotel?.hotelName
            };
            const result = await GetPlaceDetails(data).then(resp => {
                const photoName = resp?.data?.places?.[0]?.photos?.[3]?.name;
                if (photoName) {
                    const PhotoUrl = PHOTO_REF_URL.replace('{NAME}', photoName);
                    setPhotoUrl(PhotoUrl);
                } else {
                    console.warn('No photo found for this location.');
                }
            });
        };


    return (
        <Link to={'https://www.google.com/maps/search/?api=1&query=' + hotel.hotelName + "," + hotel?.hotelAddress} target='_blank'>
            <div className='hover:scale-105 transition-all cursor-pointer' >
                <img src={PhotoUrl?PhotoUrl:'/FrImg.jpg'} 
                className="rounded-xl h-[180px] w-full object-cover" />

                <div className='my-2 flex flex-col gap-2'>
                    <h2 className=' text-black font-medium'> {hotel?.hotelName}</h2>
                    <h2 className='text-xs text-gray-500'> 📍 {hotel?.hotelAddress}</h2>
                    <h2 className='text-black text-sm'> 💰{hotel?.price}</h2>
                    <h2 className='text-black text-sm'> ⭐{hotel.rating}</h2>
                </div>

            </div>
        </Link>
    )
}

export default HotelCardItem