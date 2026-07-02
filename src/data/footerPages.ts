export type FooterPage = {
  title: string
  eyebrow: string
  intro: string
  sections: { title: string; body: string; bullets?: string[] }[]
}

export const footerPages: Record<string, FooterPage> = {
  about: {
    title: 'About DRAPÉ',
    eyebrow: 'Our company',
    intro: 'We make personal style easier to discover, wear, and make your own.',
    sections: [
      { title: 'Our story', body: 'DRAPÉ began with a simple idea: great style should feel accessible, expressive, and effortless. We bring together everyday essentials and standout pieces so every wardrobe can feel personal.' },
      { title: 'What we believe', body: 'Clothes are more than products. They are part of how people move through the world.', bullets: ['Quality that lasts beyond a season', 'Inclusive styles for real people', 'Clear pricing and straightforward service'] },
      { title: 'Our community', body: 'More than 30,000 customers use DRAPÉ to explore new looks, revisit trusted staples, and build wardrobes that feel unmistakably their own.' },
    ],
  },
  features: {
    title: 'Features',
    eyebrow: 'Made for better shopping',
    intro: 'Everything you need to find the right clothes without the usual friction.',
    sections: [
      { title: 'Shop your way', body: 'Browse by dress style, collection, color, size, or price. Our filters help you move from inspiration to the right product quickly.' },
      { title: 'Confident decisions', body: 'Detailed photography, fit information, verified reviews, and clear product descriptions give you the context you need before buying.' },
      { title: 'A smoother checkout', body: 'Your cart stays with you, promotions are easy to apply, and checkout keeps every important detail visible in one place.' },
    ],
  },
  works: {
    title: 'How It Works',
    eyebrow: 'Simple from start to finish',
    intro: 'A straightforward shopping journey, from first browse to final delivery.',
    sections: [
      { title: '1. Discover', body: 'Explore new arrivals, top sellers, curated styles, or search directly for the piece you have in mind.' },
      { title: '2. Make it yours', body: 'Choose your color, size, and quantity. Add products to your cart and adjust them whenever you need.' },
      { title: '3. Check out', body: 'Enter your delivery details, review the order summary, and place your order through our secure checkout.' },
    ],
  },
  career: {
    title: 'Careers',
    eyebrow: 'Join the team',
    intro: 'Help us build a more thoughtful, useful, and joyful way to shop for style.',
    sections: [
      { title: 'Life at DRAPÉ', body: 'We are a curious, customer-focused team working across design, technology, merchandising, operations, and support.' },
      { title: 'How we work', body: 'We value clear thinking, kind candor, ownership, and people who care about the small details that make experiences feel excellent.' },
      { title: 'Open roles', body: 'There are no open roles in this demo storefront right now. Check back soon for opportunities across product, engineering, creative, and operations.' },
    ],
  },
  support: {
    title: 'Customer Support',
    eyebrow: 'We are here to help',
    intro: 'Find fast answers or get in touch with the DRAPÉ support team.',
    sections: [
      { title: 'Contact us', body: 'Our support team is available Monday through Saturday, 9:00 AM–6:00 PM.', bullets: ['Email: support@drape.com', 'Phone: +1 (800) 555-DRAPE', 'Typical response time: within one business day'] },
      { title: 'Before contacting us', body: 'Have your order number and the email address used at checkout ready. This helps us locate your purchase quickly.' },
      { title: 'Returns and exchanges', body: 'Unworn items with original tags may be returned within 30 days of delivery. Final-sale products are not eligible.' },
    ],
  },
  delivery: {
    title: 'Delivery Details',
    eyebrow: 'Shipping information',
    intro: 'Clear delivery choices, useful tracking, and no mysterious arrival windows.',
    sections: [
      { title: 'Standard delivery', body: 'Orders typically arrive within 4–7 business days after processing. Standard delivery is $15 and may be free during selected promotions.' },
      { title: 'Express delivery', body: 'Express orders typically arrive within 2–3 business days. Availability and pricing are shown during checkout.' },
      { title: 'Tracking your order', body: 'Once your package leaves our warehouse, we send a shipping confirmation with a tracking link. Tracking can take up to 24 hours to activate.' },
    ],
  },
  terms: {
    title: 'Terms & Conditions',
    eyebrow: 'Last updated June 25, 2026',
    intro: 'These terms explain the rules that apply when you browse or shop with DRAPÉ.',
    sections: [
      { title: 'Using our store', body: 'You may use this storefront for lawful personal shopping. Product availability, descriptions, and prices may change without notice.' },
      { title: 'Orders', body: 'An order is accepted after payment authorization and confirmation. We may cancel an order when an item is unavailable, a price is incorrect, or fraud is suspected.' },
      { title: 'Content and trademarks', body: 'DRAPÉ branding, interface design, copy, and original content may not be reproduced or used commercially without permission.' },
      { title: 'Demo notice', body: 'This project is a demonstration storefront. It does not process real payments or create real customer orders.' },
    ],
  },
  privacy: {
    title: 'Privacy Policy',
    eyebrow: 'Your information',
    intro: 'We believe privacy information should be understandable, not buried in legal fog.',
    sections: [
      { title: 'What we collect', body: 'A production store may collect contact, delivery, payment, device, and shopping activity information needed to provide its services.' },
      { title: 'How information is used', body: 'Information may be used to fulfill orders, provide support, prevent fraud, improve the store, and send marketing only where permitted.' },
      { title: 'Your choices', body: 'You may request access, correction, or deletion of eligible personal information and unsubscribe from marketing at any time.' },
      { title: 'Demo notice', body: 'This demo stores cart contents in your browser. Checkout fields are not sent to a server or retained after submission.' },
    ],
  },
  account: {
    title: 'Your Account',
    eyebrow: 'DRAPÉ membership',
    intro: 'Keep your shopping details organized and make every return visit faster.',
    sections: [
      { title: 'Account benefits', body: 'Save favorites, view order history, manage addresses, and receive personalized product recommendations.' },
      { title: 'Sign in', body: 'Account authentication is not connected in this demonstration. You can still browse, search, add items to your cart, and complete the demo checkout.' },
      { title: 'Account security', body: 'Never share your password or verification codes. DRAPÉ support will never ask for your complete payment details.' },
    ],
  },
  deliveries: {
    title: 'Manage Deliveries',
    eyebrow: 'Orders on the move',
    intro: 'Track shipments and understand what changes are possible after dispatch.',
    sections: [
      { title: 'Find a delivery', body: 'Use the tracking link in your shipping confirmation email. Signed-in customers can also find active deliveries in their account.' },
      { title: 'Change an address', body: 'Contact support as soon as possible. Addresses can only be changed before the warehouse begins packing the order.' },
      { title: 'Missing or delayed packages', body: 'Check the carrier tracking details and nearby safe locations first. If there is no update for two business days, contact our support team.' },
    ],
  },
  orders: {
    title: 'Orders',
    eyebrow: 'Order help',
    intro: 'Everything to know about confirmations, changes, cancellations, and returns.',
    sections: [
      { title: 'Order confirmation', body: 'After checkout, an order confirmation is sent to the email address provided. Check your spam folder if it does not arrive within a few minutes.' },
      { title: 'Changes and cancellations', body: 'We process orders quickly. Contact support immediately if you need a change; we cannot guarantee changes after packing begins.' },
      { title: 'Returns', body: 'Eligible unworn products may be returned within 30 days. Refunds are issued to the original payment method after inspection.' },
    ],
  },
  payments: {
    title: 'Payments',
    eyebrow: 'Secure and straightforward',
    intro: 'Learn about accepted payment methods, charges, and refunds.',
    sections: [
      { title: 'Accepted methods', body: 'DRAPÉ supports major credit and debit cards, PayPal, and eligible mobile wallet payments.' },
      { title: 'When you are charged', body: 'Payment is authorized when the order is placed and charged when the order is confirmed for fulfillment.' },
      { title: 'Refund timing', body: 'Approved refunds are submitted immediately, though banks may take 5–10 business days to display the funds.' },
    ],
  },
  ebooks: {
    title: 'Free Style Guides',
    eyebrow: 'DRAPÉ resources',
    intro: 'Practical guides for building outfits, choosing better basics, and caring for clothes.',
    sections: [
      { title: 'The Everyday Wardrobe', body: 'A concise guide to building flexible outfits from a small set of dependable pieces.' },
      { title: 'Finding Your Fit', body: 'Learn how garment measurements, silhouettes, and fabric choices affect the way clothes fit and move.' },
      { title: 'Clothing Care 101', body: 'Simple washing, drying, storage, and repair habits that help favorite pieces last longer.' },
    ],
  },
  tutorial: {
    title: 'Development Tutorial',
    eyebrow: 'Behind the storefront',
    intro: 'A high-level look at how a modern commerce interface comes together.',
    sections: [
      { title: 'Design system', body: 'Start with reusable typography, spacing, buttons, cards, forms, and responsive layout rules before assembling pages.' },
      { title: 'Product architecture', body: 'Keep product data separate from presentation, use route-driven detail pages, and centralize cart state so every screen stays synchronized.' },
      { title: 'Quality checks', body: 'Verify keyboard navigation, mobile overflow, loading states, checkout validation, production builds, and the complete browse-to-cart flow.' },
    ],
  },
  blog: {
    title: 'How-To Blog',
    eyebrow: 'Ideas and advice',
    intro: 'Useful notes for getting more from your wardrobe without overthinking it.',
    sections: [
      { title: 'How to balance proportions', body: 'Pair relaxed pieces with more structured shapes and use waistlines, hems, and layers to create a clear silhouette.' },
      { title: 'How to wear one piece three ways', body: 'Start with a versatile base, then change shoes, outerwear, and accessories to move between casual, work, and evening looks.' },
      { title: 'How to shop more intentionally', body: 'Before buying, imagine at least three outfits using pieces you already own and check the care requirements.' },
    ],
  },
  youtube: {
    title: 'Video Playlist',
    eyebrow: 'Watch and learn',
    intro: 'A collection of short fashion lessons, styling walkthroughs, and product explainers.',
    sections: [
      { title: 'Style foundations', body: 'Start with fit, color, proportion, and layering—the four ideas behind almost every strong everyday outfit.' },
      { title: 'Wardrobe workshops', body: 'Follow practical sessions on capsule wardrobes, seasonal transitions, denim fits, and smart casual dressing.' },
      { title: 'Coming soon', body: 'The DRAPÉ video channel is not connected in this demonstration. This page is ready for the final playlist embeds.' },
    ],
  },
}
