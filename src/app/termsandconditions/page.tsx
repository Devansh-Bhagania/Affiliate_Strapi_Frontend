"use client"
import React from 'react'
import Header from '../components/Header'
import Categories from '../components/Categories'
import AboutUs from '../components/AboutUs'
import Footer from '../components/Footer'

const Page = () => {
  return (
    <div>
      <Header />
      <Categories />
      {/* Terms & Conditions Section */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Terms & Conditions</h2>

        <ol className="list-decimal list-inside space-y-4">
          <li>
            <strong>Introduction</strong>
            <p>
              Welcome to DailyDeals. By using our app, you agree to these Terms &amp; Conditions.
            </p>
          </li>

          <li>
            <strong>Eligibility</strong>
            <ul className="list-disc list-inside pl-4">
              <li>You must be at least 18 years old or have parental consent to use our app.</li>
              <li>You agree to provide accurate information when creating an account.</li>
            </ul>
          </li>

          <li>
            <strong>Use of Services</strong>
            <ul className="list-disc list-inside pl-4">
              <li>Our app provides deals, discounts, and offers from third-party retailers.</li>
              <li>We do not guarantee the availability, accuracy, or pricing of any deals.</li>
              <li>Users are responsible for verifying the terms of any offers before making a purchase.</li>
            </ul>
          </li>

          <li>
            <strong>Account &amp; Security</strong>
            <ul className="list-disc list-inside pl-4">
              <li>You are responsible for keeping your account secure.</li>
              <li>Any unauthorized activity on your account should be reported immediately.</li>
              <li>We reserve the right to suspend or terminate accounts if we suspect misuse.</li>
            </ul>
          </li>

          <li>
            <strong>Payments &amp; Transactions</strong>
            <ul className="list-disc list-inside pl-4">
              <li>We do not process payments; all purchases are made directly with third-party merchants.</li>
              <li>
                Any issues with purchases, refunds, or deliveries must be handled with the respective retailer.
              </li>
            </ul>
          </li>

          <li>
            <strong>Prohibited Activities</strong>
            <p>You agree not to:</p>
            <ul className="list-disc list-inside pl-4">
              <li>Use our app for fraudulent or illegal purposes.</li>
              <li>Attempt to hack, modify, or disrupt the app.</li>
              <li>Share false or misleading information.</li>
            </ul>
          </li>

          <li>
            <strong>Limitation of Liability</strong>
            <ul className="list-disc list-inside pl-4">
              <li>We are not responsible for any losses, damages, or issues arising from third-party deals.</li>
              <li>Our app is provided “as is” without warranties of any kind.</li>
            </ul>
          </li>

          <li>
            <strong>Changes to Terms</strong>
            <p>
              We may update these Terms &amp; Conditions at any time. Continued use of our app after updates
              means you accept the new terms.
            </p>
          </li>

          <li>
            <strong>Contact Us</strong>
            <p>If you have questions, contact us at <em>dailydeals@gmail.com</em>.</p>
          </li>
        </ol>
      </section>
      <AboutUs />

      <Footer />
    </div>
  )
}

export default Page
