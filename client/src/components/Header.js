import React from 'react';
import { useHistory } from "react-router-dom"
import styled from 'styled-components';
import { FaChevronDown } from 'react-icons/fa';

export default function Header() {
  let history = useHistory()
  function logout() {
    sessionStorage.clear()
    history.push("/")
  }
  return (
    <Main>
      <Nav>
        <Left>
          <h3>Issue Tracker</h3>
        </Left>
        <Right>
          {/* <SearchBar>
            <FaSearch style={{ paddingRight: '.25rem' }} />
            <input type="search" name="search" id="search" placeholder="Search..." />
          </SearchBar>
          <li>Notifications</li> */}
          <div className="dropdown">
            <button className="dropbtn">Users
            <FaChevronDown style={{ paddingTop: '.35rem' }} />
            </button>
            <div className="dropdown-content">
              <button onClick={() => logout()}>Log Out</button>
            </div>
          </div>
        </Right>
      </Nav>
    </Main>
  );
}

const Main = styled.div`
grid-area: header;
height: 65px;
background: #128DEB;
`;

const Nav = styled.div`
display: flex;
justify-content: space-between;
padding-top: 1rem;
`;

const Left = styled.div`
display: flex;
align-items: center;

h3{
  padding: 0 2rem;
  color: white;
  font-size: 2rem;
  @media (max-width: 800px) {
    padding-top: .5rem;
    font-size: 1rem;
  }
}

`;

const Right = styled.ul`
display: flex;
align-items: center;
margin-right: 6rem;

li {
  padding: 0 1rem;
  color: white;
}
.dropdown{
 
}
.dropbtn {
  background: #128DEB;
  color: white;
}
.dropdown:hover .dropdown-content{
  display: block;
}
.dropdown-content {
  background: #A0D1F7;
  display: none;
  position: absolute;
  min-width: 120px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}
.dropdown-content button {
  background: #A0D1F7;
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}
`;

// const SearchBar = styled.div`
// margin-left: 2rem;
// display: inline-flex;
// background: #128DEB;
// overflow: hidden;
// color: white;
// input {
//   border-style:hidden;
//   background: #128DEB;
//   width: 15rem;
//   color: white;
// }
// input: focus {
//   outline: none;
// }
// `;
