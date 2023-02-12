import React, { createContext } from 'react';
import { SCHEME_OPTION } from '@Model/GeneralModel';

type SchemeContextType = {
  schemeOption: SCHEME_OPTION;
  setSchemeOption?: React.Dispatch<React.SetStateAction<SCHEME_OPTION>>;
};

const SchemeContextInstance = {
  schemeOption: SCHEME_OPTION.herMajesty,
};

const SchemeContext = createContext<SchemeContextType>(SchemeContextInstance);

export default SchemeContext;
