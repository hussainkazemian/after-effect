import { Link, Outlet } from 'react-router-dom';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import taloAnimation from '../assets/lottie/huse.json';
import menuAnimation from '../assets/lottie/menu.json';
import userAnimation from '../assets/lottie/user.json';
import searchAnimation from '../assets/lottie/search.json';
import { useRef, useState } from 'react';

const Layout = () => {
  const [isHomeHovered, setIsHomeHovered] = useState(false);
  const [isExampleHovered, setIsExampleHovered] = useState(false);
  const [isUserHovered, setIsUserHovered] = useState(false);
  const [isSearchHovered, setIsSearchHovered] = useState(false);
  const homeLottieRef = useRef<LottieRefCurrentProps | null>(null);
  const exampleLottieRef = useRef<LottieRefCurrentProps | null>(null);
  const userLottieRef = useRef<LottieRefCurrentProps | null>(null);
  const searchLottieRef = useRef<LottieRefCurrentProps | null>(null);

  const handleHomeHoverStart = () => {
    setIsHomeHovered(true);
    if (homeLottieRef.current) {
      homeLottieRef.current.play();
    }
  };

  const handleHomeHoverEnd = () => {
    setIsHomeHovered(false);
    if (homeLottieRef.current) {
      homeLottieRef.current.goToAndStop(0, true);
    }
  };

  const handleExampleHoverStart = () => {
    setIsExampleHovered(true);
    if (exampleLottieRef.current) {
      exampleLottieRef.current.play();
    }
  };

  const handleExampleHoverEnd = () => {
    setIsExampleHovered(false);
    if (exampleLottieRef.current) {
      exampleLottieRef.current.goToAndStop(0, true);
    }
  };

  const handleUserHoverStart = () => {
    setIsUserHovered(true);
    if (userLottieRef.current) {
      userLottieRef.current.play();
    }
  };

  const handleUserHoverEnd = () => {
    setIsUserHovered(false);
    if (userLottieRef.current) {
      userLottieRef.current.goToAndStop(0, true);
    }
  };

  const handleSearchHoverStart = () => {
    setIsSearchHovered(true);
    if (searchLottieRef.current) {
      searchLottieRef.current.play();
    }
  };

  const handleSearchHoverEnd = () => {
    setIsSearchHovered(false);
    if (searchLottieRef.current) {
      searchLottieRef.current.goToAndStop(0, true);
    }
  };

  return (
    <div className="m-auto h-full w-11/12">
      <nav className="absolute right-0 flex flex-col-reverse items-end justify-end lg:relative lg:block lg:flex-row">
        <ul
          className="
          mr-4
          justify-end
          overflow-hidden
          rounded-lg
          bg-slate-200
          p-0
          shadow-md
          transition-all
          duration-500
          ease-in-out
          flex
          flex-col
          lg:flex-row
          opacity-100
          "
        >
          <li
            className={`flex items-center ${isHomeHovered ? 'bg-slate-100' : ''}`}
            onMouseEnter={handleHomeHoverStart}
            onMouseLeave={handleHomeHoverEnd}
          >
            <Lottie
              lottieRef={homeLottieRef}
              animationData={taloAnimation}
              loop={true}
              autoplay={false}
              style={{ width: 32, height: 32, marginRight: 8 }}
              aria-hidden="true"
            />
            <Link
              className="block p-4 text-center hover:bg-slate-300"
              to="/"
            >
              Home
            </Link>
          </li>
          <li
            className={`flex items-center ${isExampleHovered ? 'bg-slate-100' : ''}`}
            onMouseEnter={handleExampleHoverStart}
            onMouseLeave={handleExampleHoverEnd}
          >
            <Lottie
              lottieRef={exampleLottieRef}
              animationData={menuAnimation}
              loop={true}
              autoplay={false}
              style={{ width: 32, height: 32, marginRight: 8 }}
              aria-hidden="true"
            />
            <Link
              className="block p-4 text-center hover:bg-slate-300"
              to="/example"
            >
              Products
            </Link>
          </li>
          <li
            className={`flex items-center ${isUserHovered ? 'bg-slate-100' : ''}`}
            onMouseEnter={handleUserHoverStart}
            onMouseLeave={handleUserHoverEnd}
          >
            <Lottie
              lottieRef={userLottieRef}
              animationData={userAnimation}
              loop={true}
              autoplay={false}
              style={{ width: 32, height: 32, marginRight: 8 }}
              aria-hidden="true"
            />
            <Link
              className="block p-4 text-center hover:bg-slate-300"
              to="/user"
            >
              Profile
            </Link>
          </li>
          <li
            className={`flex items-center ${isSearchHovered ? 'bg-slate-100' : ''}`}
            onMouseEnter={handleSearchHoverStart}
            onMouseLeave={handleSearchHoverEnd}
          >
            <Lottie
              lottieRef={searchLottieRef}
              animationData={searchAnimation}
              loop={true}
              autoplay={false}
              style={{ width: 32, height: 32, marginRight: 8 }}
              aria-hidden="true"
            />
            <Link
              className="block p-4 text-center hover:bg-slate-300"
              to="/search"
            >
              Search
            </Link>
          </li>
        </ul>
      </nav>
      <main className="">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;