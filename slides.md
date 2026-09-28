---
theme: default
title: Building AI-Friendly Software Architecture
info: Designing systems that humans and AI agents can understand, explore, and change safely
author: Luiz Schons
aspectRatio: 16/9
canvasWidth: 1920
fonts:
  sans: Inter
  mono: JetBrains Mono
transition: fade
mdc: true
---

<style global>
:root {
  --brand-ink: #102033;
  --brand-blue: #2563eb;
  --brand-cyan: #06b6d4;
  --brand-muted: #64748b;
  --brand-surface: #f8fafc;
}

.slidev-layout {
  background:
    radial-gradient(circle at 92% 8%, rgba(37, 99, 235, 0.08), transparent 26%),
    linear-gradient(135deg, #ffffff 0%, var(--brand-surface) 100%);
  color: var(--brand-ink);
  padding: 3.5rem 5rem 3rem;
  font-size: 1.25rem;
}

.slidev-layout h1,
.slidev-layout h2,
.slidev-layout h3 {
  letter-spacing: -0.03em;
  line-height: 1.08;
}

.slidev-layout h1 {
  margin-bottom: 1.5rem;
  font-size: 4.8rem !important;
  max-width: 18em;
  position: relative;
}

.slidev-layout h1::after {
  content: '';
  display: block;
  width: 4rem;
  height: 0.3rem;
  margin-top: 1rem;
  border-radius: 99px;
  background: var(--brand-blue);
}

.slidev-layout h2 {
  margin-bottom: 1.25rem;
  font-size: 3.5rem !important;
}

.slidev-layout p,
.slidev-layout li {
  line-height: 1.35;
}

.slidev-layout li {
  margin: 0.8rem 0;
  font-size: 1.35rem;
}

.eyebrow {
  color: var(--brand-blue);
  font-size: 0.8em;
  font-weight: 700;
  letter-spacing: 0.12em;
  line-height: 1.2;
  margin-bottom: 1.25rem;
  text-transform: uppercase;
}

.muted { color: var(--brand-muted); }

.hero-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 3rem;
  align-items: center;
  height: 100%;
}

.system-map {
  border: 1px solid #cbd5e1;
  border-radius: 1.25rem;
  padding: 1.5rem;
  background: white;
  box-shadow: 0 20px 50px rgba(15, 23, 42, 0.09);
}

:global(.diagram-large) {
  width: 100%;
  min-height: 68vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
}

:global(.diagram-large .mermaid) {
  width: 100%;
  zoom: 1.35;
  transform-origin: center center;
}

:global(.flow-diagram) {
  width: min(100%, 1700px);
  display: grid;
  grid-template-columns: 1fr 0.25fr 1.6fr;
  gap: 1.2rem;
  align-items: center;
  margin: 2rem auto 0;
}

:global(.flow-node) {
  border: 2px solid #93c5fd;
  border-radius: 1rem;
  padding: 1.8rem 1.25rem;
  background: white;
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.08);
  text-align: center;
  font-size: 1.8rem;
  font-weight: 650;
  line-height: 1.15;
}

:global(.flow-node.primary) {
  background: #dbeafe;
  border-color: #2563eb;
}

:global(.flow-node.secondary) {
  background: #ecfeff;
  border-color: #06b6d4;
}

:global(.flow-arrow) {
  color: #2563eb;
  text-align: center;
  font-size: 3rem;
  font-weight: 700;
}

:global(.source-stack) {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.1rem;
}

