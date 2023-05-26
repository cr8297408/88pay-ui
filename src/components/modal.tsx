import React from 'react'
import styled from 'styled-components'

const StyleModal = styled.div`
  .modal {
    background: #fff;
    color: #000;
    position: absolute;
    top: 35%;
    left: 35%;
    height: 30%;
    width: 30%;
    transition: all 0.5s;
    box-shadow: 0 0 40px rgba(248, 248, 255, 0.4);
    padding: 0.5rem;
  }
  .modal-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    position: relative;
    padding: 0;
    height: 100%;
    margin: 0;
    overflow: auto;
  }
  li {
    font-size: 1.5rem;
    color: rgba(0, 0, 0, 0.7);
    position: relative;
    width: 100%;
    padding: 0.5rem
  }
  .close-button {
    position: absolute;
    left: 90%;
    top: 0;
    width: 10%;
    cursor: pointer;
  }
  ul {
    list-style: none;
  }
`;

export default function Modal({response, onclick}: {response: {
  token: string,
  user: {
    email: string,
    password: string,
  }
}, onclick?: any}) {
  return (
    <StyleModal className='modal'>
        <div className="modal">
          <ul className='modal-list'>
            <li>
              Token: {response.token}
            </li>
            <li>
              Email: {response.user.email}
            </li>
            <li>
              Password: {response.user.password}
            </li>
          </ul>
          <button className='close-button' onClick={onclick}>X</button>
        </div>
    </StyleModal>
  )
}
