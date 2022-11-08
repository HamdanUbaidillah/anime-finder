import { useState, useEffect } from "react";
import axios from "axios";
import { Form } from "./components/form";
import { Card } from "./components/card";
import { Footer } from "./components/footer";
const App = () => {
  const [formData, setFormData] = useState("");
  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(formData);
  };

  const fetch = (query) => {
    axios
      .get(`https://api.jikan.moe/v4/anime?q=${query}`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    axios.get("https://api.jikan.moe/v4/anime").then((res) => {
      setData(res.data.data);
    });
  }, []);

  const handleGoTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <main className="h-screen">
      <div onClick={handleGoTop} className="fixed bg-blue-600 text-white rounded-full w-10 h-10 flex justify-center items-center z-10 bottom-5 right-6 font-semibold text-md hover:cursor-pointer hover:bg-blue-500 lg:hidden">
        Top
      </div>
      <Form setFormData={setFormData} handleSubmit={handleSubmit} />
      <Card fetch={fetch} data={data} />
      <Footer />
    </main>
  );
};

export default App;
