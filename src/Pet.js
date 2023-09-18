export default function Pets ({name,food }) {
    return (
      <div
        className='color-square' style={{ backgroundColor: "red" }}
      >
        <h2>{name}</h2>
        <h2>{food}</h2>
      </div>
    )
  }
  