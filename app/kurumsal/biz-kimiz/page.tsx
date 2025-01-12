import { metadatas } from "@/app/metadata/metadata";
import Cta6 from "@/components/sections/Cta6";
import Features8 from "@/components/sections/Features8";
import LogoCloud4 from "@/components/sections/LogoCloud4";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: metadatas.bizKimiz.title,
  description: metadatas.bizKimiz.description,
  alternates: { canonical: metadatas.bizKimiz.canonical },
};

const page = () => {
  return (
    <>
      <section className="section-page-header py-10 fix position-relative">
        <div className="container position-relative z-1">
          <div className="text-start">
            <h3>Biz Kimiz?</h3>
            <div className="d-flex">
              <Link href="/">
                <p className="mb-0 text-900">Ana Sayfa</p>
              </Link>
              <svg
                className="mx-3 mt-1"
                xmlns="http://www.w3.org/2000/svg"
                width={8}
                height={13}
                viewBox="0 0 8 13"
                fill="none"
              >
                <path
                  className="stroke-dark"
                  d="M1 1.5L6.5 6.75L1 12"
                  stroke="#111827"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <Link href="/">
                <p className="mb-0 text-900">Kurumsal</p>
              </Link>
              <svg
                className="mx-3 mt-1"
                xmlns="http://www.w3.org/2000/svg"
                width={8}
                height={13}
                viewBox="0 0 8 13"
                fill="none"
              >
                <path
                  className="stroke-dark"
                  d="M1 1.5L6.5 6.75L1 12"
                  stroke="#111827"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-primary mb-0">Biz Kimiz?</p>
            </div>
          </div>
        </div>
        <img
          className="position-absolute bottom-0 start-0 end-0 top-0 z-0"
          src="/assets/imgs/page-header/bg-line.png"
          alt="Millenium Yazılım"
        />
        <div className="bouncing-blobs-container">
          <div className="bouncing-blobs-glass" />
          <div className="bouncing-blobs">
            <div className="position-absolute top-0 start-0 translate-middle-y bouncing-blob--green" />
            <div className="position-absolute top-0 end-0 bouncing-blob--primary" />
          </div>
        </div>
      </section>
      <Cta6 />
      <LogoCloud4 />
      <Features8 />
    </>
  );
};

export default page;
