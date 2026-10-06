# Keynote Guide — Building AI-Friendly Software Architecture

Manual production guide for a 40–50 minute presentation. The slide copy is in English. The production notes are in Portuguese.

The deck should feel like one story:

1. AI joins the team.
2. AI needs context.
3. Context needs architecture.
4. Observability explains reality.
5. Skills decompose context.
6. Tools and guardrails make action safe.
7. The delivery process changes.

## Visual direction

- Use a light background with dark navy text and one electric blue accent.
- Keep one main idea per slide.
- Use large typography. Titles should be at least 42 pt. Body copy should usually be 24–30 pt.
- Prefer one large diagram over several small cards.
- Use a consistent visual vocabulary: humans, agents, context, sources, tools, signals, boundaries.
- Avoid putting more than five items on a slide.
- Do not use dense paragraphs. Put the explanation in your speech, not on the slide.
- Use progressive builds for diagrams when possible.

## Main deck

### Slide 1 — Title

**On slide**

`Building AI-Friendly Software Architecture`

`Designing systems that humans and AI agents can understand, explore, and change safely`

**Keynote composition**

Left: title and subtitle. Right: a simple visual of a human engineer and an AI agent looking at the same system map.

**Story**

Open with the idea that the audience is not just building software for users anymore. They are also building software that another kind of collaborator must understand.

---

### Slide 2 — About the speaker

**On slide**

`Luiz Schons`

`Senior Software Engineer`

**Keynote composition**

Very clean slide. Portrait or a simple personal detail. No biography paragraph.

**Story**

Briefly explain why this topic matters to you. Move quickly into the audience’s world.

---

### Slide 3 — The central question

**On slide**

`Is your software ready to be understood by an AI?`

**Keynote composition**

One sentence centered on the slide. Small illustration of an agent entering an unfamiliar system.

**Story**

Let the question sit for a moment. Do not answer it yet.

---

### Slide 4 — A new engineer joins the team

**On slide**

`Imagine a new engineer joining your team`

Under it, four words placed around a person icon:

`Domain` · `Systems` · `Decisions` · `Operations`

**Keynote composition**

A new person in the center. Four paths radiate outward.

**Story**

Ask the audience how long it takes for a new engineer to become productive. This introduces the onboarding analogy.

---

### Slide 5 — Discovery paths

**On slide**

`People need paths to discover knowledge`

**Keynote composition**

Large flow diagram:

`New engineer → Repository`

Then branch to `Documentation`, `ADRs`, `Dashboards`, and `Incidents`.

**Story**

Experienced engineers use memory and informal shortcuts. The organization’s knowledge is distributed, even when nobody has drawn the map.

---

### Slide 6 — AI has the same onboarding problem

**On slide**

`An agent also needs to discover context`

**Keynote composition**

Two parallel lanes:

`Experienced engineer: “I know where to look.”`

`AI agent: “Where does the answer live?”`

**Story**

Make the analogy explicit. The agent is capable, but it does not have the team’s accumulated memory.

---

### Slide 7 — The common diagnosis

**On slide**

`“The model is not good enough.”`

Small caption:

`Sometimes the system simply hides too much context.`

**Keynote composition**

Large quote. Put the model icon in the background, not as the main visual.

**Story**

Explain that model quality matters, but many failures originate in the system around the model.

---

### Slide 8 — Code is only part of the story

**On slide**

`Code shows implementation`

Beside it:

`Why?`
`Trade-offs?`
`Constraints?`
`Production behavior?`

**Keynote composition**

Left: repository window. Right: four unanswered questions.

**Story**

Make the distinction between reading code and understanding a system.

---

### Slide 9 — A mature system lives in many places

**On slide**

`The system exists beyond the repository`

**Keynote composition**

One large central circle: `System`.

Around it: `Code`, `Docs`, `ADRs`, `Tickets`, `Incidents`, `Metrics`.

**Story**

The system’s behavior and history are distributed across tools and people.

---

### Slide 10 — Information is not context

**On slide**

`Having information is not the same as having context`

**Keynote composition**

Left: disconnected puzzle pieces. Right: the same pieces connected into a map.

**Story**

Context is not just data. It is data with relationships, ownership, meaning, and paths of discovery.

---

### Slide 11 — Context Architecture

**On slide**

`Context Architecture connects the sources that explain a system`

**Keynote composition**

Use a large horizontal diagram:

`Task → Domain → Service`

From `Service`, branch to `Code`, `Runbook`, `Dashboard`, and `ADR`.

**Story**

