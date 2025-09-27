import { motion } from 'framer-motion';
import { CheckCircle, Zap, BarChart, Users, Star, Bot, Code, Shield } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { EmailForm } from '@/components/EmailForm';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Toaster } from '@/components/ui/sonner';
import { ThemeToggle } from '@/components/ThemeToggle';
const features = [
  { icon: Zap, title: 'Blazing Fast', description: 'Experience unparalleled speed and performance, built on a global network.' },
  { icon: Shield, title: 'Ironclad Security', description: 'Protect your data with enterprise-grade security and compliance features.' },
  { icon: BarChart, title: 'Advanced Analytics', description: 'Gain deep insights into your business with our powerful analytics dashboard.' },
  { icon: Bot, title: 'AI-Powered Automation', description: 'Automate repetitive tasks and workflows with our intelligent AI engine.' },
  { icon: Users, title: 'Team Collaboration', description: 'Work seamlessly with your team with built-in collaboration tools.' },
  { icon: Code, title: 'Developer Friendly', description: 'Integrate easily with our comprehensive API and developer documentation.' },
];
const testimonials = [
  { name: 'Sarah L.', role: 'CEO, TechCorp', quote: 'ApexLaunch has been a game-changer for our business. The speed and reliability are unmatched.', avatar: 'SL' },
  { name: 'Michael B.', role: 'Founder, Innovate Inc.', quote: 'The developer experience is fantastic. We were able to integrate ApexLaunch in just a few hours.', avatar: 'MB' },
  { name: 'Jessica W.', role: 'Marketing Lead, Growth Co.', quote: 'Our conversion rates have skyrocketed since we switched. The analytics are incredibly insightful!', avatar: 'JW' },
];
const pricingTiers = [
  { name: 'Starter', price: '$29', popular: false, features: ['5 Projects', 'Basic Analytics', '24/7 Support', '10GB Storage'] },
  { name: 'Pro', price: '$99', popular: true, features: ['Unlimited Projects', 'Advanced Analytics', 'Priority Support', '100GB Storage', 'AI Automation'] },
  { name: 'Enterprise', price: 'Contact Us', popular: false, features: ['Custom Solutions', 'Dedicated Support', 'Enterprise Security', 'Unlimited Storage', 'On-premise option'] },
];
const Section = ({ id, children, className = '' }: { id: string; children: React.ReactNode; className?: string }) => (
  <section id={id} className={`py-24 lg:py-32 ${className}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
  </section>
);
const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5 }}
    className="text-4xl font-bold font-display text-center text-gray-900 dark:text-gray-100 sm:text-5xl"
  >
    {children}
  </motion.h2>
);
const SectionSubtitle = ({ children }: { children: React.ReactNode }) => (
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5, delay: 0.1 }}
    className="mt-4 max-w-2xl mx-auto text-center text-lg text-gray-600 dark:text-gray-400"
  >
    {children}
  </motion.p>
);
export function HomePage() {
  return (
    <div className="bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-200">
      <Header />
      <ThemeToggle className="fixed bottom-4 right-4" />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-40 lg:pt-40 lg:pb-48 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-black opacity-80"></div>
          <div className="absolute inset-0 opacity-10 dark:opacity-20" style={{backgroundImage: 'radial-gradient(circle at 25% 30%, #3b82f6 0%, transparent 50%), radial-gradient(circle at 75% 70%, #8b5cf6 0%, transparent 50%)'}}></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl font-extrabold font-display tracking-tight text-gray-900 dark:text-gray-100 sm:text-6xl md:text-7xl"
            >
              Launch Your SaaS
              <br />
              <span className="text-blue-600">Faster Than Ever</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 sm:text-xl"
            >
              ApexLaunch provides the ultimate toolkit to build, launch, and scale your software business with unmatched speed and reliability.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-10"
            >
              <a href="#cta">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  Get Started for Free
                </Button>
              </a>
            </motion.div>
          </div>
        </section>
        {/* Features Section */}
        <Section id="features">
          <SectionTitle>Everything You Need to Succeed</SectionTitle>
          <SectionSubtitle>A comprehensive suite of tools designed for modern SaaS companies.</SectionSubtitle>
          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-start p-6 border border-gray-200 dark:border-gray-800 rounded-xl bg-gray-50/50 dark:bg-gray-900/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-gray-900 dark:text-gray-100">{feature.title}</h3>
                <p className="mt-2 text-base text-gray-600 dark:text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </Section>
        {/* Testimonials Section */}
        <Section id="testimonials" className="bg-gray-50 dark:bg-gray-900">
          <SectionTitle>Loved by Founders Worldwide</SectionTitle>
          <SectionSubtitle>Don't just take our word for it. Here's what our customers are saying.</SectionSubtitle>
          <div className="mt-20 grid gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="h-full flex flex-col bg-white dark:bg-gray-800/50 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                  <CardContent className="flex-grow pt-6">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                    </div>
                    <blockquote className="mt-4 text-lg text-gray-700 dark:text-gray-300">"{testimonial.quote}"</blockquote>
                  </CardContent>
                  <CardFooter className="mt-4 flex items-center">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 font-bold">
                      {testimonial.avatar}
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold text-gray-900 dark:text-gray-100">{testimonial.name}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </Section>
        {/* Pricing Section */}
        <Section id="pricing">
          <SectionTitle>Transparent & Simple Pricing</SectionTitle>
          <SectionSubtitle>Choose the plan that's right for your business. No hidden fees, ever.</SectionSubtitle>
          <div className="mt-20 grid gap-8 lg:grid-cols-3 items-stretch">
            {pricingTiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative h-full"
              >
                <Card className={`h-full flex flex-col border-2 ${tier.popular ? 'border-blue-600' : 'border-gray-200 dark:border-gray-800'} rounded-2xl shadow-lg`}>
                  {tier.popular && <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white">Most Popular</Badge>}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-semibold">{tier.name}</CardTitle>
                    <p className="mt-4">
                      <span className="text-5xl font-extrabold font-display text-gray-900 dark:text-gray-100">{tier.price}</span>
                      {tier.price.startsWith('$') && <span className="text-lg font-medium text-gray-500 dark:text-gray-400">/mo</span>}
                    </p>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-4">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className={`w-full text-lg py-6 ${tier.popular ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200'}`}>
                      {tier.price === 'Contact Us' ? 'Contact Sales' : 'Get Started'}
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </Section>
        {/* CTA Section */}
        <Section id="cta" className="bg-blue-600 dark:bg-blue-700">
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold font-display text-white sm:text-5xl"
            >
              Ready to Launch?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 max-w-2xl mx-auto text-lg text-blue-100"
            >
              Join our mailing list to get early access and be the first to know when we launch.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-10"
            >
              <EmailForm />
            </motion.div>
          </div>
        </Section>
      </main>
      <Footer />
      <Toaster richColors position="top-right" />
    </div>
  );
}