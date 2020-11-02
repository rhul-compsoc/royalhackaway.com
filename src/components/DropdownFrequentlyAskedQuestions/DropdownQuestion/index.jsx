import React, { useState, useRef } from "react";

import styles from "./index.module.scss";

function Accordion(props) {
  const [setHeight, setHeightState] = useState("0px");

  /**
   * Makes the answers visible
   */
  function toggleAccordion() {
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
  }

  return (
    <div className={styles.accordion}>
      <div className={styles.accordion_title_container}>
      <button className={styles.accordion_title_text} onClick={() => toggleAccordion()}>
        {props.title}
      </button>
      </div>
      <div
        style={{ maxHeight: `${setHeight}` }}
        className={styles.accordion__content}
      >
        <p
          dangerouslySetInnerHTML={{ __html: props.html }}
        />
      </div>
    </div>
  );
}

export default Accordion;
