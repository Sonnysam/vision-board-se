import React from "react";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import * as icons from "react-icons/bs";
import styled from "styled-components";
import CallToAction from "../callToActionBtn/callToAction";
const FooterStyle = styled.div`
  width: 100%;
  background-color: #032151;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  padding: 5em 0 5em 0;
  margin: 0%;
  box-sizing: border-box;
  position: relative;
  .searh-input-container {
    background-color: #1cbeec;
    padding: 1.5em;
    border-radius: 12px;
    position: absolute;
    top: 0%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 95%;
    max-width: 800px;
    display: flex;
    gap: 1em;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    .p-search-bar {
      display: flex;
      flex-direction: column;
      gap: 0.1em;
      flex: 1;
      width: 100%;
      min-width: 200px;
      h2 {
        font-size: 1rem;
        color: white;
        font-weight: 700;
        @media (min-width: 800px) {
          font-size: 1.3rem;
        }
      }
      h6 {
        font-weight: 300;
        color: white;
        font-size: 0.8rem;
        @media (min-width: 800px) {
          font-size: 1.2rem;
        }
      }
    }
    .input-search {
      height: 100%;
      flex: 1;
      width: 100%;
      background-color: white;
      font-size: 0.8rem;
      display: flex;
      justify-content: space-between;
      padding: 0.6em 0.3em;
      min-width: 200px;
      border-radius: 12px;
      outline: 10px solid #2cb6dd;
      @media (min-width: 800px) {
        font-size: 1.2rem;
      }
      input[type="text"] {
        background: transparent;
        outline: none;
        width: 80%;
      }
    }
  }
  .footer-body {
    width: 100%;
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 2em;
    max-width: 1500px;
    padding: 1em;
    > div {
      flex: 1;
      flex-shrink: 0;
      min-width: 200px;
      width: 100%;
      gap: 1.5em;
      display: flex;
      flex-direction: column;
      .label {
        color: white;
        display: flex;
        align-items: center;
        gap: 1em;
        font-size: 1.6rem;
        font-weight: 800;
      }
    }
    .media-handle {
      display: flex;
      flex-direction: column;
      gap: 1em;
      max-width: 50px;
      .media-links {
        display: flex;
        justify-content: space-around;
        font-size: 1.7rem;
        a {
          color: white;
          text-decoration: none;
        }
      }
    }
    .footer-about,
    .footer-support,
    .footer-contact {
      ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        font-size: 1.2rem;

        li {
          color: white;
          a {
            color: white;
            text-decoration: none;
          }
        }
      }
    }
  }
  .copyright {
    font-size: 1.2rem;
    color: white;
    padding-top: 1em;
    border-top: 1px solid rgba(255, 255, 255, 0.453);
    text-align: center;
  }
`;
function Footer() {
  const navigate = useNavigate();
  return (
    <FooterStyle>
      <div className="searh-input-container">
        <div className="p-search-bar">
          <h2>Got any questions for us?</h2>
          <h6>Kindly leave us with your mail with us.</h6>
        </div>
        <div className="input-search">
          <input type="text" placeholder="Type your email here" />
          <CallToAction text="subscribe" />
        </div>
      </div>
      <div className="footer-body">
        <div className="media-handle">
          <div className="label">
            <FaHome /> Rent now
          </div>
          <div className="media-links">
            <a href="">
              <icons.BsFacebook />
            </a>
            <a href="">
              <icons.BsInstagram />
            </a>
            <a href="">
              <icons.BsTwitter />
            </a>
          </div>
        </div>
        <div className="footer-about">
          <div className="label">About</div>
          <ul>
            <li>
              <a href="">Company</a>
            </li>
            <li>
              <a href="">Team</a>
            </li>
            <li>
              <a href="">Career</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
          </ul>
        </div>
        <div className="footer-support">
          <div className="label">Support</div>
          <ul>
            <li>
              <a href="">Help Center</a>
            </li>
            <li>
              <a href="">Loans</a>
            </li>
            <li>
              <span
                onClick={() => navigate("/mortgagecal")}
                style={{ cursor: "pointer" }}
              >
                Calculate Mortgage
              </span>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="footer-contact">
          <div className="label">Contact</div>
          <ul>
            <li>East Legon Avenue</li>
            <li>
              <a href="www.rentnow.com">www.rentnow.com</a>
            </li>
            <li>+233 555 601 882</li>
          </ul>
        </div>
      </div>
      <h6 className="copyright">
        © {new Date().getFullYear()} . Rentnow . All rights reserved
      </h6>
      <p className="text-white text-xs mt-5">
        Developed with <span className="text-red-500">❤</span>{" "}by Team CodeX
      </p>
    </FooterStyle>
  );
}

export default Footer;
