import React, { useState, useEffect } from 'react'
import './Nav.css'
import { useNavigate } from 'react-router-dom';

function Nav() {
  const [show, handleShow] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {  //useEffect 이용해 eventLitener 등록
    window.addEventListener("scroll", () => { //스크롤 시 발생하는 eventListener 등록
      if(window.scrollY > 50) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => { //컴포넌트가 사라지면 등록한 eventListener 제거
      window.removeEventListener("scroll", () => {}); 
    }
  }, []);     

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`);
  };

  return (
    <nav className={`nav ${show && "nav_black"}`}>
        <img
            alt='Neflix logo'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png'
            className='nav_logo'
            onClick={() => window.location.reload()}
        />

        <input value={searchValue} onChange={handleChange} className='nav__input' type='text' placeholder='영화를 검색해주세요' />

        <img 
            alt='User logged'
            src='https://occ-0-4796-988.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41'
            className='nav_avatar'
        />
    </nav>
  );
}

export default Nav;