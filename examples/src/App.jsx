import { DualVue } from "../../src";
import { useState } from "react";

function App() {
  const [firstImage] = useState(
    `https://images.unsplash.com/photo-1739538475083-43bbf5c47646?q=80&w=3136&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`
  );
  const [secondImage] = useState(
    `https://images.unsplash.com/photo-1739582767192-3aa4d4811633?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`
  );

  return (
    <>
      {/* basic usage with defaults */}
      <DualVue firstImage={firstImage} secondImage={secondImage} />
      {/* custom dimensions */}
      <DualVue
        firstImage={firstImage}
        secondImage={secondImage}
        width="1000px"
        height="300px"
      />
      {/* with additional styles */}
      <DualVue
        firstImage={firstImage}
        secondImage={secondImage}
        style={{ margin: "40px auto", border: "1px solid #ccc" }}
      />
      {/* with custom className */}
      <DualVue
        firstImage={firstImage}
        secondImage={secondImage}
        className="my-custom-class"
      />
    </>
  );
}

export default App;
