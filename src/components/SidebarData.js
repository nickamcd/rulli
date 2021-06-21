import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"

export const SidebarData = [
  {
    title: "About",
    path: "/about",
    icon: <IoIcons.IoIosPaper />,
    className: "nav-text"
  },
  {
    title: "Products",
    path: "/products",
    icon: <FaIcons.FaShoppingBag />,
    className: "nav-text"
  },
  {
    title: "Shop",
    path: "/shop",
    icon: <FaIcons.FaShoppingCart />,
    className: "nav-text"
  },
  {
    title: "Locations",
    path: "/locations",
    icon: <FaIcons.FaSearchLocation />,
    className: "nav-text"
  },
  {
    title: "Gallery",
    path: "/gallery",
    icon: <IoIcons.IoIosPhotos />,
    className: "nav-text"
  },
  {
    title: "Blog",
    path: "/blog",
    icon: <AiIcons.AiFillHome />,
    className: "nav-text"
  },
  {
    title: "Careers",
    path: "/careers",
    icon: <IoIcons.IoIosClipboard />,
    className: "nav-text"
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <AiIcons.AiOutlinePaperClip />,
    className: "nav-text"
  },
]