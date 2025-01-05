import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { FaInstagram, FaFacebook, FaTwitter, FaExternalLinkAlt } from 'react-icons/fa';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Message sent successfully!');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                alert('Failed to send message. Please try again.');
            }
        } catch (error) {
            alert('Failed to send message. Please try again.');
        }
    };

    return (
        <section id="contact" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="animate-fadeIn opacity-0" style={{ animationDelay: "0.2s" }}>
                    <h2 className="text-3xl font-bold text-primary mb-12 text-center">
                        Get in Touch
                    </h2>
                </div>

                <div className="max-w-2xl mx-auto">
                    <Card className="animate-fadeIn opacity-0" style={{ animationDelay: "0.4s" }}>
                        <CardHeader>
                            <CardTitle className="text-center">Send me a message</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid gap-4 md:grid-cols-2">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium text-gray-700">
                                            Name
                                        </label>
                                        <Input
                                            id="name"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            required
                                            className="w-full"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-gray-700">
                                            Email
                                        </label>
                                        <Input
                                            id="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            required
                                            className="w-full"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                                        Subject
                                    </label>
                                    <Input
                                        id="subject"
                                        value={formData.subject}
                                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                        required
                                        className="w-full"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-gray-700">
                                        Message
                                    </label>
                                    <Textarea
                                        id="message"
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        required
                                        className="w-full min-h-[150px]"
                                    />
                                </div>
                                <Button type="submit" className="w-full bg-primary text-white hover:bg-primary/90">
                                    Send Message
                                </Button>
                            </form>
                        </CardContent>
                    </Card>

                    <div className="mt-12 flex justify-center space-x-6 animate-fadeIn opacity-0" style={{ animationDelay: "0.6s" }}>
                        <a
                            href="https://instagram.com/username"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-primary transition-colors"
                        >
                            <FaInstagram className="h-6 w-6" />
                        </a>
                        <a
                            href="https://facebook.com/username"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-primary transition-colors"
                        >
                            <FaFacebook className="h-6 w-6" />
                        </a>
                        <a
                            href="https://twitter.com/username"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-primary transition-colors"
                        >
                            <FaTwitter className="h-6 w-6" />
                        </a>
                        <a
                            href="https://www.wvu.edu"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-primary transition-colors"
                        >
                            <FaExternalLinkAlt className="h-6 w-6" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;