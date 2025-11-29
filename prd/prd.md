# **Product Requirements Document (PRD)**

# **AI Prompt Builder Micro‑SaaS**

---

## **1. Product Overview**

### **1.1 Summary**

AI Prompt Builder is a micro‑SaaS tool that transforms any user-provided idea into a structured, optimized, and high-performing AI prompt. It aims to streamline prompt creation for creators, professionals, founders, and developers by offering a guided interface, templates, and AI-powered enhancements.

### **1.2 Problem Statement**

Most users struggle to write effective prompts. They don’t know how to structure them, what details matter, or how to ensure quality output. This leads to inconsistent AI results, frustration, and inefficiency.

### **1.3 Solution**

Provide a simple interface that:

* Takes user inputs (idea, tone, role, style, platform)
* Converts them into a perfect AI prompt
* Allows saving, reusing, and generating templates
* Works across ChatGPT, Claude, Gemini, and Midjourney

### **1.4 Goals**

* Reduce friction in generating consistent high-quality prompts
* Provide a simple, intuitive user experience
* Capture target markets: creators, freelancers, founders
* Convert free users into paid users through value-driven features

### **1.5 Non-Goals**

* Not replacing full-scale prompt marketplaces
* Not offering full project management or content generation suites

---

## **2. Target Users**

### **2.1 Primary Users**

* Content creators
* Copywriters
* Indie hackers / founders
* Students and researchers
* Casually using AI for daily tasks

### **2.2 Secondary Users**

* Agencies
* Developers creating system prompts
* Teams working with internal prompt templates

---

## **3. Key Features**

## **3.1 MVP Features**

### **3.1.1 Prompt Builder**

Users input multiple parameters to generate a structured prompt:

* Idea / goal (text area)
* Role (dropdown)
* Tone (dropdown)
* Niche (tags)
* Output format (dropdown)
* Complexity (simple/detailed/expert)
* Platform (ChatGPT/Claude/Midjourney/etc.)
* Generate button
* Output box with copy & save

### **3.1.2 Save & Manage Templates**

* User can save a prompt configuration as a template
* Template editor screen
* Template usage from dashboard

### **3.1.3 History**

* Save the last 10 generated prompts for free users
* Unlimited history for Pro

### **3.1.4 User Authentication**

* Sign up/login with email and password
* OAuth optional (Google)

### **3.1.5 Subscription System**

* Free tier (limits)
* Pro tier ($5–$15/mo)
* Lifetime plan (optional)
* Stripe integration

### **3.1.6 Settings**

* Manage profile
* Manage subscription
* Dark/light mode

---

## **3.2 Phase 2 Features**

### **3.2.1 Auto-Suggest Improvements**

AI scans user’s idea & proposes better inputs.

### **3.2.2 Prompt Packs Marketplace**

Template packs:

* SEO pack
* Marketing pack
* Business pack

### **3.2.3 Collaboration Features**

Team sharing of templates.

### **3.2.4 Browser Extension**

One-click prompt optimization inside ChatGPT.

### **3.2.5 Multi-output formats**

Generate prompt for:

* ChatGPT
* Claude
* Gemini
* Midjourney (with translation to its style)

---

## **4. User Stories**

### **4.1 Prompt Builder**

* As a user, I want to enter my idea so the system can enhance it.
* As a user, I want to pick tone and role so the output aligns with my style.
* As a user, I want to copy the result easily.

### **4.2 Templates**

* As a Pro user, I want to save prompt configuration to reuse them.
* As a user, I want to quickly load a template.

### **4.3 History**

* As a user, I want to revisit previous prompts.

### **4.4 Subscription**

* As a free user, I want to see clear upgrade benefits.
* As a Pro user, I want access without limits.

### **4.5 Settings**

* As a user, I want to switch between dark/light modes.
* As a user, I want to update my profile.

---

## **5. Functional Requirements**

### **5.1 Prompt Generation**

* System must call AI API with structured payload
* Response must be displayed within output panel
* Save to history automatically

### **5.2 Authentication**

* Email/password login
* JWT or Supabase native auth
* Sessions persist on page refresh

### **5.3 Templates**

* Save and retrieve templates based on user ID
* Render template list with pagination if needed

### **5.4 Subscription Controls**

* Middleware restricts free users to limits:

  * 3 prompts/day
  * No unlimited history
  * No templates
* Stripe webhook updates subscription status in DB

---

## **6. Non-Functional Requirements**

### **Performance**

* Prompt generation must return in <4 seconds
* UI interactions <200ms

### **Security**

* HTTPS only
* Store no prompt content in logs
* Stripe PCI compliance

### **Reliability**

* 99% uptime target using Vercel

### **Scalability**

* Supabase for DB scaling
* Edge functions for fast API calls

---

## **7. Page-by-Page Specifications**

### **7.1 Landing Page**

**Sections:**

* Navigation (Login, Get Started)
* Hero section with demo box
* Feature section
* Pricing tiers
* Testimonials
* Footer

**Actions:**

* Sign up
* Trigger demo prompt

---

### **7.2 Dashboard**

**Sections:**

* Sidebar
* Top search bar
* Main content container

---

### **7.3 Prompt Builder Page**

**Fields:**

* Idea (multiline text)
* Role (dropdown)
* Tone (dropdown)
* Niche (tag input)
* Output format (dropdown)
* Complexity (pill buttons)
* Platform selector

**Buttons:**

* Generate
* Copy output
* Save as template (Pro)
* Regenerate

---

### **7.4 Templates Page**

**Components:**

* Template cards
* Search bar
* Edit modal

---

### **7.5 History Page**

**Components:**

* List of previous prompts
* Reuse button

---

### **7.6 Settings Page**

**Fields:**

* Name
* Email
* Theme switch
* Subscription section

---

## **8. Technical Architecture**

### **8.1 Frontend**

* Next.js (App Router)
* TypeScript
* TailwindCSS + shadcn/ui
* Zustand for state (optional)

### **8.2 Backend**

* Supabase (auth, DB, RLS)
* OpenAI API for AI prompts
* Stripe for payments

### **8.3 Deployment**

* Vercel
* Supabase hosting

---

## **9. Database Schema**

(Same as wireframes doc — included for completeness)

**Tables:**

* users
* subscriptions
* prompts
* templates

---

## **10. Analytics & Metrics**

### **Core KPIs:**

* Daily Active Users (DAU)
* Prompt generations per user
* Free → Pro conversion rate
* Churn rate
* Lifetime value

### **Secondary Metrics:**

* Template usage
* History revisits
* Landing page conversion rate

---

## **11. Roadmap**

### **Week 1: MVP**

* Core builder
* Auth
* Basic limits
* UI
* Deployment

### **Week 2–4: Pro Upgrade**

* Templates
* History
* Stripe subscription

### **Month 2:**

* Prompt Packs
* Auto-suggestion

### **Month 3:**

* Chrome extension
* Team features

---

## **12. Risks & Mitigation**

### **Risk: Low conversion**

* Mitigation: Add more value-based features (templates, packs)

### **Risk: Slow AI response time**

* Mitigation: Use higher-performance GPT endpoints

### **Risk: Competitors**

* Mitigation: Focus on simplicity + niche templates

---

## **13. Success Criteria**

* 1000 users within 3 months
* 3% Pro conversion
* Rated 4.8+/5 UI/UX satisfaction
* Generate recurring revenue with minimal support load

---

# **End of PRD**
