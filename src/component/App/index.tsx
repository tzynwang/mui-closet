import React, { memo } from 'react';
import SvgComponent from '@Asset/canvas_stand.svg';
import styles from './index.module.css';

function App(): React.ReactElement {
  /* Main */
  return (
    <div className={styles.hello}>
      <SvgComponent width={480} height={480} />
    </div>
  );
}

export default memo(App);
