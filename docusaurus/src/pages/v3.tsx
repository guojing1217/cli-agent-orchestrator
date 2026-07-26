import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './v3.module.css';

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
      'Coordinate multiple AI agents through Handoff, Assign, and Send Message patterns. Each agent runs in an isolated tmux session.',
  },
  {
    title: 'Provider Agnostic',
    description:
      'Works with any CLI-based AI agent. Mix and match providers in a single workflow without vendor lock-in.',
  },
  {
    title: 'MCP Native',
    description:
      'Built-in MCP server exposes orchestration capabilities to any MCP-compatible client out of the box.',
  },
  {
    title: 'Scheduled Flows',
    description:
      'Define cron-like automated workflows that run multi-agent pipelines on a schedule for CI/CD and monitoring.',
  },
  {
    title: 'Web Dashboard',
    description:
      'Monitor and manage all agent sessions from a real-time browser dashboard with live output streaming.',
  },
  {
    title: 'Zero Infrastructure',
    description:
      'Runs entirely on your local machine. Install with a single command and start orchestrating in seconds.',
  },
];

const terminalLines = [
  { type: 'command', text: '$ cao launch --agents code_supervisor --session-name main' },
  { type: 'command', text: '$ cao session send main "Implement the auth module"' },
  { type: 'command', text: '$ cao session status main --workers' },
  { type: 'success', text: '✓ 2 agents running' },
];

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground} />
      <div className={styles.heroContent}>
        <span className={styles.badge}>Open Source Multi-Agent Framework</span>
        <h1 className={styles.heroTitle}>CLI Agent Orchestrator</h1>
        <p className={styles.heroTagline}>
          Lightweight orchestration for multi-agent AI workflows
        </p>
        <div className={styles.heroButtons}>
          <Link to="/docs/intro" className={styles.btnPrimary}>
            Get Started &rarr;
          </Link>
          <Link
            to="https://github.com/awslabs/cli-agent-orchestrator"
            className={styles.btnSecondary}
          >
            GitHub
          </Link>
        </div>
      </div>
    </section>
  );
}

function Providers() {
  return (
    <section className={styles.providers}>
      <p className={styles.providersLabel}>Works with your favorite AI CLI</p>
      <div className={styles.providersList}>
        {providers.map((provider) => (
          <span key={provider} className={styles.providerChip}>
            {provider}
          </span>
        ))}
      </div>
    </section>
  );
}

function Terminal() {
  return (
    <section className={styles.terminalSection}>
      <div className={styles.terminal}>
        <div className={styles.terminalHeader}>
          <span className={`${styles.terminalDot} ${styles.terminalDotRed}`} />
          <span className={`${styles.terminalDot} ${styles.terminalDotYellow}`} />
          <span className={`${styles.terminalDot} ${styles.terminalDotGreen}`} />
        </div>
        <div className={styles.terminalBody}>
          {terminalLines.map((line, idx) => (
            <div key={idx} className={styles.terminalLine}>
              {line.type === 'command' && (
                <span className={styles.terminalPrompt}>{line.text}</span>
              )}
              {line.type === 'success' && (
                <span className={styles.terminalSuccess}>{line.text}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className={styles.features}>
      <h2 className={styles.featuresTitle}>Everything you need</h2>
      <p className={styles.featuresSubtitle}>
        Powerful primitives for complex multi-agent workflows
      </p>
      <div className={styles.featuresGrid}>
        {features.map((feature) => (
          <div key={feature.title} className={styles.featureCardWrapper}>
            <div className={styles.featureCard}>
              <h3 className={styles.featureCardTitle}>{feature.title}</h3>
              <p className={styles.featureCardDesc}>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function V3(): React.JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title="CLI Agent Orchestrator" description={siteConfig.tagline}>
      <div className={styles.page}>
        <Hero />
        <Providers />
        <Terminal />
        <Features />
        <footer className={styles.footer}>
          <p className={styles.footerText}>
            Built for developers who orchestrate AI agents at scale.
          </p>
        </footer>
      </div>
    </Layout>
  );
}
