import React from 'react';
import { Award, Users, Globe, Star, CheckCircle, Target } from 'lucide-react';

export default function AboutUs() {
    const stats = [
        { icon: Globe, label: 'Destinations', value: '50+' },
        { icon: Users, label: 'Happy Travelers', value: '10,000+' },
        { icon: Award, label: 'Years Experience', value: '15+' },
        { icon: Star, label: 'Tour Packages', value: '500+' }
    ];

    const whyChooseUs = [
        {
            title: 'Expert Planning',
            description: 'Our experienced travel experts plan every detail to ensure a seamless journey.',
            icon: Target
        },
        {
            title: 'Best Value',
            description: 'Competitive pricing without compromising on quality and service.',
            icon: Award
        },
        {
            title: 'Trusted by Thousands',
            description: 'Over 10,000 satisfied customers have traveled with us.',
            icon: Users
        },
        {
            title: 'Complete Support',
            description: '24/7 customer support before, during, and after your trip.',
            icon: CheckCircle
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-20">
                <div className="max-w-7xl mx-auto px-5 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">About Sweet Dreams Holidays</h1>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                        Creating unforgettable travel experiences since 2009
                    </p>
                </div>
            </div>

            {/* Stats Section */}
            <div className="max-w-7xl mx-auto px-5 -mt-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div key={index} className="bg-white rounded-2xl shadow-xl p-6 text-center border border-gray-100">
                                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Icon className="w-8 h-8 text-blue-600" />
                                </div>
                                <h3 className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</h3>
                                <p className="text-gray-600">{stat.label}</p>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Our Story */}
            <div className="max-w-7xl mx-auto px-5 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>
                                Founded in 2009, Sweet Dreams Holidays began with a simple mission: to make travel accessible,
                                affordable, and unforgettable for everyone. What started as a small travel agency in Chennai
                                has grown into one of South India's most trusted tour operators.
                            </p>
                            <p>
                                Over the past 15 years, we've had the privilege of helping over 10,000 travelers explore
                                incredible destinations across India and internationally. From the backwaters of Kerala to
                                the beaches of Bali, from the Taj Mahal to the temples of Thailand, we've been there every
                                step of the way with our customers.
                            </p>
                            <p>
                                Our success is built on trust, transparency, and an unwavering commitment to customer
                                satisfaction. Every package we create is designed with care, every itinerary is crafted
                                with expertise, and every traveler is treated like family.
                            </p>
                        </div>
                    </div>

                    <div>
                        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
                            <p className="text-gray-700 mb-6">
                                To provide exceptional travel experiences that create lasting memories while maintaining
                                the highest standards of service, transparency, and customer satisfaction.
                            </p>

                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
                            <p className="text-gray-700">
                                To become India's most trusted and preferred travel partner, known for creating personalized,
                                affordable, and memorable journeys that inspire people to explore the world.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gradient-to-b from-white to-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose Us</h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Here's what makes Sweet Dreams Holidays the preferred choice for thousands of travelers
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {whyChooseUs.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div key={index} className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 hover:shadow-2xl transition-all duration-300">
                                    <div className="bg-gradient-to-br from-blue-600 to-cyan-600 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                                        <Icon className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                                    <p className="text-gray-600">{item.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Company Details */}
            <div className="max-w-7xl mx-auto px-5 py-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">Company Information</h2>

                <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Registered Office</h3>
                            <p className="text-gray-700 mb-2">
                                <strong>Sweet Dreams Holidays Pvt. Ltd.</strong>
                            </p>
                            <p className="text-gray-600">
                                123 Main Street, Anna Nagar<br />
                                Chennai, Tamil Nadu 600040<br />
                                India
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Company Details</h3>
                            <p className="text-gray-600 mb-2">
                                <strong>CIN:</strong> U63040TN2009PTC123456
                            </p>
                            <p className="text-gray-600 mb-2">
                                <strong>GSTIN:</strong> 33XXXXX1234X1ZX
                            </p>
                            <p className="text-gray-600 mb-2">
                                <strong>Year of Establishment:</strong> 2009
                            </p>
                            <p className="text-gray-600">
                                <strong>License:</strong> IATA Approved Travel Agency
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16">
                <div className="max-w-4xl mx-auto px-5 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
                    <p className="text-xl text-blue-100 mb-8">
                        Let us help you plan your dream vacation today!
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <a
                            href="/contact"
                            className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                        >
                            Contact Us
                        </a>
                        <a
                            href="/domestic"
                            className="px-8 py-4 bg-orange-500 text-white font-bold rounded-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                        >
                            View Packages
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
