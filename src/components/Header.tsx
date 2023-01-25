import { Link } from "react-router-dom";
export const Hearder = () => {
  return (
    <div className="py-5 shadow-md drop-shadow-xl ">
      <Link to={"/"}>
        <h1
          style={{ fontFamily: "Montserrat Alternates" }}
          className="font-black text-3xl tracking-wider"
        >
          YSHOP
        </h1>
      </Link>
    </div>
  );
};
