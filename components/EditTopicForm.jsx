'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
const EditTopicForm = ({ id, title, description }) => {
    const [newTitle, setNewTitle] = useState(title);
    const [newDescription, setNewDescription] = useState(description);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!newTitle || !newDescription) {
            alert("Please fill in all fields");
            return;
        }

        try {
            const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ newTitle, newDescription }),
            })

            if (!res.ok) {

                throw new Error("Failed to update topic");
            }

            router.push("/");
            router.refresh();
        } catch (error) {
            console.log("Error updating topic: ", error);
        }

    }
    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 p-6 bg-white rounded-lg shadow">
            <input
                onChange={(e) => setNewTitle(e.target.value)}
                value={newTitle}
                className="border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                type="text"
                placeholder="Topic Title"
            />
            <textarea
                onChange={(e) => setNewDescription(e.target.value)}
                value={newDescription}
                className="border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Topic Description"
            />
            <button
                className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-6 py-3 transition-all"
                type="submit"
            >
                Update Topic
            </button>
        </form>
    )
}

export default EditTopicForm