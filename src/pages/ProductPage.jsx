import {
  faArrowUpFromBracket,
  faHeart,
} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AboveProductTitle from '../components/AboveProductTitle/AboveProductTitle'
import Amenities from '../components/Amenities/Amenities'
import FavoriteStay from '../components/FavoriteStay/FavoriteStay'
import HostSummary from '../components/HostSummary/HostSummary'
import IconButton from '../components/IconButton/IconButton'
import MapView from '../components/MapView/MapView'
import MeetYourHostSection from '../components/MeetYourhostSection/MeetYourHostSection'
import ProductDescription from '../components/ProductDescription/ProductDescription'
import ProductGallery from '../components/ProductGallery/ProductGallery'
import ProductHighlight from '../components/ProductHighlight/ProductHighlight'
import ProductSummary from '../components/ProductSummary/ProductSummary'
import GuestCountPopUp from '../components/ReservationCard/GuestCountPopUp/GuestCountPopUp'
import ReservationCard from '../components/ReservationCard/ReservationCard'
import ShortcutsPopUp from '../components/ReservationCard/ShortcutsPopUp/ShortcutsPopUp'
import ReviewSummary from '../components/ReviewSummary/ReviewSummary'
import Reviews from '../components/Reviews/Reviews'
import mapViewSampleImg from './../assets/map-view-sample.png'
import styles from './ProductPage.module.css'