Give the first definition of Context Architecture. It reduces the effort needed to find the right information.

---

### Slide 12 — The questions context should answer

**On slide**

`What is this service responsible for?`

Then reveal one question at a time:

`Which systems depend on it?`
`Why was it built this way?`
`How do we know it works?`

**Keynote composition**

Use a single large question mark or a service diagram. Avoid a five-card grid.

**Story**

These are the questions a new person, an agent, or an incident investigator needs to answer.

---

### Slide 13 — Context does not need one home

**On slide**

`The goal is not to centralize knowledge`

Second line:

`The goal is to make it easy to find`

**Keynote composition**

Contrast one giant document with a distributed network of connected sources.

**Story**

Explain why the “one giant company document” usually becomes outdated and hard to own.

---

### Slide 14 — Example: a payments domain

**On slide**

`One domain, multiple sources`

**Keynote composition**

Large domain map:

`Payments` connected to `Repository`, `context.md`, `ADRs`, `Runbooks`, and `Dashboards`.

**Story**

Use a concrete example so the architecture stops sounding abstract.

---

### Slide 15 — The trusted index

**On slide**

Show a large code-like excerpt:

```text
service: payment-api
context: ./context.md
decisions: /architecture/payments
runbook: /operations/payment-api
dashboard: /observability/payments
```

**Keynote composition**

Dark code block on the left. On the right:

`An index points to the source of truth.`

**Story**

The index does not copy knowledge. It creates a reliable starting point.

---

### Slide 16 — Context needs an owner

**On slide**

`Documentation without ownership becomes outdated`

Three large questions:

`Who owns it?`
`When was it updated?`
`How do we know it is valid?`

**Keynote composition**

Three questions on a diagonal path, not three small cards in a row.

**Story**

Ownership is what turns context from a static artifact into a maintained part of the architecture.

---

### Slide 17 — Architectural decisions explain the “why”

**On slide**

`The current code shows the result`

Large visual sequence:

`Problem → Options → Decision`

Bottom line:

`An ADR preserves the reasoning.`

**Keynote composition**

Use three large steps with generous spacing. No small boxes.

**Story**

Explain that an agent may suggest an elegant change that violates a constraint hidden in the decision history.

---

### Slide 18 — Context follows the workflow

**On slide**

`Context is created while work happens`

**Keynote composition**

Horizontal lifecycle:

`Task → Decision → Code → Deployment → Observability → Lessons`

**Story**

Documentation should not be a yearly cleanup activity. It should follow the moment when knowledge is created.

---

### Slide 19 — The new-person test

**On slide**

`Could a new engineer complete this task without asking for directions?`

Then show five questions in two rows:

`What changes?` · `Who owns it?` · `What constrains it?` · `How do we verify it?` · `Where do we investigate?`

**Story**

This is a practical test for both human onboarding and AI readiness.

---

### Slide 20 — Transition to observability

**On slide**

`Code explains what should happen`

Large second line:

`Observability shows what actually happens`

**Keynote composition**

Split screen: code path on the left, production signals on the right.

**Story**

Transition from static context to living production context.

---

### Slide 21 — Observability is context for AI

**On slide**

`Logs, metrics, and traces help agents understand reality`

**Keynote composition**

One agent in the center correlating logs, metrics, traces, deployments, and incidents.

**Story**

An agent investigating production needs evidence, not just source code.

---

### Slide 22 — Investigation without context

**On slide**

`The agent may search the wrong places`

**Keynote composition**

Show an agent surrounded by unrelated dashboards and irrelevant logs. Use visual noise deliberately.

**Story**

This is what poor context looks like operationally: more searches, more guesses, less confidence.

---

### Slide 23 — Investigation with context

**On slide**

`The workflow becomes evidence-driven`

**Keynote composition**

Large flow:

`Alert → Affected service → Relevant signals → Recent deployment → Hypothesis`

**Story**

The architecture does not make the agent magical. It gives the agent a better path.

---

### Slide 24 — Context changes over time

**On slide**

`Signals need time, ownership, and meaning`

**Keynote composition**

One metric timeline annotated with `Deployment`, `Incident`, `Configuration change`, and `Recovery`.

**Story**

A metric without context is just a number. The timeline turns it into an explanation.

---

### Slide 25 — The agent’s work must also be observable

**On slide**

`A successful answer is not enough`

**Keynote composition**

Two lanes:

`Application observability`
`Agent observability`

Both converge on `Business outcome`.

**Story**

We need to understand not only what the application did, but also how the agent reached its conclusion.

