'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";


const AddTopicPage = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title || !description) {
            alert("Please fill in all fields");
            return;
        }

        try {
            const res = await fetch('http://localhost:3000/api/topics', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, description }),
            })

            if (res.ok) {
                router.push("/");
            } else {
                throw new Error("Failed to add topic");
            }
        } catch (error) {
            console.log("Error adding topic: ", error);
        }

    }





    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 p-6 bg-white rounded-lg shadow">
            <input
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className="border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                type="text"
                placeholder="Topic Title"
            />
            <textarea
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                className="border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Topic Description"
            />
            <button
                className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-6 py-3 transition-all"
                type="submit"
            >
                Add Topic
            </button>
        </form>
    );
};

export default AddTopicPage;
