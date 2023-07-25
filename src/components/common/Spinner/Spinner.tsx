import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import { SpinSize } from 'antd/lib/spin';
import React, { memo, ReactNode } from 'react';

import styles from './Spinner.module.scss';

interface SpinnerProps {
  fillParent?: boolean;
  isSpinning?: boolean;
  size?: SpinSize;
  children?: ReactNode;
}

const loadingIcon = <LoadingOutlined spin />;

export const Spinner = memo<SpinnerProps>(({ fillParent = false, isSpinning = true, size = 'large', children }) => {
  const spinner = (
    <Spin spinning={isSpinning} indicator={loadingIcon} size={size}>
      {children}
    </Spin>
  );

  if (!fillParent) return spinner;

  return (
    <div className={styles.wrapper}>
      <div className={styles.loading}>{spinner}</div>
    </div>
  );
});
