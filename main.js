const siteData = {
  company: {
    name: "Master Craftsman Construction Ltd.",
    phone: "604.537.4700",
    phoneHref: "+16045374700",
    email: "mastercraftsman4700@gmail.com",
    addressLine1: "15951 110A Avenue",
    addressLine2: "Surrey, BC V4N 4Y2"
  },

  strengths: [
    {
      title: "30+ Years of Construction Experience",
      text: "Hands-on leadership across residential, multifamily and commercial construction."
    },
    {
      title: "End-to-End Project Management",
      text: "Experience in takeoffs, estimating, budgeting, contracting, purchasing, scheduling and turnover."
    },
    {
      title: "Safety & Quality Focus",
      text: "A strong site-safety record supported by close monitoring, inspections and coordination."
    },
    {
      title: "Residential to Commercial Experience",
      text: "Project experience ranging from homes and townhomes to mid-rise developments and commercial work."
    }
  ],

  services: [
    "Construction Management",
    "Site Management",
    "Project Planning & Estimating",
    "Budget & Schedule Coordination",
    "General Contracting",
    "Residential Construction",
    "Multifamily Construction",
    "Commercial Construction"
  ],

  qualifications: [
    "Licensed Residential Builder — British Columbia",
    "B.C. Building Code Part 9 Housing — BCIT",
    "Building Construction Part 1 — BCIT"
  ],

  categories: [
    {
      key: "commercial",
      title: "Commercial",
      text: "Commercial buildings, plazas and mixed-use commercial components.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85"
    },
    {
      key: "multifamily",
      title: "Multifamily",
      text: "Townhomes, condominiums and mid-rise wood-frame developments.",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=85"
    },
    {
      key: "residential",
      title: "Residential",
      text: "New homes, renovations, restoration, framing and finishing carpentry.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
    }
  ],

  projects: [
    {
      id: "abbotsford-plaza",
      category: "commercial",
      title: "Mt. Lehman Road Plaza",
      location: "1567 Mt Lehman Rd, Abbotsford",
      role: "Site Superintendent",
      period: "Sep 2025 – Current",
      size: "Ground-level commercial plaza",
      construction: "Commercial",
      description: "Site Superintendent experience on the construction of a plaza for Tim Hortons, Cancon Gas Station, EV charging station and Subway, with ground-level open parking.",
      images: [
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=88",
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=88",
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=88"
      ]
    },
    {
      id: "everett-vancouver",
      category: "multifamily",
      title: "Everett",
      location: "3125 Pierview Crescent, Vancouver",
      role: "Superintendent",
      period: "Dec 2024 – Sep 2025",
      size: "89 units",
      construction: "Hi-rise wood-frame condominium",
      description: "Superintendent experience on an 89-unit hi-rise wood-frame condominium development with three levels of underground parkade, coordinating multiple trades and professional services.",
      images: [
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=88",
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1600&q=88",
        "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1600&q=88"
      ]
    },
    {
      id: "radley-surrey",
      category: "multifamily",
      title: "Radley",
      location: "13838 & 13858 108 Ave, Surrey",
      role: "Superintendent",
      period: "Apr 2022 – Dec 2024",
      size: "193 units",
      construction: "Mid-rise wood-frame condominium",
      description: "Superintendent experience on a 193-unit mid-rise wood-frame condominium project with two levels of underground parkade, managing multiple trades and professional services.",
      images: [
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1600&q=88",
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=88",
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=88"
      ]
    },
    {
      id: "yale-road",
      category: "multifamily",
      title: "Yale Road Condominiums",
      location: "46338 Yale Road, Chilliwack",
      role: "Superintendent",
      period: "Jul 2019 – Mar 2022",
      size: "58 units",
      construction: "Mid-rise wood-frame condominium",
      description: "Superintendent experience on a 58-unit mid-rise wood-frame condominium project with three levels of underground parkade and coordination of multiple trades and professional services.",
      images: [
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=88",
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=88"
      ]
    },
    {
      id: "cyrus-hill",
      category: "multifamily",
      title: "Cyrus Hill",
      location: "7167 116 Street, Delta",
      role: "Construction Manager",
      period: "Aug 2018 – Jul 2019",
      size: "20 units",
      construction: "3-storey town house project",
      description: "Construction Manager experience on a 20-unit, three-storey townhouse project with three-bedroom-plus-den homes.",
      images: [
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=88",
        "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1600&q=88"
      ]
    },
    {
      id: "agnes-new-west",
      category: "multifamily",
      title: "Agnes Street",
      location: "318/328 Agnes St, New Westminster",
      role: "Superintendent",
      period: "Jun 2015 – Jul 2018",
      size: "202 units",
      construction: "Mid-rise wood-frame condominium",
      description: "Superintendent experience on a 202-unit mid-rise wood-frame condominium project with three levels of underground parkade.",
      images: [
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1600&q=88",
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=88"
      ]
    },
    {
      id: "rhodes-vancouver",
      category: "commercial",
      title: "Rhodes Street Mixed-Use",
      location: "5711 Rhodes St, Vancouver",
      role: "Superintendent",
      period: "May 2012 – Mar 2014",
      size: "40 units",
      construction: "Wood-frame condominium + ground-floor commercial",
      description: "Superintendent experience on a 40-unit mid-rise wood-frame condominium project with ground-floor commercial space and one level of underground parking.",
      images: [
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=88",
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=88"
      ]
    },
    {
      id: "ward-new-west",
      category: "multifamily",
      title: "Ward Street",
      location: "315 Ward St, New Westminster",
      role: "Superintendent",
      period: "Apr 2012 – Sep 2013",
      size: "26 units",
      construction: "Mid-rise wood-frame condominium",
      description: "Superintendent experience on a 26-unit mid-rise wood-frame condominium development with one level of underground parking.",
      images: [
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=88",
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=88"
      ]
    },
    {
      id: "uk-wholesale",
      category: "commercial",
      title: "UK Wholesale Commercial Building",
      location: "33780 Essendene Ave, Abbotsford",
      role: "General Contractor",
      period: "Aug 2011 – Sep 2012",
      size: "Commercial building",
      construction: "Commercial",
      description: "General Contractor experience on a commercial building project in Abbotsford.",
      images: [
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=88",
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=88"
      ]
    },
    {
      id: "hub-on-fraser",
      category: "multifamily",
      title: "The Hub on Fraser",
      location: "13897 Fraser Hwy, Surrey",
      role: "Superintendent",
      period: "Dec 2009 – Feb 2012",
      size: "104 units",
      construction: "Mid-rise wood-frame condominium",
      description: "Superintendent experience on a 104-unit mid-rise wood-frame condominium development with two levels of underground parking.",
      images: [
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=88",
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1600&q=88"
      ]
    },
    {
      id: "residential-homes",
      category: "residential",
      title: "173A & 64A Avenue Homes",
      location: "Surrey, BC",
      role: "Superintendent",
      period: "Feb 2009 – Dec 2009",
      size: "10 residential homes",
      construction: "Residential",
      description: "Superintendent experience on the construction of 10 residential homes in Surrey.",
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=88",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=88",
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=88"
      ]
    },
    {
      id: "solana",
      category: "multifamily",
      title: "Solana",
      location: "19560 68 Ave, Surrey",
      role: "Superintendent",
      period: "Jan 2008 – Nov 2009",
      size: "54 townhomes",
      construction: "Townhome development",
      description: "Superintendent experience on a 54-townhome project in Surrey.",
      images: [
        "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1600&q=88",
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=88"
      ]
    },
    {
      id: "master-craftsman-residential",
      category: "residential",
      title: "Master Craftsman Residential Work",
      location: "British Columbia",
      role: "Master Craftsman Construction",
      period: "Jan 1995 – Dec 2007",
      size: "Residential construction",
      construction: "New homes, renovations & restoration",
      description: "Experience includes complete new-home construction, medium and large-scale renovations, building restoration, general framing and finishing carpentry.",
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=88",
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=88",
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=88"
      ]
    }
  ]
};

