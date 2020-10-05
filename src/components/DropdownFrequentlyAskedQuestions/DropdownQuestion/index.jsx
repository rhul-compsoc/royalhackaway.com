import React, { useState } from 'react'

function DropdownQuestion(props) {
    const [expanded, setExpanded] = useState(false);

    function handleClick() {
        setExpanded(!expanded);
    }



    return (
        <div className="col-sm-4">
            <h3 className="text-left text-muted">{props.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: props.html }} />
            <p>{expanded ? "expanded" : "not expanded" }</p>
            <button type="button" className="btn btn-primary" onClick={() => handleClick(!expanded)}>Button</button>
        </div>
    )
}

export default DropdownQuestion;