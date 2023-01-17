import React from "react";
import "./Landing.scss";
import carBg from "../assets/Img/lambo.png";
import arrow from "../assets/Img/Vector.png";
import exterior from "../assets/Img/exterior.png";
import interior from "../assets/Img/inrerior.png";
import perf from "../assets/Img/perf.png";
import safe from "../assets/Img/safe.png";
import spec from "../assets/Img/spec.png";
import twitter from "../assets/Img/twitter.png";
import fb from "../assets/Img/fb.png";
import wifi from "../assets/Img/wifi.png";
import yt from "../assets/Img/yt.png";
import chat from "../assets/Img/chat.png";
import we from "../assets/Img/we.png";

const Landing = () => {
  return (
    <>
      <div className="hero">
        <a id="home" href="home"></a>
        <div className="car_bg">
          <img src={carBg} alt="background" />
        </div>

        <nav className="navigation">
          <div className="top">
            <div>
              <div></div>
              <p>IMPACT</p>
            </div>
            <button>LEARN MORE</button>
          </div>

          <div className="bottom">
            <div className="links">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#spec">Specs</a>
              <a href="#discover">Discover</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="name">NAKED GREEN IMPACT X350</div>
            <div className="details">
              <span>
                <p>3.1s</p>
                <p>0-60 mph</p>
              </span>
              <span>
                <p>690CV</p>
                <p>Power</p>
              </span>
              <span>
                <p>380mi</p>
                <p>Range</p>
              </span>
            </div>
          </div>
        </nav>

        <div
          className="scroll"
          onClick={() => window.scrollTo({ top: 700, behavior: "smooth" })}
        >
          <p>scroll down</p>
          <img src={arrow} alt="scroll" />
        </div>
      </div>

      <div className="about">
        <a id="about" href="#home"></a>
        <p className="heading">
          INTRODUCING THE NEXT GENERATION OF SPORTS LUXURY.
        </p>

        <div className="item-details">
          <div className="item_image">
            <img src={exterior} alt="exterior" />
          </div>
          <div className="item_text">
            <div>
              <div></div>
              <p className="t_one">EXTERIOR</p>
            </div>
            <p className="t_two">Agile and Sleek</p>
            <p className="t_three">
              Lorem ipsum dolor sit amet consectetur. Magna ac imperdiet ligula
              accumsan faucibus nibh odio. Cras et at a nunc nunc a facilisis.
              Libero natoque sit nisl elit egestas ullamcorper ut sit.
            </p>
          </div>
        </div>

        <div className="item-details d-sec">
          <div className="item_image sec">
            <img src={interior} alt="exterior" />
          </div>
          <div className="item_text">
            <div>
              <div></div>
              <p className="t_one">INTERIOR</p>
            </div>
            <p className="t_two t_sec">New and Smart Tech</p>
            <p className="t_three">
              Lorem ipsum dolor sit amet consectetur. Magna ac imperdiet ligula
              accumsan faucibus nibh odio. Cras et at a nunc nunc a facilisis.
              Libero natoque sit nisl elit egestas ullamcorper ut sit.
            </p>
          </div>
        </div>

        <div className="item-details d-sec">
          <div className="item_image sec">
            <img src={perf} alt="exterior" />
          </div>
          <div className="item_text">
            <div>
              <div></div>
              <p className="t_one">PERFORMANCE</p>
            </div>
            <p className="t_two t_thi">Feel Good with V16</p>
            <p className="t_three">
              Lorem ipsum dolor sit amet consectetur. Magna ac imperdiet ligula
              accumsan faucibus nibh odio. Cras et at a nunc nunc a facilisis.
              Libero natoque sit nisl elit egestas ullamcorper ut sit.
            </p>
          </div>
        </div>

        <div className="item-details d-last">
          <div className="item_image last">
            <img src={safe} alt="exterior" />
          </div>
          <div className="item_text">
            <div>
              <div></div>
              <p className="t_one">SAFETY</p>
            </div>
            <p className="t_two">Experience Something New</p>
            <p className="t_last">
              Lorem ipsum dolor sit amet consectetur. Magna ac imperdiet ligula
              accumsan faucibus nibh odio. Cras et at a nunc nunc a facilisis.
              Libero natoque sit nisl elit egestas ullamcorper ut sit.
            </p>
          </div>
        </div>

        <div className="car_point">
          <div>
            <p>APIRATED ENGINES</p>
            <p>
              Engines that work without the force induction of superchargers.
              Besides, the oxygen intake is based on atmospheric pressure.{" "}
            </p>
          </div>
          <div>
            <p>DRIVING EXPERIENCE</p>
            <p>
              Not necessarily driving around town like it is a racetrack; it is
              the captivating sensor experience. The sights, sounds, feeling,
              and even smell.
            </p>
          </div>
        </div>
        <div className="line"></div>
      </div>
      <div className="spec">
        <a id="spec" href="#home"></a>
        <div className="spec_bg">
          <img src={spec} alt="spec" />
        </div>

        <p className="spec_t">Spec</p>
        <div className="spec_detail">
          <div>
            <p>ACCELERATION 0-100KM/H</p>
            <p>2.9s</p>
          </div>
          <hr />
          <div>
            <p>TOP SPEED</p>
            <p>
              {" "}
              km/h <>&#62;</> 398 (mph <>&#62;</> 312){" "}
            </p>
          </div>
          <hr />
          <div>
            <p>NUMBER OF CYLINDERS</p>
            <p>14</p>
          </div>
          <hr />
          <div>
            <p>DISPLACEMENT</p>
            <p>5,321 cm³ (417.57 cu in)</p>
          </div>
          <hr />
          <div>
            <p>MAX POWER</p>
            <p>5,321 cm³ (417.57 cu in)</p>
          </div>
          <hr />
          <div>
            <p>WARRANTY</p>
            <p>3 years </p>
          </div>
          <hr />
          <div>
            <p>SEATING</p>
            <p>2</p>
          </div>
          <hr />
          <div>
            <p>WEIGHT</p>
            <p>1,575 kg (3,472 lb)</p>
          </div>
          <hr />
          <div>
            <p>COMBINED CO2 EMISSIONS</p>
            <p>211 g/km (WLTP)</p>
          </div>
          <hr />
        </div>
      </div>

      <div className="footer">
        <a id="discover" href="#home"></a>
        <div className="footer_head">
          <p>EXPERIENCE NAKED GREEN IMPACT X350</p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Magna ac imperdiet ligula
            accumsan faucibus nibh odio.{" "}
          </p>
          <button>Discover</button>
        </div>

        <div className="line"></div>

        <a id="contact" href="#home"></a>
        <div className="contact">
          <div className="address">
            <p>500 Terry Francois Street, San Francisco, CA 94158</p>
            <p>info@green impact.com</p>
            <p>
              <img src={twitter} alt="icon" />
              <img src={fb} alt="icon" />
              <img src={wifi} alt="icon" />
              <img src={chat} alt="icon" />
              <img src={yt} alt="icon" />
              <img src={we} alt="icon" />
            </p>
          </div>

          <div className="links">
            <a href="#about">About</a>
            <a href="#spec">Specs</a>
            <a href="#discover">Discover</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <p className="res">All rights reserved. Green Impact. 2023</p>
      </div>
    </>
  );
};

export default Landing;
