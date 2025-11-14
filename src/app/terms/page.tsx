'use client';

import { motion } from 'framer-motion';

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="prose prose-gray max-w-none">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using ShopHub, you accept and agree to be bound by the terms and provision of this agreement. 
              If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">2. Use License</h2>
            <p className="text-muted-foreground leading-relaxed">
              Permission is granted to temporarily download one copy of the materials on ShopHub for personal, 
              non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, 
              and under this license you may not:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>modify or copy the materials</li>
              <li>use the materials for any commercial purpose or for any public display</li>
              <li>attempt to reverse engineer any software contained on ShopHub</li>
              <li>remove any copyright or other proprietary notations from the materials</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">3. Products and Services</h2>
            <p className="text-muted-foreground leading-relaxed">
              We make every effort to display as accurately as possible the colors, features, specifications, 
              and details of the products available on the Site. However, we do not guarantee that the colors, 
              features, specifications, and details of the products will be accurate, complete, reliable, current, 
              or free of other errors, and your electronic display may not accurately reflect the actual colors 
              and details of the products.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">4. Pricing and Payment</h2>
            <p className="text-muted-foreground leading-relaxed">
              All prices are shown in USD and are subject to change without notice. We accept various payment 
              methods including credit cards, debit cards, and PayPal. By providing payment information, you 
              represent that you are authorized to use the payment method and that you authorize us to charge 
              the total amount to your payment method.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">5. Shipping and Delivery</h2>
            <p className="text-muted-foreground leading-relaxed">
              We ship to most locations worldwide. Shipping costs and delivery times vary depending on your location 
              and the shipping method selected. Risk of loss and title for all merchandise ordered on this Site 
              pass to you when the merchandise is delivered to the shipping carrier.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">6. Returns and Refunds</h2>
            <p className="text-muted-foreground leading-relaxed">
              We offer a 30-day return policy on all items. Products must be unused and in original packaging. 
              To initiate a return, please contact our customer service team. Refunds will be processed within 
              5-7 business days after we receive the returned item.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">7. User Accounts</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you create an account on ShopHub, you are responsible for maintaining the confidentiality of 
              your account and password and for restricting access to your computer, and you agree to accept 
              responsibility for all activities that occur under your account or password.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">8. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              All content included on this Site, such as text, graphics, logos, images, digital downloads, 
              data compilations, and software, is the property of ShopHub or its content suppliers and 
              protected by international copyright laws.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">9. Privacy Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect 
              your information when you use our Site. By using ShopHub, you agree to the collection and use 
              of information in accordance with our Privacy Policy.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">10. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              In no event shall ShopHub, nor any of its officers, directors and employees, be held liable for 
              anything arising out of or in any way connected with your use of this website whether such liability 
              is under contract. ShopHub, including its officers, directors and employees shall not be held liable 
              for any indirect, consequential or special liability arising out of or in any way related to your use 
              of this website.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">11. Indemnification</h2>
            <p className="text-muted-foreground leading-relaxed">
              You hereby indemnify to the fullest extent ShopHub from and against any and/or all liabilities, 
              costs, demands, causes of action, damages and expenses arising in any way related to your breach 
              of any of the provisions of these Terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">12. Termination</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may terminate or suspend your account and bar access to the service immediately, without prior 
              notice or liability, under our sole discretion, for any reason whatsoever and without limitation.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">13. Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms and any separate agreements whereby we provide you Services shall be governed by and 
              construed in accordance with the laws of United States.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">14. Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
              If a revision is material, we will try to provide at least 30 days notice prior to any new terms 
              taking effect.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">15. Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about these Terms, please contact us at:
            </p>
            <div className="bg-muted/50 p-4 rounded-lg">
              <p className="text-muted-foreground">
                Email: support@shophub.com<br />
                Phone: 1-800-SHOP-HUB<br />
                Address: 123 Commerce St, NY 10001
              </p>
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  );
}