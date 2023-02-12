import { useContext } from 'react';
import SchemeContext from '@Model/SchemeContext';
import capitalizeFirstLetter from '@Tool/capitalizeFirstLetter';
import splitByUppercase from '@Tool/splitByUppercase';

function useGetCurrentSchemeName() {
  /* States */
  const { schemeOption } = useContext(SchemeContext);

  /* Main */
  return capitalizeFirstLetter(splitByUppercase(schemeOption));
}

export default useGetCurrentSchemeName;
