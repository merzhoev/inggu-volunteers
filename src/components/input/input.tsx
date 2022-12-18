import { InputHTMLAttributes, forwardRef } from 'react';
import { InputBase, InputBaseProps } from 'components/input-base';
import styles from './input.module.scss';
import cn from 'classnames';

export interface InputProps
  extends Omit<
      Props<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
      'size' | 'value' | 'type' | 'children'
    >,
    Omit<InputBaseProps, 'children'> {
  value?: string;
  type?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      bottomText,
      status,
      size,
      isDisabled,
      isLoading,
      RightContent,
      type = 'text',
      className,
      ...props
    },
    inputRef,
  ) => {
    return (
      <InputBase
        label={label}
        bottomText={bottomText}
        status={status}
        size={size}
        isDisabled={isDisabled || isLoading}
        isLoading={isLoading}
        RightContent={RightContent}>
        <input
          {...props}
          ref={inputRef}
          disabled={isDisabled || isLoading}
          type={type}
          className={cn(styles.input, className)}
        />
      </InputBase>
    );
  },
);
