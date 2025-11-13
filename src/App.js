import React from 'react';
import './App.css';

const projectName = 'Selda';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const featureCards = [
  {
    icon: '🖥️',
    title: 'Live Class',
    description: 'Attend interactive live sessions with world-class instructors and collaborate in real time.',
  },
  {
    icon: '💬',
    title: 'Discuss',
    description: 'Stay connected with classmates and mentors in focused discussion channels.',
  },
  {
    icon: '✅',
    title: 'Task',
    description: 'Complete guided assignments and get rapid feedback to reinforce every lesson.',
  },
  {
    icon: '📚',
    title: 'Resources',
    description: 'Access comprehensive libraries, templates, and tools to accelerate your learning.',
  },
  {
    icon: '🎓',
    title: 'Certificates',
    description: 'Earn industry-recognized certificates that validate your skills and expertise.',
  },
  {
    icon: '👥',
    title: 'Community',
    description: 'Join a vibrant community of learners, mentors, and industry professionals.',
  },
];

const courses = [
  {
    title: 'Web Design',
    price: '$200',
    description: 'Craft beautiful interfaces with modern design systems and tooling.',
    image:
      'https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=700&q=80',
    meta: '40 Classes · 3 Months',
    rating: 4.9,
    students: 1200,
  },
  {
    title: 'Web Development',
    price: '$250',
    description: 'Build full-stack applications with clean architecture and great DX.',
    image:
      'https://images.unsplash.com/photo-1508830524289-0adcbe822b40?auto=format&fit=crop&w=700&q=80',
    meta: '30 Classes · 3 Months',
    rating: 4.8,
    students: 980,
  },
  {
    title: 'UI/UX Design',
    price: '$350',
    description: 'Research, prototype, and validate experiences that your users will love.',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=700&q=80',
    meta: '50 Classes · 4 Months',
    rating: 5.0,
    students: 1500,
  },
  {
    title: 'Data Science',
    price: '$400',
    description: 'Master data analysis, machine learning, and visualization techniques.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80',
    meta: '45 Classes · 4 Months',
    rating: 4.7,
    students: 850,
  },
];

const metrics = [
  { value: '100+', label: 'Popular Courses' },
  { value: '500+', label: 'Skilled Trainers' },
  { value: '1M+', label: 'Students Learning' },
  { value: '98%', label: 'Success Rate' },
];

const testimonials = [
  {
    quote:
      '“They are the best mentor team. Selda is the platform that helped me build confidence and skills from anywhere.”',
    name: 'Ben Foxlee',
    role: 'Product Designer, Student',
    avatar: 'BF',
  },
  {
    quote:
      '“The live classes and community support made all the difference. I landed my dream job after completing the course.”',
    name: 'Sarah Chen',
    role: 'Software Engineer, Graduate',
    avatar: 'SC',
  },
  {
    quote:
      '“Outstanding curriculum and instructors. The hands-on projects gave me real-world experience I could showcase.”',
    name: 'Marcus Johnson',
    role: 'UX Designer, Alumni',
    avatar: 'MJ',
  },
];

