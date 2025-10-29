"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import { Coffee, Mail, Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="slide-background"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Menu", id: "products" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Brewmasters"
          button={{
            text: "Order Now",
            href: "https://order.brewmasters.com"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Crafted Coffee Excellence"
          description="Experience the perfect blend of tradition and innovation with our premium coffee selections, roasted to perfection for discerning coffee lovers."
          tag="Premium Coffee"
          tagIcon={Coffee}
          buttons={[
            { text: "Explore Menu", href: "products" },
            { text: "Visit", href: "contact" }
          ]}
          imageSrc="https://images.pexels.com/photos/7175956/pexels-photo-7175956.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Our Story"
          description={[
            "For over two decades, we've been dedicated to sourcing the finest coffee beans from sustainable farms around the world.",
            "Our master roasters carefully craft each blend to bring out unique flavors that celebrate the art of coffee making."
          ]}
          buttons={[
            { text: "Learn More", href: "about" }
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardTwo
          title="Our Coffee Selection"
          description="Discover our carefully curated collection of premium coffee varieties"
          tag="Menu"
          products={[
            {
              id: "1",
              brand: "Brewmasters",
              name: "Dark Roast Espresso",
              price: "$18.99",
              rating: 5,
              reviewCount: "1.2k",
              imageSrc: "https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "2",
              brand: "Brewmasters",
              name: "Artisan Latte Blend",
              price: "$16.99",
              rating: 4,
              reviewCount: "850",
              imageSrc: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "3",
              brand: "Brewmasters",
              name: "Cold Brew Special",
              price: "$22.99",
              rating: 5,
              reviewCount: "2.1k",
              imageSrc: "https://images.pexels.com/photos/7282737/pexels-photo-7282737.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Coffee Subscription Plans"
          description="Choose the perfect plan for your coffee needs"
          plans={[
            {
              id: "basic",
              badge: "Value",
              badgeIcon: Coffee,
              price: "$19/month",
              subtitle: "Perfect for casual coffee drinkers",
              features: [
                "2 bags of premium coffee",
                "Free shipping",
                "Monthly brewing tips",
                "Cancel anytime"
              ]
            },
            {
              id: "premium",
              badge: "Most Popular",
              badgeIcon: Sparkles,
              price: "$35/month",
              subtitle: "For serious coffee enthusiasts",
              features: [
                "4 bags of premium coffee",
                "Priority shipping",
                "Exclusive blends access",
                "Monthly brewing guides",
                "Customer support priority"
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Our Customers Say"
          description="Real feedback from coffee lovers who trust our quality"
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Coffee Enthusiast",
              testimonial: "The quality and flavor of their coffee is absolutely exceptional. I've tried many brands, but nothing compares to this level of craftsmanship.",
              imageSrc: "https://images.pexels.com/photos/33409064/pexels-photo-33409064.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "2",
              name: "David Chen",
              role: "Business Owner",
              testimonial: "We serve this coffee at our restaurant and customers constantly ask where we source it. The consistency and taste profile is remarkable.",
              imageSrc: "https://images.pexels.com/photos/4050473/pexels-photo-4050473.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Food Blogger",
              testimonial: "As someone who reviews coffee professionally, I can confidently say this is among the finest I've ever experienced. Simply outstanding.",
              imageSrc: "https://images.pexels.com/photos/4063590/pexels-photo-4063590.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "4",
              name: "Michael Thompson",
              role: "Coffee Shop Manager",
              testimonial: "Our customers love the rich flavor and smooth finish. This coffee has become our signature blend and sets us apart from competitors.",
              imageSrc: "https://images.pexels.com/photos/4790061/pexels-photo-4790061.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            }
          ]}
        />
      </div>

      <div id="socialproof" data-section="socialproof">
        <SocialProofOne
          title="Trusted by Coffee Leaders"
          description="Join the community of premium coffee brands that choose quality"
          logos={[
            "https://images.pexels.com/photos/16218527/pexels-photo-16218527.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/639132/pexels-photo-639132.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/4820659/pexels-photo-4820659.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/639132/pexels-photo-639132.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/27173014/pexels-photo-27173014.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/4820659/pexels-photo-4820659.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Everything you need to know about our coffee and services"
          faqs={[
            {
              id: "1",
              title: "Where do you source your coffee beans?",
              content: "We work directly with sustainable farms in Ethiopia, Colombia, Guatemala, and Brazil to ensure the highest quality beans while supporting local communities."
            },
            {
              id: "2",
              title: "How fresh is your coffee?",
              content: "All our coffee is roasted within 48 hours of shipping to ensure maximum freshness. We include the roast date on every package."
            },
            {
              id: "3",
              title: "Do you offer decaffeinated options?",
              content: "Yes, we offer several decaffeinated varieties using the Swiss Water Process, which maintains the coffee's natural flavor without chemicals."
            },
            {
              id: "4",
              title: "What's your return policy?",
              content: "If you're not completely satisfied with your purchase, we offer a 30-day money-back guarantee on all coffee orders."
            },
            {
              id: "5",
              title: "Can I customize my subscription?",
              content: "Absolutely! You can adjust delivery frequency, change coffee selections, pause, or cancel your subscription at any time through your account."
            },
            {
              id: "6",
              title: "Do you ship internationally?",
              content: "Currently we ship within the United States and Canada. We're working on expanding to more countries soon."
            }
          ]}
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Coffee Insights"
          description="Discover brewing techniques, origin stories, and coffee culture"
          tag="Blog"
          blogs={[
            {
              id: "1",
              category: "Brewing",
              title: "The Art of Coffee Roasting",
              excerpt: "Explore the intricate process of transforming green coffee beans into the perfect roast",
              imageSrc: "https://images.pexels.com/photos/7125616/pexels-photo-7125616.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              authorName: "James Rodriguez",
              authorAvatar: "https://images.pexels.com/photos/34490272/pexels-photo-34490272.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              date: "15 Jan 2025"
            },
            {
              id: "2",
              category: "Techniques",
              title: "Mastering Pour-Over Methods",
              excerpt: "Learn professional brewing techniques to create the perfect cup at home",
              imageSrc: "https://images.pexels.com/photos/34492966/pexels-photo-34492966.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              authorName: "Maria Santos",
              authorAvatar: "https://images.pexels.com/photos/5052875/pexels-photo-5052875.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              date: "12 Jan 2025"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Newsletter"
          tagIcon={Mail}
          title="Stay Connected"
          description="Subscribe to our newsletter for brewing tips, new coffee releases, and exclusive offers from our roastery."
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="By subscribing, you agree to receive our weekly newsletter. Unsubscribe anytime."
        />
      </div>
    </ThemeProvider>
  );
}