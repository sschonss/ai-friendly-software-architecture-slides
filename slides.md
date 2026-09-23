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

<style>
:root {
  --brand-ink: #102033;
  --brand-blue: #2563eb;
  --brand-cyan: #06b6d4;
  --brand-muted: #64748b;
  --brand-surface: #f8fafc;
}

.slidev-layout {
  background: var(--brand-surface);
  color: var(--brand-ink);
}

h1, h2, h3 { letter-spacing: -0.03em; }

.eyebrow {
  color: var(--brand-blue);
  font-size: 0.8em;
  font-weight: 700;
  letter-spacing: 0.12em;
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

# Building AI-Friendly Software Architecture

<div class="eyebrow">A practical architecture for humans and AI agents</div>

<div class="hero-grid">
  <div>
    <h2>Designing systems that can be understood, explored, and changed safely</h2>
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

```mermaid {scale: 0.82}
flowchart LR
    Person[New engineer] --> Repository
    Person --> Documentation
    Person --> Decisions[Architectural decisions]
    Person --> Dashboards
    Person --> Incidents
```

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

# The common diagnosis

<div class="h-full flex flex-col justify-center items-center">
  <p class="text-3xl muted">When an agent makes a mistake, we often say:</p>
  <h2 class="text-7xl">“The model is not good enough.”</h2>
  <p class="text-2xl text-blue-600">Sometimes the system simply hides too much context.</p>
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

```mermaid {scale: 0.7}
flowchart TD
    Task --> Domain
    Domain --> Service
    Service --> Code
    Service --> Runbook
    Service --> Dashboard
    Service --> ADR
    Incident --> Lessons
```

<!-- This is the first technical definition of Context Architecture. Pause here and name the links, not just the sources. -->

---

# The system should tell its own story

<div class="text-center mt-16">
  <p class="text-4xl">Discoverable context</p>
  <p class="text-6xl font-bold text-blue-600">→ better decisions</p>
  <p class="text-4xl">→ safer changes</p>
</div>

<p class="text-center muted mt-16">Prototype complete. The full narrative and extended OpenTelemetry section live in the source outline.</p>

