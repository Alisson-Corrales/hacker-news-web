import React from "react";
import { useGlobalContext } from "../util/context";

const InfoSquare = () => {
  const { hits } = useGlobalContext();

  /*if (loading) {
    return <div className="loading"></div>
  }*/

  return (
    <section className="info-grid">
      {hits.map((info) => {
        const {
          points,
          num_comments: numComments,
          url: link,
          title,
          author,
          objectID: id,
          remove,
        } = info;
        return (
          <div className="squares" key={id}>
            <h4 className="titles">{title}</h4>
            <p className="writers">{author}</p>
            <p id="points">{points}</p>
            <p id="comments">{numComments}</p>
            <a href="#link" id="linkWeb">
              {link}
            </a>
            <p id="remove">{remove}</p>
          </div>
        );
      })}
    </section>
  );
};

export default InfoSquare;
