const AddPropertyButton = () => {
    return (
        <div className="p-2 text-sm font-semibold cursor-pointer rounded-full hover:bg-gray-200">
            <button className="flex items-center space-x-2">
                <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                </svg>
                <span>Add Property</span>
            </button>
        </div>
    );
};

export default AddPropertyButton;