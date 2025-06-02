'use client';

import Modal from "./Modal";

import { useState } from "react";
import useLoginModal from "@/app/hooks/useLoginModal";
import CustomButton from "../forms/CustomButton";

const LoginModal = () => {
    const LoginModal = useLoginModal();
    const content = (
        <>
            <h2 className="text-2xl font-bold mb-4">Welcome to Clone Airbnb</h2>
            <form 
                className="space-y-4"
            >
                <input placeholder="Your e-mail address" type="email" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />

                <input placeholder="Your password" type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />

                <div className="p-5 bg-airbnb text-white rounded-xl opacity-80">
                    The error message
                </div>

                <CustomButton 
                    label="Log in"
                    onClick={() => {
                        console.log('Log in clicked');
                    }}
                />
            </form>
        </>

    )
    return (
        <Modal
            isOpen={LoginModal.isOpen}
            close={LoginModal.close}
            label="Log in"
            content={content}
        />
    );
};

export default LoginModal;