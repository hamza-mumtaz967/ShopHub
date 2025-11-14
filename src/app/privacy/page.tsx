'use client';

import { motion } from 'framer-motion';

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="prose prose-gray max-w-none">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              ShopHub ("us", "we", or "our") operates the website and the ShopHub mobile service (the "Service"). 
              This page informs you of our policies regarding the collection, use, and disclosure of personal data 
              when you use our Service and the choices you have associated with that data.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">2. Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed">
              We collect several different types of information for various purposes to provide and improve our 
              Service to you.
            </p>
            
            <h3 className="text-xl font-medium mt-4">Types of Data Collected</h3>
            <h4 className="text-lg font-medium mt-3">Personal Data</h4>
            <p className="text-muted-foreground leading-relaxed">
              While using our Service, we may ask you to provide us with certain personally identifiable information 
              that can be used to contact or identify you ("Personal Data"). Personally identifiable information may 
              include, but is not limited to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Email address</li>
              <li>First name and last name</li>
              <li>Phone number</li>
              <li>Address, State, Province, ZIP/Postal code, City</li>
              <li>Cookies and Usage Data</li>
            </ul>

            <h4 className="text-lg font-medium mt-3">Usage Data</h4>
            <p className="text-muted-foreground leading-relaxed">
              We may also collect information on how the Service is accessed and used ("Usage Data"). This Usage Data 
              may include information such as your computer's Internet Protocol (IP) address, browser type, browser 
              version, the pages of our Service that you visit, the time and date of your visit, the time spent on 
              those pages, unique device identifiers and other diagnostic data.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">3. Use of Data</h2>
            <p className="text-muted-foreground leading-relaxed">
              ShopHub uses the collected data for various purposes:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>To provide and maintain the Service</li>
              <li>To notify you about changes to our Service</li>
              <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
              <li>To provide customer care and support</li>
              <li>To provide analysis or valuable information so that we can improve the Service</li>
              <li>To monitor the usage of the Service</li>
              <li>To detect, prevent and address technical issues</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">4. Transfer of Data</h2>
            <p className="text-muted-foreground leading-relaxed">
              Your information, including Personal Data, may be transferred to — and maintained on — computers 
              located outside of your state, province, country or other governmental jurisdiction where the data 
              protection laws may differ from those of your jurisdiction.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">5. Disclosure of Data</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may disclose personal data that we collect, or you provide:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li><strong>For Business Transfers:</strong> We may share or transfer your information in connection 
              with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all 
              or a portion of our business to another company.</li>
              <li><strong>With Service Providers:</strong> We may share your information with Service Providers to 
              monitor and analyze the use of our Service, to contact you.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">6. Security of Data</h2>
            <p className="text-muted-foreground leading-relaxed">
              The security of your data is important to us, but remember that no method of transmission over the 
              Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable 
              means to protect your Personal Data, we cannot guarantee its absolute security.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">7. Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use "cookies" to collect information. You can instruct your browser to refuse all cookies or to 
              indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to 
              use some portions of our Service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">8. Service Providers</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may employ third party companies and individuals to facilitate our Service ("Service Providers"), 
              to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing 
              how our Service is used.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">9. Links to Other Sites</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our Service may contain links to other sites that are not operated by us. If you click on a third 
              party link, you will be directed to that third party's site. We strongly advise you to review the 
              Privacy Policy of every site you visit.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">10. Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our Service does not address anyone under the age of 18 ("Children"). We do not knowingly collect 
              personally identifiable information from anyone under the age of 18. If you are a parent or guardian 
              and you are aware that your child has provided us with Personal Data, please contact us.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">11. Changes to This Privacy Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting 
              the new Privacy Policy on this page and updating the "Last updated" date at the top.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">12. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <div className="bg-muted/50 p-4 rounded-lg">
              <p className="text-muted-foreground">
                By email: support@shophub.com<br />
                By phone: 1-800-SHOP-HUB<br />
                By visiting this page on our website: shophub.com/contact<br />
                By mail: 123 Commerce St, NY 10001
              </p>
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  );
}