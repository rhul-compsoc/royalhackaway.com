import React, { useState, useRef } from "react";

import styles from "./index.module.scss";

function Accordion(props) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setRotate === "active" ? "accordion__icon" : "accordion__icon rotate"
    );
  }

  return (
    <div className={"col-6"}>
      <div className={styles.accordion_title_container}>
      <button className={styles.accordion_title_text} onClick={() => toggleAccordion()}>
        {props.title}
      </button>
      <img src="src/assets/images/Chevron_down_font_awesome.svg"></img>
      </div>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className={styles.accordion__content}
      >
        <div
          dangerouslySetInnerHTML={{ __html: props.html }}
        />
      </div>
    </div>
  );
}

export default Accordion;
