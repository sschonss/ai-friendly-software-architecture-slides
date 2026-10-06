# Canva Pro Prompt — Building AI-Friendly Software Architecture

Create a professional 16:9 keynote presentation in English titled **Building AI-Friendly Software Architecture**.

Audience: software engineers, software architects, engineering leaders, platform teams, and developers working with AI agents.

Duration: 40–50 minutes. Create exactly 40 slides.

Visual style:

- Premium technical keynote style
- Warm white background
- Deep navy text
- Electric blue primary accent
- Cyan and violet secondary accents
- Large typography and generous whitespace
- One main idea per slide
- Prefer large diagrams, maps, timelines, and flows
- Avoid dense paragraphs, tiny labels, dashboard-like card grids, and excessive decoration
- All slide copy must be in English

## Slides

### 1. Title

**Building AI-Friendly Software Architecture**

Subtitle: **Designing systems that humans and AI agents can understand, explore, and change safely**

Visual: human engineer and AI agent looking at the same architecture map.

### 2. The central question

**Is your software ready to be understood by an AI?**

Visual: AI agent entering an unfamiliar software system.

### 3. A new engineer joins the team

**Imagine a new engineer joining your team**

Show four discovery needs: **Domain · Systems · Decisions · Operations**.

Visual: new engineer in the center with four paths.

### 4. Knowledge discovery

**People need paths to discover knowledge**

Visual diagram: New Engineer connected to Repository, Documentation, Architectural Decisions, Dashboards, and Incidents.

### 5. AI onboarding

**An agent also needs to discover context**

Show two paths: **Experienced engineer: “I know where to look.”** and **AI agent: “Where does the answer live?”**

### 6. The common diagnosis

**“The model is not good enough.”**

Caption: **Sometimes the system simply hides too much context.**

Visual: large quote with disconnected knowledge behind it.

### 7. Code is only part of the story

**Code shows implementation**

Also show: **Why? · Trade-offs? · Constraints? · Production behavior?**

Visual: repository on the left, unanswered questions on the right.

### 8. The mature system

**The system exists beyond the repository**

Visual diagram: central System connected to Code, Documentation, ADRs, Tickets, Incidents, and Metrics.

### 9. Information versus context

**Having information is not the same as having context**

Visual: disconnected puzzle pieces becoming a connected map.

### 10. Context Architecture

**Context Architecture connects the sources that explain a system**

Visual diagram: Task → Domain → Service, branching to Code, Runbook, Dashboard, and ADR.

### 11. The questions context should answer

**What should context help us answer?**

Show: **What is this service responsible for? Which systems depend on it? Why was it built this way? How do we know it works?**

Visual: one service in the center with questions around it.

### 12. Distributed context

**The goal is not to centralize knowledge**

Subtitle: **The goal is to make it easy to find**

Visual: giant document contrasted with a connected network of sources.

### 13. Payments domain example

**One domain, multiple sources**

Visual: Payments connected to Repository, context.md, ADRs, Runbooks, and Dashboards.

### 14. The trusted index

**A small index can connect the system’s knowledge**

Show this code-style block:

```text
service: payment-api
context: ./context.md
decisions: /architecture/payments
runbook: /operations/payment-api
dashboard: /observability/payments
```

Visual: index connected to sources of truth.

### 15. Ownership and decision history

**Context needs an owner, and decisions need a history**

Show: **Who owns it? When was it updated? How do we know it is valid?**

Then show: **Problem → Options → Decision**.

Visual: ownership metadata on one side and ADR timeline on the other.

### 16. Context follows the workflow

**Context is created while work happens**

Visual lifecycle: Task → Decision → Code → Deployment → Observability → Lessons.

### 17. The new-person test

**Could a new engineer complete this task without asking for directions?**

Show: **What changes? Who owns it? What constrains it? How do we verify it? Where do we investigate?**

### 18. Production reality

**Code explains what should happen**

Subtitle: **Observability shows what actually happens**

Visual: code path on the left and production signals on the right.

### 19. Observability as context

**Logs, metrics, and traces help agents understand reality**

Visual: agent correlating logs, metrics, traces, deployments, and incidents.

### 20. Investigation without context

