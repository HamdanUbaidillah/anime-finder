import { useState } from "react";
import { ModalDetail } from "./modal";
import axios from "axios";
export const Card = ({ data }) => {
  const [modalShow, setModalShow] = useState(false);
  const [dataModal, setDataModal] = useState([]);
  const [details, setDetails] = useState({ img: "", studio: "", genre: "" });

  const handleModal = (id) => {
    setModalShow(true);
    axios
      .get(`https://api.jikan.moe/v4/anime/${id}`)
      .then((res) => {
        setDataModal(res.data.data);
        setDetails({ img: res.data.data.images.jpg.image_url, studio: res.data.data.studios[0].name, genre: res.data.data.genres.map((e) => e.name) });
      })
      .catch((err) => console.error(err));
  };
  return (
    <main className="flex flex-wrap w-4/5 justify-around items-center m-auto">
      <ModalDetail details={details} data={dataModal} show={modalShow} onHide={() => setModalShow(false)} />
      {data.map((item) => {
        return (
          <section className="flex flex-col flex-wrap w-60 m-auto" key={item.mal_id}>
            <div className="modal-detail m-auto" onClick={() => handleModal(item.mal_id)}>
              <img className="rounded-lg " src={item.images.jpg.image_url} alt="img" />
            </div>
            <p className="text-center mt-1 font-semibold border-b-2 border-gray-500 pb-1">{item.title}</p>
          </section>
        );
      })}
    </main>
  );
};
