import React from "react";

function LinksList(props) {
  const links = props.data.map((link) => {
    return (
      <li key={link.id} className="m-2">
        <a href={link.url} target="_blank" rel="noreferrer">
          <i className={`fa-brands fa-xl fa-${link.socialMedia}`}></i>
        </a>
      </li>
    );
  });
  return <ul className="d-flex flex-md-column align-items-center">{links}</ul>;
}

export default LinksList;
