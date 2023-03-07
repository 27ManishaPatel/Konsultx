import React from "react";

export default function Mailto({ email, subject, body, ...props }) {
  return (
    <a className='link' href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
      {props.children}
    </a>
  );
};

