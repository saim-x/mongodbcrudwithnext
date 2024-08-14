import { HiOutlineTrash } from 'react-icons/hi';

const RemoveBtn = () => {
    return (
        <button
            type="button"
            className="text-red-500 hover:text-red-700 transition-all"
            aria-label="Remove topic"
        >
            <HiOutlineTrash size={24} />
        </button>
    );
};

export default RemoveBtn;
