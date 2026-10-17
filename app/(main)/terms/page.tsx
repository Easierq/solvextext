"use client";
import { motion } from "framer-motion";
import {
  FileText,
  Scale,
  AlertTriangle,
  CheckCircle,
  Ban,
  DollarSign,
} from "lucide-react";
import Link from "next/link";

export default function TermsOfServicePage() {
  const companyName = "Timbercraft";
  const sections = [
    {
      icon: FileText,
      title: "Acceptance of Terms",
      content: [
        {
          subtitle: "",
          text: "By accessing and using the Timbercraft website and services, you accept and agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our services.",
        },
        {
          subtitle: "",
          text: "We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of our services after changes are posted constitutes acceptance of the modified terms.",
        },
      ],
    },
    {
      icon: CheckCircle,
      title: "Services Provided",
      content: [
        {
          subtitle: "Flooring Services",
          text: "Timbercraft provides professional wood flooring services including hardwood floor installation, refinishing, sanding, staining, repair, restoration, and maintenance. We work with solid hardwood, engineered hardwood, and luxury vinyl plank flooring. Specific services and deliverables will be outlined in individual contracts or proposals.",
        },
        {
          subtitle: "Service Availability",
          text: "While we strive to maintain consistent service availability, we do not guarantee immediate availability at all times. We may modify, suspend, or reschedule services due to weather conditions, material availability, subfloor issues requiring additional work, or other circumstances beyond our control.",
        },
        {
          subtitle: "Project Scope",
          text: "Each flooring project scope, timeline, materials, and deliverables will be clearly defined in a separate contract or proposal. Additional work beyond the agreed scope (such as subfloor repairs, moisture remediation, or floor leveling) may incur additional fees and will require written approval.",
        },
      ],
    },
    {
      icon: DollarSign,
      title: "Fees and Payment",
      content: [
        {
          subtitle: "Estimates and Quotes",
          text: "Initial consultations and estimates may be complimentary or fee-based as specified at booking. Project fees will be outlined in your contract and may be structured as per square foot pricing, flat fees, or hourly rates depending on the service type and complexity.",
        },
        {
          subtitle: "Payment Terms",
          text: "Payment schedules vary by project and will be specified in your contract. Typically, a deposit is required upon contract signing to reserve your project date and order materials, with progress payments at milestones, and final payment due upon project completion and your approval. We accept various forms of payment including checks, credit cards, and electronic transfers.",
        },
        {
          subtitle: "Cancellation and Refunds",
          text: "Cancellation policies and refund eligibility will be outlined in your contract. Generally, deposits are non-refundable once materials have been ordered or work has commenced. Cancellations must be made in writing. Custom wood species or finishes ordered specifically for your project are non-refundable.",
        },
      ],
    },
    {
      icon: Scale,
      title: "Materials and Installation",
      content: [
        {
          subtitle: "Wood Selection",
          text: "We offer a wide selection of hardwood species, engineered products, and finishes. Wood is a natural product with variations in grain, color, and character. We will help you select appropriate materials for your project, but final color and grain variations are inherent to natural wood and not considered defects.",
        },
        {
          subtitle: "Acclimation Requirements",
          text: "Hardwood flooring must acclimate to your home's environment before installation. Required acclimation time will be specified in your contract. Clients must maintain consistent temperature (60-80°F) and humidity (35-55%) during acclimation and for the life of the floor.",
        },
        {
          subtitle: "Subfloor Conditions",
          text: "Proper subfloor preparation is essential for successful installation. Additional charges may apply if subfloor repairs, leveling, or moisture remediation is required beyond what was visible during initial assessment. We will notify you of any additional work needed before proceeding.",
        },
      ],
    },
    {
      icon: AlertTriangle,
      title: "Limitations of Liability",
      content: [
        {
          subtitle: "",
          text: "Timbercraft is not liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services or any pre-existing subfloor conditions, moisture problems, structural issues, or hidden damage not discovered during initial inspection.",
        },
        {
          subtitle: "",
          text: "We are not responsible for delays or failures in performance caused by circumstances beyond our reasonable control, including severe weather, material shortages, supply chain disruptions, unforeseen subfloor conditions requiring additional work, or client-caused delays.",
        },
        {
          subtitle: "",
          text: "Our total liability for any claims related to our services shall not exceed the total amount paid by the client for the specific service giving rise to the claim. We carry appropriate insurance coverage including general liability and workers' compensation as required by law.",
        },
      ],
    },
    {
      icon: Ban,
      title: "Client Responsibilities",
      content: [
        {
          subtitle: "Site Preparation",
          text: "Clients are responsible for removing all furniture, area rugs, and belongings from the work area before installation begins. We can recommend professional moving services if needed. You must also remove or secure any items on walls that could be affected by sanding dust, even with our dust containment systems.",
        },
        {
          subtitle: "Environmental Conditions",
          text: "Clients must maintain consistent temperature (60-80°F) and humidity (35-55%) in the home during acclimation, installation, and the curing period. Failure to maintain proper conditions may void warranty coverage and can result in flooring problems such as gapping, cupping, or finish defects.",
        },
        {
          subtitle: "Access and Safety",
          text: "Clients must provide clear and safe access to all work areas and ensure utilities (electricity and water) are available. You must secure pets during installation. Children should be kept away from work areas for safety. We may use dust containment systems, but some dust is inevitable during sanding and refinishing.",
        },
        {
          subtitle: "Property Disclosure",
          text: "Clients must disclose any known issues including previous water damage, pet stains, structural problems, radiant heating systems, or prior flooring repairs. Hidden conditions not disclosed may result in additional charges if discovered during work.",
        },
      ],
    },
  ];

  return (
    <div className="flex min-h-[60vh] items-center justify-center text-center text-7xl font-bold uppercase">
      Terms of Service
    </div>
  );
}
