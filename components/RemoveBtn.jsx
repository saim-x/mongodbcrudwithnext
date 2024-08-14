'use client';

import { HiOutlineTrash } from 'react-icons/hi';
import { useRouter } from 'next/navigation';
const RemoveBtn = ({ id }) => {
    const router = useRouter();

    const removeTopic = async () => {
        const confirmed = confirm("Are you sure you want to remove this topic?");
        if (!confirmed) return;
        const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
            method: "DELETE",
        });
        if (res.ok) {
            router.refresh();
        }
    }


    return (
        <button
            onClick={removeTopic}
            type="button"
            className="text-red-500 hover:text-red-700 transition-all"
            aria-label="Remove topic"
        >
            <HiOutlineTrash size={24} />
        </button>
    );
};

export default RemoveBtn;
