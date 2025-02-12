import React from "react";

interface Props {
  title: string;
  description: string;
  src: string;
}

const ItemCard = ({ title, description, src }: Props) => {
  return (
    <div className="filter-item col-12 col-md-4 seo marketing">
      <div className="project-item zoom-img rounded-2 fix position-relative">
        <img
          className="rounded-2"
          src={src}
          alt="infinia"
          style={{
            height: "600px",
            filter: "brightness(.75)",
            width: "100%",
            objectFit: "cover",
          }}
        />
        <a
          href="#"
          className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-3 "
        >
          {" "}
          <span className="shadow-sm d-flex align-items-center bg-white-keep d-inline-flex rounded-pill px-2 py-1 mb-3">
            <span className="bg-primary fs-9 fw-bold rounded-pill px-2 py-1 text-white">
              {title}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={18}
              height={19}
              viewBox="0 0 18 19"
              fill="none"
            >
              <path
                d="M10.3125 5.5625L14.4375 9.5L10.3125 13.4375"
                stroke="#6D4DF2"
                strokeWidth="1.125"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.25 9.5H3.5625"
                stroke="#6D4DF2"
                strokeWidth="1.125"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <h5 className="text-700">{description}</h5>
          {/* <p className="fs-7 mb-0">Achieve Your a of Business</p>*/}
        </a>
      </div>
    </div>
  );
};

export default ItemCard;
