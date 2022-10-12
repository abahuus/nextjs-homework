import Link from "next/link";
import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { setLogin, setLogout } from "../redux/authSlice";
import { useRouter } from 'next/router';

const Header = () => {
  const [cookies, setCookies, removeCookie] = useCookies(["accessToken", "userId", "email"]);
  const dispatch = useDispatch();
  const isLogIn = cookies.accessToken;
  const router = useRouter(); 

  useEffect(() => {
    if (cookies.accessToken) {
      dispatch(setLogin(cookies.accessToken));
    }
  }, []);

  const handleLogout = () => {
    console.log("proses logout");
    const text = "Bro !! are you sure want to logout?";
    if (window.confirm(text) === true) {
      removeCookie(["accessToken"]);
      removeCookie(["userId"]);
      removeCookie(["email"]);   
      dispatch(setLogout());
      router.push("/login");
    }    
  };

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link href="/">
            <a className="nav-link">Home</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/blogs">
            <a className="nav-link">Blogs</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/users">
            <a className="nav-link">Users</a>
          </Link>
        </li>
        {
        !isLogIn? 
          <li className="nav-item">
          <Link href="/login">
            <a className="nav-link">Login</a>
          </Link>
          </li>:
          <li className="nav-item"
            style={{ cursor: "pointer" }}
            onClick={handleLogout}>
            <a className="nav-link">Logout</a>
          </li>
        }          
      </ul>
    </nav>
  );
};

export default Header;
