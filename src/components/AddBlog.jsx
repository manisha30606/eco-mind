export const AddBlog = ({
  imgLinkRef,
  nameRef,
  profileLinkRef,
  eventRef,
  eventPicRef,
  descRef,
  datesRef,
  handleSubmit,
}) => {
  return (
    <>
      <div className="gap-5 mx-auto bg-white/50 rounded border border-green-800 p-4 w-full sm:w-1/2 text-lg ">
        <form onSubmit={handleSubmit}>
          <label className="w-full sm:w-1/2 md:w-1/4">Image Link:</label>
          <br />
          <input
            type="text"
            name="imgLink"
            ref={imgLinkRef}
            className="h-10 w-full focus:outline-none pl-3 rounded bg-white/90"
            required
          />
          <br />

          <label className="w-full sm:w-1/2 md:w-1/4">Name:</label>
          <br />
          <input
            type="text"
            name="Name"
            ref={nameRef}
            className="h-10 w-full focus:outline-none pl-3 rounded bg-white/90"
            required
          />

          <br />
          <label className="w-full sm:w-1/2 md:w-1/4">Profile Link:</label>
          <br />
          <input
            type="text"
            name="profileLink"
            required
            ref={profileLinkRef}
            className="h-10 w-full focus:outline-none pl-3 rounded bg-white/90"
          />
          <br />

          <label className="w-full sm:w-1/2 md:w-1/4">Event:</label>
          <br />
          <input
            type="text"
            name="Event"
            required
            ref={eventRef}
            className="h-10 w-full focus:outline-none pl-3 rounded bg-white/90"
          />
          <br />

          <label className="w-full sm:w-1/2 md:w-1/4">Event Picture:</label>
          <br />
          <input
            type="text"
            name="eventPic"
            ref={eventPicRef}
            required
            className="h-10 w-full focus:outline-none pl-3 rounded bg-white/90"
          />
          <br />

          <label className="w-full sm:w-1/2 md:w-1/4">Description:</label>
          <br />
          <textarea
            name="desc"
            required
            ref={descRef}
            className="h-15 w-full focus:outline-none pl-3 rounded bg-white/90"
          />
          <br />
          <label className="w-full sm:w-1/2 md:w-1/4">Dates:</label>
          <br />
          <input
            type="date"
            name="dates"
            required
            ref={datesRef}
            className="h-10 w-full focus:outline-none pl-3 rounded bg-white/90"
          />
          <br />
          <br />
          <button
            type="submit"
            className="h-10 w-auto border border-black relative p-2 bg-green-400 float-right rounded"
          >
            Add Blog
          </button>
        </form>
      </div>
      <br />
      <br />
    </>
  );
};
