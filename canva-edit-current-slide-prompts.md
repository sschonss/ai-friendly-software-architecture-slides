# Prompts for Editing the Current Canva Slide

## Important instruction

Use these prompts in Canva while the target slide is already open and selected.

Always begin with:

> **Edit the currently selected slide in this presentation. Do not create a new slide, do not create a new design, and do not change the presentation theme. Preserve the existing visual style, typography, colors, spacing system, and aspect ratio. Only replace or rearrange the content requested below.**

If Canva still creates a new slide, use the prompt in two steps:

1. Ask Canva to edit the current page only.
2. Then provide the content change separately.

## Reusable base prompt

```text
Edit the currently selected slide in this presentation.
Do not create a new slide.
Do not create a new design.
Do not change the presentation theme.
Preserve the existing layout, typography, colors, spacing, visual language, and aspect ratio.
Only modify the current slide according to the instructions below.
Keep all text in English.
Use large readable text and preserve the current hierarchy.
```

## Slide-specific edit prompts

### Slide 1

Edit the currently selected slide only. Preserve the existing title-slide layout and visual identity. Replace the content with the following: title **Building AI-Friendly Software Architecture** and subtitle **Designing systems that humans and AI agents can understand, explore, and change safely**. Keep the title as the dominant element. Use one simple architecture visual on the existing visual side. Do not add extra cards or paragraphs.

### Slide 2

Edit the currently selected slide only. Preserve the existing presentation theme. Turn this page into a minimal speaker introduction. Use only **Luiz Schons** and **Senior Software Engineer**. Keep the existing composition and leave generous whitespace. Do not create a new page.

### Slide 3

Edit the currently selected slide only. Preserve the existing layout. Replace the main text with **Is your software ready to be understood by an AI?**. Make this question the visual focus. Remove secondary content that competes with the question.

### Slide 4

Edit the currently selected slide only. Preserve the current template. Use the title **Imagine a new engineer joining your team**. Keep one central person or agent visual and four surrounding labels: **Domain**, **Systems**, **Decisions**, and **Operations**. Use large labels and no paragraph text.

### Slide 5

Edit the currently selected slide only. Preserve the existing visual system. Create one large diagram on the current page showing **New Engineer** connected to **Repository**, **Documentation**, **Architectural Decisions**, **Dashboards**, and **Incidents**. Enlarge the diagram to use most of the slide. Do not create multiple small cards.

### Slide 6

Edit the currently selected slide only. Preserve the current layout. Show two parallel paths: **Experienced engineer: “I know where to look.”** and **AI agent: “Where does the answer live?”**. Keep the two paths balanced and readable.

### Slide 7

Edit the currently selected slide only. Preserve the current design. Make **“The model is not good enough.”** the large central quote. Add the smaller caption **Sometimes the system simply hides too much context.** Remove any extra text.

### Slide 8

Edit the currently selected slide only. Preserve the current two-column layout. Put **Code shows implementation** on the left. Put these four questions on the right: **Why?**, **Trade-offs?**, **Constraints?**, **Production behavior?**. Use large typography and avoid small boxes.

### Slide 9

Edit the currently selected slide only. Preserve the template. Create one central node labeled **System**, connected to **Code**, **Documentation**, **ADRs**, **Tickets**, **Incidents**, and **Metrics**. Use the full available canvas.

### Slide 10

Edit the currently selected slide only. Preserve the layout. Show the statement **Having information is not the same as having context**. Use a visual transformation from disconnected information to a connected map. Keep the message dominant.

### Slide 11

Edit the currently selected slide only. Preserve the current theme. Create one large architecture diagram: **Task → Domain → Service**, with **Service** connected to **Code**, **Runbook**, **Dashboard**, and **ADR**. Center and enlarge the diagram.

### Slide 12

Edit the currently selected slide only. Preserve the current composition. Use the title **What should context help us answer?**. Show only four questions: **What is this service responsible for?**, **Which systems depend on it?**, **Why was it built this way?**, and **How do we know it works?**.

### Slide 13

