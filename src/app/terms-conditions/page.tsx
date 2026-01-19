export default function TermsConditionsPage() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms and Conditions</h1>

            <div className="space-y-8 text-base leading-relaxed text-foreground/90">
                <p>
                    Welcome to Meronatic PRO Services. By accessing this website or engaging our services, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.
                </p>

                <section>
                    <h2 className="text-xl font-bold mb-4 text-foreground">1. Scope of Services</h2>
                    <p className="mb-4">Meronatic PRO Services provides professional assistance and consultancy for:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Business setup and company formation in the UAE.</li>
                        <li>Trade license issuance and renewals.</li>
                        <li>Visa processing, immigration, and labor services.</li>
                        <li>Government documentation and approvals.</li>
                        <li>Emirates ID typings and medical fitness application support.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-4 text-foreground">2. Client Responsibilities</h2>
                    <p className="mb-4">The client agrees to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Provide accurate, complete, and authentic documentation and information.</li>
                        <li>Ensure compliance with all applicable UAE laws and regulations.</li>
                        <li>Make timely payments of all government fees and service charges.</li>
                        <li>Notify us immediately of any changes to their legal status or contact information.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-4 text-foreground">3. Fees and Payments</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Service Fees:</strong> All professional service fees are agreed upon in advance and are separate from government costs.</li>
                        <li><strong>Government Fees:</strong> Costs payable to government authorities (Economic Department, Immigration, Ministry of Human Resources, etc.) are the sole responsibility of the client.</li>
                        <li><strong>Refunds:</strong> Payments made for services are generally non-refundable once processing has commenced, unless otherwise agreed in writing.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-4 text-foreground">4. Processing Timelines</h2>
                    <p>
                        Any timelines provided by Meronatic PRO Services are estimates based on current government procedures. We are not responsible for delays caused by government authorities, system outages, or incomplete documentation provided by the client.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-4 text-foreground">5. Limitation of Liability</h2>
                    <p className="mb-4">Meronatic PRO Services shall not be liable for:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Rejection of applications by government authorities for any reason.</li>
                        <li>Fines or penalties incurred due to client delays or non-compliance.</li>
                        <li>Indirect, incidental, or consequential damages arising from the use of our services.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-4 text-foreground">6. Governing Law</h2>
                    <p>
                        These terms and conditions are governed by and construed in accordance with the laws of the United Arab Emirates.
                    </p>
                </section>

                <section className="pt-8 border-t">
                    <p className="text-sm text-muted-foreground">
                        For any queries regarding these terms, please contact us at <a href="mailto:info@meronatic.com" className="text-primary hover:underline">info@meronatic.com</a>.
                    </p>
                </section>
            </div>
        </div>
    );
}
