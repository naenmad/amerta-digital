import React from 'react';

const Steps = () => {
    return (
        <section className="background min-h-screen flex flex-col justify-center items-center text-white p-8 text-center">
            <div className="container mx-auto bg-black bg-opacity-50 p-8 rounded-lg w-full max-w-lg">
                <h2 className="text-4xl font-bold mb-4">Steps to Get Started</h2>
                <ol className="list-decimal list-inside text-lg">
                    <li className="mb-4">Sign up for an account</li>
                    <li className="mb-4">Verify your email address</li>
                    <li className="mb-4">Complete your profile</li>
                    <li className="mb-4">Start using our services</li>
                </ol>
            </div>
        </section>
    );
};

export default Steps;