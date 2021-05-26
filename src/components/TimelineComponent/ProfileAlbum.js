import React from "react";
import { nanoid } from "nanoid";
const ProfileAlbum = () => {
  const Album = [
    {
      img: "http://placehold.it/1000x1000",
      modalTargetClass: "photo-1",
    },
    {
      img: "http://placehold.it/1000x1000",
      modalTargetClass: "photo-2",
    },
    {
      img: "http://placehold.it/1000x1000",
      modalTargetClass: "photo-3",
    },
    {
      img: "http://placehold.it/1000x1000",
      modalTargetClass: "photo-4",
    },
    {
      img: "http://placehold.it/1000x1000",
      modalTargetClass: "photo-5",
    },
    {
      img: "http://placehold.it/1000x1000",
      modalTargetClass: "photo-6",
    },
    {
      img: "http://placehold.it/1000x1000",
      modalTargetClass: "photo-7",
    },
    {
      img: "http://placehold.it/1000x1000",
      modalTargetClass: "photo-8",
    },
    {
      img: "http://placehold.it/1000x1000",
      modalTargetClass: "photo-9",
    },
  ];
  return (
    <>
      <ul class="album-photos">
        {Album.map((data) => {
          return (
            <>
              <li key={nanoid()}>
                <div
                  class="img-wrapper"
                  data-toggle="modal"
                  data-target={`.${data.modalTargetClass}`}
                >
                  <img src={data.img} alt={data.modalTargetClass} />
                </div>
                <div
                  class={`modal fade ${data.modalTargetClass}`}
                  tabindex="-1"
                  role="dialog"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                      <img src={data.img} alt={data.modalTargetClass} />
                    </div>
                  </div>
                </div>
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
};
export default ProfileAlbum;
