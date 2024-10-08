import Image from "next/image";
import Link from "next/link";
import React from "react";

function Card({ id, title, price, category, thumbnail }) {
  return (
    <div className="card">
      <Image
        height={160}
        width={50}
        src={thumbnail}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{price}</p>
        <p className="card-text">{category}</p>

        <Link className="btn btn-outline-primary " href={`/blog/${id}`}>
          Detail
        </Link>
      </div>
    </div>
  );
}

export default Card;
