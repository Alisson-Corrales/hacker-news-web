import React from "react";
import { useGlobalContext } from "../util/context";

const InfoSquare = () => {
  const { loading, hits, removeSquare } = useGlobalContext();

  if (loading) {
    return <div className="loading"></div>;
  }

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
        
        } = info;
        return (
          <div className="squares" key={id}>
            <h4 className="titles">{title}</h4>
            <p className="writers">
              {points} points by {author}
            </p>
            <p id="comments"> {numComments} comments </p>
            {/* rel="" lets you not tabnap others */}
            <a href={link} id="linkWeb" target="_blank" rel='noopener noreferrer'>
              Read More!
            </a>
            <p id="remove" onClick={() => removeSquare(id)}>
              remove
            </p>
          </div>
        );
      })}
    </section>
  );
};

export default InfoSquare;
