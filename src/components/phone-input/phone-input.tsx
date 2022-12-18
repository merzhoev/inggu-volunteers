import { Input, InputProps } from 'components/input';
import { forwardRef, useCallback, ChangeEvent } from 'react';
import { mergeRefs } from 'react-merge-refs';
import { useRussianPhoneNumber } from './use-russian-phone-number';

interface PhoneInputProps extends InputProps {
  onPhoneChange?: (options: { dirty: string; clear: string }) => void;
}

export const PhoneInput = forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ onPhoneChange, value, onChange, ...props }, ref) => {
    const input = useRussianPhoneNumber({ onChange: onPhoneChange, value });

    const handleChange = useCallback(
      (event: ChangeEvent<HTMLInputElement>) => {
        input.onChange(event);
        onChange?.(event);
      },
      [onChange, input],
    );

    return (
      <Input
        onChange={handleChange}
        value={input.value}
        ref={mergeRefs([input.ref, ref])}
        {...props}
      />
    );
  },
);
