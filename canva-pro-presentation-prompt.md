# Canva Pro Prompt — Building AI-Friendly Software Architecture

Create a professional 16:9 keynote presentation in English titled **Building AI-Friendly Software Architecture**.

Audience: software engineers, architects, engineering leaders, platform teams, and developers working with AI agents.

Presentation length: 40–50 minutes.

Create approximately 50 slides. Use a clear narrative that starts with a simple onboarding analogy and gradually introduces context architecture, observability, context skills, agents, tools, MCP, guardrails, fitness functions, and delivery workflows.

Visual style:

- Premium technical keynote style
- Warm white background
- Deep navy text
- Electric blue as the primary accent
- Cyan and violet as secondary accents
- Large typography and generous whitespace
- One main idea per slide
- Use large diagrams, timelines, flows, maps, and metaphors
- Avoid dense paragraphs, dashboard-like card grids, tiny labels, and excessive decoration
- Keep diagrams simple, centered, and easy to understand from a distance
- Use consistent visual language for people, AI agents, context, tools, boundaries, signals, and systems
- All slide copy must be in English

## Slide-by-slide content

### 1. Title

Title: **Building AI-Friendly Software Architecture**

Subtitle: **Designing systems that humans and AI agents can understand, explore, and change safely**

Visual: human engineer and abstract AI agent looking at the same software architecture map.

### 2. Speaker introduction

Title: **Luiz Schons**

Subtitle: **Senior Software Engineer**

Visual: minimal speaker introduction with a professional portrait area and subtle architecture lines.

### 3. The central question

Title: **Is your software ready to be understood by an AI?**

Visual: AI agent entering an unfamiliar software system or maze.

### 4. A new engineer joins the team

Title: **Imagine a new engineer joining your team**

Content: **Domain · Systems · Decisions · Operations**

Visual: new engineer in the center with four discovery paths.

### 5. Knowledge discovery

Title: **People need paths to discover knowledge**

Visual diagram: New engineer connected to Repository, Documentation, Architectural Decisions, Dashboards, and Incidents.

### 6. AI onboarding

Title: **An agent also needs to discover context**

Content: **Experienced engineer: “I know where to look.”** / **AI agent: “Where does the answer live?”**

Visual: two parallel onboarding journeys.

### 7. The common diagnosis

Title: **“The model is not good enough.”**

Caption: **Sometimes the system simply hides too much context.**

Visual: large quote with the real problem represented behind it as disconnected system knowledge.

### 8. Code is only part of the story

Title: **Code shows implementation**

Content: **Why? · Trade-offs? · Constraints? · Production behavior?**

Visual: code repository on one side and unanswered questions on the other.

### 9. The mature system

Title: **The system exists beyond the repository**

Visual diagram: central System connected to Code, Documentation, ADRs, Tickets, Incidents, and Metrics.

### 10. Information versus context

Title: **Having information is not the same as having context**

Visual: disconnected puzzle pieces transforming into a connected map.

### 11. Context Architecture

Title: **Context Architecture connects the sources that explain a system**

Visual diagram: Task → Domain → Service, with branches to Code, Runbook, Dashboard, and ADR.

### 12. Context questions

Title: **What should context help us answer?**

Content:

- What is this service responsible for?
- Which systems depend on it?
- Why was it built this way?
- How do we know it works?

Visual: one service in the center with the questions around it.

### 13. Distributed context

Title: **The goal is not to centralize knowledge**

Subtitle: **The goal is to make it easy to find**

Visual: one giant document contrasted with a connected network of specialized sources.

### 14. Payments domain example

Title: **One domain, multiple sources**

Visual diagram: Payments connected to Repository, context.md, ADRs, Runbooks, and Dashboards.

### 15. The trusted index

Title: **A small index can connect the system’s knowledge**

Code-style content:

```text
service: payment-api
context: ./context.md
decisions: /architecture/payments
runbook: /operations/payment-api
dashboard: /observability/payments
```

Visual: dark code block connected to the original sources of truth.

### 16. Ownership

Title: **Documentation without ownership becomes outdated**

Content: **Who owns it? · When was it updated? · How do we know it is valid?**

Visual: ownership and freshness signals attached to documentation.

### 17. Architectural decisions

Title: **The current code shows the result**

Subtitle: **An ADR preserves the reasoning**

Visual flow: Problem → Options → Decision.

### 18. Context follows the workflow

Title: **Context is created while work happens**

Visual lifecycle: Task → Decision → Code → Deployment → Observability → Lessons.

### 19. The new-person test

Title: **Could a new engineer complete this task without asking for directions?**

Content:

- What changes?
- Who owns it?
- What constrains it?
- How do we verify it?
- Where do we investigate?

Visual: checklist arranged in two rows with plenty of whitespace.

### 20. Production reality

Title: **Code explains what should happen**

Subtitle: **Observability shows what actually happens**

Visual: code path on the left and production signals on the right.

### 21. Observability as context

Title: **Logs, metrics, and traces help agents understand reality**

Visual: agent correlating logs, metrics, traces, deployments, and incidents.

### 22. Investigation without context

Title: **The agent may search the wrong places**

Visual: agent surrounded by unrelated dashboards, noisy logs, and wrong paths.

### 23. Evidence-driven investigation

Title: **The workflow becomes evidence-driven**

Visual flow: Alert → Affected Service → Relevant Signals → Recent Deployment → Hypothesis.

