import { useParams } from "react-router-dom";
import ReservationCard from "../components/ReservationCard/ReservationCard";
import HostSummary from "../components/HostSummary/HostSummary";
import hostImage from "../assets/images/host-raus.webp";

const ProductPage = () => {
  const { productId } = useParams(); // Object Destructuring

  return (
    <div>
      {`Dummy Product Page ${productId}`}
      <ReservationCard />
      <HostSummary 
          hostName="Raus"
          hostingDuration={1}
          role="Superhost"
          profilePicUrl={hostImage}
      />
      <ProductGallery
        bigImage={
          "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzNDc1NzYxMjc3MDc0NzgxMg%3D%3D/original/5ad7780d-76b5-428f-9219-432243a83a03.jpeg"
        }
        smallTopLeftImage={
          "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzNDc1NzYxMjc3MDc0NzgxMg%3D%3D/original/253a0690-2a1e-4c34-ae7f-968b869be4b5.jpeg"
        }
        smallTopRightImage={
          "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzNDc1NzYxMjc3MDc0NzgxMg%3D%3D/original/78ed3027-a197-4043-9b7e-8fc79a5425fc.jpeg"
        }
        smallBottomLeftImage={
          "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzNDc1NzYxMjc3MDc0NzgxMg%3D%3D/original/182abee3-f7f8-4652-8c2a-f845e990d9c5.jpeg"
        }
        smallBottomRightImage={
          "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzNDc1NzYxMjc3MDc0NzgxMg%3D%3D/original/2ca9c23e-85db-48f8-bd21-0718c286dcdf.jpeg"
        }
      />
    </div>
  );
};

export default ProductPage;
