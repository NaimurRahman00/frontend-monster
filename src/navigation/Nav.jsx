import { FiHeart } from "react-icons/fi";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { TiUserAdd } from "react-icons/ti";

const Nav = () => {
  return (
    <div className="flex justify-between py-5">
      <div>
        <input
          type="text"
          name="text"
          className="bg-gray-100 px-5 py-3"
          placeholder="Search shoes"
        />
      </div>

      <div className="flex justify-center items-center gap-5 text-2xl">
        <a href="">
          <FiHeart />
        </a>
        <a href="">
          <RiShoppingCart2Fill />
        </a>
        <a href="">
          <TiUserAdd />
        </a>
      </div>
    </div>
  );
};

export default Nav;