const pricingPlans = [
  {
    name: 'Starter',
    price: '$29',
    period: '/month',
    description: 'Perfect for individual learners getting started.',
    features: [
      'Access to 50+ courses',
      'Community support',
      'Certificate of completion',
      'Mobile app access',
    ],
    highlighted: false,
  },
  {
    name: 'Professional',
    price: '$79',
    period: '/month',
    description: 'Best for serious learners and career advancement.',
    features: [
      'Access to all courses',
      'Live class sessions',
      '1-on-1 mentorship',
      'Career guidance',
      'Priority support',
      'Industry certificates',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For teams and organizations looking to upskill.',
    features: [
      'Everything in Professional',
      'Team analytics',
      'Custom learning paths',
      'Dedicated account manager',
      'SSO integration',
      'Custom certificates',
    ],
    highlighted: false,
  },
];

const faqs = [
  {
    question: "How does the learning platform work?",
    answer:
      "Our platform offers a mix of self-paced courses, live sessions, and hands-on projects. You can learn at your own pace while having access to instructors and a supportive community.",
  },
  {
    question: "Can I get a refund if I am not satisfied?",
    answer:
      "Yes, we offer a 30-day money-back guarantee. If you are not satisfied with your learning experience, contact us for a full refund.",
  },
  {
    question: "Are the certificates recognized by employers?",
    answer:
      "Absolutely! Our certificates are industry-recognized and can be verified online. Many of our graduates have used them to advance their careers.",
  },
  {
    question: "What if I need help during the course?",
    answer:
      "You have access to community forums, live Q&A sessions, and for Professional plan members, 1-on-1 mentorship with industry experts.",
  },
  {
    question: "Can I access courses on mobile devices?",
    answer:
      "Yes! Our mobile app is available for iOS and Android, allowing you to learn on the go, download courses for offline viewing, and sync your progress.",
  },
];

const footerColumns = [
  {
    title: 'Company',
    links: ['About', 'Careers', 'Press'],
  },
  {
    title: 'Community',
    links: ['Team Plans', 'Blog', 'Students', 'Scholarships'],
  },
  {
    title: 'Teaching',
    links: ['Become a teacher', 'Teaching academy'],
  },
  {
    title: 'Be social',
    links: ['Twitter', 'Facebook', 'Instagram', 'LinkedIn'],
  },
];

function App() {
  return (
    <div className="page">
      <header className="site-header">
        <div className="site-header__brand">
          <span className="brand-mark">B</span>
          <span className="brand-name">{projectName}</span>
        </div>
        <nav className="site-header__nav">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="site-header__actions">
          <a href="#signin" className="link">
            Sign in
          </a>
          <a href="#contact" className="button button--primary button--sm">
            Sign up
          </a>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero__text reveal">
            <span className="hero__eyebrow">Easy learning platform</span>
            <h1>Words learner come here.</h1>
            <p>
              Build skills with expert-led courses, earn certificates, and access live classes from our global
              instructor network.
            </p>
            <div className="hero__actions">
              <a className="button button--primary" href="#courses">
                Get Started
              </a>
              <button type="button" className="button button--ghost">
                Watch Preview
              </button>
            </div>
            <div className="hero__meta">
              <div>
                <strong>Course</strong>
                <span>1,200+</span>
              </div>
              <div>
                <strong>Schedule</strong>
                <span>Flexible</span>
              </div>
              <div>
                <strong>Ratings</strong>
                <span>4.9/5</span>
              </div>
            </div>
          </div>
          <div className="hero__media">
            <div className="hero__image-wrapper reveal">
              <img
                src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=820&q=80"
                alt="Student celebrating success"
              />
              <div className="hero__floating hero__floating--schedule">
                <strong>Live schedule</strong>
                <p>Daily cohorts & office hours</p>
              </div>
              <div className="hero__floating hero__floating--people">
                <strong>Active learners</strong>
                <div className="avatar-group">
                  <span className="avatar">AM</span>
                  <span className="avatar">JL</span>
                  <span className="avatar">CR</span>
                  <span className="avatar avatar--more">+5</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section features" id="features">
          <header>
            <h2>We provide suitable features for students.</h2>
            <p>Discover powerful tools designed to keep learners engaged and motivated from day one.</p>
          </header>
          <div className="features__grid">
            {featureCards.map((feature) => (
              <article key={feature.title} className="reveal">
                <span className="features__icon" aria-hidden="true">
                  {feature.icon}
                </span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section courses" id="courses">
          <header>
            <div>
              <h2>Popular Courses</h2>
              <p>Choose the path that advances your goals. Every course blends instruction, projects, and feedback.</p>
            </div>
            <a href="#courses" className="link">
              View all courses
            </a>
          </header>
          <div className="courses__grid">
            {courses.map((course) => (
              <article key={course.title} className="courses__card reveal">
                <div className="courses__image-wrapper">
                  <img src={course.image} alt={course.title} />
                  <div className="courses__overlay">
                    <a className="button button--primary button--sm" href="#courses">
                      Enroll Now
                    </a>
                  </div>
                </div>
                <div className="courses__content">
                  <div className="courses__header">
                    <h3>{course.title}</h3>
                    <span className="courses__price">{course.price}</span>
                  </div>
                  <p>{course.description}</p>
                  <div className="courses__meta">
                    <span>{course.meta}</span>
                    <div className="courses__rating">
                      <span>⭐</span>
                      <strong>{course.rating}</strong>
                      <span>({course.students})</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section stats" id="about">
          <div className="stats__grid">
            {metrics.map((item) => (
              <div key={item.label} className="reveal">
                <span>{item.value}</span>
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section testimonials" id="stories">
          <header>
            <h2>What our students say</h2>
            <p>Join thousands of learners who have transformed their careers with our platform.</p>
          </header>
          <div className="testimonials__grid">
            {testimonials.map((testimonial, index) => (
              <article key={index} className="testimonial__card reveal">
                <div className="testimonial__quote">
                  <p>{testimonial.quote}</p>
                </div>
                <div className="testimonial__author">
                  <span className="avatar">{testimonial.avatar}</span>
                  <div>
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section pricing" id="pricing">
          <header>
            <h2>Choose your plan</h2>
            <p>Select the plan that best fits your learning goals and budget.</p>
          </header>
          <div className="pricing__grid">
            {pricingPlans.map((plan) => (
              <article key={plan.name} className={'pricing__card' + (plan.highlighted ? ' pricing__card--highlighted' : '') + ' reveal'}>
                {plan.highlighted && <span className="pricing__badge">Most Popular</span>}
                <div className="pricing__header">
                  <h3>{plan.name}</h3>
                  <div className="pricing__price">
                    <span>{plan.price}</span>
                    {plan.period && <span className="pricing__period">{plan.period}</span>}
                  </div>
                  <p>{plan.description}</p>
                </div>
                <ul className="pricing__features">
                  {plan.features.map((feature, index) => (
                    <li key={index}>
                      <span className="pricing__check">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a className={'button' + (plan.highlighted ? ' button--primary' : ' button--ghost')} href="#contact">
                  Get Started
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section faq" id="faq">
          <header>
            <h2>Frequently asked questions</h2>
            <p>Everything you need to know about our learning platform.</p>
          </header>
          <div className="faq__list">
            {faqs.map((faq, index) => (
              <details key={index} className="faq__item reveal">
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="section cta" id="contact">
          <div className="cta__content">
            <h2>Ready to get started?</h2>
            <p>Create your account, join a cohort, and start learning with industry pros today.</p>
          </div>
          <div className="cta__actions">
            <a className="button button--primary" href="#pricing">
              Get Started
            </a>
            <a className="button button--ghost" href="#courses">
              Explore courses
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-footer__brand">
          <span className="brand-mark">B</span>
          <span className="brand-name">{projectName}</span>
        </div>
        <div className="site-footer__columns">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h4>{column.title}</h4>
              <ul>
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#home">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="site-footer__copyright">
          © {new Date().getFullYear()} Selda Learning Platform. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;