:global(.source-stack .flow-node) {
  min-height: 5.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

:global(.quote-slide) {
  min-height: 58vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 68rem;
}

:global(.quote-slide .quote) {
  font-size: 4.2rem;
  line-height: 1.08;
  font-weight: 750;
  letter-spacing: -0.04em;
}

:global(.quote-slide .caption) {
  margin-top: 2rem;
  font-size: 1.5rem;
  color: var(--brand-muted);
}

:global(.decision-flow) {
  width: min(100%, 1700px);
}

:global(.decision-flow .flow-node) {
  min-height: 7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.1rem;
}

:global(.decision-flow .flow-arrow) {
  font-size: 4.5rem;
}

:global(.diagram-large svg) {
  width: 100% !important;
  max-width: 1500px !important;
  max-height: 62vh !important;
  height: auto !important;
}

:global(.diagram-large foreignObject) {
  overflow: visible;
}

.hero-title {
  max-width: 10em;
  font-size: 3.75rem;
  line-height: 1.02;
  margin: 0 0 1.25rem;
}

.hero-subtitle {
  max-width: 28em;
  font-size: 1.55rem;
  line-height: 1.25;
  margin: 0;
}

.node {
  display: inline-block;
  border: 1px solid #93c5fd;
  border-radius: 0.75rem;
  padding: 0.6rem 0.8rem;
  margin: 0.35rem;
  background: #eff6ff;
  font-size: 0.75em;
}

.node.agent { background: #ecfeff; border-color: #67e8f9; }
</style>

<!-- Speaker notes: Keep the opening conversational. Establish the new-person analogy before introducing technical vocabulary. -->

<div class="eyebrow">A practical architecture for humans and AI agents</div>

<div class="hero-grid">
  <div>
    <h1 class="hero-title">Building AI-Friendly Software Architecture</h1>
    <p class="hero-subtitle">Designing systems that can be understood, explored, and changed safely</p>
    <p class="muted">Luiz Schons · Senior Software Engineer</p>
  </div>
  <div class="system-map">
    <div class="node">Human engineer</div>
    <div class="node agent">AI agent</div>
    <div class="node">Code</div>
    <div class="node">Context</div>
    <div class="node">Production signals</div>
  </div>
</div>

---

# Is your software ready to be understood by an AI?

<div class="grid grid-cols-2 gap-12 items-center h-full">
  <div>
    <p class="text-2xl">AI can read code.</p>
    <p class="text-5xl font-bold">That does not mean it understands the system.</p>
  </div>
  <div class="text-center">
    <div class="text-8xl">?</div>
    <p class="muted">The problem may be context, not intelligence.</p>
  </div>
</div>

<!-- The first article frames AI as a new person entering an unfamiliar company. -->

---

# Imagine a new engineer joining your team

<div class="grid grid-cols-4 gap-4 mt-12">
  <div class="p-5 rounded-xl bg-white border border-slate-200">The domain</div>
  <div class="p-5 rounded-xl bg-white border border-slate-200">The systems</div>
  <div class="p-5 rounded-xl bg-white border border-slate-200">The decisions</div>
  <div class="p-5 rounded-xl bg-white border border-slate-200">The operational reality</div>
</div>

<p class="text-2xl mt-16 muted">How much of this knowledge lives only in people’s heads?</p>

---

# People need paths to discover knowledge

<div class="diagram-large">
  <div class="flow-diagram">
    <div class="flow-node primary">New engineer</div>
    <div class="flow-arrow">→</div>
    <div class="source-stack">
      <div class="flow-node">Repository</div>
      <div class="flow-node">Documentation</div>
      <div class="flow-node">Architectural decisions</div>
      <div class="flow-node">Dashboards</div>
      <div class="flow-node">Incidents</div>
    </div>
  </div>
</div>

---

# An agent faces the same onboarding problem

<div class="grid grid-cols-2 gap-8 items-center h-full">
  <div class="p-8 rounded-2xl bg-white border border-slate-200">
    <div class="eyebrow">Experienced engineer</div>
    <h3>Uses memory and shortcuts</h3>
    <p class="muted">“I know where to look.”</p>
  </div>
  <div class="p-8 rounded-2xl bg-cyan-50 border border-cyan-200">
    <div class="eyebrow">AI agent</div>
    <h3>Needs explicit paths</h3>
    <p class="muted">“Where does the answer live?”</p>
  </div>
</div>

---

# Model quality is only part of the problem

<div class="quote-slide">
  <p class="quote">“The model is not good enough.”</p>
  <p class="caption">Sometimes the system simply hides too much context.</p>
</div>

---

# Code is only part of the story

<div class="grid grid-cols-2 gap-16 items-center h-full">
  <div class="text-center">
    <div class="text-8xl">{ }</div>
    <p class="text-2xl font-bold">Code shows implementation</p>
  </div>
  <div>
    <p class="text-xl">Code does not always explain:</p>
    <ul>
      <li>Why the decision exists</li>
      <li>Which trade-offs were accepted</li>
      <li>Which constraints matter</li>
      <li>How the system behaves in production</li>
    </ul>
  </div>
</div>

---

# Having information is not the same as having context

<div class="grid grid-cols-2 gap-12 items-center h-full">
  <div>
    <div class="node">Code</div>
    <div class="node">Tickets</div>
    <div class="node">Dashboards</div>
    <div class="node">ADRs</div>
    <div class="node">Incidents</div>
  </div>
  <div>
    <p class="text-5xl font-bold">Context is the path between them.</p>
    <p class="text-xl muted">AI-friendly architecture makes that path discoverable.</p>
  </div>
</div>

---

# The context architecture

<div class="diagram-large">
  <div class="flow-diagram" style="grid-template-columns: 1fr 0.25fr 1.6fr;">
    <div class="flow-node primary">Task</div>
    <div class="flow-arrow">→</div>
    <div class="source-stack">
      <div class="flow-node secondary">Domain</div>
      <div class="flow-node secondary">Service</div>
      <div class="flow-node">Code</div>
      <div class="flow-node">Runbook</div>
      <div class="flow-node">Dashboard</div>
      <div class="flow-node">ADR</div>
      <div class="flow-node">Incident → Lessons</div>
    </div>
  </div>
</div>

<!-- This is the first technical definition of Context Architecture. Pause here and name the links, not just the sources. -->

---

# The system should tell its own story

<div class="text-center mt-16">
  <p class="text-4xl">Discoverable context</p>
  <p class="text-6xl font-bold text-blue-600">→ better decisions</p>
  <p class="text-4xl">→ safer changes</p>
</div>

<p class="text-center muted mt-16">Prototype complete. The full narrative and extended OpenTelemetry section live in the source outline.</p>

---

# The system exists beyond the repository

<div class="diagram-large">
  <div class="flow-diagram" style="grid-template-columns: 1fr 0.25fr 2fr;">
    <div class="flow-node primary">Mature system</div>
    <div class="flow-arrow">→</div>
    <div class="source-stack">
      <div class="flow-node">Code</div>
      <div class="flow-node">Documentation</div>
      <div class="flow-node">Architectural decisions</div>
      <div class="flow-node">Tickets and epics</div>
      <div class="flow-node">Incidents</div>
      <div class="flow-node">Dashboards and metrics</div>
    </div>
  </div>
</div>

<!-- The point is not that the repository is unimportant. It is that the repository is one source among several. -->

---

# What code leaves implicit

<div class="grid grid-cols-2 gap-16 items-center h-full">
  <div>
    <p class="text-6xl font-bold text-blue-600">The code says what.</p>
    <p class="text-4xl muted">The surrounding context explains why.</p>
  </div>
  <div class="space-y-5 text-xl">
    <div class="p-5 bg-white border-l-4 border-blue-500 rounded-r-xl">Business problem</div>
    <div class="p-5 bg-white border-l-4 border-cyan-500 rounded-r-xl">Accepted trade-offs</div>
    <div class="p-5 bg-white border-l-4 border-indigo-500 rounded-r-xl">Operational constraints</div>
  </div>
</div>

---

# Context is a network, not a giant document

<div class="grid grid-cols-2 gap-14 items-center h-full">
  <div class="text-center">
    <div class="text-8xl text-slate-300">▦</div>
    <p class="text-2xl muted">One page with everything</p>
    <p class="text-lg text-red-500">Hard to maintain</p>
  </div>
  <div class="text-center">
    <div class="text-8xl text-blue-600">⌘</div>
    <p class="text-2xl font-bold">Connected sources</p>
    <p class="text-lg text-cyan-600">Easy to navigate</p>
  </div>
</div>

---

# The trusted index

<div class="grid grid-cols-2 gap-12 items-center h-full">
  <div class="p-8 bg-slate-900 text-slate-100 rounded-2xl font-mono text-lg leading-relaxed">
    <div class="text-cyan-300">links.md</div>
    <div class="mt-4">service: payment-api</div>
    <div>context: ./context.md</div>
    <div>decisions: /architecture/payments</div>
    <div>runbook: /operations/payment-api</div>
    <div>dashboard: /observability/payments</div>
  </div>
  <div>
    <p class="text-4xl font-bold">An index points to the source of truth.</p>
    <p class="text-xl muted mt-6">It does not copy every document into one place.</p>
  </div>
</div>

---

# Context needs an owner

<div class="grid grid-cols-3 gap-6 mt-20">
  <div class="text-center">
    <div class="text-5xl">01</div>
    <p class="text-xl font-bold">Who owns it?</p>
  </div>
  <div class="text-center">
    <div class="text-5xl">02</div>
    <p class="text-xl font-bold">When was it updated?</p>
  </div>
  <div class="text-center">
    <div class="text-5xl">03</div>
    <p class="text-xl font-bold">How do we know it is valid?</p>
  </div>
</div>

<p class="text-center text-2xl muted mt-20">Context without a validity signal can be as dangerous as no context.</p>

---

# Architectural decisions explain the “why”

<div class="diagram-large">
  <div class="flow-diagram decision-flow" style="grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 0.8rem;">
    <div class="flow-node primary">Problem</div>
    <div class="flow-arrow">→</div>
    <div class="flow-node">Options</div>
    <div class="flow-arrow">→</div>
    <div class="flow-node secondary">Decision</div>
  </div>
</div>

<p class="text-center text-3xl muted">The current code shows the result. An ADR preserves the reasoning.</p>

---

# What an ADR preserves

<div class="grid grid-cols-2 gap-10 items-center h-full">
  <div class="text-6xl font-bold text-blue-600">Decision<br/>history</div>
  <ul class="text-xl leading-relaxed">
    <li>The problem that needed to be solved</li>
    <li>The options that were considered</li>
    <li>The criteria used to choose</li>
    <li>The trade-offs that were accepted</li>
    <li>The expected result</li>
  </ul>
</div>

---

# Context should follow the workflow

<div class="diagram-large">
  <div class="flow-diagram" style="grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 0.8rem;">
    <div class="flow-node">Task</div>
    <div class="flow-arrow">→</div>
    <div class="flow-node">Decision</div>
    <div class="flow-arrow">→</div>
    <div class="flow-node secondary">Code</div>
  </div>
  <div class="flow-diagram" style="grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 0.8rem; margin-top: 0.5rem;">
    <div class="flow-node">Deployment</div>
    <div class="flow-arrow">→</div>
    <div class="flow-node">Observability</div>
    <div class="flow-arrow">→</div>
    <div class="flow-node primary">Lessons</div>
  </div>
</div>

---

# The new-person test

<p class="text-3xl mb-10">Could a new engineer complete this task without asking for directions?</p>

<div class="grid grid-cols-2 gap-5">
  <div class="p-6 bg-white rounded-xl border border-slate-200 text-center text-xl">What changes?</div>
  <div class="p-6 bg-white rounded-xl border border-slate-200 text-center text-xl">Who owns it?</div>
  <div class="p-6 bg-white rounded-xl border border-slate-200 text-center text-xl">What constrains it?</div>
  <div class="p-6 bg-white rounded-xl border border-slate-200 text-center text-xl">How do we verify it?</div>
  <div class="p-6 bg-white rounded-xl border border-slate-200 text-center text-xl col-span-2">Where do we investigate?</div>
</div>

<p class="text-center text-2xl text-blue-600 mt-16">If every answer is “ask someone,” the context architecture needs work.</p>
