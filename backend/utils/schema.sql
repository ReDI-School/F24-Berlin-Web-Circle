--
-- PostgreSQL database dump
--

-- Dumped from database version 13.16 (Debian 13.16-1.pgdg120+1)
-- Dumped by pg_dump version 13.16 (Debian 13.16-1.pgdg120+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: amenities; Type: TABLE; Schema: public; Owner: sam_k
--

CREATE TABLE public.amenities (
    id integer NOT NULL,
    property_id integer,
    amenity_name character varying(255),
    amenity_description character varying(255)
);


ALTER TABLE public.amenities OWNER TO sam_k;

--
-- Name: amenities_id_seq; Type: SEQUENCE; Schema: public; Owner: sam_k
--

CREATE SEQUENCE public.amenities_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.amenities_id_seq OWNER TO sam_k;

--
-- Name: amenities_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sam_k
--

ALTER SEQUENCE public.amenities_id_seq OWNED BY public.amenities.id;


--
-- Name: bookings; Type: TABLE; Schema: public; Owner: sam_k
--

CREATE TABLE public.bookings (
    id integer NOT NULL,
    property_id integer,
    check_in_date date,
    check_out_date date,
    total_price numeric(10,2),
    adults_count integer DEFAULT 0,
    children_count integer DEFAULT 0,
    infants_count integer DEFAULT 0,
    pets_count integer DEFAULT 0
);


ALTER TABLE public.bookings OWNER TO sam_k;

--
-- Name: bookings_id_seq; Type: SEQUENCE; Schema: public; Owner: sam_k
--

CREATE SEQUENCE public.bookings_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.bookings_id_seq OWNER TO sam_k;

--
-- Name: bookings_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sam_k
--

ALTER SEQUENCE public.bookings_id_seq OWNED BY public.bookings.id;


--
-- Name: destinations; Type: TABLE; Schema: public; Owner: sam_k
--

CREATE TABLE public.destinations (
    id integer NOT NULL,
    category character varying(50) NOT NULL,
    parent_id integer,
    property_id integer
);


ALTER TABLE public.destinations OWNER TO sam_k;

--
-- Name: highlights; Type: TABLE; Schema: public; Owner: sam_k
--

CREATE TABLE public.highlights (
    id integer NOT NULL,
    property_id integer,
    highlight_type character varying(50),
    highlight_text character varying(255),
    highlight_subtext character varying(255)
);


ALTER TABLE public.highlights OWNER TO sam_k;

--
-- Name: highlights_id_seq; Type: SEQUENCE; Schema: public; Owner: sam_k
--

CREATE SEQUENCE public.highlights_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.highlights_id_seq OWNER TO sam_k;

--
-- Name: highlights_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sam_k
--

ALTER SEQUENCE public.highlights_id_seq OWNED BY public.highlights.id;


--
-- Name: images; Type: TABLE; Schema: public; Owner: sam_k
--

CREATE TABLE public.images (
    id integer NOT NULL,
    property_id integer,
    image_url character varying(255),
    is_profile_image boolean DEFAULT false
);


ALTER TABLE public.images OWNER TO sam_k;

--
-- Name: images_id_seq; Type: SEQUENCE; Schema: public; Owner: sam_k
--

CREATE SEQUENCE public.images_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.images_id_seq OWNER TO sam_k;

--
-- Name: images_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sam_k
--

ALTER SEQUENCE public.images_id_seq OWNED BY public.images.id;


--
-- Name: locations_id_seq; Type: SEQUENCE; Schema: public; Owner: sam_k
--

CREATE SEQUENCE public.locations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.locations_id_seq OWNER TO sam_k;

--
-- Name: locations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sam_k
--

ALTER SEQUENCE public.locations_id_seq OWNED BY public.destinations.id;


--
-- Name: property; Type: TABLE; Schema: public; Owner: sam_k
--

CREATE TABLE public.property (
    id integer NOT NULL,
    title character varying(255),
    price numeric(10,2),
    accommodation character varying(50),
    star_grade numeric(3,2),
    reviews_count integer,
    guests integer,
    bathrooms integer,
    beds integer,
    address character varying(255),
    longitude numeric(9,6),
    latitude numeric(9,6),
    location_description text,
    booking_data jsonb,
    pets_allowed integer,
    host_name character varying(255),
    host_role character varying(50),
    hosting_duration character varying(50),
    location_name character varying(255)
);


ALTER TABLE public.property OWNER TO sam_k;

--
-- Name: property_id_seq; Type: SEQUENCE; Schema: public; Owner: sam_k
--

CREATE SEQUENCE public.property_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.property_id_seq OWNER TO sam_k;

--
-- Name: property_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sam_k
--

ALTER SEQUENCE public.property_id_seq OWNED BY public.property.id;


--
-- Name: ratings; Type: TABLE; Schema: public; Owner: sam_k
--

CREATE TABLE public.ratings (
    id integer NOT NULL,
    property_id integer,
    cleanliness_avg_rating numeric(3,2) NOT NULL,
    accuracy_avg_rating numeric(3,2) NOT NULL,
    check_in_avg_rating numeric(3,2) NOT NULL,
    communication_avg_rating numeric(3,2) NOT NULL,
    location_avg_rating numeric(3,2) NOT NULL,
    value_avg_rating numeric(3,2) NOT NULL,
    five_star integer DEFAULT 0,
    four_star integer DEFAULT 0,
    three_star integer DEFAULT 0,
    two_star integer DEFAULT 0,
    one_star integer DEFAULT 0
);


ALTER TABLE public.ratings OWNER TO sam_k;

--
-- Name: ratings_id_seq; Type: SEQUENCE; Schema: public; Owner: sam_k
--

CREATE SEQUENCE public.ratings_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.ratings_id_seq OWNER TO sam_k;

--
-- Name: ratings_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sam_k
--

ALTER SEQUENCE public.ratings_id_seq OWNED BY public.ratings.id;


--
-- Name: reviews; Type: TABLE; Schema: public; Owner: sam_k
--

CREATE TABLE public.reviews (
    id integer NOT NULL,
    property_id integer,
    reviewer_name character varying(255),
    rating integer,
    review_text text,
    review_date date,
    reviewer_picture_url character varying(255)
);


ALTER TABLE public.reviews OWNER TO sam_k;

--
-- Name: reviews_id_seq; Type: SEQUENCE; Schema: public; Owner: sam_k
--

CREATE SEQUENCE public.reviews_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.reviews_id_seq OWNER TO sam_k;

--
-- Name: reviews_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sam_k
--

ALTER SEQUENCE public.reviews_id_seq OWNED BY public.reviews.id;


--
-- Name: amenities id; Type: DEFAULT; Schema: public; Owner: sam_k
--

ALTER TABLE ONLY public.amenities ALTER COLUMN id SET DEFAULT nextval('public.amenities_id_seq'::regclass);


--
-- Name: bookings id; Type: DEFAULT; Schema: public; Owner: sam_k
--

ALTER TABLE ONLY public.bookings ALTER COLUMN id SET DEFAULT nextval('public.bookings_id_seq'::regclass);


--
-- Name: destinations id; Type: DEFAULT; Schema: public; Owner: sam_k
--

ALTER TABLE ONLY public.destinations ALTER COLUMN id SET DEFAULT nextval('public.locations_id_seq'::regclass);


--
-- Name: highlights id; Type: DEFAULT; Schema: public; Owner: sam_k
--

ALTER TABLE ONLY public.highlights ALTER COLUMN id SET DEFAULT nextval('public.highlights_id_seq'::regclass);


--
-- Name: images id; Type: DEFAULT; Schema: public; Owner: sam_k
--

ALTER TABLE ONLY public.images ALTER COLUMN id SET DEFAULT nextval('public.images_id_seq'::regclass);


--
-- Name: property id; Type: DEFAULT; Schema: public; Owner: sam_k
--

ALTER TABLE ONLY public.property ALTER COLUMN id SET DEFAULT nextval('public.property_id_seq'::regclass);


--
-- Name: ratings id; Type: DEFAULT; Schema: public; Owner: sam_k
--

ALTER TABLE ONLY public.ratings ALTER COLUMN id SET DEFAULT nextval('public.ratings_id_seq'::regclass);


--
-- Name: reviews id; Type: DEFAULT; Schema: public; Owner: sam_k
--

ALTER TABLE ONLY public.reviews ALTER COLUMN id SET DEFAULT nextval('public.reviews_id_seq'::regclass);


--
-- Name: amenities amenities_pkey; Type: CONSTRAINT; Schema: public; Owner: sam_k
--

ALTER TABLE ONLY public.amenities
    ADD CONSTRAINT amenities_pkey PRIMARY KEY (id);


--
-- Name: bookings bookings_pkey; Type: CONSTRAINT; Schema: public; Owner: sam_k
--

ALTER TABLE ONLY public.bookings
    ADD CONSTRAINT bookings_pkey PRIMARY KEY (id);


--
-- Name: highlights highlights_pkey; Type: CONSTRAINT; Schema: public; Owner: sam_k
--

ALTER TABLE ONLY public.highlights
    ADD CONSTRAINT highlights_pkey PRIMARY KEY (id);


--
-- Name: images images_pkey; Type: CONSTRAINT; Schema: public; Owner: sam_k
--

ALTER TABLE ONLY public.images
    ADD CONSTRAINT images_pkey PRIMARY KEY (id);


--
-- Name: destinations locations_pkey; Type: CONSTRAINT; Schema: public; Owner: sam_k
--

ALTER TABLE ONLY public.destinations
    ADD CONSTRAINT locations_pkey PRIMARY KEY (id);


--
-- Name: property property_pkey; Type: CONSTRAINT; Schema: public; Owner: sam_k
--

ALTER TABLE ONLY public.property
    ADD CONSTRAINT property_pkey PRIMARY KEY (id);


--
-- Name: ratings ratings_pkey; Type: CONSTRAINT; Schema: public; Owner: sam_k
--

ALTER TABLE ONLY public.ratings
    ADD CONSTRAINT ratings_pkey PRIMARY KEY (id);


--
-- Name: reviews reviews_pkey; Type: CONSTRAINT; Schema: public; Owner: sam_k
--

ALTER TABLE ONLY public.reviews
    ADD CONSTRAINT reviews_pkey PRIMARY KEY (id);


--
-- Name: amenities amenities_property_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: sam_k
--

ALTER TABLE ONLY public.amenities
    ADD CONSTRAINT amenities_property_id_fkey FOREIGN KEY (property_id) REFERENCES public.property(id) ON DELETE CASCADE;


--
-- Name: bookings bookings_property_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: sam_k
--

ALTER TABLE ONLY public.bookings
    ADD CONSTRAINT bookings_property_id_fkey FOREIGN KEY (property_id) REFERENCES public.property(id) ON DELETE CASCADE;


--
-- Name: highlights highlights_property_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: sam_k
--

ALTER TABLE ONLY public.highlights
    ADD CONSTRAINT highlights_property_id_fkey FOREIGN KEY (property_id) REFERENCES public.property(id) ON DELETE CASCADE;


--
-- Name: images images_property_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: sam_k
--

ALTER TABLE ONLY public.images
    ADD CONSTRAINT images_property_id_fkey FOREIGN KEY (property_id) REFERENCES public.property(id) ON DELETE CASCADE;


--
-- Name: destinations locations_parent_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: sam_k
--

ALTER TABLE ONLY public.destinations
    ADD CONSTRAINT locations_parent_id_fkey FOREIGN KEY (parent_id) REFERENCES public.destinations(id) ON DELETE CASCADE;


--
-- Name: destinations locations_property_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: sam_k
--

ALTER TABLE ONLY public.destinations
    ADD CONSTRAINT locations_property_id_fkey FOREIGN KEY (property_id) REFERENCES public.property(id);


--
-- Name: ratings ratings_property_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: sam_k
--

ALTER TABLE ONLY public.ratings
    ADD CONSTRAINT ratings_property_id_fkey FOREIGN KEY (property_id) REFERENCES public.property(id) ON DELETE CASCADE;


--
-- Name: reviews reviews_property_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: sam_k
--

ALTER TABLE ONLY public.reviews
    ADD CONSTRAINT reviews_property_id_fkey FOREIGN KEY (property_id) REFERENCES public.property(id) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

