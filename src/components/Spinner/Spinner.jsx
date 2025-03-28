import SpinnerImg from "../../assets/loading.gif";

function Spinner() {
  return (
    <div
      style={{
        minHeight: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={SpinnerImg} alt="Loading..." />
    </div>
  );
}

export default Spinner;
