import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './v7.module.css';

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
    description: 'Coordinate multiple agents with handoff, assign, and messaging patterns.',
  },
  {
    title: 'Provider Agnostic',
    description: 'Mix and match any CLI agent provider in a single workflow.',
  },
  {
    title: 'MCP Native',
    description: 'Built on Model Context Protocol for standardized tool use.',
  },
  {
    title: 'Scheduled Flows',
    description: 'Cron-based and event-driven agent workflow execution.',
  },
  {
    title: 'Web Dashboard',
    description: 'Real-time monitoring of agent sessions and task progress.',
  },
  {
    title: 'Zero Infrastructure',
    description: 'Runs locally with no servers, containers, or cloud setup.',
  },
];

const terminalLines = [
  { prompt: true, text: 'cao launch --agents code_supervisor --session-name main' },
  { prompt: true, text: 'cao session send main "Implement the auth module"' },
  { prompt: true, text: 'cao session status main --workers' },
  { prompt: false, text: '✓ 3 terminals active • 1 idle • 2 running' },
];

export default function V7(): React.ReactElement {
  return (
    <Layout title="CLI Agent Orchestrator" description="Lightweight orchestration for multi-agent AI workflows">
      <div className={styles.wrapper}>
        {/* Animated background gradients */}
        <div className={styles.bgGradients}>
          <div className={styles.bgBlob1} />
          <div className={styles.bgBlob2} />
          <div className={styles.bgBlob3} />
        </div>

        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <span className={styles.badge}>Open Source Multi-Agent Framework</span>
            <h1 className={styles.title}>CLI Agent Orchestrator</h1>
            <p className={styles.tagline}>
              Lightweight orchestration for multi-agent AI workflows
            </p>
            <div className={styles.ctaGroup}>
              <Link to="/docs/intro" className={styles.ctaPrimary}>
                Get Started &rarr;
              </Link>
              <Link
                to="https://github.com/aws-samples/cli-agent-orchestrator"
                className={styles.ctaGlass}
              >
                GitHub
              </Link>
            </div>
          </div>
        </section>

        {/* Providers */}
        <section className={styles.providers}>
          <div className={styles.providerTrack}>
            {providers.map((provider) => (
              <span key={provider} className={styles.providerPill}>
                {provider}
              </span>
            ))}
          </div>
        </section>

        {/* Terminal */}
        <section className={styles.terminalSection}>
          <div className={styles.terminalGlow}>
            <div className={styles.terminal}>
              <div className={styles.terminalHeader}>
                <span className={styles.terminalDot} />
                <span className={styles.terminalDot} />
                <span className={styles.terminalDot} />
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
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className={styles.features}>
          <div className={styles.featuresGrid}>
            {features.map((feature) => (
              <div key={feature.title} className={styles.featureCard}>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDesc}>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
