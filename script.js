// ========================================
// GardenView - Interactive Elements
// ========================================

document.addEventListener('DOMContentLoaded', function() {

  // Enable transitions after page load to prevent flash
  setTimeout(() => {
    document.body.classList.add('dark-mode-loaded');
  }, 100);

  // ========================================
  // Header Scroll Effect
  // ========================================
  const header = document.getElementById('header');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
      header.style.boxShadow = '0 2px 8px rgba(17, 37, 31, .08)';
    } else {
      header.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
  });


  // ========================================
  // Form Submission Handler
  // ========================================
  const heroForm = document.querySelector('.hero__form-inner');
  if (heroForm) {
    heroForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const emailInput = this.querySelector('input[type="email"]');
      const email = emailInput.value.trim();

      if (email) {
        // Simulate form submission
        alert(`Thank you! We'll contact you at ${email} to schedule your consultation.`);
        emailInput.value = '';
      }
    });
  }

  // ========================================
  // Gallery Image Loading Animation
  // ========================================
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '0';
        entry.target.style.transform = 'translateY(20px)';

        setTimeout(() => {
          entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, 100);

        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe gallery items
  document.querySelectorAll('.gallery__item').forEach(item => {
    imageObserver.observe(item);
  });

  // ========================================
  // Service Cards Hover Effect Enhancement
  // ========================================
  document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    });
  });

  // ========================================
  // CTA Button Click Handlers
  // ========================================
  const ctaButtons = document.querySelectorAll('.btn--primary');
  ctaButtons.forEach(button => {
    if (button.textContent.trim() === 'Get in touch') {
      button.addEventListener('click', function(e) {
        if (!this.closest('form')) {
          e.preventDefault();
          // Scroll to hero form or show contact modal
          const heroForm = document.querySelector('.hero__form');
          if (heroForm) {
            heroForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
            heroForm.style.animation = 'pulse 0.6s ease';
            setTimeout(() => {
              heroForm.style.animation = '';
            }, 600);
          }
        }
      });
    }
  });

  // ========================================
  // Animate on Scroll - Multiple Sections
  // ========================================
  const animateObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, delay);
        animateObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Stats Section Animation
  document.querySelectorAll('.stat-item').forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    item.dataset.delay = index * 100;
    animateObserver.observe(item);
  });

  // Service Cards Animation (only the first 3 cards for initial page load)
  const originalServiceCards = document.querySelectorAll('.service-card:not([data-carousel-clone])');
  originalServiceCards.forEach((card, index) => {
    if (index < 3) {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      card.dataset.delay = index * 150;
      animateObserver.observe(card);
    }
  });

  // Testimonial Cards Animation (only the first 3 slides for initial page load)
  const originalTestimonialSlides = document.querySelectorAll('.testimonial-carousel-slide:not([data-carousel-clone])');
  originalTestimonialSlides.forEach((slide, index) => {
    if (index < 3) {
      const card = slide.querySelector('.testimonial-card');
      if (card) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        card.dataset.delay = index * 100;
        animateObserver.observe(card);
      }
    }
  });

  // Split Section Images Animation
  document.querySelectorAll('.split__media').forEach((media, index) => {
    media.style.opacity = '0';
    media.style.transform = 'translateY(20px)';
    media.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    media.dataset.delay = index * 100;
    animateObserver.observe(media);
  });

  // Split Section Content Animation
  document.querySelectorAll('.split__content').forEach((content, index) => {
    content.style.opacity = '0';
    content.style.transform = 'translateY(20px)';
    content.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    content.dataset.delay = index * 150;
    animateObserver.observe(content);
  });

  // FAQ Items Animation
  document.querySelectorAll('.faq-item').forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    item.dataset.delay = index * 100;
    animateObserver.observe(item);
  });

  // Section Headers Animation
  document.querySelectorAll('.section__header').forEach((header, index) => {
    header.style.opacity = '0';
    header.style.transform = 'translateY(20px)';
    header.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    header.dataset.delay = index * 50;
    animateObserver.observe(header);
  });

  // Before/After Slider Animation
  const beforeAfterSlider = document.querySelector('.before-after-slider');
  if (beforeAfterSlider) {
    beforeAfterSlider.style.opacity = '0';
    beforeAfterSlider.style.transform = 'translateY(20px)';
    beforeAfterSlider.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    animateObserver.observe(beforeAfterSlider);
  }

  // CTA Banner Animation
  document.querySelectorAll('.cta').forEach((ctaBanner, index) => {
    ctaBanner.style.opacity = '0';
    ctaBanner.style.transform = 'translateY(20px)';
    ctaBanner.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    ctaBanner.dataset.delay = index * 100;
    animateObserver.observe(ctaBanner);
  });

  // Coverage Areas Animation
  document.querySelectorAll('.coverage-item').forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    item.dataset.delay = index * 50;
    animateObserver.observe(item);
  });

  // Check List Items Animation
  document.querySelectorAll('.list-check li').forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    item.dataset.delay = index * 100;
    animateObserver.observe(item);
  });

  // Quote Form Animation
  const quoteForm = document.querySelector('.quote-form');
  if (quoteForm) {
    quoteForm.style.opacity = '0';
    quoteForm.style.transform = 'translateY(20px)';
    quoteForm.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    animateObserver.observe(quoteForm);
  }

  // ========================================
  // Article Cards Interaction
  // ========================================
  document.querySelectorAll('.article-card').forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', function(e) {
      if (!e.target.classList.contains('article-card__link')) {
        const link = this.querySelector('.article-card__link');
        if (link) {
          link.click();
        }
      }
    });
  });

  // ========================================
  // Mobile Menu Toggle
  // ========================================
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileMenuLinks = document.querySelectorAll('.header__mobile-nav a');

  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', function() {
      this.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking on a link
    mobileMenuLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileMenuToggle.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (mobileMenu.classList.contains('active') &&
          !mobileMenu.contains(e.target) &&
          !mobileMenuToggle.contains(e.target)) {
        mobileMenuToggle.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // ========================================
  // Add pulse animation keyframes dynamically
  // ========================================
  const style = document.createElement('style');
  style.textContent = `
    @keyframes pulse {
      0%, 100% {
        transform: scale(1);
        box-shadow: 0 18px 40px rgba(17, 37, 31, .16);
      }
      50% {
        transform: scale(1.02);
        box-shadow: 0 24px 48px rgba(34, 192, 138, .25);
      }
    }
  `;
  document.head.appendChild(style);

  // ========================================
  // Performance: Lazy Load Images
  // ========================================
  if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
      img.src = img.dataset.src || img.src;
    });
  } else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
  }

  // FAQ Toggles
  // ========================================
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-item__question');
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all FAQ items
      faqItems.forEach(faq => faq.classList.remove('active'));

      // Open clicked item if it wasn't already active
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // ========================================
  // Carousel Helpers
  // ========================================
  function createInfiniteCarousel({ track, prevButton, nextButton, slideSelector }) {
    if (!track || !prevButton || !nextButton) return;
    if (track.dataset.carouselInitialized === 'true') return;

    const originalSlides = Array.from(track.querySelectorAll(slideSelector));
    const totalOriginal = originalSlides.length;
    if (totalOriginal <= 1) return;

    track.dataset.carouselInitialized = 'true';

    const TRANSITION = 'transform 0.5s ease';
    const clonesPerSide = totalOriginal;

    const createClone = (slide) => {
      const clone = slide.cloneNode(true);
      clone.dataset.carouselClone = 'true';
      clone.dataset.delay = '0';
      clone.style.opacity = '1';
      clone.style.transform = '';
      clone.style.transitionDelay = '0s';
      return clone;
    };

    const prependFragment = document.createDocumentFragment();
    originalSlides.slice(-clonesPerSide).forEach(slide => {
      prependFragment.appendChild(createClone(slide));
    });
    track.prepend(prependFragment);

    const appendFragment = document.createDocumentFragment();
    originalSlides.slice(0, clonesPerSide).forEach(slide => {
      appendFragment.appendChild(createClone(slide));
    });
    track.append(appendFragment);

    const getGapSize = () => {
      const style = window.getComputedStyle(track);
      const gapValue = style.columnGap || style.gap || '0px';
      const numericGap = parseFloat(gapValue);
      return Number.isFinite(numericGap) ? numericGap : 0;
    };

    const getReferenceSlide = () => track.querySelector(`${slideSelector}:not([data-carousel-clone])`);

    const getHorizontalMargins = (element) => {
      if (!element) return 0;
      const style = window.getComputedStyle(element);
      const marginLeft = parseFloat(style.marginLeft) || 0;
      const marginRight = parseFloat(style.marginRight) || 0;
      return marginLeft + marginRight;
    };

    const getStepSize = () => {
      const referenceSlide = getReferenceSlide();
      if (!referenceSlide) return 0;
      const slideWidth = referenceSlide.getBoundingClientRect().width || referenceSlide.offsetWidth;
      return slideWidth + getGapSize() + getHorizontalMargins(referenceSlide);
    };

    let currentIndex = clonesPerSide;
    let isTransitioning = false;

    const updatePosition = (animate = true) => {
      const step = getStepSize();
      if (!step) return;
      const offset = -(currentIndex * step);
      track.style.transition = animate ? TRANSITION : 'none';
      track.style.transform = `translateX(${offset}px)`;
    };

    updatePosition(false);

    const slideBy = (delta) => {
      if (isTransitioning) return;
      const step = getStepSize();
      if (!step) return;

      currentIndex += delta;
      isTransitioning = true;
      track.style.transition = TRANSITION;

      requestAnimationFrame(() => {
        const offset = -(currentIndex * step);
        track.style.transform = `translateX(${offset}px)`;
      });
    };

    const handleTransitionEnd = (event) => {
      if (event.target !== track || event.propertyName !== 'transform') return;

      isTransitioning = false;

      if (currentIndex >= totalOriginal + clonesPerSide) {
        currentIndex -= totalOriginal;
        updatePosition(false);
      } else if (currentIndex < clonesPerSide) {
        currentIndex += totalOriginal;
        updatePosition(false);
      }
    };

    nextButton.addEventListener('click', () => slideBy(1));
    prevButton.addEventListener('click', () => slideBy(-1));
    track.addEventListener('transitionend', handleTransitionEnd);

    window.addEventListener('resize', () => {
      isTransitioning = false;
      updatePosition(false);
    });
  }

  // ========================================
  // Services Carousel
  // ========================================
  const servicesTrack = document.getElementById('servicesTrack');
  const servicesPrev = document.getElementById('servicesPrev');
  const servicesNext = document.getElementById('servicesNext');
  const servicesCarousel = servicesTrack ? servicesTrack.parentElement : null;
  const isServicesGrid = servicesCarousel && servicesCarousel.classList.contains('services-layout--grid');
  const servicesGridToggleWrap = document.getElementById('servicesGridToggleWrap');
  const servicesGridToggleBtn = document.getElementById('servicesGridToggleBtn');

  function equalizeVisibleServiceRows() {
    if (!servicesTrack || !isServicesGrid) return;

    const visibleCards = Array.from(servicesTrack.querySelectorAll('.service-card'))
      .filter(card => window.getComputedStyle(card).display !== 'none');

    visibleCards.forEach(card => {
      card.style.height = 'auto';
    });

    const rows = [];
    visibleCards.forEach(card => {
      const top = card.offsetTop;
      let row = rows.find(entry => Math.abs(entry.top - top) <= 2);
      if (!row) {
        row = { top, cards: [] };
        rows.push(row);
      }
      row.cards.push(card);
    });

    rows.forEach(row => {
      const maxHeight = row.cards.reduce((max, card) => Math.max(max, card.offsetHeight), 0);
      row.cards.forEach(card => {
        card.style.height = `${maxHeight}px`;
      });
    });
  }

  function setupServicesGridCollapse() {
    if (!servicesCarousel || !servicesTrack || !isServicesGrid || !servicesGridToggleWrap || !servicesGridToggleBtn) return;
    const requestedRows = parseInt(servicesCarousel.dataset.gridMaxRows || '1', 10);
    const maxVisibleRows = Number.isFinite(requestedRows) && requestedRows > 0 ? requestedRows : 1;

    const serviceCards = Array.from(servicesTrack.querySelectorAll('.service-card'));
    if (serviceCards.length === 0) return;

    // Reset previous state before re-calculating rows.
    serviceCards.forEach(card => card.classList.remove('services-grid-hidden'));
    servicesCarousel.classList.remove('services-layout--grid-collapsed');

    const rowTops = [];
    serviceCards.forEach(card => {
      const top = card.offsetTop;
      if (!rowTops.some(existingTop => Math.abs(existingTop - top) <= 2)) {
        rowTops.push(top);
      }
    });

    if (rowTops.length <= maxVisibleRows) {
      servicesGridToggleWrap.hidden = true;
      servicesGridToggleBtn.textContent = 'Show all services';
      return;
    }

    const lastVisibleRowTop = rowTops[maxVisibleRows - 1];
    serviceCards.forEach(card => {
      if (card.offsetTop > lastVisibleRowTop + 2) {
        card.classList.add('services-grid-hidden');
      }
    });

    servicesCarousel.classList.add('services-layout--grid-collapsed');
    servicesGridToggleWrap.hidden = false;
    servicesGridToggleBtn.textContent = 'Show all services';

    servicesGridToggleBtn.onclick = () => {
      servicesCarousel.classList.remove('services-layout--grid-collapsed');
      servicesGridToggleWrap.hidden = true;
      setupServiceDescriptionToggle();
      equalizeVisibleServiceRows();
    };
  }

  function setupServiceDescriptionToggle() {
    const serviceCards = document.querySelectorAll('.service-card');

    serviceCards.forEach(card => {
      const textElement = card.querySelector('.service-card__desc');
      if (!textElement) return;

      const lineHeight = parseFloat(window.getComputedStyle(textElement).lineHeight);
      const lineCount = lineHeight > 0 ? (textElement.scrollHeight / lineHeight) : 0;

      textElement.classList.remove('service-card__desc--truncated');

      const existingToggle = card.querySelector('.service-read-more');
      if (existingToggle) {
        existingToggle.remove();
      }

      // Avoid false positives caused by sub-pixel rounding.
      if (lineCount <= 4.2) return;

      textElement.classList.add('service-card__desc--truncated');

      const toggleButton = document.createElement('button');
      toggleButton.type = 'button';
      toggleButton.className = 'service-read-more';
      toggleButton.textContent = 'Read more';
      toggleButton.style.display = 'inline-block';

      toggleButton.addEventListener('click', (e) => {
        e.preventDefault();
        const isTruncated = textElement.classList.contains('service-card__desc--truncated');
        if (isTruncated) {
          textElement.classList.remove('service-card__desc--truncated');
          toggleButton.textContent = 'Show less';
        } else {
          textElement.classList.add('service-card__desc--truncated');
          toggleButton.textContent = 'Read more';
        }

        // Keep cards in the same row aligned after text expansion/collapse.
        equalizeVisibleServiceRows();
      });

      textElement.insertAdjacentElement('afterend', toggleButton);
    });
  }

  if (!isServicesGrid) {
    createInfiniteCarousel({
      track: servicesTrack,
      prevButton: servicesPrev,
      nextButton: servicesNext,
      slideSelector: '.service-card'
    });

    // Add drag-to-scroll for services carousel
    if (servicesTrack) {
      let isDragging = false;
      let startX;
      let currentTranslate = 0;

      servicesCarousel.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.pageX;
        const transform = servicesTrack.style.transform || 'translateX(0px)';
        currentTranslate = parseFloat(transform.match(/-?\d+\.?\d*/)?.[0]) || 0;
        servicesTrack.style.transition = 'none';
      });

      document.addEventListener('mouseup', () => {
        isDragging = false;
        servicesTrack.style.transition = '';
      });

      document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const diff = (e.pageX - startX) * 0.5;
        servicesTrack.style.transform = `translateX(${currentTranslate + diff}px)`;
      });
    }
  }

  if (isServicesGrid) {
    setupServicesGridCollapse();
    setupServiceDescriptionToggle();
    equalizeVisibleServiceRows();

    let servicesGridResizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(servicesGridResizeTimeout);
      servicesGridResizeTimeout = setTimeout(() => {
        setupServicesGridCollapse();
        setupServiceDescriptionToggle();
        equalizeVisibleServiceRows();
      }, 150);
    });
  }

  // ========================================
  // Portfolio Carousel
  // ========================================
  const portfolioGrid = document.getElementById('portfolioGrid');
  const portfolioGridToggleWrap = document.getElementById('portfolioGridToggleWrap');
  const portfolioGridToggleBtn = document.getElementById('portfolioGridToggleBtn');
  const recentPortfolioMediaItems = [
    './images/WhatsApp Image 2026-06-03 at 01.30.57.jpeg',
    './images/WhatsApp Image 2026-06-03 at 01.30.57 (1).jpeg',
    './images/WhatsApp Image 2026-06-03 at 01.30.57 (2).jpeg',
    './images/WhatsApp Image 2026-06-03 at 01.30.57 (3).jpeg',
    './images/WhatsApp Image 2026-06-03 at 01.30.57 (4).jpeg',
    './images/WhatsApp Image 2026-06-03 at 01.30.57 (5).jpeg',
    './images/WhatsApp Image 2026-06-03 at 01.30.57 (6).jpeg',
    './images/WhatsApp Image 2026-06-03 at 02.56.46.jpeg',
  ].map((src, index) => ({
    type: 'image',
    src,
    alt: `Recent portfolio project ${index + 1}`
  }));
  const portfolioMediaItems = [
    ...recentPortfolioMediaItems,
    ...Array.from({ length: 110 }, (_, index) => ({
      type: 'image',
      src: `./images/portfolio${index + 1}.jpg`,
      alt: `Portfolio project ${index + 1}`
    }))
  ];
  let currentPortfolioIndex = 0;

  function equalizePortfolioGridRows() {
    if (!portfolioGrid) return;

    const visibleItems = Array.from(portfolioGrid.querySelectorAll('.portfolio-grid-item'))
      .filter(item => window.getComputedStyle(item).display !== 'none');

    visibleItems.forEach(item => {
      item.style.height = 'auto';
    });

    const rows = [];
    visibleItems.forEach(item => {
      const top = item.offsetTop;
      let row = rows.find(entry => Math.abs(entry.top - top) <= 2);
      if (!row) {
        row = { top, items: [] };
        rows.push(row);
      }
      row.items.push(item);
    });

    rows.forEach(row => {
      const maxHeight = row.items.reduce((max, item) => Math.max(max, item.offsetHeight), 0);
      row.items.forEach(item => {
        item.style.height = `${maxHeight}px`;
      });
    });
  }

  function setupPortfolioGrid() {
    if (!portfolioGrid || !portfolioGridToggleWrap || !portfolioGridToggleBtn) return;
    if (portfolioMediaItems.length === 0) return;

    portfolioGrid.innerHTML = '';

    portfolioMediaItems.forEach((mediaItem, index) => {
      const gridItem = document.createElement('div');
      gridItem.className = 'portfolio-grid-item';
      gridItem.dataset.index = `${index}`;
      gridItem.dataset.portfolioIndex = `${index}`;

      if (mediaItem.type === 'video') {
        gridItem.classList.add('portfolio-grid-item--video');
        const video = document.createElement('video');
        video.src = mediaItem.src;
        video.preload = 'metadata';
        video.muted = true;
        video.loop = true;
        video.playsInline = true;
        gridItem.appendChild(video);
      } else {
        const image = document.createElement('img');
        image.src = mediaItem.src;
        image.alt = mediaItem.alt;
        gridItem.appendChild(image);
      }

      portfolioGrid.appendChild(gridItem);

    });

    const initialRows = parseInt(portfolioGrid.dataset.initialRows || '4', 10);
    const rowsStep = parseInt(portfolioGrid.dataset.rowsStep || `${initialRows}`, 10);
    const safeInitialRows = Number.isFinite(initialRows) && initialRows > 0 ? initialRows : 4;
    const safeRowsStep = Number.isFinite(rowsStep) && rowsStep > 0 ? rowsStep : safeInitialRows;
    let visibleRows = safeInitialRows;

    const updateVisibleItems = () => {
      const gridItems = Array.from(portfolioGrid.querySelectorAll('.portfolio-grid-item'));
      gridItems.forEach(item => item.classList.remove('portfolio-grid-hidden'));

      const rowTops = [];
      gridItems.forEach(item => {
        const top = item.offsetTop;
        if (!rowTops.some(existingTop => Math.abs(existingTop - top) <= 2)) {
          rowTops.push(top);
        }
      });

      const lastVisibleRowTop = rowTops[Math.min(visibleRows, rowTops.length) - 1];

      gridItems.forEach(item => {
        if (item.offsetTop > lastVisibleRowTop + 2) {
          item.classList.add('portfolio-grid-hidden');
        }
      });

      const hasHiddenItems = gridItems.some(item => item.classList.contains('portfolio-grid-hidden'));
      portfolioGridToggleWrap.hidden = !hasHiddenItems;
      equalizePortfolioGridRows();
    };

    portfolioGridToggleBtn.onclick = () => {
      visibleRows += safeRowsStep;
      updateVisibleItems();
    };

    updateVisibleItems();
  }

  setupPortfolioGrid();

  let portfolioGridResizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(portfolioGridResizeTimeout);
    portfolioGridResizeTimeout = setTimeout(() => {
      setupPortfolioGrid();
    }, 150);
  });

  // ========================================
  // Testimonial Carousel
  // ========================================
  const testimonialTrack = document.getElementById('testimonialTrack');
  const testimonialPrev = document.getElementById('testimonialPrev');
  const testimonialNext = document.getElementById('testimonialNext');

  if (testimonialTrack && testimonialPrev && testimonialNext) {
    // Create infinite carousel
    createInfiniteCarousel({
      track: testimonialTrack,
      prevButton: testimonialPrev,
      nextButton: testimonialNext,
      slideSelector: '.testimonial-carousel-slide'
    });

    // Add drag-to-scroll for testimonial carousel
    let isDragging = false;
    let startX;
    let currentTranslate = 0;

    const carousel = testimonialTrack.parentElement;

    carousel.addEventListener('mousedown', (e) => {
      isDragging = true;
      startX = e.pageX;
      const transform = testimonialTrack.style.transform || 'translateX(0px)';
      currentTranslate = parseFloat(transform.match(/-?\d+\.?\d*/)?.[0]) || 0;
      testimonialTrack.style.transition = 'none';
    });

    document.addEventListener('mouseup', () => {
      isDragging = false;
      testimonialTrack.style.transition = '';
    });

    document.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const diff = (e.pageX - startX) * 0.5;
      testimonialTrack.style.transform = `translateX(${currentTranslate + diff}px)`;
    });
  }

  // ========================================
  // Portfolio Lightbox
  // ========================================
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightboxImage');
  const lightboxVideo = document.getElementById('lightboxVideo');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');
  lightboxImage.style.display = 'none';
  lightboxVideo.style.display = 'none';

  function getPortfolioMediaItems() {
    return portfolioMediaItems;
  }

  function updateLightboxNavState() {
    const hasMultipleItems = getPortfolioMediaItems().length > 1;
    if (lightboxPrev) lightboxPrev.hidden = !hasMultipleItems;
    if (lightboxNext) lightboxNext.hidden = !hasMultipleItems;
  }

  const closeLightbox = () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
    lightboxImage.style.display = 'none';
    lightboxImage.src = '';
    lightboxVideo.style.display = 'none';
    lightboxVideo.pause();
    lightboxVideo.src = '';
  };

  const openPortfolioMediaByIndex = (index) => {
    const mediaItems = getPortfolioMediaItems();
    if (mediaItems.length === 0) return;

    currentPortfolioIndex = ((index % mediaItems.length) + mediaItems.length) % mediaItems.length;
    const item = mediaItems[currentPortfolioIndex];
    if (!item) return;

    if (item.type === 'video') {
      lightboxImage.style.display = 'none';
      lightboxImage.src = '';
      lightboxVideo.style.display = 'block';
      lightboxVideo.src = item.src;
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
      updateLightboxNavState();
      lightboxVideo.play();
      return;
    }
    lightboxVideo.style.display = 'none';
    lightboxVideo.pause();
    lightboxVideo.src = '';
    lightboxImage.style.display = 'block';
    lightboxImage.src = item.src;
    lightboxImage.alt = item.alt;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
    updateLightboxNavState();
  };

  const openPortfolioMedia = (item) => {
    if (!item) return;
    const itemIndex = parseInt(item.dataset.portfolioIndex ?? item.dataset.index ?? '0', 10);
    openPortfolioMediaByIndex(Number.isFinite(itemIndex) ? itemIndex : 0);
  };

  const showAdjacentPortfolioMedia = (direction) => {
    openPortfolioMediaByIndex(currentPortfolioIndex + direction);
  };

  [portfolioGrid].forEach(container => {
    if (!container) return;

    container.addEventListener('click', (e) => {
      const item = e.target.closest('.portfolio-grid-item');
      if (!item) return;
      openPortfolioMedia(item);
    });
  });

  lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxPrev) {
    lightboxPrev.addEventListener('click', (e) => {
      e.stopPropagation();
      showAdjacentPortfolioMedia(-1);
    });
  }
  if (lightboxNext) {
    lightboxNext.addEventListener('click', (e) => {
      e.stopPropagation();
      showAdjacentPortfolioMedia(1);
    });
  }

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  // Seek to 3s so video thumbnails show a usable frame.
  document.querySelectorAll('#portfolioGrid video[preload="metadata"]').forEach(v => {
    const seek = () => { v.currentTime = Math.min(3, v.duration || 3); };
    if (v.readyState >= 1) seek();
    else v.addEventListener('loadedmetadata', seek, { once: true });
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;

    if (e.key === 'Escape') {
      closeLightbox();
      return;
    }

    if (e.key === 'ArrowLeft') {
      showAdjacentPortfolioMedia(-1);
      return;
    }

    if (e.key === 'ArrowRight') {
      showAdjacentPortfolioMedia(1);
    }
  });

  // ========================================
  // Before/After Slider
  // ========================================
  const sliderContainer = document.querySelector('.before-after-container');
  if (sliderContainer) {
    const beforeImage = document.getElementById('beforeImage');
    const sliderHandle = document.getElementById('sliderHandle');
    let isDragging = false;

    function updateSlider(e) {
      if (!isDragging && e.type !== 'click') return;

      const rect = sliderContainer.getBoundingClientRect();
      const x = (e.type.includes('touch') ? e.touches[0].clientX : e.clientX) - rect.left;
      const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));

      beforeImage.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
      sliderHandle.style.left = `${percent}%`;
    }

    sliderContainer.addEventListener('mousedown', (e) => {
      isDragging = true;
      updateSlider(e);
    });

    sliderContainer.addEventListener('click', updateSlider);

    document.addEventListener('mousemove', updateSlider);

    document.addEventListener('mouseup', () => {
      isDragging = false;
    });

    sliderContainer.addEventListener('touchstart', (e) => {
      isDragging = true;
      e.preventDefault(); // Prevent page scrolling
      updateSlider(e);
    }, { passive: false });

    sliderContainer.addEventListener('touchmove', (e) => {
      if (isDragging) {
        e.preventDefault(); // Prevent page scrolling while dragging
      }
      updateSlider(e);
    }, { passive: false });

    sliderContainer.addEventListener('touchend', () => {
      isDragging = false;
    });
  }

  // ========================================
  // Privacy Policy Modal
  // ========================================
  const privacyModal = document.getElementById('privacyModal');
  const privacyPolicyLink = document.getElementById('privacyPolicyLink');
  const privacyModalClose = document.getElementById('privacyModalClose');

  if (privacyPolicyLink && privacyModal && privacyModalClose) {
    privacyPolicyLink.addEventListener('click', (e) => {
      e.preventDefault();
      privacyModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });

    privacyModalClose.addEventListener('click', () => {
      privacyModal.classList.remove('active');
      document.body.style.overflow = '';
    });

    // Close on overlay click
    const privacyOverlay = privacyModal.querySelector('.privacy-modal__overlay');
    if (privacyOverlay) {
      privacyOverlay.addEventListener('click', () => {
        privacyModal.classList.remove('active');
        document.body.style.overflow = '';
      });
    }

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && privacyModal.classList.contains('active')) {
        privacyModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // ========================================
  // Testimonial Read More Toggle
  // ========================================
  const testimonialCards = document.querySelectorAll('.testimonial-card');

  testimonialCards.forEach(card => {
    const textElement = card.querySelector('.testimonial-card__text');
    if (!textElement) return;

    const fullText = textElement.getAttribute('data-full-text') || textElement.textContent;
    const lineHeight = parseInt(window.getComputedStyle(textElement).lineHeight);
    const maxHeight = lineHeight * 4; // 4 lines

    // Check if content exceeds 4 lines
    if (textElement.scrollHeight > maxHeight) {
      textElement.classList.add('testimonial-card__text--truncated');

      // Click on card to toggle
      card.addEventListener('click', function(e) {
        e.preventDefault();
        const isExpanded = textElement.classList.contains('testimonial-card__text--truncated');

        if (!isExpanded) {
          textElement.classList.add('testimonial-card__text--truncated');
        } else {
          textElement.classList.remove('testimonial-card__text--truncated');
        }
      });
    }
  });

  // ========================================
  // Quote Form Handler
  // ========================================
  // Use distinct variable names to avoid conflict with the earlier animation `quoteForm` constant.
  const quoteFormElement = document.getElementById('quoteForm');
  const formMessageElement = document.getElementById('formMessage');

  if (quoteFormElement && formMessageElement) {
    // Set form timestamp when page loads
    const timestampInput = document.getElementById('formTimestamp');
    if (timestampInput) {
      timestampInput.value = Date.now();
    }

    quoteFormElement.addEventListener('submit', async function(e) {
      e.preventDefault();

      const submitButton = quoteFormElement.querySelector('button[type="submit"]');
      if (!submitButton) return;
      const originalButtonText = submitButton.textContent;

      // Disable button and show loading state
      submitButton.disabled = true;
      submitButton.textContent = 'Sending...';
      formMessageElement.textContent = '';
      formMessageElement.className = 'form-message';

      try {
        const formData = new FormData(quoteFormElement);
        const response = await fetch(quoteFormElement.action, {
          method: 'POST',
          body: new URLSearchParams(formData),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        });

        const result = await response.json();

        if (response.ok && result.success) {
          formMessageElement.textContent = 'Thank you! We\'ll be in touch soon.';
          formMessageElement.className = 'form-message form-message--success';
          quoteFormElement.reset();

          // Reset timestamp for potential resubmission
          if (timestampInput) {
            timestampInput.value = Date.now();
          }
        } else {
          formMessageElement.textContent = 'Something went wrong. Please try again or call us directly.';
          formMessageElement.className = 'form-message form-message--error';
        }
      } catch (error) {
        formMessageElement.textContent = 'Network error. Please check your connection and try again.';
        formMessageElement.className = 'form-message form-message--error';
      } finally {
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;
      }
    });
  }

});
