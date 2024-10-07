import { useParams } from "react-router-dom";

import HeaderUserMenu from "../components/HeaderUserMenu/HeaderUserMenu";

const ProductPage = () => {
  const { productId } = useParams(); // Object Destructuring

  return (
    <div>
      {`Dummy Product Page ${productId}`}
     
      <HeaderUserMenu />
     
    </div>
  );
};

export default ProductPage;
