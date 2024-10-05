import { MapPin, Mail } from "lucide-react";

export default function ContactUs() {
    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-6 md:px-12 lg:px-16">
                <h2 className="text-3xl font-semibold text-gray-800 text-center mb-12">
                    Contact Us
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Details */}
                    <div className="space-y-6">
                        <div className="flex items-start space-x-4">
                            <MapPin className="w-6 h-6 text-green-500" />
                            <div>
                                <p className="text-lg font-semibold text-gray-700">Location:</p>
                                <p className="text-gray-500">Guwahati, Assam</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <Mail className="w-6 h-6 text-green-500" />
                            <div>
                                <p className="text-lg font-semibold text-gray-700">Email:</p>
                                <p className="text-gray-500">zero.altere@gmail.com</p>
                            </div>
                        </div>
                        {/* Google Map */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56528.7492052583!2d91.60218206785216!3d26.14451650214812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5918d2848171%3A0xfb9a7b0d8d7326f6!2sGuwahati%2C%20Assam!5e0!3m2!1sen!2sin!4v1601618171113!5m2!1sen!2sin"
                            width="100%"
                            height="250"
                            frameBorder="0"
                            allowFullScreen=""
                            aria-hidden="false"
                            tabIndex="0"
                            className="rounded-lg border"
                        ></iframe>
                    </div>
                    {/* Contact Form */}
                    <div className="bg-white p-8 shadow-lg rounded-lg space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                                    placeholder="john.doe@example.com"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Subject
                            </label>
                            <input
                                type="text"
                                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                                placeholder="Enter your subject"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Message
                            </label>
                            <textarea
                                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                                rows="5"
                                placeholder="Type your message..."
                            ></textarea>
                        </div>
                        <button className="w-full py-3 px-6 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:ring-4 focus:ring-green-300 transition duration-300">
                            Send Message
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
