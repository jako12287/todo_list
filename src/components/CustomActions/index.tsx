import { useState, useEffect, useRef } from 'react';
import { MdOutlineMoreVert } from 'react-icons/md';
import { FiTrash, FiEdit3 } from "react-icons/fi"

interface Props {
    handleEdit: (row: object) => void;
    handleDelete: (row: object) => void;
    _id: string;
}

const CustomActions: React.FC<Props> = ({
    handleEdit,
    handleDelete,
    _id,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleEditClick = () => {
        handleEdit({ _id });
        toggleDropdown();
    };

    const handleDeleteClick = () => {
        handleDelete({ _id });
        toggleDropdown();
    };

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                className="p-2 rounded-full hover:bg-gray-200 focus:outline-none"
                onClick={toggleDropdown}
            >
                <MdOutlineMoreVert size={25} className="cursor-pointer" color="#ABABAB" />
            </button>
            {isOpen && (
                <div className="w-36 h-28 items-center absolute z-50 bg-primary border-2 border-customBlack rounded-card shadow-custom flex flex-col justify-center right-5">
                    <button
                        className="flex justify-center items-center px-4 py-2 w-full text-left hover:bg-gray-600 hover:text-primary focus:outline-none"
                        onClick={handleDeleteClick}
                    >
                        <div className='flex-1'>
                            <FiTrash size={18} />
                        </div>
                        <div className='font-Medium text-textContent grow ps-3'>
                            Delete
                        </div>
                    </button>
                    <button
                        className="flex justify-center items-center px-4 py-2 w-full text-left hover:bg-gray-600 hover:text-primary focus:outline-none"
                        onClick={handleEditClick}
                    >
                        <div className='flex-1'>
                            <FiEdit3 size={18} />
                        </div>

                        <div className='font-Medium text-textContent grow'>
                            Edit
                        </div>
                    </button>
                </div>
            )}
        </div>
    );
};

export default CustomActions;