function headerTemplate() {
  const page = document.body.dataset.page;
  return `
    <header class="site-header">
      <div class="container site-header__inner">
        <a href="index.html" class="brand" aria-label="Master Craftsman Construction Ltd. home">
          <span class="brand__mark" aria-hidden="true">MC</span>
          <span class="brand__text">
            <strong>Master Craftsman</strong>
            <small>Construction Ltd.</small>
          </span>
        </a>

        <button class="menu-toggle" id="menu-toggle" type="button" aria-label="Open navigation" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>

        <nav class="nav" id="main-nav" aria-label="Primary navigation">
          <a class="nav__link ${page === "home" ? "active" : ""}" href="index.html">Home</a>
          <a class="nav__link ${page === "projects" ? "active" : ""}" href="projects.html">Projects</a>
          <a class="nav__link ${page === "contact" ? "active" : ""}" href="contact.html">Contact</a>
          <a class="btn btn--primary header-cta" href="contact.html">Discuss a Project</a>
        </nav>
      </div>
    </header>
  `;
}

function footerTemplate() {
  const c = siteData.company;
  const year = new Date().getFullYear();
  return `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div>
            <a href="index.html" class="brand" aria-label="Master Craftsman Construction Ltd. home">
              <span class="brand__mark" aria-hidden="true">MC</span>
              <span class="brand__text">
                <strong>Master Craftsman</strong>
                <small>Construction Ltd.</small>
              </span>
            </a>
          </div>

          <div>
            <div class="footer-title">Navigation</div>
            <div class="footer-links">
              <a href="index.html">Home</a>
              <a href="projects.html">Projects</a>
              <a href="contact.html">Contact</a>
            </div>
          </div>

          <div class="footer-contact">
            <div class="footer-title">${c.name}</div>
            <p>${c.addressLine1}<br>${c.addressLine2}</p>
            <p><a href="tel:${c.phoneHref}">${c.phone}</a></p>
            <p><a href="mailto:${c.email}">${c.email}</a></p>
          </div>
        </div>

        <div class="footer-bottom">
          © ${year} Master Craftsman Construction Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  `;
}

