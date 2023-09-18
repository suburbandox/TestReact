export default function Card ( {dish,cuisine}) {
    return (
      <div
        className='color-square' style={{ backgroundColor: "red" }}
      >
        console.log("green");
        <h2>{dish}</h2>
        <h2>{cuisine}</h2>
      </div>
    )
  }