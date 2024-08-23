import React from 'react';

const Loading = () => {
    return (
        <div className="bg-gray-900 text-white min-h-screen">
            <header className="bg-gray-800 p-6 shadow-md">
                <div className="container mx-auto">
                    <div className="h-8 bg-gray-700 rounded w-1/3"></div>
                </div>
            </header>
            <main className="py-12">
                <div className="container mx-auto px-4">
                    <section className="text-center mb-12">
                        <div className="h-10 bg-gray-700 rounded w-2/5 mx-auto mb-4"></div>
                        <div className="h-6 bg-gray-700 rounded w-3/4 mx-auto mb-4"></div>
                        <div className="h-6 bg-gray-700 rounded w-5/6 mx-auto"></div>
                    </section>

                    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
                            <div className="h-8 bg-gray-700 rounded w-3/4 mb-4"></div>
                            <div className="h-6 bg-gray-700 rounded w-full mb-4"></div>
                            <div className="h-6 bg-gray-700 rounded w-5/6"></div>
                        </div>
                        <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
                            <div className="h-8 bg-gray-700 rounded w-3/4 mb-4"></div>
                            <div className="h-6 bg-gray-700 rounded w-full mb-4"></div>
                            <div className="h-6 bg-gray-700 rounded w-5/6"></div>
                        </div>
                    </section>

                    <section className="bg-gray-800 p-8 rounded-lg shadow-lg mb-12">
                        <div className="h-8 bg-gray-700 rounded w-3/4 mx-auto mb-4"></div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="text-center p-4 bg-gray-700 rounded-lg shadow-md">
                                <div className="h-6 bg-gray-600 rounded w-3/4 mb-2"></div>
                                <div className="h-4 bg-gray-600 rounded w-5/6 mx-auto"></div>
                            </div>
                            <div className="text-center p-4 bg-gray-700 rounded-lg shadow-md">
                                <div className="h-6 bg-gray-600 rounded w-3/4 mb-2"></div>
                                <div className="h-4 bg-gray-600 rounded w-5/6 mx-auto"></div>
                            </div>
                            <div className="text-center p-4 bg-gray-700 rounded-lg shadow-md">
                                <div className="h-6 bg-gray-600 rounded w-3/4 mb-2"></div>
                                <div className="h-4 bg-gray-600 rounded w-5/6 mx-auto"></div>
                            </div>
                        </div>
                    </section>

                    <section className="text-center mb-12">
                        <div className="h-10 bg-gray-700 rounded w-2/5 mx-auto mb-4"></div>
                        <div className="h-6 bg-gray-700 rounded w-4/5 mx-auto"></div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default Loading;
