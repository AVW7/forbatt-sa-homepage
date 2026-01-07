import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function SupportFAQ() {
  const faqCategories = [
    {
      category: "General Support",
      questions: [
        {
          question: "What are your support hours?",
          answer:
            "Our technical support team is available Monday to Friday, 8:00 AM to 5:00 PM SAST. For urgent matters outside business hours, please email support@forbatt.co.za and we'll respond as soon as possible.",
        },
        {
          question: "How quickly can I expect a response?",
          answer:
            "Phone and WhatsApp support provide immediate assistance during business hours. Email inquiries are typically responded to within 24 hours. Support tickets are prioritized based on urgency and impact.",
        },
        {
          question: "Do you offer on-site support?",
          answer:
            "Yes, we provide on-site support for installation, maintenance, and troubleshooting. Contact our support team to schedule a site visit. Additional fees may apply depending on location and service requirements.",
        },
      ],
    },
    {
      category: "Technical Support",
      questions: [
        {
          question: "What information should I have ready when contacting support?",
          answer:
            "Please have the following ready: product model and serial number, description of the issue, any error messages, when the issue started, and steps you've already taken to resolve it. This helps us assist you more efficiently.",
        },
        {
          question: "Do you provide remote support?",
          answer:
            "Yes, for compatible systems we offer remote diagnostic and troubleshooting services. This allows us to quickly identify and often resolve issues without requiring a site visit.",
        },
        {
          question: "What if my product is still under warranty?",
          answer:
            "If your product is under warranty, repairs and replacements for manufacturing defects are covered at no additional cost. Please have your proof of purchase ready when contacting support.",
        },
      ],
    },
    {
      category: "Training & Resources",
      questions: [
        {
          question: "Do you offer product training?",
          answer:
            "Yes, we provide comprehensive training programs for all our products and solutions. Training can be conducted on-site, at our facilities, or online. Visit our Training page for course schedules and registration.",
        },
        {
          question: "Where can I find product documentation?",
          answer:
            "All product manuals, datasheets, and technical documentation are available on our Downloads page. You can filter by product category and type to find what you need.",
        },
        {
          question: "Are there video tutorials available?",
          answer:
            "Yes, we have an extensive library of video tutorials covering installation, configuration, and troubleshooting. These are available in our Resource Hub and on our YouTube channel.",
        },
      ],
    },
    {
      category: "Dealer & Partner Support",
      questions: [
        {
          question: "How do I become a Forbatt dealer?",
          answer:
            "We welcome partnerships with qualified businesses. Visit our Become a Dealer page to learn about requirements and submit an application. Our team will review and contact you regarding next steps.",
        },
        {
          question: "Is there dedicated support for dealers?",
          answer:
            "Yes, authorized dealers have access to a dedicated support line, technical resources, and priority assistance. You'll receive login credentials to our dealer portal upon approval.",
        },
        {
          question: "Do you provide marketing materials for dealers?",
          answer:
            "Authorized dealers have access to product images, brochures, presentation templates, and other marketing materials through our dealer portal. Co-marketing opportunities are also available.",
        },
      ],
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Find quick answers to common questions. Can't find what you're looking for? Contact our support team.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-2xl font-bold mb-4 text-(--color-fb-red)">{category.category}</h3>
              <Accordion type="single" collapsible className="space-y-2">
                {category.questions.map((item, index) => (
                  <AccordionItem key={index} value={`item-${categoryIndex}-${index}`} className="bg-card border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <span className="font-semibold">{item.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