---

### Slide 26 — The context monolith

**On slide**

`One giant instruction file eventually becomes a problem`

**Keynote composition**

Show an oversized `AGENTS.md` containing every domain, team, tool, and process. Make it visually overloaded.

**Story**

Centralization feels convenient at first, but the file becomes hard to navigate, update, and prioritize.

---

### Slide 27 — What microservices taught us

**On slide**

`Boundaries make systems easier to understand`

**Keynote composition**

One large system decomposing into bounded contexts. Use clear labels such as `Payments`, `Orders`, `Delivery`, and `Observability`.

**Story**

Decomposition is valuable because it aligns vocabulary, responsibility, ownership, and change.

---

### Slide 28 — Context can also be decomposed

**On slide**

`Agents do not need every instruction at the same time`

**Keynote composition**

One large context block splitting into `Payments Skill`, `Delivery Skill`, `Data Skill`, and `Observability Skill`.

**Story**

The same architectural instinct that helped us decompose systems can help us decompose knowledge.

---

### Slide 29 — What is a Context Skill?

**On slide**

`A Context Skill packages specialized knowledge and workflow guidance`

**Keynote composition**

Draw one large skill package containing:

`Vocabulary`, `Responsibilities`, `Contracts`, `Sources of truth`, `Limits`.

**Story**

A skill is not just documentation. It tells the agent how to work with a specific context.

---

### Slide 30 — Skills are not microservices

**On slide**

Two columns:

`Microservices: runtime capabilities`

`Context Skills: knowledge and workflows`

**Keynote composition**

One clean comparison, no dense table.

**Story**

Clarify that skills do not replace production boundaries. They connect agents to the knowledge around those boundaries.

---

### Slide 31 — A skill is more than documentation

**On slide**

`A skill explains how to work with a context`

**Keynote composition**

Documentation page on the left. On the right, an operational guide with `When relevant`, `Check first`, `Evidence required`, and `Approval needed`.

**Story**

The skill becomes a work contract for the agent.

---

### Slide 32 — Example: Payments Context Skill

**On slide**

`Payments Context Skill`

Show only five labels:

`Transaction vocabulary` · `Refund states` · `Provider integration` · `Failure runbook` · `Approval rules`

**Story**

Use the example to show how specialization reduces noise and improves precision.

---

### Slide 33 — Boundaries and limits

**On slide**

`Every context should define what it knows and where it stops`

**Keynote composition**

Large boundary circle. Inside: `Read payments data`, `Explain transaction states`. Outside: `Change production`, `Access customer data`.

**Story**

Context boundaries are also safety boundaries.

---

### Slide 34 — One agent connects the skills

**On slide**

`Specialized context does not mean isolated agents`

**Keynote composition**

One central agent connects to `Payments`, `Observability`, `Delivery`, and `Data`. All feed into one evidence trail.

**Story**

The agent coordinates specializations and combines their evidence.

---

### Slide 35 — Too much fragmentation is also a problem

**On slide**

Three zones:

`Too large` · `Balanced` · `Too small`

**Keynote composition**

Use a spectrum. Put `Context monolith` at one end and `100 tiny skills` at the other.

**Story**

The right boundary usually groups knowledge that changes together, is used together, and has related ownership.

---

### Slide 36 — Skills need ownership

**On slide**

```yaml
name: payments-context
owner: payments-team
review_frequency: quarterly
```

**Keynote composition**

Code block on the left. On the right:

`If everyone owns it, no one maintains it.`

**Story**

Ownership is what keeps specialized context useful over time.

---

### Slide 37 — The agent system has layers

**On slide**

`Agents, skills, tools, and MCP have different roles`

**Keynote composition**

Vertical stack:

`Agent → Skills → Tools → Systems`

Place `MCP` beside the tool layer as the connection protocol.

**Story**

Separate the concepts before combining them in a real workflow.

---

### Slide 38 — What is an agent?

**On slide**

`Goal → Reason → Tool call → Observe → Continue`

**Keynote composition**

Circular loop with five steps. Use animation to reveal the loop.

**Story**

An agent is a system that can choose actions based on observations, not just generate text.

---

### Slide 39 — What is a tool?

**On slide**

`A tool performs an action or retrieves information`

Examples around it:

`Query logs`, `Read dashboard`, `Search repository`, `Create PR`, `Open incident`

**Story**

Tools expand capability. They also expand the risk surface.

---

### Slide 40 — A tool is not a skill

**On slide**

`A tool provides capability`

`A skill provides context and guidance`

