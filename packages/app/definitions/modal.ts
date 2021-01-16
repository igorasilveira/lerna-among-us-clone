import {ReactNode} from 'react';

export interface IModalProps {
  title?: string;
  children: ReactNode;
  opened: boolean;
  onClose: () => void;
  onSubmit: () => void;
}
