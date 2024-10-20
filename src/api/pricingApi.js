import axios from 'axios';

export const fetchCalculatedCosts = async (
  checkInDate,
  checkOutDate,
  numberOfGuests,
  setCalculatedCosts,
  setLoading,
  setError
) => {
  setLoading(true);
  try {
    const response = await axios.post('http://localhost:4000/api/calculate-pricing', {
      checkInDate,
      checkOutDate,
      numberOfGuests,
    });
    setCalculatedCosts(response.data);
    setError('');
  } catch (error) {
    console.error('Error calculating pricing:', error);
    // setError('Error calculating pricing. Please try again.');
  } finally {
    setLoading(false);
  }
};