**Keynote composition**

Large visual comparison: a tool icon versus an operating procedure.

**Story**

A hammer can do many things. A skill explains when and how this particular tool should be used.

---

### Slide 41 — What is MCP?

**On slide**

`MCP standardizes how agents discover and use external capabilities`

**Keynote composition**

Agent on the left, MCP layer in the center, multiple systems on the right.

**Story**

MCP is a connection layer. It does not replace context, policy, or ownership.

---

### Slide 42 — The harness around the agent

**On slide**

`The agent needs an environment with limits`

**Keynote composition**

Draw a boundary around the agent containing `Identity`, `Permissions`, `Tools`, `Policies`, `Approvals`, and `Observability`.

**Story**

The model is only one component. The harness determines what the agent can actually do.

---

### Slide 43 — Guardrails are enforced outside the prompt

**On slide**

`Prompts guide behavior`

`Protected resources enforce permissions`

**Keynote composition**

Request path:

`Agent request → Identity → Policy → Scope → Protected resource`

**Story**

Never make the prompt the final security boundary.

---

### Slide 44 — Deterministic fitness functions

**On slide**

`Architecture needs continuous, reproducible checks`

**Keynote composition**

Pull request entering a pipeline. Checks include `Dependency rules`, `Scope checks`, `Static analysis`, and `Data access rules`.

**Story**

Fitness functions protect architectural properties as the system changes, including when agents write code.

---

### Slide 45 — The delivery lifecycle

**On slide**

`The agent can participate across the delivery lifecycle`

**Keynote composition**

Large horizontal lifecycle:

`Epic → Questions → Spike → Decision → Tasks → Code → Tests → Deployment → Monitoring`

**Story**

The agent’s role starts before implementation and continues after deployment.

---

### Slide 46 — Human review remains part of the system

**On slide**

`Automation can prepare the change`

`People remain accountable for important decisions`

**Keynote composition**

Agent prepares a pull request. Human reviews impact. Pipeline applies the approved change.

**Story**

The goal is not to remove people from consequential decisions. It is to make their review more informed.

---

### Slide 47 — Agent observability

**On slide**

`A successful answer is not enough`

Show a trace with:

`Session`, `Context retrieved`, `Tool calls`, `Evidence`, `Decision`, `Outcome`.

**Story**

If we cannot see the path, we cannot debug or improve the agent architecture.

---

### Slide 48 — OpenTelemetry as a common layer

**On slide**

`Instrumentation → Collection → Export → Analysis`

**Keynote composition**

Agent, tools, and applications feed an OpenTelemetry Collector, which exports to a trace backend.

**Story**

OpenTelemetry gives the agent workflow a common language for traces, metrics, and logs.

---

### Slide 49 — The operational feedback loop

**On slide**

`Agent work → Telemetry → Failure patterns → Context improvements → Better agent work`

**Keynote composition**

Circular feedback loop. Highlight that observability changes the architecture over time.

**Story**

The system learns operationally, even when the model itself does not change.

---

### Slide 50 — Closing

**On slide**

`AI-friendly architecture is context made explicit`

Final line:

`The next evolution of software architecture is designing systems that humans and agents can understand together.`

**Keynote composition**

Return to the visual language of slide 1: human and agent looking at the same architecture map. Now the map is connected, observable, bounded, and owned.

**Story**

Close the loop. The presentation began with AI joining the team. It ends with architecture designed for collaboration between humans and agents.

## Optional bonus slides

If you have more time, add a technical appendix after slide 50:

51. What an agent trace should contain
52. Context metadata in telemetry
53. Tool calls as first-class events
54. The `session_id` connection
55. OpenTelemetry pipeline
56. Minimal instrumentation architecture
57. Agent span model
58. Latency and token cost
59. Failed tool calls as context signals
60. Privacy and telemetry boundaries
61. Payment incident lab
62. Reading the trace
63. Operational feedback loop
64. What to implement first

These bonus slides should use the same rule: one large diagram or one clear trace per slide, with the detailed explanation spoken rather than written.

## Rehearsal structure

- Slides 1–10: 8 minutes. Establish the problem.
- Slides 11–19: 10 minutes. Define Context Architecture.
- Slides 20–25: 6 minutes. Explain observability.
- Slides 26–36: 10 minutes. Introduce Context Skills.
- Slides 37–44: 9 minutes. Explain agents, tools, MCP, and safety.
- Slides 45–50: 6 minutes. Close with delivery and the main thesis.

Total: approximately 49 minutes.

