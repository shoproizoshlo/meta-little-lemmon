import React from "react";

function LinksList(props) {
  const links = props.data.map((link) => {
    return (
      <li key={link.id}>
        <a href={link.url} target="_blank" rel="noreferrer">
          {link.name}
        </a>
      </li>
    );
  });
  return <ul>{links}</ul>;
}

export default LinksList;
