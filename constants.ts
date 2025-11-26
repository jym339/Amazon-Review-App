import { 
  Gift, 
  DollarSign, 
  Target, 
  Briefcase, 
  Users, 
  Clock, 
  ThumbsUp 
} from 'lucide-react';
import { Benefit, Step, WhyJoinReason, Testimonial, LinkGroup } from './types';

export const BENEFITS: Benefit[] = [
  {
    icon: Gift,
    title: "Free Prime Products",
    description: "Receive complimentary items to review from Amazon's latest top-rated sellers."
  },
  {
    icon: DollarSign,
    title: "Paid Reviews",
    description: "Earn gift cards or cash for each detailed, honest review you submit."
  },
  {
    icon: Target,
    title: "Early Access",
    description: "Be among the first to test new gadgets and essentials before the public launch."
  }
];

export const STEPS: Step[] = [
  {
    number: 1,
    title: "Apply",
    description: "Fill out our simple application form and link your public Amazon profile."
  },
  {
    number: 2,
    title: "Get Selected",
    description: "Our team reviews applications and sends an acceptance email if you match our criteria."
  },
  {
    number: 3,
    title: "Receive Products",
    description: "Selected reviewers receive products delivered directly to their doorstep via Prime."
  },
  {
    number: 4,
    title: "Create Reviews",
    description: "Test products thoroughly and create honest, detailed reviews with photos/video."
  },
  {
    number: 5,
    title: "Get Paid",
    description: "Earn rewards for your published reviews and keep the products forever."
  }
];

export const REASONS: WhyJoinReason[] = [
  {
    title: "Build Your Profile",
    description: "Become a top-rated reviewer and increase your influence in the shopper community."
  },
  {
    title: "Exclusive Club",
    description: "Join a network of dedicated testers and get access to premium electronics and home goods."
  },
  {
    title: "Flexible Schedule",
    description: "Review products on your own time. No strict deadlines, just honest feedback."
  },
  {
    title: "Influence Brands",
    description: "Your feedback directly impacts future product development and improvements."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Being an Amazon reviewer has allowed me to upgrade my smart home setup for free. The process is smooth and the rewards are real.",
    author: "Sarah J.",
    role: "Tech Enthusiast",
    initial: "S",
    color: "bg-amazon"
  },
  {
    quote: "I love that my honest feedback actually helps other buyers. Plus, getting surprise packages every week is like Christmas year-round!",
    author: "Mike R.",
    role: "Prime Member",
    initial: "M",
    color: "bg-blue-600"
  },
  {
    quote: "Straightforward and legit. I've received over $500 worth of kitchen gadgets in my first two months.",
    author: "Elena D.",
    role: "Home Cook",
    initial: "E",
    color: "bg-green-600"
  }
];

export const FOOTER_LINKS: LinkGroup[] = [
  {
    title: "Legal",
    links: ["Terms of Service", "Privacy Policy", "Cookie Policy", "Affiliate Disclosure"]
  },
  {
    title: "Connect",
    links: ["Instagram", "TikTok", "Facebook", "Twitter"]
  }
];