Edit the currently selected slide only. Preserve the existing visual style. Show the statement **The goal is not to centralize knowledge** and the subtitle **The goal is to make it easy to find**. Use one comparison between a giant document and a connected network.

### Slide 14

Edit the currently selected slide only. Preserve the current design. Create a large domain map centered on **Payments**, connected to **Repository**, **context.md**, **ADRs**, **Runbooks**, and **Dashboards**. Do not use tiny labels.

### Slide 15

Edit the currently selected slide only. Preserve the existing layout. Use a dark code block containing the following exact text:

```text
service: payment-api
context: ./context.md
decisions: /architecture/payments
runbook: /operations/payment-api
dashboard: /observability/payments
```

Add the caption **A small index can connect the system’s knowledge**. Keep the code block large and readable.

### Slide 16

Edit the currently selected slide only. Preserve the current visual identity. Show three large questions arranged with generous spacing: **Who owns it?**, **When was it updated?**, and **How do we know it is valid?**. Use ownership, calendar, and verification visual metaphors.

### Slide 17

Edit the currently selected slide only. Preserve the template. Create three large stages with generous spacing: **Problem → Options → Decision**. Add the caption **An ADR preserves the reasoning**. Do not use small boxes.

### Slide 18

Edit the currently selected slide only. Preserve the existing layout. Create the large lifecycle **Task → Decision → Code → Deployment → Observability → Lessons**. Use one continuous horizontal path.

### Slide 19

Edit the currently selected slide only. Preserve the current design. Show the question **Could a new engineer complete this task without asking for directions?**. Add five readable checklist items: **What changes?**, **Who owns it?**, **What constrains it?**, **How do we verify it?**, and **Where do we investigate?**.

### Slide 20

Edit the currently selected slide only. Preserve the current layout. Show **Code explains what should happen** and **Observability shows what actually happens**. Use a split visual with code on one side and production signals on the other.

### Slide 21

Edit the currently selected slide only. Preserve the visual system. Place an agent in the center connected to **Logs**, **Metrics**, **Traces**, **Deployments**, and **Incidents**. Enlarge the central relationship diagram.

### Slide 22

Edit the currently selected slide only. Preserve the template. Show an agent searching through noisy and irrelevant information. Use the title **The agent may search the wrong places**. Keep the visual clear, not cluttered.

### Slide 23

Edit the currently selected slide only. Preserve the layout. Create the evidence-driven flow **Alert → Affected Service → Relevant Signals → Recent Deployment → Hypothesis**. Use one strong highlighted path.

### Slide 24

Edit the currently selected slide only. Preserve the current style. Show a large metric timeline with annotations **Deployment**, **Incident**, **Configuration Change**, and **Recovery**. Make the timeline the main element.

### Slide 25

Edit the currently selected slide only. Preserve the existing composition. Show two lanes, **Application Observability** and **Agent Observability**, converging on **Business Outcome**.

### Slide 26

Edit the currently selected slide only. Preserve the theme. Show an oversized **AGENTS.md** containing too many domains, rules, tools, and processes. Add the title **One giant instruction file eventually becomes a problem**.

### Slide 27

Edit the currently selected slide only. Preserve the layout. Show one large system decomposing into **Payments**, **Orders**, **Delivery**, **Data**, and **Observability**. Use visible boundaries.

### Slide 28

Edit the currently selected slide only. Preserve the current visual system. Show one large context block splitting into **Payments Skill**, **Delivery Skill**, **Data Skill**, and **Observability Skill**.

### Slide 29

Edit the currently selected slide only. Preserve the template. Create one large skill package containing **Vocabulary**, **Responsibilities**, **Contracts**, **Sources of Truth**, and **Limits**.

### Slide 30

Edit the currently selected slide only. Preserve the existing layout. Compare **Microservices: runtime capabilities** with **Context Skills: knowledge and workflows**. Use two large visual areas and minimal text.

### Slide 31

Edit the currently selected slide only. Preserve the theme. Show ordinary documentation transforming into an operational guide with **When relevant**, **Check first**, **Evidence required**, and **Approval needed**.

### Slide 32

