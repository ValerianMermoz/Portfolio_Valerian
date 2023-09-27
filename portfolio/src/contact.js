import React from "react";
import Instagram from "./images/icons/instagram.png";
import Linkedin from "./images/icons/linkedin.png";
import Mail from "./images/icons/mail.png";

const Contact = () => {
  return (
    <section
      className="min-w-375 flex flex-wrap justify-end flex-col"
      id="Contact"
    >
      <div className="text-center p-10 py-10 bg-neutral-800">
        <h1 className="text-3xl py-2 text-teal-600 font-medium md:text-5xl">
          Vous souhaitez me contacter ?
        </h1>
        <p className="text-md py-5 leading-8 text-slate-100">
          Retrouvez moi sur l'un des liens ci-dessous :
        </p>

        <div className="gap-5 md:text-5xl md:gap-20 flex flex-wrap justify-center py-3  ">
          <a
            href="https://www.instagram.com/valerian_mermoz/"
            target="_blank"
            alt="lien vers mon compte instagram"
            className="hover:animate-[wiggle_0.4s_ease-in-out] p-4"
          >
            <img src={Instagram} className="logocontact" alt="Lien pour profil instagram"/>
          </a>
          <a
            href="https://www.linkedin.com/in/val%C3%A9rian-mermoz-99267b13a/"
            target="_blank"
            alt="lien vers mon compte linkedin"
            className="hover:animate-[wiggle_0.4s_ease-in-out] p-4"
          ><img src={Linkedin} className="logocontact" alt="Lien profil Linkedin"/></a>
          <a
            href="mailto:valerian.mermoz@gmail.com"
            alt="lien pour m'envoyer un email"
            className="hover:animate-[wiggle_0.4s_ease-in-out] p-4"
          ><img src={Mail} className="logocontact" alt="Lien pour envoi de mail"/></a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
