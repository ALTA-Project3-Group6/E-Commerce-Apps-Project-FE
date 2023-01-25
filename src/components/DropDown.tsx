import { Link, useNavigate } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";
import { FC, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  editDetail?: number;
}

export const DropDown: FC<ButtonProps> = ({ editDetail }) => {
  const navigate = useNavigate();

  const onClickDetail = (index: number | any) => {
    navigate(`/edit-product/${index}`);
  };
  return (
    <div className="dropdown dropdown-end ">
      <label tabIndex={0} className="cursor-pointer">
        <BsThreeDots className="w-7 h-7 shadow-2xl" />
      </label>

      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <a
            onClick={() => {
              onClickDetail(editDetail);
            }}
          >
            Edit Product
          </a>
        </li>
        <li>
          <a>Delete Product</a>
        </li>
      </ul>
    </div>
  );
};
