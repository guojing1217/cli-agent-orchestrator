import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './v4.module.css';

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
    description: 'Coordinate agents via Handoff, Assign, and Send Message patterns.',
  },
  {
    title: 'Provider Agnostic',
    description: 'Mix and match any supported CLI agent provider freely.',
  },
  {
    title: 'MCP Native',
    description: 'Built on Model Context Protocol for standardized tool use.',
  },
  {
    title: 'Scheduled Flows',
    description: 'Cron-like scheduling for recurring multi-agent workflows.',
  },
  {
    title: 'Web Dashboard',
    description: 'Monitor agents, sessions, and task progress in real time.',
  },
  {
    title: 'Zero Infrastructure',
    description: 'Runs locally with no cloud dependencies or setup required.',
  },
];

const codeLines = [
  { prompt: true, text: 'cao launch --agents code_supervisor --session-name main' },
  { prompt: true, text: 'cao session send main "Implement the auth module"' },
  { prompt: true, text: 'cao session status main --workers' },
  { prompt: false, text: '✓ 3 terminals active • 1 idle • 2 running' },
];

export default function V4(): React.ReactElement {
  return (
    <Layout title="CLI Agent Orchestrator" description="Lightweight orchestration for multi-agent AI workflows">
      <div className={styles.wrapper}>
        {/* Background grid pattern */}
        <div className={styles.gridBackground} />

        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroGlow} />
          <span className={styles.badge}>Open Source Multi-Agent Framework</span>
          <h1 className={styles.title}>CLI Agent Orchestrator</h1>
          <p className={styles.tagline}>
            Lightweight orchestration for multi-agent AI workflows
          </p>
          <div className={styles.ctas}>
            <Link to="/docs/intro" className={styles.ctaPrimary}>
              Get Started &rarr;
            </Link>
            <Link
              to="https://github.com/aws-samples/cli-agent-orchestrator"
              className={styles.ctaSecondary}
            >
              GitHub
            </Link>
          </div>
        </section>

        {/* Providers */}
        <section className={styles.providers}>
          {providers.map((provider, idx) => (
            <React.Fragment key={provider}>
              <span className={styles.providerName}>{provider}</span>
              {idx < providers.length - 1 && (
                <span className={styles.providerSeparator} />
              )}
            </React.Fragment>
          ))}
        </section>

        {/* Terminal Block */}
        <section className={styles.terminalSection}>
          <div className={styles.terminal}>
            <div className={styles.terminalHeader}>
              <span className={styles.terminalDot} />
              <span className={styles.terminalDot} />
              <span className={styles.terminalDot} />
            </div>
            <div className={styles.terminalBody}>
              {codeLines.map((line, idx) => (
                <div key={idx} className={styles.terminalLine}>
                  {line.prompt && <span className={styles.terminalPrompt}>$ </span>}
                  <span className={line.prompt ? styles.terminalCommand : styles.terminalOutput}>
                    {line.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className={styles.featuresSection}>
          <h2 className={styles.featuresHeading}>Built for Developers</h2>
          <div className={styles.featuresGrid}>
            {features.map((feature) => (
              <div key={feature.title} className={styles.featureCard}>
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