**The agent may search the wrong places**

Visual: noisy dashboards, irrelevant logs, and wrong investigation paths.

### 21. Evidence-driven investigation

**The workflow becomes evidence-driven**

Visual flow: Alert → Affected Service → Relevant Signals → Recent Deployment → Hypothesis.

### 22. Agent observability

**A successful answer is not enough**

Visual: two lanes, Application Observability and Agent Observability, converging on Business Outcome.

### 23. The context monolith

**One giant instruction file eventually becomes a problem**

Visual: oversized AGENTS.md containing every domain, rule, tool, and process.

### 24. Context decomposition

**Boundaries make systems and knowledge easier to understand**

Visual: one large system and one large context block both decomposing into bounded contexts.

### 25. Context Skills

**A Context Skill packages specialized knowledge and workflow guidance**

Visual: one package containing Vocabulary, Responsibilities, Contracts, Sources of Truth, and Limits.

### 26. Skills are not microservices

**Microservices separate runtime capabilities**

**Context Skills separate knowledge and workflows**

Visual: clean side-by-side comparison.

### 27. Example: Payments Context Skill

**Payments Context Skill**

Show: **Transaction vocabulary · Refund states · Provider integration · Failure runbook · Approval rules**.

Visual: skill connected to payment service, ADRs, dashboards, and runbooks.

### 28. Boundaries and limits

**Every context should define what it knows and where it stops**

Visual boundary circle. Inside: read payments data and explain transaction states. Outside: change production and access customer data.

### 29. One agent connects the skills

**Specialized context does not mean isolated agents**

Visual: central Agent connected to Payments, Observability, Delivery, and Data Skills, producing one evidence trail.

### 30. Balanced decomposition and ownership

**Too much fragmentation is also a problem**

Visual spectrum: Context Monolith → Balanced Contexts → Hundreds of Tiny Skills.

Also show:

```yaml
name: payments-context
owner: payments-team
review_frequency: quarterly
```

### 31. Agent system layers

**Agents, skills, tools, and MCP have different roles**

Visual stack: Agent → Skills → Tools → Systems, with MCP alongside the Tools layer.

### 32. The agent loop

**An agent reasons through actions and observations**

Visual circular loop: Goal → Reason → Tool Call → Observe → Continue.

### 33. Tools and skills

**A tool provides capability**

Subtitle: **A skill provides context and guidance**

Show examples of tools: Query Logs, Read Dashboards, Search Repository, Create Pull Request, Open Incident.

### 34. MCP and the agent harness

**The agent needs an environment with limits**

Visual: Agent → MCP Layer → external systems, inside a boundary containing Identity, Permissions, Policies, Approvals, and Observability.

### 35. Guardrails

**Prompts guide behavior**

Subtitle: **Protected resources enforce permissions**

Visual request path: Agent Request → Identity → Policy → Scope → Protected Resource.

### 36. Fitness functions

**Architecture needs continuous, reproducible checks**

Visual: pull request entering a pipeline with Dependency Rules, Scope Checks, Static Analysis, and Data Access Rules.

### 37. From epic to production

**The agent can participate across the delivery lifecycle**

Visual lifecycle: Epic → Questions → Spike → Decision → Tasks → Code → Tests → Deployment → Monitoring.

### 38. Human review and accountability

**People remain accountable for important decisions**

Visual: Agent prepares a pull request, Human reviews impact, Pipeline applies approved change.

### 39. Agent observability and OpenTelemetry

**The agent’s work also needs to be observable**

Visual pipeline: Session → Context Retrieved → Tool Calls → Evidence → Decision → Outcome → OpenTelemetry Collector → Traces, Metrics, and Logs.

### 40. Closing

**AI-friendly architecture is context made explicit**

Final statement: **The next evolution of software architecture is designing systems that humans and agents can understand together.**

Visual: return to the opening human-and-agent architecture map, now connected, observable, bounded, and owned.

## Final Canva instruction

Use exactly 40 slides. Keep all slide copy in English. Use large diagrams and generous whitespace. Do not create dense paragraphs or tiny interface cards. Make each slide readable from a stage. Use progressive animations for the flows and timelines where available.

