import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;

export const generateTravelPlan = async (prompt, saveTripCallback) => {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  try {
    const result = await model.generateContent(prompt);

    if (!result || !result.response || !result.response.text) {
      throw new Error('Failed to get a valid response from the AI model');
    }

    const output = await result.response.text();

    // Extract the JSON data from the AI output
    const jsonStart = output.indexOf('{');
    const jsonEnd = output.lastIndexOf('}');
    const jsonString = output.slice(jsonStart, jsonEnd + 1);

    const parsed = JSON.parse(jsonString);

    const transformed = {
      hotels: parsed.hotels.map(hotel => ({
        hotelName: hotel.hotelName,
        geoCoordinates: hotel.geoCoordinates,
        rating: hotel.rating,
        description: hotel.description,
        hotelImageUrl: hotel.hotelImageUrl,
        hotelAddress:hotel.hotelAddress,
        price:hotel.price,

      })),

      itinerary: parsed.itinerary.map(day => ({
        day: day.day,
        plan: day.plan.map(plans => ({
          placeName: plans.placeName,
          placeDetails: plans.placeDetails,
          coordinates: plans.coordinates,
          imageUrl: plans.imageUrl,
          time: plans.time,
          timeToTravel: plans.timeToTravel,
          ticketPricing: plans.ticketPricing,
        })),
      })),

      bestTimeToVisitOverall: parsed.bestTimeToVisitOverall,
    };

    console.log("✅ Transformed Output:", JSON.stringify(transformed, null, 2));

    // Call the provided callback to save the transformed trip data
    saveTripCallback(JSON.stringify(transformed, null, 2));

  } catch (err) {
    console.error("❌ Error:", err);
    if (err.message.includes('Failed to get a valid response')) {
      console.warn("🪵 AI Response Issue: Please check the AI model response.");
    }
    console.warn("🪵 Raw AI response:\n", err);
  }
};
