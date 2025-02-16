import { DualVue } from "../../src";
import { useState } from "react";

function App() {
  const [firstImage] = useState(`https://picsum.photos/id/237/800/400`);
  const [secondImage] = useState(`https://picsum.photos/id/238/800/400`);

  return (
    <>
      <div style={{ width: "800px", height: "400px", margin: "40px auto" }}>
        <DualVue firstImage={firstImage} secondImage={secondImage} />
      </div>
    </>
  );
}

export default App;
