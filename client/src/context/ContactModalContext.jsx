/* oxlint-disable react/only-export-components */
import React, { useState, useEffect } from 'react';
import { ContactModalContext, useContactModal } from './contactModalInstance';

export const ContactModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [initialService, setInitialService] = useState('Digital Marketing');

  const openModal = (service = 'Digital Marketing') => {
    setInitialService(service);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <ContactModalContext.Provider value={{ isOpen, openModal, closeModal, initialService }}>
      {children}
    </ContactModalContext.Provider>
  );
};

export { useContactModal };

