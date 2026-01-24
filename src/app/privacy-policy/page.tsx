export default function PrivacyPolicyPage() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-sm text-muted-foreground mb-8">Effective Date: 17 January 2026</p>

            <div className="space-y-8 text-base leading-relaxed text-foreground/90">
                <p>
                    Meronatic PRO Services is committed to protecting the privacy and confidentiality of our
                    clients and website visitors. This Privacy Policy explains how we collect, use, store, and
                    protect your personal information in compliance with applicable UAE laws and regulations.
                </p>

                <section>
                    <h2 className="text-xl font-bold mb-4 text-foreground">1. Information We Collect</h2>
                    <p className="mb-4">We may collect the following types of information:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Full name and contact details (email address, phone number).</li>
                        <li>Company information and trade license details.</li>
                        <li>Service-related documents and application data.</li>
                        <li>Information submitted voluntarily through our inquiry forms.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-4 text-foreground">2. How We Use Your Information</h2>
                    <p className="mb-4">We use the collected information for the following purposes:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>To respond to your inquiries and provide requested services.</li>
                        <li>To process PRO services, visa applications, and government documentation.</li>
                        <li>To communicate important updates regarding your applications or services.</li>
                        <li>To improve our website functionality and customer service.</li>
                        <li>To comply with legal obligations and UAE government requirements.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-4 text-foreground">3. Data Protection</h2>
                    <p>
                        We implement appropriate technical and organizational security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. Access is restricted to authorized personnel who require it to perform their duties.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-4 text-foreground">4. Sharing of Information</h2>
                    <p className="mb-4">
                        We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>With UAE government authorities as required to process your applications.</li>
                        <li>With trusted third-party service providers who assist us in operating our business.</li>
                        <li>When required by law or to protect our rights and safety.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-4 text-foreground">5. Cookies</h2>
                    <p>
                        Our website may use cookies to enhance your user experience. You can choose to disable cookies through your individual browser options, though this may affect your ability to use certain features of the site.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-4 text-foreground">6. Your Rights</h2>
                    <p className="mb-4">
                        Under applicable laws, you have the right to request access to the personal data we hold about you, to request corrections to any inaccuracies, and to request the deletion of your data, subject to legal retention periods.
                    </p>
                </section>

                <section className="pt-8 border-t">
                    <h2 className="text-xl font-bold mb-4 text-foreground">Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us at: <br />
                        <a href="mailto:info@meronatic.com" className="text-primary hover:underline font-medium">info@meronatic.com</a>
                    </p>
                </section>
            </div>
        </div>
    );
}
