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

      {/* Privacy Policy Section */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>

        <ol className="list-decimal list-inside space-y-4">
          <li>
            <strong>Introduction</strong>
            <p>
              Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your data when using our app.
            </p>
          </li>

          <li>
            <strong>Information We Collect</strong>
            <ul className="list-disc list-inside pl-4">
              <li>
                <strong>Personal Information:</strong> Name, email, phone number, and other details when you sign up.
              </li>
              <li>
                <strong>Device Information:</strong> IP address, device type, and usage data to improve app performance.
              </li>
              <li>
                <strong>Location Data:</strong> If enabled, we may use your location to show relevant deals.
              </li>
            </ul>
          </li>

          <li>
            <strong>How We Use Your Information</strong>
            <ul className="list-disc list-inside pl-4">
              <li>Provide personalized deals and discounts.</li>
              <li>Improve app features and user experience.</li>
              <li>Communicate important updates or promotional offers.</li>
              <li>Ensure security and prevent fraudulent activities.</li>
            </ul>
          </li>

          <li>
            <strong>Data Sharing & Third Parties</strong>
            <ul className="list-disc list-inside pl-4">
              <li>We may share non-personal data with partners to improve deals.</li>
              <li>We do not sell or rent your personal data to third parties.</li>
              <li>If required by law, we may disclose information to authorities.</li>
            </ul>
          </li>

          <li>
            <strong>Security Measures</strong>
            <ul className="list-disc list-inside pl-4">
              <li>We implement industry-standard security to protect user data.</li>
              <li>While we take precautions, we cannot guarantee complete security.</li>
            </ul>
          </li>

          <li>
            <strong>Your Choices & Rights</strong>
            <ul className="list-disc list-inside pl-4">
              <li>You can update or delete your account anytime.</li>
              <li>You can opt out of promotional messages.</li>
              <li>If you want your data removed, contact us at <em>dailydeals@gmail.com</em>.</li>
            </ul>
          </li>

          <li>
            <strong>Updates to This Policy</strong>
            <p>
              We may update this Privacy Policy as needed. Changes will be posted in the app.
            </p>
          </li>

          <li>
            <strong>Contact Us</strong>
            <p>
              For any privacy-related concerns, reach out to us at <em>dailydeals@gmail.com</em>.
            </p>
          </li>
        </ol>
      </section>

      <AboutUs />
      <Footer />
    </div>
  )
}

export default Page
