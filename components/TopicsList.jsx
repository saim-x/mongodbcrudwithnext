import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

const TopicsList = () => {
    return (
        <div className="space-y-6">
            <div className="p-6 bg-white rounded-lg shadow flex justify-between items-center hover:shadow-md transition-shadow">
                <div>
                    <h2 className="font-bold text-2xl text-gray-800">Topic Title</h2>
                    <p className="text-gray-600 mt-2">Topic Description</p>
                </div>
                <div className="flex gap-4 items-center">
                    <Link href={'/editTopic/123'} className="text-blue-500 hover:text-blue-700">
                        <HiPencilAlt size={24} />
                    </Link>
                    <RemoveBtn />
                </div>
            </div>
        </div>
    );
};

export default TopicsList;
