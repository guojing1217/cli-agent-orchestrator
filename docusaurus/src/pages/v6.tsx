import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './v6.module.css';

const providers = [
  'Claude Code',
  'Kiro CLI',
  'Cursor CLI',
  'Antigravity CLI',
  'Codex',
  'Kimi CLI',
  'Copilot CLI',
];

const features = [
  {
    title: 'Multi-Agent Orchestration',
    description:
      'Coordinate multiple AI agents through Handoff, Assign, and Send Message patterns. Each agent runs in an isolated tmux session with full context control.',
    icon: '>>',
  },
  {
    title: 'Provider Agnostic',
    description:
      'Works with any CLI-based AI agent. Mix and match providers in a single workflow without vendor lock-in.',
    icon: '~/',
  },
  {
    title: 'MCP Native',
    description:
      'Built-in MCP server exposes orchestration capabilities to any MCP-compatible client as a first-class integration.',
    icon: '{}',
  },
  {
    title: 'Scheduled Flows',
    description:
      'Define cron-like automated workflows that run multi-agent pipelines on a schedule for CI/CD and recurring tasks.',
    icon: '**',
  },
  {
    title: 'Web Dashboard',
    description:
      'Monitor and manage all agent sessions from a real-time browser dashboard with live output streaming.',
    icon: '[]',
  },
  {
    title: 'Zero Infrastructure',
    description:
      'Runs locally with tmux. No cloud services, containers, or complex setup required. Install and start orchestrating in seconds.',
    icon: '$_',
  },
];

const terminalLines = [
  { prompt: true, text: 'cao launch --agents code_supervisor --session-name main' },
  { prompt: true, text: 'cao session send main "Implement the auth module"' },
  { prompt: true, text: 'cao session status main --workers' },
  { prompt: false, text: '┌─────────┬──────────┬─────────────────┐' },
  { prompt: false, text: '│ Agent   │ Status   │ Task            │' },
  { prompt: false, text: '├─────────┼──────────┼─────────────────┤' },
  { prompt: false, text: '│ worker-1│ running  │ Implement auth  │' },
  { prompt: false, text: '│ worker-2│ done ✓   │ Write tests     │' },
  { prompt: false, text: '└─────────┴──────────┴─────────────────┘' },
];

export default function V6(): React.ReactElement {
  return (
    <Layout title="CLI Agent Orchestrator" description="Lightweight orchestration for multi-agent AI workflows">
      <main className={styles.main}>
        {/* Animated gradient line at top */}
        <div className={styles.gradientLine} />

        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroGlow} />
          <div className={styles.heroContent}>
            <span className={styles.badge}>Open Source Multi-Agent Framework</span>
            <h1 className={styles.title}>CLI Agent Orchestrator</h1>
            <p className={styles.tagline}>
              Lightweight orchestration for multi-agent AI workflows
            </p>
            <div className={styles.ctaRow}>
              <Link to="/docs/intro" className={styles.ctaPrimary}>
                Get Started &rarr;
              </Link>
              <Link
                to="https://github.com/aws/cli-agent-orchestrator"
                className={styles.ctaSecondary}
              >
                GitHub
              </Link>
            </div>

            {/* Provider tags */}
            <div className={styles.providers}>
              {providers.map((p) => (
                <span key={p} className={styles.providerTag}>
                  {p}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Terminal Hero Block */}
        <section className={styles.terminalSection}>
          <div className={styles.terminalWrapper}>
            <div className={styles.terminalGlow} />
            <div className={styles.terminal}>
              <div className={styles.terminalHeader}>
                <div className={styles.terminalDots}>
                  <span className={styles.dotRed} />
                  <span className={styles.dotYellow} />
                  <span className={styles.dotGreen} />
                </div>
                <span className={styles.terminalTitle}>cao - supervisor session</span>
              </div>
              <div className={styles.terminalBody}>
                {terminalLines.map((line, i) => (
                  <div key={i} className={styles.terminalLine}>
                    {line.prompt && <span className={styles.prompt}>$</span>}
                    <span className={line.prompt ? styles.command : styles.output}>
                      {line.text}
                    </span>
                  </div>
                ))}
                <div className={styles.terminalLine}>
                  <span className={styles.prompt}>$</span>
                  <span className={styles.cursor} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className={styles.features}>
          <h2 className={styles.featuresTitle}>Built for the terminal</h2>
          <p className={styles.featuresSubtitle}>
            Everything you need to orchestrate AI agents from the command line
          </p>
          <div className={styles.featuresGrid}>
            {features.map((f) => (
              <div key={f.title} className={styles.featureCard}>
                <div className={styles.featureIcon}>{f.icon}</div>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.featureDescription}>{f.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className={styles.bottomCta}>
          <div className={styles.bottomCtaGlow} />
          <div className={styles.commandPrompt}>
            <span className={styles.promptSymbol}>$</span>
            <span className={styles.commandText}>npm install -g cao</span>
          </div>
          <p className={styles.bottomCtaText}>
            Start orchestrating in seconds. Zero infrastructure required.
          </p>
        </section>

        {/* Bottom gradient line */}
        <div className={styles.gradientLineBottom} />
      </main>
    </Layout>
  );
}
