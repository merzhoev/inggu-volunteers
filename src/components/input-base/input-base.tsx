import { PropsWithChildren } from 'react';
import cn from 'classnames';
import { InputSize, InputStatus } from './input-base.types';
import styles from './input-base.module.scss';
import { Spinner } from 'components/spinner';
import { Color } from 'types';
import { getColorByInputStatus } from './input-base.utils';

export interface InputBaseProps extends PropsWithChildren {
  label?: string;
  status?: InputStatus;
  size?: InputSize;
  bottomText?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  RightContent?: JSX.Element;
}
/**
 * 
 * @example <InputBase
          label="Электронная почта"
          bottomText="Адрес электронной почты недействителен"
          status={InputStatus.Error}
          size={InputSize.Default}
          RightContent={<ArrowDown />}
        />
 */
export function InputBase({
  label,
  bottomText,
  status,
  size = InputSize.Default,
  isDisabled,
  isLoading,
  RightContent,
  children,
}: InputBaseProps) {
  return (
    <div className={styles.inputBase}>
      {label !== undefined && <span className={styles.inputBaseLabel}>{label}</span>}
      <div
        className={cn(styles.inputBaseWrapper, {
          [styles.inputBaseWrapper_Error]: status === InputStatus.Error,
          [styles.inputBaseWrapper_Success]: status === InputStatus.Success,
          [styles.inputBaseWrapper_DefaultSize]: size === InputSize.Default,
          [styles.inputBaseWrapper_Disabled]: isDisabled,
        })}>
        {children}
        {(RightContent || isLoading) && (
          <div className={styles.inputBaseRightIconWrapper}>
            {RightContent && !isLoading ? RightContent : null}
            {isLoading && (
              <Spinner
                size={25}
                color={status !== undefined ? getColorByInputStatus(status) : Color.TextColor}
              />
            )}
          </div>
        )}
      </div>
      {bottomText !== undefined && (
        <span
          className={cn(styles.inputBaseBottomText, {
            [styles.inputBaseBottomText_Error]: status === InputStatus.Error,
            [styles.inputBaseBottomText_Success]: status === InputStatus.Success,
          })}>
          {bottomText}
        </span>
      )}
    </div>
  );
}
