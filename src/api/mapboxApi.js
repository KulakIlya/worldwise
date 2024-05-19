import axios from 'axios';

axios.defaults.baseURL = 'https://api.mapbox.com/search/geocode/v6/';

export const getPlace = async ({ lng: longitude, lat: latitude }) => {
  const searchParams = new URLSearchParams({
    longitude,
    latitude,
    access_token:
      'pk.eyJ1Ijoia3VsYWtpbHlhIiwiYSI6ImNsdzZsYXMyZjFveHMyanB5Mmc3NHg5c20ifQ.Dm3DdYrirkpzCNPTAr1zsA',
  });
  try {
    const { data } = await axios.get(`/reverse?${searchParams}`);

    return {
      city: data.features[0].properties.context.place.name,
      country: data.features[0].properties.context.country,
    };
  } catch (error) {
    throw new Error(error.message);
  }
};
