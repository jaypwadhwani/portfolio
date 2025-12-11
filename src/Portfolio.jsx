import React, { useState, useEffect } from 'react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [emailTooltip, setEmailTooltip] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    // Throttle scroll events for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, []);

  // Reset scroll position when section changes
  useEffect(() => {
    // Reset window scroll
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Reset all section scroll positions
    const allSections = document.querySelectorAll('section[data-section]');
    allSections.forEach(section => {
      section.scrollTop = 0;
    });
  }, [activeSection]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  const projects = [
    {
      title: "15% Teen MAU Growth: Activating 90M Daily Logged-Out Instagram Visitors",
      company: "Meta",
      year: "2022-2023",
      role: "Lead Product Manager",
      impact: "90M daily users • 12% lift in activation • Increased U.S. Teen MAU in H2 2022",
      description: "Led growth strategy for logged-out surfaces, creating ML-driven personalization that transformed visitor experience. Patent pending for innovation.",
      tags: ["Growth", "ML/AI", "Activation", "Patent Pending"],
      image: "/images/instagram-logged-out-mobile.png",
      imageLink: "https://www.instagram.com/explore/",
      details: {
        problem: "Logged out surfaces on mobile web were a walled garden of upsells little visibility into product features, providing minimal incentive for visitors to join Instagram.",
        solution: "Established a phased growth strategy by (a) launching engaging experiences on logged-out surfaces, and (b) defining a roadmap for ML-powered personalization using visitor intent and content signals to deliver smarter, context-driven upsells.",
        impact: [
          "Increased U.S. Teen MAU in H2 2022",
          "Drove 12% lift in activation",
          "90M people per day using logged-out experience",
          "Patent application filed (18/511,564)"
        ],
        approach: [
          "Short-term: Showcased most engaging Instagram experiences on logged-out surfaces",
          "Long-term: Initiated development of ML models to predict optimal upsell timing based on user behavior patterns",
          "Monetization: Forecasted new revenue streams (like introducing ads to logged out surfaces)",
          "Onboarding: Improved onboarding by incorporating logged-out behavioral data to better inform the new user experience."
        ]
      }
    },
    {
      title: "$100M+ Product Roadmap: Rebuilding Beauty Shopping During the Pandemic",
      company: "Macy's",
      year: "2020-2022",
      role: "Principal Product Manager",
      impact: "$100M+ annual roadmap • 20% increase in add-to-bag • 7% conversion lift",
      description: "Built 0-to-1 product roadmap for Digital Beauty during pandemic. Delivered AR virtual try-on featured in CEO earnings reports.",
      tags: ["0-to-1", "AR/AI", "Innovation", "Strategy"],
      image: "/images/macys-beauty-preview.png",
      imageLink: "https://www.macys.com/shop/virtual-try-on/",
      details: {
        problem: "During the pandemic, store closures eliminated the ability for beauty shoppers to test makeup and fragrance products. Without the ability to try before buying, conversion dropped sharply and beauty revenue declined.",
        solution: "As the first hire on the Innovation team, I led the strategy and roadmap for Virtual Try-On, Virtual Advisor, and Live Video Shopping, creating digital experiences that recreated the in-store testing journey.",
        impact: [
          "Generated $100M+ in annual sales",
          "20% increase in add-to-bag rate",
          "7% increase in conversion",
          "Featured in CEO earnings reports",
          "First multi-category retailer to partner with Facebook for Virtual Try-On"
        ],
        approach: [
          "Customer Research: Surveyed 10,000 Macy's shoppers to understand pain points",
          "Stakeholder Alignment: Met with the President of L'Oreal and ELC brands",
          "Competitive Analysis: Studied Sephora's digital-first approach",
          "Data Analysis: Looked at previous experimentation data to evaluate what worked and what needed to be changed"
        ]
      }
    },
    {
      title: "One-Click Company Pages: $20M Annual Revenue & 80% Complaint Reduction",
      company: "LinkedIn",
      year: "2016-2019",
      role: "Senior Product Operations Manager",
      impact: "$20M new revenue • 80% reduction in complaints • 50% drop-off reduction",
      description: "Redesigned company page creation flow, eliminating 16-step process and reducing friction for new advertisers.",
      tags: ["Growth", "B2B", "Customer-Obsessed"],
      image: "/images/linkedin-company-pages.png",
      imageLink: "https://business.linkedin.com/advertise/linkedin-pages",
      details: {
        problem: "Company page creation was LinkedIn's #1 case driver with 2,000 complaints/week. New advertisers faced 16 steps to advertise, with 70% drop-off rate during page creation. Cost: $20-25M in lost annual revenue.",
        solution: "Created one-click company page creation process, eliminated email domain confirmation, and built admin access request flow to balance privacy with business needs.",
        impact: [
          "$20M increase in annual revenue from new advertisers",
          "80% reduction in customer case volume",
          "50% reduction in drop-off rate",
          "Won 'Members First' award company-wide",
          "Featured in front of entire company"
        ],
        approach: [
          "Data Analysis: Compiled complaints data and traced revenue loss",
          "Design: Worked with UX to create one-click flow",
          "Risk Mitigation: Implemented flagging system for spam, rate limiting",
          "Privacy Balance: Created admin access request flow with 30-day timeout",
          "Cold Start Solution: Rolled up multi-step forms into single experience with auto-population"
        ]
      }
    },
    {
      title: "Scaled to 70M Profiles: Solving Dating App's Cold-Start Problem with ML",
      company: "SetMeUp",
      year: "2011-2015",
      role: "CEO & Co-founder",
      impact: "70M profile database • 100K users in 3 months • Solved cold-start problem",
      description: "Built ML algorithm that solved dating app's chicken-and-egg problem by inferring relationships and creating profiles without direct user signup.",
      tags: ["Technical Innovation", "ML", "Startup"],
      image: "/images/setmeup-app.png",
      details: {
        problem: "Classic cold-start problem: users won't join dating apps unless there's already a critical mass of users. Without User B (matchmaker) on the app, couldn't show User A their potential matches.",
        solution: "Developed algorithm using Facebook API 1.0 to infer relationships based on social behavior (photo tags, interactions). Could create User C profiles without them directly joining the app.",
        impact: [
          "Scaled to 70M profile database",
          "100,000 users within first 3 months",
          "56%+ monthly retention rates",
          "Acquisition costs: 1/10th industry standard",
          "Received acquisition offers",
          "First company to show friends-of-friends profiles without user signup"
        ],
        approach: [
          "Algorithm: Analyzed social graph to presume friendships based on Facebook behavior",
          "Data Scraping: Pulled available information for User C to create visible profiles",
          "Technical Stack: Built on AWS, scaled to handle 70M profiles",
          "User Consent: Leveraged Facebook API 1.0 consent model (pre-Cambridge Analytica)",
          "Product Development: Led 8-person team, built 3 iOS apps, 3 Android apps, 1 PHP web app"
        ]
      }
    },
    {
      title: "Integrated Gen AI Into Shop With Friends, Increasing Engagement and Retailer Adoption",
      company: "Fevo",
      year: "2023-2024",
      role: "Director, Head of Product Management",
      impact: "B2B2C API • Partnership with Michael Kors, Tiffany & Co",
      description: "Partnered with CEO to redefine e-commerce with AI, integrating Gen AI to enhance social shopping through friend recommendations and conversation starters.",
      tags: ["Gen AI", "Social Commerce", "B2B2C SaaS"],
      image: "/images/fevo-shop-with-friends.png",
      imageLink: "https://www.fevo.com/",
      details: {
        problem: "Online shopping is transactional and efficiency-focused, lacking the human connection and collaborative aspects that make in-person shopping engaging and confidence-building.",
        solution: "Built 'Shop With Friends' experience leveraging Gen AI to (1) analyze contact lists and recommend friends likely to provide relevant feedback, and (2) generate contextually relevant conversation starters based on product metadata.",
        impact: [
          "Deployed Shop With Friends API with Michael Kors and Tiffany & Co",
          "Higher customer satisfaction scores",
          "Increased time spent on retailer websites",
          "Solidified Fevo's position as leader in social commerce"
        ],
        approach: [
          "AI Friend Recommendations: Built model analyzing contact list, past interactions, shared interests",
          "Gen AI Prompts: Trained model on product metadata to generate contextual questions",
          "User Testing: Extensive feedback gathering to refine recommendations and prompts",
          "Retail Integration: Collaborated with partners to align AI features with brand voice",
          "Team Leadership: Led 3 product managers in creating scalable API roadmap"
        ]
      }
    },
    {
      title: "Redesigned Bucket Listers App to Attract 19M IG Followers",
      company: "Bucket Listers",
      year: "2024-Present",
      role: "SVP Product Management",
      impact: "NLP Search • AI Dynamic Pricing • Programmatic SEO",
      description: "Leading consumer product vision with AI-led approach, reimagining user experience for frictionless signups and ticket purchases through personalization.",
      tags: ["Current Work", "NLP", "AI Strategy", "Consumer"],
      image: "/images/bucket-listers-app.png",
      imageLink: "https://bucketlisters.com/select-city",
      details: {
        problem: "Users struggle with frictionless event discovery, ticket purchasing, and staying engaged with the platform. Traditional search and pricing models don't adapt to user behavior or market dynamics.",
        solution: "Driving AI-first consumer product strategy with NLP-powered search, dynamic pricing algorithms, and programmatic SEO for growth. Leading team redesigning mobile and web experiences with deep personalization.",
        impact: [
          "Leading team on mobile/web redesign",
          "Implementing NLP search for natural language queries",
          "Building AI dynamic pricing based on demand/behavior",
          "Programmatic SEO strategy for user growth",
          "Reporting directly to CEO on consumer product vision"
        ],
        approach: [
          "NLP Search: Natural language processing to understand user intent",
          "AI Pricing: Dynamic algorithms adjusting ticket prices based on demand signals",
          "Personalization: Deep user profiling for tailored recommendations",
          "Growth Strategy: Programmatic SEO to scale content and drive organic traffic",
          "Team Leadership: Oversee team focusing on frictionless user journeys"
        ]
      }
    }
  ];

  const Navigation = () => (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-200 ease-in-out shadow-sm" style={{ overflow: 'visible', backgroundColor: '#001F3F' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2" style={{ overflow: 'visible' }}>
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-col items-start flex-shrink-0 min-w-0 relative" style={{ zIndex: 100 }}>
            <button onClick={() => handleSectionChange('home')} className="hover:opacity-70 transition-opacity duration-200" style={{ color: '#FFFFFF' }}>
              <span className="text-lg sm:text-xl font-bold tracking-tight truncate block">Jay Wadhwani</span>
            </button>
            <button
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText('Jay.P.Wadhwani@gmail.com');
                  setEmailCopied(true);
                  setTimeout(() => setEmailCopied(false), 2000);
                } catch (err) {
                  console.error('Failed to copy email:', err);
                }
              }}
              onMouseEnter={() => setEmailTooltip(true)}
              onMouseLeave={() => {
                setEmailTooltip(false);
                setEmailCopied(false);
              }}
              className="text-xs font-normal tracking-normal truncate mt-0.5 cursor-pointer hover:opacity-80 transition-opacity duration-200 relative"
              style={{ color: '#E6F0F8', zIndex: 100 }}
            >
              Jay.P.Wadhwani@gmail.com
              {(emailTooltip || emailCopied) && (
                <div 
                  className="absolute bottom-full left-0 mb-2 px-3 py-2 rounded shadow-lg whitespace-nowrap animate-fadeIn pointer-events-none"
                  style={{ 
                    backgroundColor: '#FFFFFF',
                    color: '#001F3F',
                    zIndex: 101
                  }}
                >
                  {emailCopied ? '✓ Copied!' : 'Copy Email'}
                  <div 
                    className="absolute top-full left-4 w-0 h-0 border-l-4 border-r-4 border-t-4"
                    style={{ 
                      borderLeftColor: 'transparent',
                      borderRightColor: 'transparent',
                      borderTopColor: '#FFFFFF'
                    }}
                  ></div>
                </div>
              )}
            </button>
          </div>
          
          <div className="hidden xl:flex items-center gap-4 2xl:gap-6 flex-shrink-0">
            {['home', 'work', 'ai-projects', 'about'].map((section) => (
              <button
                key={section}
                onClick={() => handleSectionChange(section)}
                className={`text-xs 2xl:text-sm uppercase tracking-wider transition-all duration-200 ease-in-out whitespace-nowrap ${activeSection === section ? 'font-semibold' : ''}`}
                style={{ 
                  color: activeSection === section ? '#FFFFFF' : '#E6F0F8',
                }}
                onMouseEnter={(e) => e.target.style.color = '#FFFFFF'}
                onMouseLeave={(e) => e.target.style.color = activeSection === section ? '#FFFFFF' : '#E6F0F8'}
              >
                {section.replace('-', ' ')}
              </button>
            ))}
            <a href="https://www.linkedin.com/in/jaypwadhwani/" target="_blank" rel="noopener noreferrer" className="text-xs 2xl:text-sm uppercase tracking-wider transition-colors duration-200 whitespace-nowrap" style={{ color: '#E6F0F8' }} onMouseEnter={(e) => e.target.style.color = '#FFFFFF'} onMouseLeave={(e) => e.target.style.color = '#E6F0F8'}>LinkedIn</a>
            <a href="https://github.com/jaypwadhwani" target="_blank" rel="noopener noreferrer" className="text-xs 2xl:text-sm uppercase tracking-wider transition-colors duration-200 whitespace-nowrap" style={{ color: '#E6F0F8' }} onMouseEnter={(e) => e.target.style.color = '#FFFFFF'} onMouseLeave={(e) => e.target.style.color = '#E6F0F8'}>GitHub</a>
          </div>

          <button className="xl:hidden text-2xl hover:opacity-70 transition-opacity duration-200 flex-shrink-0" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ color: '#FFFFFF' }}>
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {mobileMenuOpen && (
          <>
            {/* Backdrop overlay */}
            <div 
              className="xl:hidden fixed inset-0 bg-black/50"
              onClick={() => setMobileMenuOpen(false)}
              style={{ top: '0', zIndex: 40 }}
            ></div>
            {/* Mobile menu */}
            <div className="xl:hidden fixed left-0 right-0 py-6 px-6 space-y-4 animate-fadeIn shadow-lg" style={{ backgroundColor: '#001F3F', top: '80px', maxHeight: 'calc(100vh - 80px)', overflowY: 'auto', zIndex: 60 }}>
              {['home', 'work', 'ai-projects', 'about'].map((section) => (
                <button 
                  key={section} 
                  onClick={() => { handleSectionChange(section); setMobileMenuOpen(false); }} 
                  className="block w-full text-left text-base uppercase tracking-wider py-3 px-4 transition-all duration-200 rounded"
                  style={{ 
                    color: activeSection === section ? '#FFFFFF' : '#E6F0F8',
                    backgroundColor: activeSection === section ? '#003366' : 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    if (activeSection !== section) {
                      e.target.style.backgroundColor = '#003366';
                      e.target.style.color = '#FFFFFF';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeSection !== section) {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.color = '#E6F0F8';
                    }
                  }}
                >
                  {section.replace('-', ' ')}
                </button>
              ))}
              <div className="pt-4 border-t" style={{ borderColor: '#003366' }}>
                <a 
                  href="https://www.linkedin.com/in/jaypwadhwani/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block text-base py-3 px-4 transition-all duration-200 rounded"
                  style={{ color: '#E6F0F8' }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#003366';
                    e.target.style.color = '#FFFFFF';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = '#E6F0F8';
                  }}
                >
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/jaypwadhwani" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block text-base py-3 px-4 transition-all duration-200 rounded"
                  style={{ color: '#E6F0F8' }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#003366';
                    e.target.style.color = '#FFFFFF';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = '#E6F0F8';
                  }}
                >
                  GitHub
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );

  const Hero = () => {
    const isActive = activeSection === 'home';
    return (
      <section 
        className={`min-h-screen flex items-center justify-center px-6 pt-20 absolute inset-0 transition-opacity duration-500 ease-in-out ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}
      >
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-none" style={{ color: '#001F3F' }}>
              Building products<br />
              <span className="italic font-light">that connect people</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl leading-relaxed" style={{ color: '#5A7A9A' }}>
              Product leader with 12+ years of 0→1 and growth experience at Instagram, LinkedIn, and IBM, creating scalable, user-obsessed solutions across consumer, e-commerce, and AI.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <button 
              onClick={() => handleSectionChange('work')} 
              className="px-8 py-4 text-white transition-all duration-200 ease-in-out flex items-center gap-2 group"
              style={{ backgroundColor: '#001F3F' }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#003366'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#001F3F'}
            >
              View My Work →
            </button>
            <button 
              onClick={() => handleSectionChange('ai-projects')} 
              className="px-8 py-4 border-2 transition-all duration-200 ease-in-out"
              style={{ 
                borderColor: '#001F3F',
                color: '#001F3F',
                backgroundColor: 'transparent'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#001F3F';
                e.target.style.color = '#FFFFFF';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#001F3F';
              }}
            >
              AI Projects
            </button>
              </div>
            </div>
            <div className="hidden md:flex justify-center items-center">
              <div className="relative">
                <img 
                  src="/images/headshot.jpg" 
                  alt="Jay Wadhwani" 
                  className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover shadow-lg"
                  style={{ border: '2px solid #001F3F' }}
                />
              </div>
          </div>
          </div>
        </div>
      </section>
    );
  };

  const Work = () => {
    const isActive = activeSection === 'work';
    return (
      <section 
        data-section="work"
        className={`min-h-screen px-6 py-16 absolute inset-0 transition-opacity duration-500 ease-in-out ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}
        style={{ top: '80px', overflowY: 'auto', WebkitOverflowScrolling: 'touch', scrollBehavior: 'smooth' }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-5xl md:text-7xl font-bold mb-6" style={{ color: '#001F3F' }}>Featured Work</h2>
            <p className="text-xl max-w-3xl" style={{ color: '#5A7A9A' }}>
              From accelerating growth at Meta to launching 0→1 products in fast-moving startups, these projects showcase how I turn insights into measurable business and user impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="group cursor-pointer border-2 p-8 bg-white transition-all duration-300 ease-in-out transform hover:scale-[1.02]" 
                style={{ borderColor: '#001F3F' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#001F3F';
                  e.currentTarget.style.color = '#FFFFFF';
                  // Update company/year text and border to white
                  const companyYear = e.currentTarget.querySelector('.company-year');
                  if (companyYear) {
                    companyYear.style.color = '#FFFFFF';
                    companyYear.style.borderBottomColor = '#FFFFFF';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFFFFF';
                  e.currentTarget.style.color = '#001F3F';
                  // Reset company/year text and border
                  const companyYear = e.currentTarget.querySelector('.company-year');
                  if (companyYear) {
                    companyYear.style.color = '#001F3F';
                    companyYear.style.borderBottomColor = '#001F3F';
                  }
                }}
                onClick={() => setSelectedProject(project)}
              >
                {project.image ? (
                  <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                    {/* Content Section */}
                    <div className="flex-1 space-y-4 min-w-0">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div 
                            className="company-year text-lg font-bold uppercase tracking-wider mb-3 transition-colors duration-300 inline-block" 
                            style={{ color: '#001F3F', borderBottom: '2px solid #001F3F', paddingBottom: '4px' }}
                          >
                            {project.company} • {project.year}
                          </div>
                          <h3 className="text-2xl font-bold mb-2 transition-colors duration-300">{project.title}</h3>
                          <div className="text-sm font-semibold mb-4 transition-colors duration-300">{project.role}</div>
                        </div>
                        <div className="text-2xl transition-transform duration-300 group-hover:translate-x-1 ml-4">→</div>
                      </div>

                      <p className="text-sm leading-relaxed transition-opacity duration-300" style={{ opacity: 0.8 }}>{project.description}</p>

                      <div className="pt-4 border-t-2 transition-colors duration-300" style={{ borderColor: '#5A7A9A' }}>
                        <div className="text-sm font-bold mb-2 transition-colors duration-300">Impact</div>
                        <div className="text-sm transition-opacity duration-300" style={{ opacity: 0.9 }}>{project.impact}</div>
                      </div>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="text-xs px-3 py-1 rounded-full transition-all duration-300"
                            style={{
                              backgroundColor: '#E6F0F8',
                              color: '#001F3F'
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* iPhone Mockup Section */}
                    <div className="hidden lg:flex items-center justify-center flex-shrink-0" style={{ width: '180px' }}>
                      <div
                        className="relative transition-all duration-500 group-hover:scale-105 group-hover:-rotate-1"
                        style={{
                          width: '160px',
                          height: '328px',
                          backgroundColor: '#0a0a0a',
                          borderRadius: '32px',
                          padding: '8px',
                          boxShadow: `
                            0 25px 50px -12px rgba(0, 0, 0, 0.4),
                            0 12px 24px -8px rgba(0, 0, 0, 0.3),
                            inset 0 0 0 1px rgba(255, 255, 255, 0.1),
                            inset 0 0 0 2px #2a2a2a
                          `,
                        }}
                      >
                        {/* Side Buttons */}
                        <div
                          style={{
                            position: 'absolute',
                            right: '-2px',
                            top: '80px',
                            width: '3px',
                            height: '28px',
                            backgroundColor: '#2a2a2a',
                            borderRadius: '0 2px 2px 0',
                          }}
                        />
                        <div
                          style={{
                            position: 'absolute',
                            left: '-2px',
                            top: '65px',
                            width: '3px',
                            height: '20px',
                            backgroundColor: '#2a2a2a',
                            borderRadius: '2px 0 0 2px',
                          }}
                        />
                        <div
                          style={{
                            position: 'absolute',
                            left: '-2px',
                            top: '95px',
                            width: '3px',
                            height: '40px',
                            backgroundColor: '#2a2a2a',
                            borderRadius: '2px 0 0 2px',
                          }}
                        />
                        <div
                          style={{
                            position: 'absolute',
                            left: '-2px',
                            top: '145px',
                            width: '3px',
                            height: '40px',
                            backgroundColor: '#2a2a2a',
                            borderRadius: '2px 0 0 2px',
                          }}
                        />

                        {/* Dynamic Island */}
                        <div
                          style={{
                            position: 'absolute',
                            top: '14px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '64px',
                            height: '20px',
                            backgroundColor: '#0a0a0a',
                            borderRadius: '12px',
                            zIndex: 10,
                          }}
                        />

                        {/* Screen */}
                        <div
                          style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: '24px',
                            overflow: 'hidden',
                            backgroundColor: '#000',
                            position: 'relative',
                          }}
                        >
                          {project.imageLink ? (
                            <a
                              href={project.imageLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                display: 'block',
                                width: '100%',
                                height: '100%',
                                cursor: 'pointer',
                              }}
                              onClick={(e) => e.stopPropagation()}
                        >
                          <img
                            src={project.image}
                            alt={`${project.company} project screenshot`}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              objectPosition: 'top',
                            }}
                          />
                            </a>
                          ) : (
                            <img
                              src={project.image}
                              alt={`${project.company} project screenshot`}
                              style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                objectPosition: 'top',
                              }}
                            />
                          )}
                          {/* Screen Glare Effect */}
                          <div
                            style={{
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              right: 0,
                              bottom: 0,
                              background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 50%, transparent 100%)',
                              pointerEvents: 'none',
                            }}
                          />
                        </div>

                        {/* Home Indicator */}
                        <div
                          style={{
                            position: 'absolute',
                            bottom: '6px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '35%',
                            height: '4px',
                            backgroundColor: '#555',
                            borderRadius: '2px',
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <div 
                          className="company-year text-lg font-bold uppercase tracking-wider mb-3 transition-colors duration-300 inline-block" 
                          style={{ color: '#001F3F', borderBottom: '2px solid #001F3F', paddingBottom: '4px' }}
                        >
                          {project.company} • {project.year}
                        </div>
                        <h3 className="text-2xl font-bold mb-2 transition-colors duration-300">{project.title}</h3>
                        <div className="text-sm font-semibold mb-4 transition-colors duration-300">{project.role}</div>
                      </div>
                      <div className="text-2xl transition-transform duration-300 group-hover:translate-x-1">→</div>
                    </div>

                    <p className="text-sm leading-relaxed transition-opacity duration-300" style={{ opacity: 0.8 }}>{project.description}</p>

                    <div className="pt-4 border-t-2 transition-colors duration-300" style={{ borderColor: '#5A7A9A' }}>
                      <div className="text-sm font-bold mb-2 transition-colors duration-300">Impact</div>
                      <div className="text-sm transition-opacity duration-300" style={{ opacity: 0.9 }}>{project.impact}</div>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag, i) => (
                        <span 
                          key={i} 
                          className="text-xs px-3 py-1 rounded-full transition-all duration-300"
                          style={{ 
                            backgroundColor: '#E6F0F8',
                            color: '#001F3F'
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {selectedProject && (
            <div className="fixed inset-0 backdrop-blur-sm z-50 flex items-center justify-center p-6 animate-fadeIn" onClick={() => setSelectedProject(null)} style={{ animation: 'fadeIn 0.3s cubic-bezier(0.4, 0, 0.2, 1)', backgroundColor: 'rgba(0, 31, 63, 0.8)' }}>
              <div className="bg-white max-w-4xl max-h-[90vh] overflow-y-auto p-8 md:p-12 transform transition-all duration-300 ease-out" style={{ animation: 'fadeInUp 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }} onClick={(e) => e.stopPropagation()}>
                <button onClick={() => setSelectedProject(null)} className="float-right text-3xl hover:opacity-70 transition-opacity duration-200 mb-4" style={{ color: '#001F3F' }}>✕</button>

                <div className="space-y-8">
                  <div>
                    <div className="text-lg font-bold uppercase tracking-wider mb-3 inline-block" style={{ color: '#001F3F', borderBottom: '2px solid #001F3F', paddingBottom: '4px' }}>{selectedProject.company} • {selectedProject.year}</div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#001F3F' }}>{selectedProject.title}</h2>
                    <div className="text-lg font-semibold mb-4" style={{ color: '#001F3F' }}>{selectedProject.role}</div>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag, i) => (
                        <span key={i} className="text-xs px-3 py-1 rounded-full" style={{ backgroundColor: '#E6F0F8', color: '#001F3F' }}>{tag}</span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6 border-t-2 pt-8" style={{ borderColor: '#001F3F' }}>
                    <div>
                      <h3 className="text-2xl font-bold mb-3" style={{ color: '#001F3F' }}>The Problem</h3>
                      <p className="text-lg leading-relaxed" style={{ color: '#5A7A9A' }}>{selectedProject.details.problem}</p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold mb-3" style={{ color: '#001F3F' }}>The Solution</h3>
                      <p className="text-lg leading-relaxed" style={{ color: '#5A7A9A' }}>{selectedProject.details.solution}</p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold mb-3" style={{ color: '#001F3F' }}>Impact & Results</h3>
                      <ul className="space-y-2">
                        {selectedProject.details.impact.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="text-2xl" style={{ color: '#0074D9' }}>→</span>
                            <span className="text-lg" style={{ color: '#5A7A9A' }}>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold mb-3" style={{ color: '#001F3F' }}>Approach</h3>
                      <ul className="space-y-2">
                        {selectedProject.details.approach.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="text-xl" style={{ color: '#0074D9' }}>•</span>
                            <span className="text-lg" style={{ color: '#5A7A9A' }}>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    );
  };

  const AIProjects = () => {
    const isActive = activeSection === 'ai-projects';
    return (
      <section 
        data-section="ai-projects"
        className={`min-h-screen px-6 py-16 absolute inset-0 transition-opacity duration-500 ease-in-out ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}
        style={{ top: '80px', overflowY: 'auto', WebkitOverflowScrolling: 'touch', scrollBehavior: 'smooth' }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-5xl md:text-7xl font-bold mb-6" style={{ color: '#001F3F' }}>AI Projects</h2>
            <p className="text-xl max-w-3xl" style={{ color: '#5A7A9A' }}>
              Building AI-native tools that solve real problems. Each project is an experiment in pushing boundaries and exploring what's possible with modern AI.
            </p>
          </div>

        <div className="mb-16 border-4 p-8 md:p-12" style={{ borderColor: '#001F3F' }}>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div>
                <div className="text-sm uppercase tracking-wider mb-2" style={{ color: '#5A7A9A' }}>Featured Project • 2024</div>
                <h3 className="text-4xl font-bold mb-4" style={{ color: '#001F3F' }}>TaskWhisper</h3>
                <p className="text-xl leading-relaxed" style={{ color: '#5A7A9A' }}>
                  An AI-native web app that transforms rambling voice notes into organized, actionable tasks with priorities and sub-tasks.
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t-2" style={{ borderColor: '#E6F0F8' }}>
                <div>
                  <h4 className="font-bold text-lg mb-2" style={{ color: '#001F3F' }}>The Problem</h4>
                  <p style={{ color: '#5A7A9A' }}>
                    Most people have their best ideas on the move—walking the dog, driving, working out. Recording a voice note is easy, but extracting actionable tasks from rambling audio is tedious.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2" style={{ color: '#001F3F' }}>The Solution</h4>
                  <p style={{ color: '#5A7A9A' }}>
                    TaskWhisper doesn't just transcribe—it understands intent. It processes raw audio, categorizes into tasks, assigns priorities, suggests sub-tasks, and emails/texts results so you don't forget.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2" style={{ color: '#001F3F' }}>Target User</h4>
                  <p style={{ color: '#5A7A9A' }}>
                    Working professionals with active lifestyles who are constantly on the move and need a frictionless way to capture and organize their ideas.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-6">
                <a 
                  href="https://taskwhisper.jaypwadhwani.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-6 py-3 text-white transition-colors duration-200"
                  style={{ backgroundColor: '#001F3F' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#003366'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#001F3F'}
                >
                  Try TaskWhisper →
                </a>
                <button 
                  onClick={() => document.getElementById('taskwhisper-detail')?.scrollIntoView({ behavior: 'smooth' })} 
                  className="px-6 py-3 border-2 transition-all duration-200 ease-in-out"
                  style={{ 
                    borderColor: '#001F3F',
                    color: '#001F3F',
                    backgroundColor: 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#001F3F';
                    e.target.style.color = '#FFFFFF';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = '#001F3F';
                  }}
                >
                  Technical Deep Dive
                </button>
              </div>
            </div>

            <div className="p-8 flex items-center justify-center" style={{ backgroundColor: '#E6F0F8' }}>
              <div className="text-center space-y-4">
                <div className="text-6xl">🎙️</div>
                <div className="text-sm uppercase tracking-wider" style={{ color: '#5A7A9A' }}>Voice → AI Processing → Organized Tasks</div>
              </div>
            </div>
          </div>
        </div>

        <div id="taskwhisper-detail" className="space-y-12">
          <div className="border-l-4 pl-8" style={{ borderColor: '#001F3F' }}>
            <h3 className="text-3xl font-bold mb-6" style={{ color: '#001F3F' }}>How TaskWhisper Works</h3>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-bold mb-3" style={{ color: '#001F3F' }}>1. Voice Capture</h4>
                <p className="leading-relaxed" style={{ color: '#5A7A9A' }}>
                  Users record their thoughts directly in the browser. The audio is captured and prepared for processing—no app download required.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-3" style={{ color: '#001F3F' }}>2. AI Processing with Claude</h4>
                <p className="leading-relaxed mb-3" style={{ color: '#5A7A9A' }}>
                  The audio is sent to Claude (Anthropic's AI), which I used extensively throughout this project. Claude transcribes the audio and goes beyond simple transcription:
                </p>
                <ul className="space-y-2 ml-6">
                  <li style={{ color: '#5A7A9A' }}>• Identifies individual tasks from rambling speech</li>
                  <li style={{ color: '#5A7A9A' }}>• Categorizes tasks by type (work, personal, urgent)</li>
                  <li style={{ color: '#5A7A9A' }}>• Assigns priority levels based on context and urgency signals</li>
                  <li style={{ color: '#5A7A9A' }}>• Suggests logical sub-tasks to break down complex items</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-3" style={{ color: '#001F3F' }}>3. Data Storage & Management</h4>
                <p className="leading-relaxed" style={{ color: '#5A7A9A' }}>
                  Processed tasks are stored in <strong>Supabase</strong>, providing a reliable PostgreSQL database with real-time capabilities. This allows users to access their task history and ensures nothing gets lost.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-3" style={{ color: '#001F3F' }}>4. Delivery via Resend API</h4>
                <p className="leading-relaxed" style={{ color: '#5A7A9A' }}>
                  Once tasks are organized, they're delivered to the user via email or SMS using the <strong>Resend API</strong>. This ensures users get their actionable task list exactly where they need it.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-3" style={{ color: '#001F3F' }}>5. Backend Infrastructure</h4>
                <p className="leading-relaxed mb-3" style={{ color: '#5A7A9A' }}>
                  The entire backend runs on <strong>Railway</strong>, providing seamless deployment and scaling. The infrastructure handles:
                </p>
                <ul className="space-y-2 ml-6">
                  <li style={{ color: '#5A7A9A' }}>• Audio processing and API orchestration</li>
                  <li style={{ color: '#5A7A9A' }}>• Secure authentication and user management</li>
                  <li style={{ color: '#5A7A9A' }}>• Webhook management for real-time notifications</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-3" style={{ color: '#001F3F' }}>Development with Cursor</h4>
                <p className="leading-relaxed" style={{ color: '#5A7A9A' }}>
                  I built TaskWhisper using <strong>Cursor</strong> as my code editor, which provided AI-assisted development capabilities that dramatically accelerated the build process.
                </p>
              </div>

              <div className="p-6 border-l-4" style={{ backgroundColor: '#E6F0F8', borderColor: '#0074D9' }}>
                <h4 className="text-xl font-bold mb-3" style={{ color: '#001F3F' }}>Why This Matters</h4>
                <p className="leading-relaxed mb-3" style={{ color: '#5A7A9A' }}>
                  I built TaskWhisper entirely from scratch—no engineering or design team. This project demonstrates my ability to:
                </p>
                <ul className="space-y-2 ml-6">
                  <li style={{ color: '#5A7A9A' }}>→ <strong>Ship end-to-end:</strong> From product concept to working prototype</li>
                  <li style={{ color: '#5A7A9A' }}>→ <strong>Leverage AI thoughtfully:</strong> Using Claude for intelligent task extraction</li>
                  <li style={{ color: '#5A7A9A' }}>→ <strong>Integrate modern tools:</strong> Combining Railway, Supabase, Resend, and Cursor</li>
                  <li style={{ color: '#5A7A9A' }}>→ <strong>Think product-first:</strong> Solving real problems with minimal friction</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t-2" style={{ borderColor: '#E6F0F8' }}>
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#001F3F' }}>More Projects Coming Soon</h3>
            <p className="text-lg" style={{ color: '#5A7A9A' }}>
              I'm continuously building new AI tools and experiments. Follow my journey as I explore voice interfaces, agentic systems, and practical AI applications.
            </p>
          </div>
        </div>
      </div>
    </section>
    );
  };

  const About = () => {
    const isActive = activeSection === 'about';
    return (
      <section 
        data-section="about"
        className={`min-h-screen px-6 py-16 absolute inset-0 transition-opacity duration-500 ease-in-out ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}
        style={{ top: '80px', overflowY: 'auto', WebkitOverflowScrolling: 'touch', scrollBehavior: 'smooth' }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="text-5xl md:text-7xl font-bold" style={{ color: '#001F3F' }}>About Me</h2>
            
            <div className="space-y-6 text-lg leading-relaxed" style={{ color: '#5A7A9A' }}>
              <p>I'm a product manager who loves <strong style={{ color: '#001F3F' }}>connecting people through product</strong>. I thrive in ambiguity and enjoy building intuitive experiences that meaningfully improve people's lives. I began my career as a founder of a social platform, scaling it to 100k users and 70M profiles. I later brought that entrepreneurial approach to roles at LinkedIn, Instagram, and Macy's, where I led multimillion-dollar initiatives like the Company Page creation flow and the virtual try-on roadmap during the pandemic.</p>
              <p>Over the past year, I shifted into consulting to support my wife as we welcomed our first child. I have been partnering with companies on AI adoption, mobile app redesigns, and modernization of internal platforms. Now that we have more family support, I'm excited to transition back into a full-time product leadership role where I can blend user empathy, business rigor, and technical depth to shape the next generation of consumer and enterprise experiences.</p>
            </div>
            
            <div className="pt-8">
              <div className="relative inline-block">
                <img 
                  src="/images/family.jpg" 
                  alt="Family photo" 
                  className="w-full max-w-md rounded-lg object-cover"
                  style={{ 
                    border: '3px solid #001F3F',
                    boxShadow: '0 10px 30px -5px rgba(0, 31, 63, 0.3), 0 4px 6px -2px rgba(0, 31, 63, 0.1)',
                  }}
                />
              </div>
            </div>
          </div>

            <div className="space-y-8">
              <div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#001F3F' }}>Background</h3>
              <div className="space-y-3" style={{ color: '#5A7A9A' }}>
                <p><strong style={{ color: '#001F3F' }}>Education:</strong> JD/MBA from Stetson University & Emory Law School</p>
                <p><strong style={{ color: '#001F3F' }}>Additional:</strong> Georgia Tech (Data Analytics & ML), UC Berkeley (Software Development)</p>
                <p><strong style={{ color: '#001F3F' }}>Bar Admission:</strong> Florida Bar</p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#001F3F' }}>Areas of Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {['Product Strategy', 'Team Leadership', 'Product-Led Growth', 'A/B Testing', '0-to-1 Products', 'AI/ML', 'Growth & Activation', 'Consumer Tech', 'B2B2C SaaS', 'Stakeholder Management'].map((skill, i) => (
                  <span key={i} className="px-4 py-2 text-white text-sm" style={{ backgroundColor: '#001F3F' }}>{skill}</span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#001F3F' }}>Technical Skills</h3>
              <div className="space-y-2" style={{ color: '#5A7A9A' }}>
                <p><strong style={{ color: '#001F3F' }}>Tools:</strong> SQL, Figma, Aha, Jira, AWS, Gen AI (Claude, GPT)</p>
                <p><strong style={{ color: '#001F3F' }}>Development:</strong> Built with Cursor, Railway, Supabase, React</p>
                <p><strong style={{ color: '#001F3F' }}>Platforms:</strong> Mobile & Web (iOS, Android, Web)</p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#001F3F' }}>Fun Facts</h3>
              <div className="space-y-2" style={{ color: '#5A7A9A' }}>
                <p>• Made my Netflix debut on an Emmy-nominated show: Indian Matchmaking</p>
                <p>• I am the captain of my ice hockey team</p>
                <p>• I am the Chapter Lead at Angel Squad in Atlanta, helping connect entrepreneurs with investors</p>
              </div>
            </div>

            <div className="pt-8">
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#001F3F' }}>Let's Connect</h3>
              <div className="flex gap-4">
                <a 
                  href="https://www.linkedin.com/in/jaypwadhwani/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-6 py-3 text-white transition-colors duration-200"
                  style={{ backgroundColor: '#001F3F' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#003366'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#001F3F'}
                >
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/jaypwadhwani" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-6 py-3 border-2 transition-all duration-200 ease-in-out"
                  style={{ 
                    borderColor: '#001F3F',
                    color: '#001F3F',
                    backgroundColor: 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#001F3F';
                    e.target.style.color = '#FFFFFF';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = '#001F3F';
                  }}
                >
                  GitHub
                </a>
              </div>
              <p className="mt-4" style={{ color: '#5A7A9A' }}><strong style={{ color: '#001F3F' }}>Email:</strong> Jay.P.Wadhwani@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };


  const Footer = () => (
    <footer className="py-12 px-6" style={{ backgroundColor: '#001F3F', color: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Jay Wadhwani</h3>
            <p style={{ color: '#E6F0F8' }}>Product Management Leader that focuses on bridging the gap between user needs and artificial intelligence.</p>
          </div>
          <div>
            <h4 className="font-bold mb-3">Quick Links</h4>
            <div className="space-y-2">
              {['home', 'work', 'ai-projects', 'about'].map((section) => (
                <button 
                  key={section} 
                  onClick={() => handleSectionChange(section)} 
                  className="block transition-colors"
                  style={{ color: '#E6F0F8' }}
                  onMouseEnter={(e) => e.target.style.color = '#FFFFFF'}
                  onMouseLeave={(e) => e.target.style.color = '#E6F0F8'}
                >
                  {section.replace('-', ' ').toUpperCase()}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-3">Connect</h4>
            <div className="space-y-2">
              <a 
                href="https://www.linkedin.com/in/jaypwadhwani/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block transition-colors"
                style={{ color: '#E6F0F8' }}
                onMouseEnter={(e) => e.target.style.color = '#FFFFFF'}
                onMouseLeave={(e) => e.target.style.color = '#E6F0F8'}
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/jaypwadhwani" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block transition-colors"
                style={{ color: '#E6F0F8' }}
                onMouseEnter={(e) => e.target.style.color = '#FFFFFF'}
                onMouseLeave={(e) => e.target.style.color = '#E6F0F8'}
              >
                GitHub
              </a>
              <a 
                href="mailto:Jay.P.Wadhwani@gmail.com" 
                className="block transition-colors"
                style={{ color: '#E6F0F8' }}
                onMouseEnter={(e) => e.target.style.color = '#FFFFFF'}
                onMouseLeave={(e) => e.target.style.color = '#E6F0F8'}
              >
                Email
              </a>
            </div>
          </div>
        </div>
        <div className="border-t pt-8 text-center" style={{ borderColor: '#003366', color: '#E6F0F8' }}>
          <p>© 2024 Jay Wadhwani. Built with React and Claude.</p>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="font-sans antialiased relative min-h-screen">
      <Navigation />
      <div className="relative min-h-screen">
        <Hero />
        <Work />
        <AIProjects />
        <About />
      </div>
      {activeSection === 'home' && <Footer />}
    </div>
  );
};

export default Portfolio;