function mountSharedLayout() {
  const header = document.getElementById("site-header");
  const footer = document.getElementById("site-footer");

  if (header) header.innerHTML = headerTemplate();
  if (footer) footer.innerHTML = footerTemplate();

  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });

    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }
}

function mountHome() {
  const strengthGrid = document.getElementById("strength-grid");
  if (strengthGrid) {
    strengthGrid.innerHTML = siteData.strengths.map((item, index) => `
      <article class="feature-item reveal">
        <span class="feature-number">${String(index + 1).padStart(2, "0")}</span>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </article>
    `).join("");
  }

  const servicesGrid = document.getElementById("services-grid");
  if (servicesGrid) {
    servicesGrid.innerHTML = siteData.services.map((service, index) => `
      <article class="service-item reveal">
        <span>${String(index + 1).padStart(2, "0")}</span>
        <h3>${service}</h3>
      </article>
    `).join("");
  }

  const categoryGrid = document.getElementById("category-grid");
  if (categoryGrid) {
    categoryGrid.innerHTML = siteData.categories.map(item => `
      <a class="category-card reveal" href="projects.html?category=${item.key}" aria-label="View ${item.title} projects">
        <div class="category-card__image" style="background-image:url('${item.image}')"></div>
        <div class="category-card__content">
          <h3>${item.title}</h3>
          <p>${item.text}</p>
          <span class="category-card__link">View Projects <span>→</span></span>
        </div>
      </a>
    `).join("");
  }

  const featured = document.getElementById("featured-projects");
  if (featured) {
    const selected = ["abbotsford-plaza", "radley-surrey", "residential-homes"]
      .map(id => siteData.projects.find(p => p.id === id))
      .filter(Boolean);

    featured.innerHTML = selected.map(projectCard).join("");
  }

  const qualifications = document.getElementById("qualification-list");
  if (qualifications) {
    qualifications.innerHTML = siteData.qualifications.map((item, index) => `
      <div class="qualification-item">
        <span>${String(index + 1).padStart(2, "0")}</span>
        <p>${item}</p>
      </div>
    `).join("");
  }
}

function projectCard(project, clickable = false) {
  return `
    <article class="project-card reveal" data-category="${project.category}" data-project-id="${project.id}" data-clickable="${clickable}">
      <div class="project-card__image-wrap">
        <img class="project-card__image" src="${project.images[0]}" alt="${project.title} placeholder project image" loading="lazy">
        <div class="project-card__overlay">${clickable ? "View Project →" : ""}</div>
      </div>
      <div class="project-card__body">
        <div class="project-card__category">${project.category}</div>
        <h3>${project.title}</h3>
        <p>${project.location}</p>
      </div>
    </article>
  `;
}

function mountProjects() {
  const grid = document.getElementById("project-grid");
  if (!grid) return;

  grid.innerHTML = siteData.projects.map(project => projectCard(project, true)).join("");

  const buttons = [...document.querySelectorAll(".filter-btn")];
  const cards = [...grid.querySelectorAll(".project-card")];

  const setFilter = (filter) => {
    buttons.forEach(btn => btn.classList.toggle("active", btn.dataset.filter === filter));
    cards.forEach(card => {
      const show = filter === "all" || card.dataset.category === filter;
      card.style.display = show ? "" : "none";
    });
  };

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      setFilter(btn.dataset.filter);
      const url = new URL(window.location.href);
      if (btn.dataset.filter === "all") url.searchParams.delete("category");
      else url.searchParams.set("category", btn.dataset.filter);
      history.replaceState({}, "", url);
    });
  });

  const requestedCategory = new URLSearchParams(window.location.search).get("category");
  if (["commercial", "multifamily", "residential"].includes(requestedCategory)) {
    setFilter(requestedCategory);
  }

  cards.forEach(card => {
    card.addEventListener("click", () => openProjectModal(card.dataset.projectId));
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `Open details for ${card.querySelector("h3").textContent}`);

    card.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openProjectModal(card.dataset.projectId);
      }
    });
  });
}

