// ===== Custom Cursor =====
const cursor = document.querySelector(".custom-cursor")
const cursorFollower = document.querySelector(".cursor-follower")

if (cursor && cursorFollower) {
  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px"
    cursor.style.top = e.clientY + "px"

    setTimeout(() => {
      cursorFollower.style.left = e.clientX + "px"
      cursorFollower.style.top = e.clientY + "px"
    }, 100)
  })
}

// ===== Scroll Progress Bar =====
window.addEventListener("scroll", () => {
  const scrollProgress = document.querySelector(".scroll-progress")
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
  const scrolled = (window.scrollY / scrollHeight) * 100
  if (scrollProgress) scrollProgress.style.width = scrolled + "%"
})

// ===== Navbar Scroll Effect =====
const navbar = document.querySelector(".navbar")
window.addEventListener("scroll", () => {
  if (!navbar) return
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled")
  }
})

// ===== Smooth Scroll for Navigation Links =====
const navLinksSelector = document.querySelectorAll(".nav-links a")
if (navLinksSelector && navLinksSelector.length > 0) {
  navLinksSelector.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()
      const targetId = link.getAttribute("href")
      const targetSection = document.querySelector(targetId)

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" })
      }

      // Update active link
      navLinksSelector.forEach((l) => l.classList.remove("active"))
      link.classList.add("active")
    })
  })
}

// ===== Intersection Observer for Scroll Animations =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe all sections and cards
document.querySelectorAll(".service-card, .portfolio-item, .about-content, .contact-content").forEach((el) => {
  el.style.opacity = "0"
  el.style.transform = "translateY(50px)"
  el.style.transition = "all 0.8s ease"
  observer.observe(el)
})

// ===== Portfolio Filter =====
const filterButtons = document.querySelectorAll(".filter-btn")
const portfolioItems = document.querySelectorAll(".portfolio-item")

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter")

    // Update active button
    filterButtons.forEach((btn) => btn.classList.remove("active"))
    button.classList.add("active")

    // Filter items
    portfolioItems.forEach((item) => {
      const category = item.getAttribute("data-category")

      if (filter === "all" || category === filter) {
        item.style.display = "block"
        setTimeout(() => {
          item.style.opacity = "1"
          item.style.transform = "scale(1)"
        }, 10)
      } else {
        item.style.opacity = "0"
        item.style.transform = "scale(0.8)"
        setTimeout(() => {
          item.style.display = "none"
        }, 300)
      }
    })
  })
})

// ===== Portfolio Video Hover Effect - FIXED THUMBNAIL RESET =====
const portfolioVideos = document.querySelectorAll(".portfolio-video")

portfolioVideos.forEach((video) => {
  const portfolioItem = video.closest(".portfolio-item")
  if (!portfolioItem) return

  // Store the poster attribute
  const originalPoster = video.getAttribute('poster')

  try {
    video.load()
  } catch (err) {
    console.log("Video load error:", err)
  }

  portfolioItem.addEventListener("mouseenter", () => {
    video.muted = true
    const playPromise = video.play()

    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        console.log("Video autoplay prevented:", error)
      })
    }
  })

  portfolioItem.addEventListener("mouseleave", () => {
    try {
      video.pause()
      video.currentTime = 0
      
      // Force reload to show poster again
      video.load()
      
      // Alternative method: re-set the poster attribute
      if (originalPoster) {
        video.setAttribute('poster', originalPoster)
      }
    } catch (err) {
      console.log("Video pause error:", err)
    }
  })
})

// ===== Portfolio Play Button Click - FIXED =====
const playButtons = document.querySelectorAll(".play-btn")

playButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.stopPropagation()
    
    const portfolioItem = button.closest(".portfolio-item")
    if (!portfolioItem) return
    
    const video = portfolioItem.querySelector(".portfolio-video")
    if (!video) return
    
    const fullVideoLink = video.getAttribute("data-full-video-id")

    // Check if link exists and is valid
    if (!fullVideoLink || fullVideoLink.trim() === "" || fullVideoLink.includes("YOUR_")) {
      alert("Full video link not configured. Please add your video link.")
      return
    }

    // Open the link in a new tab
    console.log("Opening video:", fullVideoLink)
    window.open(fullVideoLink, '_blank')
  })
})

// ===== Optional: Make entire portfolio item clickable =====
portfolioItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    // Only trigger if not clicking the play button
    if (!e.target.closest('.play-btn')) {
      const video = item.querySelector(".portfolio-video")
      if (!video) return
      
      const fullVideoLink = video.getAttribute("data-full-video-id")
      
      if (fullVideoLink && !fullVideoLink.includes("YOUR_") && fullVideoLink.trim() !== "") {
        console.log("Opening video from item click:", fullVideoLink)
        window.open(fullVideoLink, '_blank')
      }
    }
  })
})

// ===== Reviews Slider =====
const reviewCards = document.querySelectorAll(".review-card")
const dots = document.querySelectorAll(".dot")
let currentSlide = 0

function showSlide(index) {
  if (!reviewCards || reviewCards.length === 0) return
  if (!dots || dots.length === 0) return

  // Clamp index to valid range
  index = ((index % reviewCards.length) + reviewCards.length) % reviewCards.length

  reviewCards.forEach((card) => card.classList.remove("active"))
  dots.forEach((dot) => dot.classList.remove("active"))

  reviewCards[index].classList.add("active")
  if (dots[index]) dots[index].classList.add("active")
}

