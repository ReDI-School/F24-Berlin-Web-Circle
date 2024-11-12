import psycopg
import json
from datetime import datetime

conn = psycopg.connect(
    dbname="airbnb",
    user="sam_k",
    password="postgres",
    host="localhost",
    port="5432"
)

cursor = conn.cursor()
conn.rollback()

# cursor.execute("SELECT last_value FROM property_id_seq;")
# print("***sequence_value before reset*****=> ", cursor.fetchone())

cursor.execute("SELECT setval(pg_get_serial_sequence('property', 'id'), 3 , false);")
conn.commit()

with open('../src/data/places.json', 'r') as file:
    data = json.load(file)
    
with open('../src/data/bookings.json', 'r') as file:
    booking_data = json.load(file)

def convert_booking_dates(booking_data):
    check_in_date = datetime.strptime(booking_data["checkInDate"], "%m/%d/%Y").date()
    check_out_date = datetime.strptime(booking_data["checkOutDate"], "%m/%d/%Y").date()
    return check_in_date, check_out_date

for prop_index, property_data in enumerate(data[2:], start=1):
    print("******************looop ->",prop_index)
    check_in_date, check_out_date = convert_booking_dates(booking_data[prop_index - 1])  

    extracted_booking_data = {
        "cleaning_fee": booking_data[prop_index - 1]["bookingData"]["cleaningFee"],
        "airbnb_service_fee": booking_data[prop_index - 1]["bookingData"]["airbnbServiceFee"],
        "long_stay_discount": booking_data[prop_index - 1]["bookingData"]["longStayDiscount"],
        "nights_count_for_long_stay_discount": booking_data[prop_index - 1]["bookingData"]["nightsCountForLongStayDiscount"],
        "min_stay_nights": booking_data[prop_index - 1]["bookingData"]["minStayNights"],
        "is_booking_open": booking_data[prop_index - 1]["bookingData"]["isBookingOpen"]
    }
    print("==========================extracted data==========================")
    print(extracted_booking_data)

    property_data_extracted = {
        "title": property_data['title'],
        "host_name": property_data['hostSummary']['hostName'],
        "host_role": property_data['hostSummary']['role'],
        "hosting_duration": f"{property_data['hostSummary']['hostingDuration']} years",
        "price": float(property_data['price'].strip('$').split(' ')[0]),
        "accommodation": property_data['productSummary']['accommodation'],
        "star_grade": property_data['productSummary']['starGrade'],
        "reviews_count": property_data['productSummary']['reviews'],
        "guests": property_data['productSummary']['guests']['value'],
        "bathrooms": property_data['productSummary']['baths']['value'],
        "beds": property_data['productSummary']['beds']['value'],
        "address": property_data['productSummary']['address'],
        "longitude": property_data['mapView']['lon'],
        "latitude": property_data['mapView']['lat'],
        "location_name": property_data['mapView']['address'],
        "location_description": property_data['mapView']['addressDescription'],
        "booking_data": json.dumps(extracted_booking_data)
    }
    
    print("===========================property===========================")
    
    property_insert_query = """
    INSERT INTO property (title, host_name, host_role, hosting_duration, price, accommodation, 
                            star_grade, reviews_count, guests, bathrooms, beds, address, longitude, 
                            latitude, location_name, location_description, booking_data)
    VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
    RETURNING id
    """
    property_values = tuple(property_data_extracted.values())
    print(property_values)
    cursor.execute(property_insert_query, property_values)
    
    print("===========================property data inserted===========================")

    property_id = cursor.fetchone()[0]  # `fetchone()` returns a tuple (id,)
    print(f"New Property ID: {property_id}")
    ratings_data = {
        "property_id": property_id,
        "cleanliness_avg_rating": property_data['reviewSummary']['ratings']['cleanlinessAvgRating'],
        "accuracy_avg_rating": property_data['reviewSummary']['ratings']['accuracyAvgRating'],
        "check_in_avg_rating": property_data['reviewSummary']['ratings']['checkInAvgRating'],
        "communication_avg_rating": property_data['reviewSummary']['ratings']['communicationAvgRating'],
        "location_avg_rating": property_data['reviewSummary']['ratings']['locationAvgRating'],
        "value_avg_rating": property_data['reviewSummary']['ratings']['valueAvgRating'],
        "five_star": property_data['reviewSummary']['ratings']['starTotals']['fiveStar'],
        "four_star": property_data['reviewSummary']['ratings']['starTotals']['fourStar'],
        "three_star": property_data['reviewSummary']['ratings']['starTotals']['threeStar'],
        "two_star": property_data['reviewSummary']['ratings']['starTotals']['twoStar'],
        "one_star": property_data['reviewSummary']['ratings']['starTotals']['oneStar']
    }
    print("=============================ratings===========================")
    print(ratings_data)
    
    
    ratings_insert_query = """
    INSERT INTO ratings (property_id, cleanliness_avg_rating, accuracy_avg_rating, check_in_avg_rating, 
                         communication_avg_rating, location_avg_rating, value_avg_rating, five_star, 
                         four_star, three_star, two_star, one_star)
    VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
    RETURNING id
    """
    ratings_values = tuple(ratings_data.values())
    cursor.execute(ratings_insert_query, ratings_values)

    images_data = [
        {"property_id": property_id, "image_url": property_data['hostSummary']['profilePicUrl'], "is_profile_image": True}
    ] + [
        {"property_id": property_id, "image_url": image_url, "is_profile_image": False}
        for image_url in property_data['images']
    ]
    print("**************************ratings data inserted**************************")
    
    print("=====================================images=================================")
    print(images_data)
    
    for image in images_data:
        image_insert_query = """
        INSERT INTO images (property_id, image_url, is_profile_image)
        VALUES (%s, %s, %s)
        RETURNING id
        """
        cursor.execute(image_insert_query, tuple(image.values()))
    
    print("****************************images data inserted********************************")
    
    reviews_data = [
        {
            "property_id": property_id, 
            "reviewer_name": review['name'],
            "rating": review['rating'],
            "review_text": review['reviewText'],
            "review_date": review['date'],
            "reviewer_picture_url": review['picture']
        } for review in property_data['reviews']
    ]

    print("==================================reviews===========================")
    print(reviews_data)
    
    for review in reviews_data:
        review_insert_query = """
        INSERT INTO reviews (property_id, reviewer_name, rating, review_text, review_date, reviewer_picture_url)
        VALUES (%s, %s, %s, %s, %s, %s)
        RETURNING id
        """
        cursor.execute(review_insert_query, tuple(review.values()))
    print("**************************reviews data inserted**************************")

    amenities_data = [
        {
            "property_id": property_id,
            "amenity_name": amenity['type'],
            "amenity_description": amenity['text']
        } for amenity in property_data['amenities']
    ]
    print("================================amenities===========================")
    print(amenities_data)
    
    for amenity in amenities_data:
        amenity_insert_query = """
        INSERT INTO amenities (property_id, amenity_name, amenity_description)
        VALUES (%s, %s, %s)
        RETURNING id
        """
        cursor.execute(amenity_insert_query, tuple(amenity.values()))

    print("**************************amenities data inserted**************************")
    highlights_data = [
        {
            "property_id": property_id,
            "highlight_type": highlight['type'],
            "highlight_text": highlight['text'],
            "highlight_subtext": highlight['subText']
        } for highlight in property_data['highlights']
    ]
    
    print("===============================highlights==========================")
    print(highlights_data)
    
    for highlight in highlights_data:
        highlight_insert_query = """
        INSERT INTO highlights (property_id, highlight_type, highlight_text, highlight_subtext)
        VALUES (%s, %s, %s, %s)
        """
        cursor.execute(highlight_insert_query, tuple(highlight.values()))
    
    print("*************************highlights data inserted**************************")
    
    destinations_data = [
        {
            "property_id": property_id,
            "category": "country",
            "parent_id": None
        }
    ]
    print("===================================destinations==========================")
    print(destinations_data)
    location_insert_query = """
    INSERT INTO destinations (property_id, category, parent_id)
    VALUES (%s, %s, %s)
    RETURNING id
    """
    location_values = (destinations_data[0])
    cursor.execute(location_insert_query, tuple(location_values.values()))
    print("*************************destinations data inserted**************************")

    booking_info = {
        "property_id": property_id,
        "check_in_date": check_in_date,
        "check_out_date": check_out_date,
        "total_price": booking_data[prop_index - 1]["totalPrice"],
        "adults_count": booking_data[prop_index - 1]["guestCounts"]["adults"],
        "children_count": booking_data[prop_index - 1]["guestCounts"]["children"],
        "infants_count": booking_data[prop_index - 1]["guestCounts"]["infants"],
        "pets_count": booking_data[prop_index - 1]["guestCounts"]["pets"]
    }
    
    print("===================================bookigng==========================")
    print(booking_info)
    booking_insert_query = """
    INSERT INTO bookings (property_id, check_in_date, check_out_date, total_price, adults_count, 
                          children_count, infants_count, pets_count)
    VALUES (%s, %s, %s, %s, %s, %s, %s, %s)
    """
    check_in_date, check_out_date = convert_booking_dates(booking_data[prop_index - 1])
    booking_values = (booking_info)
    cursor.execute(booking_insert_query, tuple(booking_values.values()))

    print("===================================bookigng data inserted==========================")
# Commit changes and close the connection
# conn.commit()
# cursor.close()
# conn.close()