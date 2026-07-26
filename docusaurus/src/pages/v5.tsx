import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './v5.module.css';

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
      'Coordinate multiple AI agents through Handoff, Assign, and Send Message patterns with isolated sessions.',
    emoji: '🎭',
  },
  {
    title: 'Provider Agnostic',
    description:
      'Works with any CLI-based AI agent. Mix and match providers in a single workflow.',
    emoji: '🔌',
  },
  {
    title: 'MCP Native',
    description:
      'Built on Model Context Protocol for standardized agent-to-agent communication.',
    emoji: '🔗',
  },
  {
    title: 'Scheduled Flows',
    description:
      'Trigger multi-agent workflows on a schedule with cron-like flexibility.',
    emoji: '⏰',
  },
  {
    title: 'Web Dashboard',
    description:
      'Monitor agent activity, view logs, and manage workflows from a real-time UI.',
    emoji: '📊',
  },
  {
    title: 'Zero Infrastructure',
    description:
      'Runs locally with no cloud dependencies. Just install and start orchestrating.',
    emoji: '🚀',
  },
];

const terminalLines = [
  { type: 'command', text: '$ cao launch --agents code_supervisor --session-name main' },
  { type: 'command', text: '$ cao session send main "Implement the auth module"' },
  { type: 'command', text: '$ cao session status main --workers' },
  { type: 'success', text: '✓ 3 terminals active • 1 idle • 2 running' },
];

export default function V5(): React.ReactElement {
  return (
    <Layout title="CLI Agent Orchestrator" description="Lightweight orchestration for multi-agent AI workflows">
      <div className={styles.wrapper}>
        {/* Hero */}
        <section className={styles.hero}>
          <span className={styles.badge}>Open Source Multi-Agent Framework</span>
          <h1 className={styles.title}>CLI Agent Orchestrator</h1>
          <p className={styles.tagline}>
            Lightweight orchestration for multi-agent AI workflows
          </p>

          <div className={styles.buttons}>
            <Link className={styles.btnPrimary} to="/docs/intro">
              Get Started →
            </Link>
            <Link
              className={styles.btnSecondary}
              to="https://github.com/cao-org/cao"
            >
              GitHub
            </Link>
          </div>

          {/* Providers */}
          <div className={styles.providers}>
            {providers.map((provider) => (
              <span key={provider} className={styles.providerTag}>
                {provider}
              </span>
            ))}
          </div>
        </section>

        {/* Terminal */}
        <section className={styles.terminalSection}>
          <div className={styles.terminal}>
            <div className={styles.terminalHeader}>
              <span className={styles.terminalDot} />
              <span className={styles.terminalDot} />
              <span className={styles.terminalDot} />
            </div>
            <div className={styles.terminalBody}>
              {terminalLines.map((line, idx) => (
                <span key={idx} className={styles.terminalLine}>
                  {line.type === 'command' && (
                    <>
                      <span className={styles.terminalPrompt}>
                        {line.text.slice(0, 2)}
                      </span>
                      {line.text.slice(2)}
                    </>
                  )}
                  {line.type === 'success' && (
                    <span className={styles.terminalSuccess}>{line.text}</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className={styles.featuresSection}>
          <h2 className={styles.featuresTitle}>Everything you need</h2>
          <div className={styles.featuresGrid}>
            {features.map((feature) => (
              <div key={feature.title} className={styles.featureCard}>
                <span className={styles.featureEmoji}>{feature.emoji}</span>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
