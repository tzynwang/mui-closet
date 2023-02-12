import React, { memo, useContext } from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { SCHEME_OPTION, SCHEME_OPTION_ARRAY } from '@Model/GeneralModel';
import SchemeContext from '@Model/SchemeContext';
import splitByUppercase from '@Tool/splitByUppercase';

function StyleToggle(): React.ReactElement {
  /* States */
  const { setSchemeOption } = useContext(SchemeContext);

  /* Function */
  const setScheme = (option: SCHEME_OPTION) => () => {
    if (!setSchemeOption) return;
    setSchemeOption(option);
  };

  /* Main */
  return (
    <ButtonGroup
      aria-label="toggle color scheme button group"
      size="large"
      variant="text"
    >
      {SCHEME_OPTION_ARRAY.map((option) => (
        <Button key={option} onClick={setScheme(option)}>
          {splitByUppercase(option)}
        </Button>
      ))}
    </ButtonGroup>
  );
}

export default memo(StyleToggle);
