# GitHub Copilot for GitHub Actions - Demo Prompts

This guide contains a series of practical prompts that demonstrate how GitHub Copilot can assist with creating, reviewing, securing, optimizing, documenting, and automating GitHub Actions workflows.

---

# Demo 1 – Build a CI Pipeline

## Prompt #1

```text
Create a production-ready GitHub Actions workflow for a Node.js application.

Requirements:
- Run on push
- Run on pull request
- Use Node.js 22
- Install dependencies
- Run ESLint
- Run unit tests
- Build the application
- Upload build artifacts
- Enable npm dependency caching
- Use least-privilege permissions
- Add a timeout

Explain every section of the workflow.
```

### Key Takeaway

Notice that you never wrote any YAML.

You simply described the business requirements, and GitHub Copilot converted them into a production-ready GitHub Actions workflow.

---

# Demo 2 – Review Like a Senior DevOps Engineer

## Prompt #2

```text
Review this GitHub Actions workflow as a Senior DevOps Engineer.

Evaluate:

- Performance
- Security
- Maintainability
- Enterprise Best Practices

Score each category out of 100.

Explain every recommendation.
```

### Key Takeaway

Instead of waiting for another engineer to review your workflow, GitHub Copilot performs an initial review and identifies improvements before you even open a Pull Request.

---

# Demo 3 – Security Audit

## Prompt #3

```text
Act as a GitHub Security Reviewer.

Audit this workflow for:

- Secret exposure
- Over-permissioned tokens
- Supply chain risks
- Unpinned GitHub Actions
- Unsafe shell commands

Suggest fixes with explanations.
```

### Key Takeaway

GitHub Copilot helps identify security risks early by reviewing permissions, secrets, action versions, and shell commands before they become production issues.

---

# Demo 4 – Generate Documentation

## Prompt #4

```text
Generate documentation for this GitHub Actions workflow.

Include:

- Architecture overview
- Mermaid workflow diagram
- Jobs explanation
- Required secrets
- Troubleshooting guide
- FAQ
- Best practices

Generate a README.md file.
```

### Key Takeaway

Documentation is generated directly from the implementation, ensuring it stays synchronized with the workflow.

---


# Demo 5 – Fix a Failed Pipeline

Break the workflow intentionally.

For example:

```bash
npm run testtt
```

instead of

```bash
npm test
```



# Demo 6 – Create a GitHub Copilot Skill

Create the following file:

```
.github/skills/actions-debugging/SKILL.md
```

## Prompt #6

```text
Create a GitHub Copilot Skill named "actions-debugging".

The skill should teach Copilot how to investigate failing GitHub Actions workflows.

Include:

- Reading workflow logs
- Explaining failures
- Suggesting minimal fixes
- Adding comments explaining the fix
- Following enterprise best practices

Generate the complete SKILL.md file.
```

### Key Takeaway

This is not a one-time prompt.

It becomes a reusable playbook stored inside the repository that GitHub Copilot can automatically apply whenever it works on GitHub Actions.

---

# Demo 7 – GitHub Copilot Cloud Agent

Break the workflow again.

Create a GitHub Issue.

### Title

```
CI is failing
```

### Description

```
Our CI pipeline is failing.

Please investigate and fix it.
You can find debugging skills in skill md files
```

Assign the issue to **GitHub Copilot**.

### Key Takeaway

The Cloud Agent combines:

- Issue description
- Repository context
- Existing code
- Copilot Skills
- Repository instructions

to automatically investigate and propose a solution through a Pull Request.

---

# Demo Flow Summary

| Demo | Topic | Outcome |
|-------|-------|---------|
| 1 | Build | Generate a production-ready CI workflow |
| 2 | Review | Perform an enterprise DevOps review |
| 3 | Secure | Audit workflow security |
| 4 | Optimize | Improve performance and reduce CI cost |
| 5 | Heal | Diagnose and fix failed pipelines |
| 6 | Document | Generate workflow documentation |
| 7 | Teach | Create a reusable Copilot Skill |
| 8 | Automate | Use GitHub Copilot Cloud Agent to resolve issues |

---

## Overall Learning Journey

This sequence demonstrates a complete GitHub Copilot workflow:

**Build → Explain → Review → Secure → Optimize → Heal → Document → Teach → Automate**

Each prompt builds naturally on the previous one, making it ideal for live demos, workshops, and training sessions.
