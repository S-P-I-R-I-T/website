"use client";

import { useState } from "react";
import Image from "next/image";
import { awardSections } from "@/lib/site-data";

export default function AwardsPage() {
  const [modalImage, setModalImage] = useState<string | null>(null);

  return (
    <div id="contents" className="mx-auto w-full max-w-3xl flex flex-col flex-1 py-10 min-h-[500px] content">
      {awardSections.map((section) => (
        <details key={section.year} id={`award-${section.year}`}>
          <summary>
            <h2>{section.year} ~ {section.year + 1} | {section.season}</h2>
            <hr />
          </summary>

          <ul>
            {section.awards.map((award) => (
              <li key={award}>
                <h3>{award}</h3>
              </li>
            ))}
          </ul>

          {section.notes.length > 0 ? (
            <>
              {section.notes.map((note) => (
                <a key={note} href={note} target="_blank" rel="noreferrer">
                  Engineering note
                </a>
              ))}
            </>
          ) : null}

          <div className="images">
            {section.images.map((image) => (
              <img
                key={image}
                src={image}
                height={100}
                alt="award image"
                className="cursor-pointer"
                onClick={() => setModalImage(image)}
              />
            ))}
          </div>
        </details>
      ))}

      <div
        id="ImageModal"
        className={`fixed inset-0 z-[200] ${modalImage ? "flex" : "hidden"} items-center justify-center bg-black/80 cursor-pointer`}
        onClick={() => setModalImage(null)}
      >
        <div className="relative max-w-[70vw] max-h-[70vh] p-4">
          {modalImage ? (
            <img id="ModalImage" src={modalImage} className="max-w-full max-h-[70vh] object-contain" alt="award modal image" />
          ) : null}
        </div>
      </div>
    </div>
  );
}