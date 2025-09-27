import { Rocket, Twitter, Github, Linkedin } from 'lucide-react';
const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'GitHub', icon: Github, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
];
const footerLinks = {
  Product: [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Integrations', href: '#' },
    { name: 'API', href: '#' },
  ],
  Company: [
    { name: 'About Us', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Contact', href: '#' },
  ],
  Legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
  ],
};
export function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900/50 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <a href="#" className="flex items-center space-x-2">
              <Rocket className="h-7 w-7 text-blue-600" />
              <span className="font-bold text-2xl font-display text-gray-900 dark:text-gray-100">
                ApexLaunch
              </span>
            </a>
            <p className="text-gray-500 dark:text-gray-400 text-base">
              The ultimate platform to launch and scale your SaaS business.
            </p>
            <div className="flex space-x-6">
              {socialLinks.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-400 hover:text-blue-500 transition-colors duration-200">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-200 tracking-wider uppercase">Product</h3>
                <ul className="mt-4 space-y-4">
                  {footerLinks.Product.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-200 tracking-wider uppercase">Company</h3>
                <ul className="mt-4 space-y-4">
                  {footerLinks.Company.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-200 tracking-wider uppercase">Legal</h3>
                <ul className="mt-4 space-y-4">
                  {footerLinks.Legal.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-base text-gray-400">&copy; {new Date().getFullYear()} ApexLaunch. All rights reserved.</p>
          <p className="mt-4 sm:mt-0 text-base text-gray-400">Built with ���️ at Cloudflare</p>
        </div>
      </div>
    </footer>
  );
}