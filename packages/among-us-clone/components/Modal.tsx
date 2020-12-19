import React from 'react';
import classnames from 'classnames';
import { IModalProps } from '../definitions/modal';

export default function Modal({
  children,
  opened,
  title,
  onClose,
  onSubmit,
}: IModalProps) {
  return (
    <>
      {opened && (
        <div className="
                h-screen w-screen fixed modal-container
                flex justify-center items-center
                "
        >
          <div className="w-1/2 bg-white rounded">
            <div className={
                            classnames(
                              'flex px-4 py-2',
                              { 'justify-between': title },
                              { 'justify-end': !title },
                            )
                        }
            >
              {title && <p className="font-bold text-2xl">{title}</p>}
              <span className="text-2xl cursor-pointer" onClick={onClose}>&times;</span>
            </div>
            <div className="p-4 border-t-2 border-b-2 border-gray-100">
              {children}
            </div>
            {onSubmit
                            && (
                            <div className="flex justify-between px-4 py-2">
                              <button
                                onClick={onSubmit}
                                className="bg-blue-300 px-3 py-2 rounded font-bold text-white"
                              >
                                Submit
                              </button>
                            </div>
                            )}
          </div>
        </div>
      )}
    </>
  );
}
