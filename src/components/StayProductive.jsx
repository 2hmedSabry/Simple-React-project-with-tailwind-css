function StayProductive() {
  return (
    <section className="pb-[150px]">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-[30px] place-items-center">
        <div>
          <img
            src="/src/assets/images/illustration-stay-productive.png"
            alt="stay-productive-img"
          />
        </div>
        <div className="text-white">
          <h3 className="font-medium text-[35px] leading-[50px]">
            Stay productive,
            <br />
            wherever you anyWhere
          </h3>
          <div className="my-[15px] font-normal text-sm tracking-[0.8px]">
            <p className="mb-[15px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatem molestias illum impedit veniam atque, dolorum dicta
              odit. Expedita molestiae cum eos saepe dignissimos eveniet
              dolores,
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatem molestias illum impedit veniam atque, dolorum dicta
              odit. Expedita molestiae cum eos saepe dignissimos eveniet
              dolores,
            </p>
          </div>
          <a
            href="/"
            className="text-primary hover:text-[#42b0d1] border-b-2 border-primary border-solid pb-[5px] flex items-center gap-[15px] w-fit transition-colors duration-200"
          >
            See how Flyo work
            <img
              src="/src/assets/images/icon-arrow.svg"
              alt="arrow-img"
              className="w-[20px] h-[20px] object-contain animate-[moveRight_1s_ease-in-out_infinite] "
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default StayProductive;
