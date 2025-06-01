'use client';

import CustomButton from "../forms/CustomButton";

const ConversationDetail = () => {
    return (
        <>
            <div className="max-h-[400px] overflow-auto flex flex-col space-y-5">
                <div className="w-[80%] py-4 px-6 rounded-xl bg-gray-200">
                    <p className="font-bold text-gray-500">John Doe</p>

                    <p>fdasfsdfsdfsdfwsdf</p>
                </div>
            </div>

            <div className="w-[80%] ml-[20%] py-4 px-6 mt-3 rounded-xl bg-blue-200">
                <p className="font-bold text-gray-500">Nicolas Oyarce</p>

                <p>fdasfsdfsdfsdfwsdf</p>
            </div>

            <div className="mt-4 py-4 px-6 flex border border-gray-300 rounded-xl space-x-4">
                <input 
                    type="text" 
                    placeholder="Type your message here..."
                    className="w-full p-2 bg-gray-200 rounded-xl"
                />

            <CustomButton
                label='Send'
                onClick={() => console.log('Message sent')}
                className="w-[100px]"
            />
            </div>
        </>
    );
};

export default ConversationDetail;