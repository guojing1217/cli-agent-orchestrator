import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function HeroBanner() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <video
        className={styles.heroVideo}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/cli-agent-orchestrator/video/hero.webm" type="video/webm" />
        <source src="/cli-agent-orchestrator/video/hero.mp4" type="video/mp4" />
      </video>
      <div className={styles.heroGlow} />
      <div className={`container ${styles.heroContent}`}>
        <div className={styles.badge}>Open Source Multi-Agent Framework</div>
        <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className={styles.primaryButton} to="/docs/intro">
            Get Started
          </Link>
          <Link
            className={styles.secondaryButton}
            to="https://github.com/awslabs/cli-agent-orchestrator">
            GitHub
          </Link>
        </div>
      </div>
    </header>
  );
}

const features = [
  {
    title: 'Multi-Agent Orchestration',
    icon: '🎯',
    description:
      'Coordinate multiple AI agents through three patterns: Handoff (sync), Assign (async), and Send Message (direct). Each agent runs in an isolated tmux session.',
  },
  {
    title: 'Provider Agnostic',
    icon: '🔌',
    description:
      'Works with Claude Code, Kiro CLI, Amazon Q Developer, Gemini CLI, Codex, Kimi CLI, and GitHub Copilot CLI. Mix and match providers in a single workflow.',
  },
  {
    title: 'MCP Native',
    icon: '🔗',
    description:
      'Built-in MCP server exposes orchestration capabilities to any MCP-compatible client. Use CAO as the backbone for your agentic workflows.',
  },
  {
    title: 'Scheduled Flows',
    icon: '⏱️',
    description:
      'Define cron-like automated workflows that run multi-agent pipelines on a schedule. Perfect for CI/CD, monitoring, and recurring tasks.',
  },
  {
    title: 'Web Dashboard',
    icon: '📊',
    description:
      'Monitor and manage all agent sessions from a real-time browser dashboard. View output, assign tasks, and track progress visually.',
  },
  {
    title: 'Zero Infrastructure',
    icon: '💻',
    description:
      'Runs entirely on your local machine with no cloud dependencies. Install with a single command and start orchestrating in seconds.',
  },
];

function Feature({title, icon, description}: {title: string; icon: string; description: string}) {
  return (
    <div className={styles.feature}>
      <div className={styles.featureIcon}>{icon}</div>
      <h3 className={styles.featureTitle}>{title}</h3>
      <p className={styles.featureDescription}>{description}</p>
    </div>
  );
}

function FeaturesSection() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.featuresGrid}>
          {features.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

function QuickStartSection() {
  return (
    <section className={styles.quickStart}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Quick Start</h2>
        <div className={styles.codeBlock}>
          <pre>
            <code>{`# Install CAO
uv tool install cao

# Start a multi-agent workflow
cao session start --role supervisor --name main
cao assign --to worker-1 --task "Implement auth module"
cao assign --to worker-2 --task "Write tests"
cao status`}</code>
          </pre>
        </div>
      </div>
    </section>
  );
}

export default function Home(): React.JSX.Element {
  return (
    <Layout description="Lightweight orchestration for multi-agent AI workflows">
      <HeroBanner />
      <main>
        <FeaturesSection />
        <QuickStartSection />
      </main>
    </Layout>
  );
}
