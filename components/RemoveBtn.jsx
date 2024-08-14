'use client';

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from "@/components/ui/alert-dialog";
import { HiOutlineTrash } from 'react-icons/hi';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const RemoveBtn = ({ id }) => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    const removeTopic = async () => {
        const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
            method: "DELETE",
        });
        if (res.ok) {
            router.refresh();
        }
        setIsOpen(false);
    };

    return (
        <>
            <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
                <AlertDialogTrigger asChild>
                    <button
                        type="button"
                        className="text-red-500 hover:text-red-700 transition-all"
                        aria-label="Remove topic"
                    >
                        <HiOutlineTrash size={24} />
                    </button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete this topic and remove its data from our servers.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel onClick={() => setIsOpen(false)}>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={removeTopic}>Remove</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
};

export default RemoveBtn;
