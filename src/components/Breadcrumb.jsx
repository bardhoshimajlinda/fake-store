import { Link } from "react-router-dom";

const Breadcrumb = ({ category, productName }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        {category && (
          <li className="breadcrumb-item">
            <Link to={`/products/category/${category}`}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Link>
          </li>
        )}
        {productName && (
          <li className="breadcrumb-item active" aria-current="page">
            {productName}
          </li>
        )}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
