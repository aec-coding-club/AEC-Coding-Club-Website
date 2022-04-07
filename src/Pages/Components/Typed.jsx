import Typed from "typed.js";
import React from "react";

const TypedComponent = () => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);
  // Create reference to store the Typed instance itself
  const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
      strings: [
        "Welcome to AEC Coding Club",
        "If you love coding",
        "You're at the right place",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      smartBackspace: true,
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, []);

  return (
    <div className="type-wrap" style={{fontFamily: "monospace"}}>
      <span style={{ whiteSpace: "pre" }} ref={el} />
    </div>
  );
};

export default TypedComponent;
