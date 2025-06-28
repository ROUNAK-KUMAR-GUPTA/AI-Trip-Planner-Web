
export const SelectTravelesList = [
  {
    id: 1,
    title: 'Just Me',
    desc: 'A solo traveler in exploration',
    icon: '🧍',
    people: '1 person',
  },
  {
    id: 2,
    title: 'A Couple',
    desc: 'Two travelers in tandem',
    icon: '👬',
    people: '2 people',
  },
  {
    id: 3,
    title: 'Family',
    desc: 'A group of fun-loving adventurers',
    icon: '🏡',
    people: '3 to 5 people',
  },
  {
    id: 4,
    title: 'Friends',
    desc: 'A bunch of thrill-seekers',
    icon: '⛵',
    people: '5 to 10 people',
  },
];

export const SelectBudgetOptions = [
  {
    id: 1,
    title: 'Cheap',
    desc: 'Stay conscious of costs',
    icon: '💵',
  },
  {
    id: 2,
    title: 'Moderate',
    desc: 'Keep costs on the average side',
    icon: '💰',
  },
  {
    id: 3,
    title: 'Luxury',
    desc: "Don't worry about cost",
    icon: '👑',
  },
];

export const AI_PROMPT = `
You are a travel assistant. Generate a detailed {totalDays}-day trip itinerary for {location} for {traveler} travelers with a {budget} budget.
**"hotelAddress" must be a valid full address (street, city, state, postal code, country)**
Respond ONLY with a raw, valid JSON object (no markdown, no explanations). The JSON must be compatible with JSON.parse().

Include:
{
  "hotels": [
    {
      "hotelName": "...",
      "geoCoordinates": "...",
      "rating": ...,
      "description": "...",
      "hotelImageUrl": "...",
      "hotelAddress": "...",
      "price": "..."
    },
    {
      "hotelName": "...",
      "geoCoordinates": "...",
      "rating": ...,
      "description": "...",
      "hotelImageUrl": "...",
      "hotelAddress": "...",
      "price": "..."
    }
    
    {
      "hotelName": "...",
      "geoCoordinates": "...",
      "rating": ...,
      "description": "...",
      "hotelImageUrl": "...",
      "hotelAddress": "...",
      "price": "..."
    }

    {
      "hotelName": "...",
      "geoCoordinates": "...",
      "rating": ...,
      "description": "...",
      "hotelImageUrl": "...",
      "hotelAddress": "...",
      "price": "..."
    }
  ],
  "itinerary": [
    {
      "day":Day 1,
      "plan": [
        {
          "placeName": "...",
          "placeDetails": "...",
          "coordinates": "...",
          "imageUrl": "...",
          "time": "...",
          "timeToTravel": "...",
          "ticketPricing": "..."
        }
      ]
    }
  ],
  "bestTimeToVisitOverall": "..."
}
Ensure all URLs, coordinates, and details are realistic and accurate. `;