let activeProject = null;
let activeImageIndex = 0;

function openProjectModal(id) {
  const modal = document.getElementById("project-modal");
  if (!modal) return;

  activeProject = siteData.projects.find(project => project.id === id);
  if (!activeProject) return;

  activeImageIndex = 0;
  document.getElementById("modal-title").textContent = activeProject.title;
  document.getElementById("modal-category").textContent = activeProject.category;
  document.getElementById("modal-location").textContent = activeProject.location;
  document.getElementById("modal-description").textContent = activeProject.description;

  document.getElementById("modal-meta").innerHTML = [
    ["Role", activeProject.role],
    ["Period", activeProject.period],
    ["Size", activeProject.size],
    ["Construction", activeProject.construction]
  ].map(([label, value]) => `
    <div class="meta-item">
      <span>${label}</span>
      <strong>${value}</strong>
    </div>
  `).join("");

  updateModalImage();

  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  modal.querySelector(".modal__close").focus();
}

function updateModalImage() {
  if (!activeProject) return;
  const image = document.getElementById("modal-image");
  image.src = activeProject.images[activeImageIndex];
  image.alt = `${activeProject.title} placeholder project image ${activeImageIndex + 1}`;
}

function closeModal() {
  const modal = document.getElementById("project-modal");
  if (!modal) return;
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function mountModalControls() {
  document.querySelectorAll("[data-close-modal]").forEach(el => {
    el.addEventListener("click", closeModal);
  });

  document.getElementById("gallery-prev")?.addEventListener("click", () => {
    if (!activeProject) return;
    activeImageIndex = (activeImageIndex - 1 + activeProject.images.length) % activeProject.images.length;
    updateModalImage();
  });

  document.getElementById("gallery-next")?.addEventListener("click", () => {
    if (!activeProject) return;
    activeImageIndex = (activeImageIndex + 1) % activeProject.images.length;
    updateModalImage();
  });

  document.addEventListener("keydown", event => {
    const modal = document.getElementById("project-modal");
    if (!modal?.classList.contains("active")) return;

    if (event.key === "Escape") closeModal();
    if (event.key === "ArrowLeft") document.getElementById("gallery-prev")?.click();
    if (event.key === "ArrowRight") document.getElementById("gallery-next")?.click();
  });
}

function mountContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const status = document.getElementById("form-status");
  const requiredFields = ["name", "email", "projectType", "message"];

  function setError(field, message) {
    const wrapper = field.closest(".field");
    wrapper.classList.toggle("invalid", Boolean(message));
    wrapper.querySelector(".error").textContent = message;
  }

  function validate() {
    let valid = true;

    requiredFields.forEach(name => {
      const field = form.elements[name];
      if (!field.value.trim()) {
        setError(field, "This field is required.");
        valid = false;
      } else {
        setError(field, "");
      }
    });

    const email = form.elements.email;
    if (email.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
      setError(email, "Enter a valid email address.");
      valid = false;
    }

    const phone = form.elements.phone;
    if (phone.value.trim() && !/^[0-9+().\-\s]{7,20}$/.test(phone.value.trim())) {
      setError(phone, "Enter a valid phone number.");
      valid = false;
    } else {
      setError(phone, "");
    }

    return valid;
  }

  form.addEventListener("submit", event => {
    event.preventDefault();
    status.textContent = "";
    status.className = "form-status";

    if (!validate()) {
      status.textContent = "Please review the highlighted fields.";
      status.classList.add("failure");
      return;
    }

    // Static HTML/CSS/JS cannot send email by itself.
    // This demo confirms the form locally. Connect it to Formspree, Netlify Forms,
    // EmailJS, a PHP endpoint, or your own backend when you publish the site.
    status.textContent = "Thank you. Your message is ready to be submitted once the website is connected to an email/form service.";
    status.classList.add("success");
    form.reset();
  });
}

function mountRevealAnimations() {
  const elements = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    elements.forEach(el => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  elements.forEach(el => observer.observe(el));
}

document.addEventListener("DOMContentLoaded", () => {
  mountSharedLayout();
  mountHome();
  mountProjects();
  mountModalControls();
  mountContactForm();

  // Wait one frame so dynamically inserted elements are included.
  requestAnimationFrame(mountRevealAnimations);
});
