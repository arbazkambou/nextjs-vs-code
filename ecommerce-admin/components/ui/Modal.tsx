import React from "react";
import {
  DialogHeader,
  Dialog,
  DialogContent,
  DialogDescription,
} from "./dialog";

interface ModelProps {
  title: string;
  description: string;
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}
function Modal({ title, description, isOpen, onClose, children }: ModelProps) {
  function onChange(open: boolean) {
    if (!open) {
      onClose();
    }
  }
  return (
    <Dialog open={isOpen} onOpenChange={onChange}>
      <DialogContent>
        <DialogHeader>{title}</DialogHeader>
        <DialogDescription>{description}</DialogDescription>
        <div>{children}</div>
      </DialogContent>
    </Dialog>
  );
}

export default Modal;
