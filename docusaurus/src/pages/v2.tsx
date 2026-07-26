import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './v2.module.css';

const providers = [
  {name: 'Claude Code', shortcut: '⌘C'},
  {name: 'Kiro CLI', shortcut: '⌘K'},
  {name: 'Cursor CLI', shortcut: '⌘Q'},
  {name: 'Antigravity CLI', shortcut: '⌘G'},
  {name: 'Codex', shortcut: '⌘X'},
  {name: 'Kimi CLI', shortcut: '⌘I'},
  {name: 'Copilot CLI', shortcut: '⌘P'},
];

const features = [
  {
    title: 'Multi-Agent Orchestration',
    icon: '⎔',
    description:
      'Coordinate multiple AI agents through Handoff, Assign, and Send Message patterns. Each agent runs in an isolated tmux session.',
  },
  {
    title: 'Provider Agnostic',
    icon: '⚡',
    description:
      'Works with 9 providers including Claude Code, Kiro CLI, Codex, Copilot CLI, Cursor CLI, and more. Mix providers in a single workflow.',
  },
  {
    title: 'MCP Native',
    icon: '⬡',
    description:
      'Built-in MCP server exposes orchestration capabilities to any MCP-compatible client. Use CAO as your agentic backbone.',
  },
  {
    title: 'Scheduled Flows',
    icon: '⏲',
    description:
      'Define cron-like automated workflows that run multi-agent pipelines on a schedule. Perfect for CI/CD and recurring tasks.',
  },
  {
    title: 'Web Dashboard',
    icon: '◧',
    description:
      'Monitor and manage all agent sessions from a real-time browser dashboard. View output, assign tasks, and track progress.',
  },
  {
    title: 'Zero Infrastructure',
    icon: '△',
    description:
      'Runs entirely on your local machine. No cloud services, no containers, no setup. Just install and orchestrate.',
  },
];

const terminalLines = [
  {prompt: true, text: 'cao launch --agents code_supervisor --session-name main'},
  {prompt: true, text: 'cao session send main "Implement the auth module"'},
  {prompt: true, text: 'cao session status main --workers'},
  {prompt: false, text: '✓ 2 agents running'},
];

function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <span className={styles.badge}>Open Source Multi-Agent Framework</span>
        <h1 className={styles.title}>CLI Agent Orchestrator</h1>
        <p className={styles.tagline}>
          Lightweight orchestration for multi-agent AI workflows
        </p>
        <div className={styles.ctas}>
          <Link className={styles.ctaPrimary} to="/docs/intro">
            Get Started →
          </Link>
          <Link
            className={styles.ctaSecondary}
            to="https://github.com/awslabs/cli-agent-orchestrator">
            GitHub
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProvidersSection() {
  return (
    <section className={styles.providers}>
      <h2 className={styles.sectionTitle}>Supported Providers</h2>
      <div className={styles.providerGrid}>
        {providers.map((provider) => (
          <div key={provider.name} className={styles.providerBadge}>
            <span className={styles.providerName}>{provider.name}</span>
            <kbd className={styles.kbd}>{provider.shortcut}</kbd>
          </div>
        ))}
      </div>
    </section>
  );
}

function TerminalSection() {
  return (
    <section className={styles.terminalSection}>
      <div className={styles.terminalWindow}>
        <div className={styles.terminalChrome}>
          <div className={styles.trafficLights}>
            <span className={styles.trafficRed} />
            <span className={styles.trafficYellow} />
            <span className={styles.trafficGreen} />
          </div>
          <span className={styles.terminalTitle}>cao — zsh</span>
        </div>
        <div className={styles.terminalBody}>
          {terminalLines.map((line, idx) => (
            <div key={idx} className={styles.terminalLine}>
              {line.prompt && <span className={styles.prompt}>$ </span>}
              <span className={line.prompt ? styles.command : styles.output}>
                {line.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section className={styles.features}>
      <h2 className={styles.sectionTitle}>Features</h2>
      <div className={styles.featureGrid}>
        {features.map((feature) => (
          <div key={feature.title} className={styles.featureCard}>
            <div className={styles.featureIcon}>{feature.icon}</div>
            <h3 className={styles.featureTitle}>{feature.title}</h3>
            <p className={styles.featureDesc}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function V2(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="CLI Agent Orchestrator"
      description="Lightweight orchestration for multi-agent AI workflows">
      <main className={styles.main}>
        <HeroSection />
        <ProvidersSection />
        <TerminalSection />
        <FeaturesSection />
      </main>
    </Layout>
  );
}
