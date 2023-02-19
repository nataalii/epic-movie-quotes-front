import { MouseEventHandler } from 'react';

export type ModalLayoutTypes = {
  onClose: MouseEventHandler<HTMLDivElement>;
  title: string;
  children: any;
};
