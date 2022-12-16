import { Color } from 'types';
import { InputStatus } from './input-base.types';

export function getColorByInputStatus(inputStatus: InputStatus): Color {
  switch (inputStatus) {
    case InputStatus.Success:
      return Color.SuccessColor;
    case InputStatus.Error:
      return Color.AttentionColor;
  }
}
