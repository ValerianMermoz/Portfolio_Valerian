import { ReactComponent as Instagram } from "./images/icons/instagram.svg";
import { ReactComponent as Linkedin } from "./images/icons/linkedin.svg";
import { ReactComponent as Gmail } from "./images/icons/GMAIL.svg";
import React from "react";

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

        <div className="gap-20 md:text-5xl flex flex-wrap justify-center py-3">
          <a
            href="https://www.instagram.com/valerian_mermoz/"
            target="_blank"
            alt="lien vers mon compte instagram"
          >
            <Instagram />
          </a>
          <a
            href="https://www.linkedin.com/in/val%C3%A9rian-mermoz-99267b13a/"
            target="_blank"
            alt="lien vers mon compte linkedin"
          >
            <Linkedin />
          </a>
          <a href="mailto:valerian.mermoz@gmail.com" alt="lien pour m'envoyer un email">
            <Gmail />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
