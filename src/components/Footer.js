import React from "react";
import { Link } from "react-router-dom";
import {SocialIcon} from 'react-social-icons';
import '../css/footer.css'
function Footer(props) {
  return (
    <div className="footer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-4 offset-1 col-sm-2">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/news">News</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div  id ="address"className="col-7 col-sm-5">
            <h5>Our Address</h5>
            <address>
              121, Clear Water Bay Road
              <br />
              Clear Water Bay, Kowloon
              <br />
              Guna
              <br />
              <i className="fa fa-phone fa-lg" />: +852 1234 5678
              <br />
              <i className="fa fa-fax fa-lg" />: +852 8765 4321
              <br />
              <i className="fa fa-envelope fa-lg" />:{" "}
              <a href="mailto:confusion@food.net">confusion@food.net</a>
            </address>
          </div>
          <div className="col-12 col-sm-4 align-self-center">
            <div className="text-center">
            <h5>Connect With Us</h5>
            <SocialIcon url="https://www.linkedin.com/in/amarjeet-singh-14776a121/" /> &nbsp;
            <SocialIcon network="twitter" bgColor="#ff5a01" /> &nbsp;
            <SocialIcon url="https://www.facebook.com/amarjeet.singh.9887" /> &nbsp;
            <SocialIcon url="https://www.instagram.com/amarjeet_09/?hl=en" /> &nbsp;
            <SocialIcon url="http://youtube.com/in/" /> &nbsp;



            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-auto">
            <p>© Copyright 2019 Resturant</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
