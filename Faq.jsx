import React, { useState, useRef, useEffect } from "react";

import { FaPlus, FaMinus } from "react-icons/fa";

function Faq ({question,answer,LeftIcon, isOpen, onToggle})

{

     const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);



    // const [isOpen, setOpen] = useState(false);
    return (
        
        <div
      className=" cursor-pointer w-full ml-5"
      onClick={onToggle}
    >
      <div className="border rounded transition-all duration-300">
        {/* Question Row */}
        <div className="flex justify-between items-center p-4">
          <div className="flex items-center gap-3 font-serif text-[18px]">
            {LeftIcon && <LeftIcon className="text-blue-600" />}
            {question}
          </div>
          <div>{isOpen ? <FaMinus /> : <FaPlus />}</div>
        </div>

        {/* Animated Answer Container */}
        <div
          ref={contentRef}
          style={{ maxHeight: `${height}px` }}
          className="overflow-hidden transition-all duration-500 ease-in-out border-t"
        >
          <div className="p-4 text-gray-700 pl-8">{answer}</div>
        </div>
      </div>
    </div>
    );
}

export default Faq;