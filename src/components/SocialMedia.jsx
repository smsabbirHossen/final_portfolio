import React from "react";

import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a
        href="https://www.linkedin.com/in/sabbir-hossain-a52758266/"
        target="_blank"
      >
        <FaLinkedinIn />
      </a>
    </div>
    <div>
      <a href="https://web.facebook.com/sabbir.hossan.3762" target="_blank">
        <FaFacebookF />
      </a>
    </div>
    <div>
      <a href="https://github.com/smsabbirHossen" target="_blank">
        <FaGithub />
      </a>
    </div>
  </div>
);

export default SocialMedia;
