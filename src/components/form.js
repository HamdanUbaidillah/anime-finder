export const Form = ({ handleSubmit, setFormData }) => {
  return (
    <main className="mb-5">
      <form className="flex gap-3 m-auto justify-center pt-10 lg:w-1/2 max-md:gap-2 " onSubmit={handleSubmit}>
        <input
          className="px-2 py-1 max-md:w-28 max-md:text-md placeholder:text-gray-500 outline-none placeholder:font-semibold border-b-2 border-sky-400  "
          type="text"
          placeholder="Find Anime..."
          onChange={(e) => setFormData(e.target.value)}
        />
        <button className="font-semibold max-md:px-2 px-2 max-md:text-md bg-sky-400 hover:bg-sky-500 transition  rounded-md text-white" type="submit">
          Search
        </button>
      </form>
    </main>
  );
};
