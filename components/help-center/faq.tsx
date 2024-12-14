// components/help-center/faq.tsx
"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "How do I reset my account password?",
    answer:
      "To reset your password, go to your account settings, select 'Change Password', and follow the prompts. A confirmation email will be sent to your registered email address.",
  },
  {
    question: "How can I upgrade my subscription?",
    answer:
      "Log in to your account, navigate to the 'Subscriptions' section, and select the new plan you'd like to switch to. Confirm your payment method and submit.",
  },
  {
    question: "What are some tips for creating a compelling dating profile?",
    answer:
      "Start with a clear, recent photo, write a concise and positive bio, and mention your interests. Avoid clichés and focus on what makes you unique.",
  },
  {
    question: "How do I cancel my subscription?",
    answer:
      "Visit your account dashboard, click on 'Subscriptions', and select 'Cancel'. You’ll receive a confirmation email. Note that cancellations take effect at the end of the current billing period.",
  },
];

export function Faq() {
  return (
    <section className="mt-16">
      <h2 className="text-3xl font-semibold mb-6 text-center">
        Frequently Asked Questions
      </h2>
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem value={`faq-${index}`} key={index}>
              <AccordionTrigger className="flex justify-between items-center w-full text-left bg-gray-100 p-4 rounded-lg">
                <span>{faq.question}</span>
                <ChevronDown className="h-5 w-5 text-gray-500" />
              </AccordionTrigger>
              <AccordionContent className="p-4 bg-white rounded-lg shadow-inner">
                <p className="text-gray-700">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
