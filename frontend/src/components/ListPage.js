mport React from 'react';
import Checkbox from 'material-ui/Checkbox';

const StylesOverridingCssExample = () => (
  <Checkbox
    name="StylesOverridingCssExample"
    label="Checked the mail"
    className="styles-overriding-css-example"
  />
);

export default StylesOverridingCssExample;

/*
  With the following css style:

  .styles-overriding-css-example {
    width: 50% !important;
    margin: 0 auto !important;
    border: 2px solid #FF9800 !important;
    background-color: #ffd699 !important;
  }
*/
