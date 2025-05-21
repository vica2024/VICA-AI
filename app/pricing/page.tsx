"use client";
import React, { useState } from "react";
import PricingCard from '@/components/ui/Pricing/PricingCard';
import BillingToggle from '@/components/ui/Pricing/BillingToggle';
import FeatureComparisonTable from '@/components/ui/Pricing/FeatureComparisonTable';
import MobileComparisonCard from '@/components/ui/Pricing/MobileComparisonCard';

export default function page() {
    const [activeTab, setActiveTab] = useState<'monthly' | 'yearly'>('yearly');

    // 定价卡片数据
    const pricingCardList = [
        {
            title: 'Basic',
            description: '✨ Fast & simple video creation with 150 credits monthly - perfect for beginners and occasional projects',
            price: '$11.9',
            billingPeriod: 'mo',
            totalPerYear: '$142.8',
            savingsText: 'You save $60.0 (equals to 3.6 months free)',
            features: [
                { text: '150 credits per month', highlighted: true },
                { text: 'Up to 15 videos', highlighted: true },
                { text: 'Up to 150 images', highlighted: true },
                { text: 'Standard Mode' },
                { text: 'Up to 5s videos', highlighted: true },
                { text: 'Standard processing speed' },
                { text: 'Run up to 1 task at once', highlighted: true },
                { text: 'No watermark' },
            ],
        },
        {
            title: 'Plus',
            description: '🔥 4x more credits & superior quality - our most popular choice for consistent content creators',
            price: '$27.9',
            billingPeriod: 'mo',
            totalPerYear: '$334.8',
            savingsText: 'You save $144.0 (equals to 3.6 months free)',
            features: [
                { text: '600 credits per month', highlighted: true },
                { text: 'Up to 60 videos', highlighted: true },
                { text: 'Up to 600 images', highlighted: true },
                { text: 'High Quality Mode' },
                { text: 'Up to 10s videos', highlighted: true },
                { text: 'Priority processing' },
                { text: 'Run up to 2 tasks at once', highlighted: true },
                { text: 'No watermark' },
                { text: 'Commercial certificate' },
            ],
            isPopular: true,
            buttonVariant: 'gradient',
        },
        {
            title: 'Pro',
            description: '⚡ Maximum power with 2500 credits & fastest processing - for professional studios and high-volume creators',
            price: '$55.9',
            billingPeriod: 'mo',
            totalPerYear: '$670.8',
            savingsText: 'You save $288.0 (equals to 3.6 months free)',
            features: [
                { text: '2500 credits per month', highlighted: true },
                { text: 'Up to 250 videos', highlighted: true },
                { text: 'Up to 2500 images', highlighted: true },
                { text: 'High Quality Mode' },
                { text: 'Up to 10s videos', highlighted: true },
                { text: 'Fastest processing' },
                { text: 'Run up to 5 tasks at once', highlighted: true },
                { text: 'No watermark' },
                { text: 'Commercial certificate' },
            ],
        },
    ];
    const comparisonCards = [
    {
      title: 'Basic',
      features: [
        { name: 'Credits per month', value: '150', highlighted: true },
        { name: 'Videos per month', value: '15', highlighted: true },
        { name: 'Images per month', value: '150', highlighted: true },
        { name: 'Video quality', value: 'Standard' },
        { name: 'Concurrent tasks', value: '1', highlighted: true },
        { name: 'Processing speed', value: 'Standard' },
        { name: 'Maximum video length', value: 'Up to 5s', highlighted: true },
      ],
    },
    {
      title: 'Plus',
      isPopular: true,
      features: [
        { name: 'Credits per month', value: '600', highlighted: true },
        { name: 'Videos per month', value: '60', highlighted: true },
        { name: 'Images per month', value: '600', highlighted: true },
        { name: 'Video quality', value: 'High' },
        { name: 'Concurrent tasks', value: '2', highlighted: true },
        { name: 'Processing speed', value: 'Priority' },
        { name: 'Maximum video length', value: 'Up to 10s', highlighted: true },
      ],
    },
    {
      title: 'Pro',
      features: [
        { name: 'Credits per month', value: '2500', highlighted: true },
        { name: 'Videos per month', value: '250', highlighted: true },
        { name: 'Images per month', value: '2500', highlighted: true },
        { name: 'Video quality', value: 'Ultra HD' },
        { name: 'Concurrent tasks', value: '5', highlighted: true },
        { name: 'Processing speed', value: 'Fastest' },
        { name: 'Maximum video length', value: 'Up to 10s', highlighted: true },
      ],
    },
  ];
    return (
        <section id="pricing" className="relative overflow-hidden bg-black py-12 md:py-16">
            <div className="container mx-auto max-w-7xl overflow-hidden px-4 sm:px-6 lg:px-8">
                <div className="mx-auto mb-6 max-w-3xl text-center md:mb-10">
                    <h2 className="mb-2 text-2xl font-bold text-white md:text-3xl lg:text-4xl">
                        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(168,85,247,0.3)]">Choose Your Perfect Plan with AnyVideo.ai</span>
                    </h2>
                    <p className="mx-auto mt-2 max-w-2xl text-sm text-gray-300 md:text-base">Transform Images into Videos, Create AI Videos &amp; Generate Stunning AI Images!</p>
                </div>
                <BillingToggle activeTab={activeTab} setActiveTab={setActiveTab} />

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                    {pricingCardList.map((card, index) => (
                        <PricingCard
                            title={card.title}
                            description={card.description}
                            price={card.price}
                            billingPeriod={card.billingPeriod}
                            features={card.features}
                        />
                    ))}
                </div>
                <div className="mx-auto mb-8 mt-12 max-w-6xl md:mb-12 md:mt-16">
                    <div className="mb-6 text-center">
                        <h3 className="mb-2 text-xl font-bold text-white md:text-2xl">
                            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(168,85,247,0.3)]">Compare Plan Features</span>
                        </h3>
                        <p className="text-sm text-gray-400">Find the perfect plan for your needs</p>
                    </div>
                    <div className="mx-auto">
                        <FeatureComparisonTable />
                        <div className="space-y-4 md:hidden">
                            {comparisonCards.map((card, index) => (
                                <MobileComparisonCard key={index} title={card.title} features={card.features} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}