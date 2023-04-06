import React from "react";

import Image from "../assets/avatar.svg";

import { FaGithub, FaYoutube, FaDribbble } from "react-icons/fa";

import { TypeAnimation } from "react-type-animation";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section className="section" id="home">
      <div className="container mx-auto">
        <div>
          {/*TEXTO*/}
          <div>
            <h1>
              JUAN SEBASTIAN <span>LOPEZ RUIZ</span>
            </h1>
            <div>
              <span className="mr-4">
                Soy estudiante de 3º de Ingeniería Informática 
                y apasionado por el desarrollo Software
              </span>
              <TypeAnimation sequence={[
                "Estudiante",
                2000,
                "Desarrollador",
                2000,
                "Gamer Sexy",
                2000,
              ]}
              speed={50}
              className="text-accent"
              wrapper="span"
              repeat={Infinity}
              />
            </div>
          </div>
          {/*IMAGEN*/}
          <div>
            <img src={Image} alt=""></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
