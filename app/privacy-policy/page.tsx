// app/privacy-policy/page.tsx
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12 max-w-3xl mt-12">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-gray-700 mb-4">
          Effective Date: [Effective Date]
        </p>
        <p className="text-gray-700 mb-4">
          Welcome to JoliMate (“we,” “us,” or “our”). We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, share, and protect the information we obtain from and about you, and the choices you have.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
        <p className="text-gray-700 mb-4">
          We may collect various types of information from you, including:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li><strong>Personal Information:</strong> Name, email address, telephone number, and other identifying information you provide.</li>
          <li><strong>Account Data:</strong> Username, password, profile details, and preferences.</li>
          <li><strong>Usage Data:</strong> Information about how you access and use our app, including IP address, device identifiers, and browsing activity.</li>
          <li><strong>Location Information:</strong> If you choose to share it, we may collect your approximate or precise location information.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
        <p className="text-gray-700 mb-4">
          We use the information we collect for purposes such as:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Providing and improving our services and user experience.</li>
          <li>Facilitating matches and recommendations based on your preferences.</li>
          <li>Communicating with you about account updates, new features, promotions, and other information.</li>
          <li>Ensuring the security and integrity of our services.</li>
          <li>Analyzing usage patterns and trends to enhance our platform.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Sharing Your Information</h2>
        <p className="text-gray-700 mb-4">
          We may share your personal information with:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li><strong>Service Providers:</strong> Third parties who perform services on our behalf, such as hosting, analytics, and payment processing.</li>
          <li><strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
          <li><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, legal processes, or enforceable governmental requests, or to protect our rights, property, or safety.</li>
          <li><strong>With Your Consent:</strong> We may share information with your consent or at your direction.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Your Choices</h2>
        <p className="text-gray-700 mb-4">
          You may have choices regarding the information you provide and how we use it:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>You can update or correct your personal information by accessing your account settings.</li>
          <li>You may opt out of marketing communications by following the unsubscribe instructions in our emails.</li>
          <li>You may delete your account by contacting us at <a href="mailto:support@jolimate.app" className="text-purple-600 hover:underline">support@jolimate.app</a>.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Data Security</h2>
        <p className="text-gray-700 mb-4">
          We take reasonable measures to protect your personal information from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction. However, no security measures are perfect, and we cannot guarantee absolute security.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. International Transfers</h2>
        <p className="text-gray-700 mb-4">
          Your information may be transferred to and maintained on servers located outside of your jurisdiction, where data protection laws may differ. By using our services, you consent to such transfers.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">7. Children’s Privacy</h2>
        <p className="text-gray-700 mb-4">
          Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we learn that we have collected such information, we will delete it promptly.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">8. Changes to This Privacy Policy</h2>
        <p className="text-gray-700 mb-4">
          We may update this Privacy Policy from time to time. We will notify you of material changes by posting the updated policy on our platform and/or by sending you an email.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">9. Contact Us</h2>
        <p className="text-gray-700 mb-4">
          If you have questions or concerns about this Privacy Policy, please contact us at: 
          <a href="mailto:support@jolimate.app" className="text-purple-600 hover:underline"> support@jolimate.app</a>.
        </p>
      </main>
      <Footer />
    </div>
  );
}
