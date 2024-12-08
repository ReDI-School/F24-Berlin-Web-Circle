import axios from "axios";

export const fetchData = async (setLoading, setError, setPlace, setBooking, productId) => {
  setLoading(true);
  setError(null); 

  try {
    const [placeResponse, bookingsResponse] = await Promise.all([
      axios.get(`http://localhost:8800/places/${productId}`), 
      axios.get(`http://localhost:8800/bookings/${productId}`) 
    ]);
    setPlace(placeResponse.data);
    setBooking(bookingsResponse.data);
  } catch (err) {
    setError(err.response?.data?.error || "Something went wrong");
  } finally {
    setLoading(false);
  }
};