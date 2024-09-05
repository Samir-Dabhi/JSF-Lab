//67.	WAP in ReactJS to display the element if it has attribute called is Display to be true (using conditional rendering).

import React from 'react';

function ConditionalRendering(props) {
  return (
    <div>
      {props.isDisplay ? <h1>This is ConditionalRendering component</h1> : null}
    </div>
  );
}

export default ConditionalRendering;