### 24. Time and meaning

Title: **Signals need time, ownership, and meaning**

Visual: metric timeline annotated with Deployment, Incident, Configuration Change, and Recovery.

### 25. Agent observability

Title: **A successful answer is not enough**

Visual: two parallel lanes, Application Observability and Agent Observability, converging on Business Outcome.

### 26. The context monolith

Title: **One giant instruction file eventually becomes a problem**

Visual: oversized AGENTS.md containing every domain, rule, tool, and process.

### 27. The lesson from microservices

Title: **Boundaries make systems easier to understand**

Visual: one large system decomposed into Payments, Orders, Delivery, Data, and Observability contexts.

### 28. Context decomposition

Title: **Agents do not need every instruction at the same time**

Visual: one large context block splitting into specialized context areas.

### 29. Context Skills

Title: **A Context Skill packages specialized knowledge and workflow guidance**

Visual: one skill package containing Vocabulary, Responsibilities, Contracts, Sources of Truth, and Limits.

### 30. Skills versus microservices

Title: **Context Skills are not microservices**

Content:

**Microservices:** runtime capabilities

**Context Skills:** knowledge and workflows

Visual: clean side-by-side comparison with no dense table.

### 31. More than documentation

Title: **A skill explains how to work with a context**

Visual: ordinary documentation transforming into an operational guide with when to use, what to check, evidence required, and approval needed.

### 32. Payments Context Skill

Title: **Payments Context Skill**

Content: **Transaction vocabulary · Refund states · Provider integration · Failure runbook · Approval rules**

Visual: Payments Skill connected to payment service, ADRs, dashboards, and runbooks.

### 33. Context boundaries

Title: **Every context should define what it knows and where it stops**

Visual: boundary circle. Inside: read payments data and explain transaction states. Outside: change production and access customer data.

### 34. One agent connects the skills

Title: **Specialized context does not mean isolated agents**

Visual diagram: central Agent connected to Payments, Observability, Delivery, and Data Skills, all producing one evidence trail.

### 35. Balanced decomposition

Title: **Too much fragmentation is also a problem**

Visual spectrum: Context Monolith → Balanced Contexts → Hundreds of Tiny Skills.

### 36. Skill ownership

Title: **If everyone owns a skill, no one maintains it**

Code-style content:

```yaml
name: payments-context
owner: payments-team
review_frequency: quarterly
```

Visual: code block connected to a team owner and review calendar.

### 37. Agent system layers

Title: **Agents, skills, tools, and MCP have different roles**

Visual stack: Agent → Skills → Tools → Systems, with MCP alongside the Tools layer.

### 38. The agent loop

Title: **An agent reasons through actions and observations**

Visual circular loop: Goal → Reason → Tool Call → Observe → Continue.

### 39. Tools

Title: **A tool performs an action or retrieves information**

Content: **Query logs · Read dashboards · Search repositories · Create pull requests · Open incidents**

Visual: agent connected to five large tool symbols.

### 40. Tool versus skill

Title: **A tool provides capability**

Subtitle: **A skill provides context and guidance**

Visual: tool icon on the left and operating procedure on the right.

### 41. MCP

Title: **MCP standardizes how agents discover and use external capabilities**

Visual: Agent → MCP Layer → Repositories, Observability, Tickets, and Deployments.

### 42. The harness around the agent

Title: **The agent needs an environment with limits**

Visual: boundary around the agent containing Identity, Permissions, Tools, Policies, Approvals, and Observability.

### 43. Guardrails

Title: **Prompts guide behavior**

Subtitle: **Protected resources enforce permissions**

Visual request path: Agent Request → Identity → Policy → Scope → Protected Resource.

### 44. Fitness functions

Title: **Architecture needs continuous, reproducible checks**

Visual: pull request entering a pipeline with Dependency Rules, Scope Checks, Static Analysis, and Data Access Rules.

### 45. From epic to production

Title: **The agent can participate across the delivery lifecycle**

Visual lifecycle: Epic → Questions → Spike → Decision → Tasks → Code → Tests → Deployment → Monitoring.

### 46. Human review

Title: **People remain accountable for important decisions**

Visual: Agent prepares a pull request, Human reviews impact, Pipeline applies approved change.

### 47. Agent traces

Title: **The agent’s work also needs to be observable**

Visual trace containing Session, Context Retrieved, Tool Calls, Evidence, Decision, and Outcome.

### 48. OpenTelemetry

Title: **OpenTelemetry creates a common observability layer**

Visual pipeline: Instrumentation → Collector → Export → Traces, Metrics, Logs, Analysis.

### 49. The feedback loop

Title: **Observability improves the architecture over time**

Visual loop: Agent Work → Telemetry → Failure Patterns → Context Improvements → Better Agent Work.

### 50. Closing

Title: **AI-friendly architecture is context made explicit**

Final statement: **The next evolution of software architecture is designing systems that humans and agents can understand together.**

Visual: return to the opening human-and-agent architecture map, now connected, observable, bounded, and owned.

## Canva generation instructions

Use the slide titles exactly as written. Keep all body copy short. Generate diagrams as large editorial diagrams, not as dashboard cards. Use consistent navy, blue, cyan, and violet accents. Avoid photorealistic stock photos except for the speaker introduction. Use progressive reveal animations for the flows and timelines where available.