const ProductPage = () => {
  const [description, setDescription] = useState({})
  const [productSummary, setProductSummary] = useState({})
  const [host, setHost] = useState({})
  const [reviewsSummary, setReviewsSummary] = useState({})
  const [highlights, setHighlights] = useState([])
  const [amenities, setAmenities] = useState([])
  const [bigImage, setBigImage] = useState('')
  const [smallImages, setSmallImages] = useState([])
  const [reviewsList, setReviewsList] = useState([])
  // const [totalReviews, setTotalReviews] = useState(0)
  const [checkInDate, setCheckInDate] = useState('')
  const [checkOutDate, setCheckOutDate] = useState('')
  const [guestCounts, setGuestCounts] = useState({})
  // const [totalPrice, setTotalPrice] = useState(0)
  const [bookingData, setBookingData] = useState({})

  const [isShortcutsPopupVisible, setIsShortcutsPopupVisible] = useState(false)
  const [isGuestCountPopupVisible, setIsGuestCountPopupVisible] = useState(false)
  const [showGuests, setShowGuests] = useState(false)
  const [showCalendar, setShowCalendar] = useState(false)

  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  const { productId } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        setError('')

        const productInfoResponse = await axios.get(
          `http://localhost:4000/product-info/${productId}`
        )
        const {
          description,
          productSummary,
          host,
          reviewsSummary,
          highlights,
          amenities,
        } = productInfoResponse.data

        setDescription(description)
        setProductSummary(productSummary)
        setHost(host)
        setReviewsSummary(reviewsSummary)
        setHighlights(highlights)
        setAmenities(amenities)

        const galleryResponse = await axios.get(
          `http://localhost:4000/gallery/${productId}`
        )
        setBigImage(galleryResponse.data.gallery.bigImage)
        setSmallImages(galleryResponse.data.gallery.smallImages)

        const reviewsResponse = await axios.get(
          `http://localhost:4000/reviews/${productId}`
        )
        setReviewsList(reviewsResponse.data.reviewsList)
        // setTotalReviews(reviewsResponse.data.totalReviews)

        const bookingStatusResponse = await axios.get(
          `http://localhost:4000/booking-status/${productId}`
        )
        setCheckInDate(bookingStatusResponse.data.checkInDate)
        setCheckOutDate(bookingStatusResponse.data.checkOutDate)
        setGuestCounts(bookingStatusResponse.data.guestCounts)
        // setTotalPrice(bookingStatusResponse.data.totalPrice)
        setBookingData(bookingStatusResponse.data.bookingData)
      } catch (error) {
        console.error('Error fetching data:', error)
        setError('Failed to load data. Please try again.')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [productId])

  const {
    pricePerNight,
    cleaningFee,
    airbnbServiceFee,
    longStayDiscount,
    nightsCountForDiscount,
    minStayNights,
    isBookingOpen,
    allowGuestsNumber,
  } = bookingData

  const { totalAvgRating, totalReviewsCount, ratings } = reviewsSummary

  const {
    productTitle,
    accommodationType,
    address,
    locationDescription,
    bedrooms,
    beds,
    baths,
  } = productSummary

  const {
    hostName,
    hostingDuration,
    role,
    profilePicUrl,
    verified,
    responseRate,
    responseTime,
    profileText,
  } = host

  const { place, space, guestAccess, otherThings } = description


  const toggleShortcutsPopup = () => {
    setIsShortcutsPopupVisible((prevState) => !prevState)
  }

  const toggleGuestCountPopup = () => {
    setIsGuestCountPopupVisible((prevState) => !prevState)
  }

  function handleShare() {
    alert('Share this experience')
  }
  function handleSave() {
    alert('Save this experience')
  }
  function handleShowAmenities() {
    alert('Here is the list of all amenities!')
  }

  if (loading) {
    return <div>Loading data, please wait...</div>
  }

  return (
    <div className={styles.MainProductPage}>
      <div className={styles.ProductPageContainer}>
        <div className={styles.titlePage}>
          <AboveProductTitle title={productTitle} />
          <div className={styles.IconButton}>
            <IconButton
              faIcon={faArrowUpFromBracket}
              label="Share"
              onClick={handleShare}
            />
            <IconButton faIcon={faHeart} label="Save" onClick={handleSave} />
          </div>
        </div>
        <ProductGallery
          bigImage={bigImage}
          smallTopLeftImage={smallImages[0]}
          smallTopRightImage={smallImages[1]}
          smallBottomLeftImage={smallImages[2]}
          smallBottomRightImage={smallImages[3]}
        />
        <div className={styles.ProductDescriptionContainer}>
          <div className={styles.ProductDescription}>
            <ProductSummary
              accommodation={accommodationType}
              address={address}
              guests={allowGuestsNumber}
              bedrooms={bedrooms}
              beds={beds}
              baths={baths}
              starGrade={totalAvgRating}
              reviews={totalReviewsCount}
            />
            <FavoriteStay rating={totalAvgRating} reviews={totalReviewsCount} />
            <HostSummary
              hostName={hostName}
              hostingDuration={hostingDuration}
              role={role}
              profilePicUrl={profilePicUrl}
            />
            <ProductHighlight highlights={highlights} />
            <hr className={styles.separator} />
            <ProductDescription
              descriptionPlace={place}
              descriptionSpace={space}
              guestAccess={guestAccess}
              otherThings={otherThings}
            />{' '}
            <hr className={styles.separator} />
            <Amenities amenities={amenities} onClick={handleShowAmenities} />
          </div>
          <div className={styles.ReservationCard}>
            <ReservationCard
              checkInDate={checkInDate}
              checkOutDate={checkOutDate}
              setCheckInDate={setCheckInDate}
              setCheckOutDate={setCheckOutDate}
              pricePerNight={pricePerNight}
              cleaningFee={cleaningFee}
              airbnbServiceFee={airbnbServiceFee}
              longStayDiscount={longStayDiscount}
              nightsCountForDiscount={nightsCountForDiscount}
              guestCounts={guestCounts}
              setGuestCounts={setGuestCounts}
              allowGuestsNumber={allowGuestsNumber}
              minStayNights={minStayNights}
              isBookingOpen={isBookingOpen}
              toggleShortcutsPopup={toggleShortcutsPopup}
              toggleGuestCountPopup={toggleGuestCountPopup}
              setShowGuests={setShowGuests}
              showGuests={showGuests}
              showCalendar={showCalendar}
              setShowCalendar={setShowCalendar}
            />
          </div>
          {isShortcutsPopupVisible && (
            <ShortcutsPopUp
              isVisible={isShortcutsPopupVisible}
              onClose={toggleShortcutsPopup}
              showCalendar={showCalendar}
              setShowCalendar={setShowCalendar}
            />
          )}
          {isGuestCountPopupVisible && (
            <GuestCountPopUp
              isVisible={isGuestCountPopupVisible}
              onClose={toggleGuestCountPopup}
              showGuests={showGuests}
              setShowGuests={setShowGuests}
            />
          )}
        </div>
        <hr className={styles.separator} />
        <ReviewSummary
          totalAvgRating={totalAvgRating}
          totalReviewsCount={totalReviewsCount}
          ratings={ratings}
        />
        <div className={styles.reviews}>
          {reviewsList.map((review) => (
            <Reviews
              key={review.id} 
              name={review.name}
              picture={review.picture}
              rating={review.rating}
              reviewText={review.reviewText}
              date={review.date}
            />
          ))}
        </div>
        <MapView
          mapViewSampleImg={mapViewSampleImg}
          address={address}
          addressDescription={locationDescription}
        />
        <MeetYourHostSection
          name={hostName}
          image={profilePicUrl}
          role={role}
          verified={verified}
          reviews={totalReviewsCount}
          rating={totalAvgRating}
          yearsHosting={hostingDuration}
          profileText={profileText}
          responseRate={responseRate}
          responseTime={responseTime}
        />
      </div>
    </div>
  )
}

export default ProductPage