if (dots && dots.length > 0) {
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentSlide = index
      showSlide(currentSlide)
    })
  })
}

// Auto-advance slides if we have cards
if (reviewCards && reviewCards.length > 0) {
  setInterval(() => {
    currentSlide = (currentSlide + 1) % reviewCards.length
    showSlide(currentSlide)
  }, 5000)
}

// ===== Contact Form Submission with EmailJS =====
const contactForm = document.querySelector(".contact-form")

// Initialize EmailJS with your public key
if (window.emailjs) {
  emailjs.init("b1lY8hh-8_W3uINUE")
}

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Check if EmailJS is loaded
    if (!window.emailjs) {
      console.error("EmailJS library not loaded")
      alert("Email service is not available. Please try again later or contact us directly at samiyart543@gmail.com")
      return
    }

    // Get form inputs
    const nameInput = contactForm.querySelector('input[type="text"]')
    const emailInput = contactForm.querySelector('input[type="email"]')
    const subjectInput = contactForm.querySelector('input[placeholder="Subject"]')
    const messageInput = contactForm.querySelector('textarea')

    // Validate inputs exist
    if (!nameInput || !emailInput || !messageInput) {
      console.error("Form inputs not found")
      alert("Form error. Please refresh the page and try again.")
      return
    }

    // Get values
    const name = nameInput.value.trim()
    const email = emailInput.value.trim()
    const subject = subjectInput ? subjectInput.value.trim() : "New Contact Form Submission"
    const message = messageInput.value.trim()

    // Validate form data
    if (!name || !email || !message) {
      alert("Please fill in all required fields (Name, Email, and Message)")
      return
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address")
      return
    }

    // Disable submit button to prevent double submission
    const submitButton = contactForm.querySelector('button[type="submit"]')
    const originalButtonText = submitButton.innerHTML
    submitButton.disabled = true
    submitButton.innerHTML = "Sending..."

    // Prepare email parameters
    const templateParams = {
      from_name: name,
      from_email: email,
      subject: subject || "New Contact Form Submission",
      message: message,
      to_email: "samiyart543@gmail.com",
      to_name: "Samiyart",
    }

    console.log("Sending email with params:", templateParams)

    // Send email via EmailJS
    emailjs
      .send(
        "service_qkk2klk",  // Your service ID
        "template_r61arwp", // Your template ID
        templateParams
      )
      .then(
        (response) => {
          console.log("✅ Email sent successfully!", response.status, response.text)
          alert("✅ Thank you for your message! We will get back to you soon.")
          contactForm.reset()
          
          // Re-enable button
          submitButton.disabled = false
          submitButton.innerHTML = originalButtonText
        },
        (error) => {
          console.error("❌ Email send failed:", error)
          alert("❌ Failed to send message. Please try again or contact us directly at samiyart543@gmail.com")
          
          // Re-enable button
          submitButton.disabled = false
          submitButton.innerHTML = originalButtonText
        }
      )
  })
} else {
  console.error("Contact form not found in the DOM")
}

// ===== Log initialization =====
console.log("Contact form email handler initialized")
console.log("EmailJS loaded:", typeof window.emailjs !== 'undefined')

// ===== Mobile Menu Toggle =====
const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
const navLinks = document.querySelector(".nav-links")

if (mobileMenuBtn && navLinks) {
  mobileMenuBtn.addEventListener("click", () => {
    navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex"
    navLinks.style.position = "absolute"
    navLinks.style.top = "100%"
    navLinks.style.left = "0"
    navLinks.style.right = "0"
    navLinks.style.background = "var(--bg-dark)"
    navLinks.style.flexDirection = "column"
    navLinks.style.padding = "20px"
    navLinks.style.gap = "20px"
  })
}

// ===== Parallax Effect on Hero =====
document.addEventListener("mousemove", (e) => {
  const heroImage = document.querySelector(".hero-image img")
  if (heroImage) {
    const x = (e.clientX / window.innerWidth - 0.5) * 20
    const y = (e.clientY / window.innerHeight - 0.5) * 20
    heroImage.style.transform = `translate(${x}px, ${y}px)`
  }
})

// ===== Menu Overlay Toggle Functionality =====
const menuToggle = document.getElementById("menuToggle")
const menuClose = document.getElementById("menuClose")
const navOverlay = document.getElementById("navOverlay")
const navOverlayLinks = document.querySelectorAll(".nav-overlay-link")

if (menuToggle && menuClose && navOverlay) {
  // Open menu
  menuToggle.addEventListener("click", () => {
    navOverlay.classList.add("active")
    document.body.style.overflow = "hidden"
  })

  // Close menu
  menuClose.addEventListener("click", () => {
    navOverlay.classList.remove("active")
    document.body.style.overflow = "auto"
  })

  // Close menu when clicking on a link
  if (navOverlayLinks && navOverlayLinks.length > 0) {
    navOverlayLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault()
        const targetId = link.getAttribute("href")
        const targetSection = document.querySelector(targetId)

        // Close overlay
        navOverlay.classList.remove("active")
        document.body.style.overflow = "auto"

        // Scroll to section after overlay closes
        setTimeout(() => {
          if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" })
          }
        }, 300)
      })
    })
  }

  // Close menu with Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navOverlay.classList.contains("active")) {
      navOverlay.classList.remove("active")
      document.body.style.overflow = "auto"
    }
  })
}

// ===== Initialize =====
console.log("Portfolio website loaded successfully!")
console.log("Total portfolio items:", portfolioItems.length)
console.log("Total play buttons:", playButtons.length)