Edit the currently selected slide only. Preserve the current design. Create a large **Payments Context Skill** visual connected to **Transaction vocabulary**, **Refund states**, **Provider integration**, **Failure runbook**, and **Approval rules**.

### Slide 33

Edit the currently selected slide only. Preserve the layout. Create a boundary circle. Inside place **Read payments data** and **Explain transaction states**. Outside place **Change production** and **Access customer data**.

### Slide 34

Edit the currently selected slide only. Preserve the current visual identity. Show one central **Agent** connected to **Payments**, **Observability**, **Delivery**, and **Data Skills**, all producing one **Evidence** trail.

### Slide 35

Edit the currently selected slide only. Preserve the existing style. Show the spectrum **Context Monolith → Balanced Contexts → Hundreds of Tiny Skills**. Highlight the balanced middle.

### Slide 36

Edit the currently selected slide only. Preserve the template. Show this exact YAML block in a large readable code area:

```yaml
name: payments-context
owner: payments-team
review_frequency: quarterly
```

Add the statement **If everyone owns a skill, no one maintains it.**

### Slide 37

Edit the currently selected slide only. Preserve the visual system. Show the stack **Agent → Skills → Tools → Systems**, with **MCP** beside the Tools layer.

### Slide 38

Edit the currently selected slide only. Preserve the current layout. Create a circular loop: **Goal → Reason → Tool Call → Observe → Continue**. Use five large stages and one direction.

### Slide 39

Edit the currently selected slide only. Preserve the template. Show the statement **A tool provides capability** and **A skill provides context and guidance**. Include tool examples: **Query Logs**, **Read Dashboards**, **Search Repository**, **Create Pull Request**, and **Open Incident**.

### Slide 40

Edit the currently selected slide only. Preserve the visual identity. Show **Agent → MCP Layer → External Systems** inside a boundary containing **Identity**, **Permissions**, **Policies**, **Approvals**, and **Observability**.

### Slide 41

Edit the currently selected slide only. Preserve the current theme. Show the security path **Agent Request → Identity → Policy → Scope → Protected Resource**. Add visible rejection branches for invalid requests.

### Slide 42

Edit the currently selected slide only. Preserve the layout. Show a pull request entering a pipeline with **Dependency Rules**, **Scope Checks**, **Static Analysis**, and **Data Access Rules**.

### Slide 43

Edit the currently selected slide only. Preserve the visual system. Show the delivery lifecycle **Epic → Questions → Spike → Decision → Tasks → Code → Tests → Deployment → Monitoring**.

### Slide 44

Edit the currently selected slide only. Preserve the current composition. Show three stages: **Agent prepares a pull request**, **Human reviews impact**, and **Pipeline applies approved change**. Make the human approval gate visually central.

### Slide 45

Edit the currently selected slide only. Preserve the current style. Show a large agent trace with nested spans: **Session**, **Context Retrieved**, **Tool Calls**, **Evidence**, **Decision**, and **Outcome**.

### Slide 46

Edit the currently selected slide only. Preserve the layout. Show the OpenTelemetry pipeline **Instrumentation → Collector → Export → Traces, Metrics, Logs, Analysis**.

### Slide 47

Edit the currently selected slide only. Preserve the visual identity. Show one continuous `session_id` flowing from **Agent Session** to **Tool Call**, **API Request**, **Service**, **Database**, and **Trace**.

### Slide 48

Edit the currently selected slide only. Preserve the current design. Show the circular feedback loop **Agent Work → Telemetry → Failure Patterns → Context Improvements → Better Agent Work**.

### Slide 49

Edit the currently selected slide only. Preserve the template. Show six practical steps as a staircase: **Create a session identifier**, **Trace tool calls**, **Record context usage**, **Measure outcomes**, **Add privacy filters**, and **Review recurring failures**.

### Slide 50

Edit the currently selected slide only. Preserve the title-slide visual language. Show the title **AI-friendly architecture is context made explicit** and the closing statement **The next evolution of software architecture is designing systems that humans and agents can understand together.** Return to the human-and-agent architecture map, now connected, observable, bounded, and owned.

