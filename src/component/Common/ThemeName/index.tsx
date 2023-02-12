import React, { memo } from 'react';
import Typography from '@mui/material/Typography';
import useGetCurrentSchemeName from '@Hook/useGetCurrentSchemeName';
import styles from './index.module.css';

function ThemeName(): React.ReactElement {
  /* State */
  const currentSchemeName = useGetCurrentSchemeName();

  /* Main */
  return (
    <Typography variant="h2" component="h1" className={styles.theme_name}>
      {currentSchemeName}
    </Typography>
  );
}

export default memo(ThemeName);
