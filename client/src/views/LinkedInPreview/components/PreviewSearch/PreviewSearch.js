import React, { useState } from "react";
import { getSearchResult } from "../../../../actions/searchAction";
import "./PreviewSearch.css";

export default function PreviewSearch(props) {
  const [linkedInURL, setLinkedInURL] = useState("");
  const [valid, setValid] = useState(false);
  const linkedInPattern = new RegExp("^http(s)?://(www.)?linkedin.com/.*$");

  const handleInput = (event) => {
    event.preventDefault();

    if (valid) {
      props.setImage(null);
      props.setDisplay("block");
      getSearchResult(linkedInURL, setLinkedInURL, setValid)
        .then((response) => response.json())
        .then((data) => props.setImage(data.image))
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <form onSubmit={handleInput} className="preview-search">
      <h1>Enter in LinkedIn Profile URL</h1>
      <input
        placeholder="LinkedIn Profile URL"
        value={linkedInURL}
        onChange={({ target }) => {
          setLinkedInURL(target.value);
          if (linkedInPattern.test(target.value)) {
            setValid(true);
          } else setValid(false);
        }}
      />
      <button disabled={!valid} type="submit">
        Search
      </button>
    </form>
  );
}
