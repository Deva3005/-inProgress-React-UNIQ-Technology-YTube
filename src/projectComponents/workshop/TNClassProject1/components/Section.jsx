import heroImage from "../../../../assets/ClassProjects/heroImage.jpg";
const Section = () => {
  return (
    <>
      <div
        className="
      d-flex 
      justify-content-center 
      align-items-center
      flex-column 
      flex-lg-row bg-warning"
      >
        <div className="p-3 d-flex justify-content-center ">
          <img
            src={heroImage}
            alt="Hero"
            height={"25%"}
            width={"100%"}
            className="rounded"
          />
        </div>
        <div className="p-3 text-center">
          <h1>I'm Feeling Good</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            tenetur corporis quod nostrum et pariatur quis commodi quae magni
            magnam ex dolorum, atque optio, aspernatur quia, molestiae laborum
            ducimus est.
          </p>
        </div>
      </div>
    </>
  );
};

export default Section;
