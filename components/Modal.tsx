import { HomeIcon, XIcon } from '@heroicons/react/solid'
import Link from 'next/link';
import React, { useState } from 'react'
import { Weather } from '../model/Weather';

interface ModalProps {
  /**
   * modalTitle to display on modal
   */
  modalTitle?: string;
  /**
   * Clear Modal Button text
   */
  modalNoButtonText?: string;
  /**
   * Confirm Modal Button text
   */
  modalYesButtonText?: string;
  /**
   * Dropdown Items to Render
   */
  children?: React.ReactNode;
  /**
   * Is the modal open
   */
  isOpen: boolean;
  /**
   * Toggle the modal
   */
  toggle: () => void;
  /**
   * on Click function
   */
  onClick?: () => void;
  setShowModal: (showModal: boolean) => void;
  weather: Weather; // weather is the current weather
}

const Modal = ({ modalTitle, modalNoButtonText, modalYesButtonText, children, isOpen, toggle, onClick, setShowModal }: ModalProps) => {

  return (
    <>
      {isOpen ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex dark:bg-slate-500 flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t bg-slate-500">
                  <h3 className="text-3xl font-semibold">{modalTitle}</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <XIcon height={25} width={25} />
                  </button>
                </div>
                <div className="flex-1 p-5 overflow-y-auto">
                  {children}
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b bg-slate-600">
                  <Link href="contact" onClick={onClick}>
                    <button
                      className="text-slate-700 dark:text-white bg-white background-transparent dark:bg-slate-700  font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      {modalNoButtonText}
                    </button>
                  </Link>
                  <button
                    className="text-slate-700 bg-white dark:text-white background-transparent dark:bg-slate-700  font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    {modalYesButtonText}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;


