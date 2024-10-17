import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const PageNotFound = () => {
  return (
    <MainLayout>
      <div className="not-found">
        <h1>Ooops... Error 404</h1>
        <h3>Sorry, but the page you are looking for doesn't exist.</h3>
      </div>
    </MainLayout>
  );
};

export default PageNotFound;
