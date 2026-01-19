export default function DisclaimerPage() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Disclaimer</h1>

            <div className="space-y-8 text-base leading-relaxed text-foreground/90">
                <section>
                    <h2 className="text-xl font-bold mb-4 text-foreground">Service Facilitator</h2>
                    <p>
                        Meronatic PRO Services acts as a professional business consultant and service facilitator. We are a private entity and <strong>do not represent</strong> any United Arab Emirates government authority, ministry, or official body. We assist clients in navigating government procedures but have no authority to approve or reject applications.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-4 text-foreground">No Legal Advice</h2>
                    <p>
                        The information contained on this website is for general informational purposes only. It does not constitute legal, financial, or tax advice. While we strive to keep information up to date, UAE laws and regulations are subject to change. You should not act upon this information without seeking professional counsel specific to your situation.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-4 text-foreground">Government Updates and Approvals</h2>
                    <p>
                        Government rules, regulations, fees, and processing timelines can change without notice. All final decisions regarding visa issuance, trade licensing, and other government approvals remain at the sole discretion of the respective UAE government authorities. Meronatic PRO Services cannot guarantee the outcome of any application.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-4 text-foreground">Third-Party Links</h2>
                    <p>
                        This website may contain links to external websites that are not provided or maintained by us. We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
                    </p>
                </section>

                <section className="pt-8 border-t">
                    <p className="font-medium">
                        By using this website or our services, you acknowledge that you have read and understood this disclaimer.
                    </p>
                </section>
            </div>
        </div>
    );
}
