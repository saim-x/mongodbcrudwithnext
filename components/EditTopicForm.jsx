
const EditTopicForm = () => {
    return (
        <form className="flex flex-col gap-5 p-6 bg-white rounded-lg shadow">
            <input
                className="border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                type="text"
                placeholder="Topic Title"
            />
            <textarea
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