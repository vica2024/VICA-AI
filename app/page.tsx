import HeroSection from '@/components/ui/HeroSection/HeroSection';
import { createClient } from '@/utils/supabase/server';
import VideoShowcase from '@/components/ui/Showcase/VideoShowcase';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import {
  getProducts,
  getSubscription,
  getUser
} from '@/utils/supabase/queries';

export default async function PricingPage() {
  const supabase = createClient();
  const [user, products, subscription] = await Promise.all([
    getUser(supabase),
    getProducts(supabase),
    getSubscription(supabase)
  ]);

  const videoExamples = [
    {
      href: "/image-to-video",
      videoSrc: "https://f.anyvideo.ai/cdn-cgi/media/width=300/https://pub-162a2caeb061435696b4b602362b58c7.r2.dev/video/4f35c000-9cdd-476c-9891-a17c166c431d.mp4",
      title: "Image To Video",
      description: "Moving water, flying castle, balloons in the sky with a girl walking on bridge"
    },
    {
      href: "/image-to-video",
      videoSrc: "https://f.anyvideo.ai/cdn-cgi/media/width=300/https://pub-162a2caeb061435696b4b602362b58c7.r2.dev/video/ec7500ea-1f75-470f-b343-a7c396e8e033.mp4",
      title: "Image To Video",
      description: "Water character gracefully dancing in a fountain with flowing elegant movements"
    }
  ];

  const reverseVideoExamples = [
    {
      href: "/image-to-video",
      videoSrc: "https://f.anyvideo.ai/cdn-cgi/media/width=300/https://pub-162a2caeb061435696b4b602362b58c7.r2.dev/video/e174e9f2-5d42-4857-9684-379a5d477527.mp4",
      title: "Image To Video",
      description: "Woman performing Chinese traditional dance with a falcon circling in harmony"
    },
    {
      href: "/image-to-video",
      videoSrc: "https://f.anyvideo.ai/cdn-cgi/media/width=300/https://pub-162a2caeb061435696b4b602362b58c7.r2.dev/video/a5d881ec-f5b1-4483-963e-0fa94a715111.mp4",
      title: "Image To Video",
      description: "Robot walking a dog outside while holding its leash"
    },
    {
      href: "/image-to-video",
      videoSrc: "https://f.anyvideo.ai/cdn-cgi/media/width=300/https://pub-162a2caeb061435696b4b602362b58c7.r2.dev/video/037c3eb5-59f3-4156-8835-6e411f17aa15.mp4",
      title: "Image To Video",
      description: "Cyber mech standing in a busy futuristic cityscape looking from side to side"
    }
  ];

  return (
    <>
      <Navbar />
      <HeroSection />
      <VideoShowcase
        title="Image To Video Examples"
        subtitle="Transform your static images into captivating videos with our advanced AI technology. Browse through these examples to see the possibilities."
        videos={videoExamples}
        reverseVideos={reverseVideoExamples}
      />
      <Footer />
      {/*  <Pricing
       user={user}
       products={products ?? []}
       subscription={subscription}
     /> */}
    </>
  );
}
