import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const providers = [
  {name: 'Claude Code', icon: '⚡'},
  {name: 'Kiro CLI', icon: '🔶'},
  {name: 'Codex', icon: '🟢'},
  {name: 'Kimi CLI', icon: '🌙'},
  {name: 'Copilot CLI', icon: '🤖'},
  {name: 'Cursor CLI', icon: '🔵'},
  {name: 'OpenCode CLI', icon: '🟠'},
  {name: 'Hermes', icon: '🪶'},
  {name: 'Antigravity CLI', icon: '💎'},
];

const patterns = [
  {name: 'Handoff', desc: 'Synchronous delegation with context transfer', icon: '→'},
  {name: 'Assign', desc: 'Async task dispatch to parallel agents', icon: '⇉'},
  {name: 'Send Message', desc: 'Direct inter-agent communication', icon: '↔'},
];

function HeroBanner() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroGrid} />
      <div className={styles.heroOrb} />
      <div className={styles.heroOrb2} />
      <div className={`container ${styles.heroContent}`}>
        <div className={styles.heroSplit}>
          <div className={styles.heroLeft}>
            <div className={styles.badge}>Open Source Multi-Agent Framework</div>
            <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
            <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
            <div className={styles.buttons}>
              <Link className={styles.primaryButton} to="/docs/intro">
                Get Started →
              </Link>
              <a
                className={styles.secondaryButton}
                href="pathname:///cli-agent-orchestrator/course/index.html">
                Interactive Course
              </a>
              <Link
                className={styles.secondaryButton}
                to="https://github.com/awslabs/cli-agent-orchestrator">
                View on GitHub
              </Link>
            </div>
            <div className={styles.providersList}>
              {providers.map((p, i) => (
                <span key={i} className={styles.providerChip}>
                  <span className={styles.providerIcon}>{p.icon}</span>
                  {p.name}
                </span>
              ))}
            </div>
          </div>
          <div className={styles.heroRight}>
            <div className={styles.terminal}>
              <div className={styles.terminalHeader}>
                <span className={styles.terminalDot} data-color="red" />
                <span className={styles.terminalDot} data-color="yellow" />
                <span className={styles.terminalDot} data-color="green" />
                <span className={styles.terminalTitle}>cao — orchestrator</span>
              </div>
              <pre className={styles.terminalBody}>
<code><span className={styles.terminalComment}># Launch a supervisor session</span>{'\n'}<span className={styles.terminalPrompt}>$</span> cao launch --agents supervisor --session-name main{'\n'}{'\n'}<span className={styles.terminalComment}># Check session status</span>{'\n'}<span className={styles.terminalPrompt}>$</span> cao session status main --workers{'\n'}<span className={styles.terminalOutput}>Session:  main</span>{'\n'}<span className={styles.terminalOutput}>Agent:    supervisor</span>{'\n'}<span className={styles.terminalOutput}>Status:   idle</span>{'\n'}{'\n'}<span className={styles.terminalOutput}>ID       AGENT           PROVIDER    STATUS</span>{'\n'}<span className={styles.terminalOutput}>──────────────────────────────────────────</span>{'\n'}<span className={styles.terminalOutput}>3        auth-dev        claude_code running</span>{'\n'}<span className={styles.terminalOutput}>4        test-writer     kiro_cli    running</span>{'\n'}<span className={styles.terminalOutput}>5        doc-updater     codex       done ✓</span></code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function PatternsSection() {
  return (
    <section className={styles.patterns}>
      <div className="container">
        <div className={styles.patternsGrid}>
          {patterns.map((p, i) => (
            <div key={i} className={styles.patternCard}>
              <div className={styles.patternIcon}>{p.icon}</div>
              <div>
                <h4 className={styles.patternName}>{p.name}</h4>
                <p className={styles.patternDesc}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
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
      'Works with 9 providers including Claude Code, Kiro CLI, Codex, Copilot CLI, Cursor CLI, and more. Mix and match providers in a single workflow.',
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

function ArchitectureSection() {
  return (
    <section className={styles.architecture}>
      <div className="container">
        <h2 className={styles.sectionTitle}>How It Works</h2>
        <p className={styles.sectionSubtitle}>
          A lightweight layer that sits between you and your AI agents.
        </p>
        <div className={styles.archFlow}>
          <div className={styles.archStep}>
            <div className={styles.archStepNumber}>1</div>
            <h4>Define</h4>
            <p>Declare agents, roles, and orchestration patterns in YAML or CLI</p>
          </div>
          <div className={styles.archArrow}>→</div>
          <div className={styles.archStep}>
            <div className={styles.archStepNumber}>2</div>
            <h4>Orchestrate</h4>
            <p>CAO manages sessions, routes messages, and tracks state</p>
          </div>
          <div className={styles.archArrow}>→</div>
          <div className={styles.archStep}>
            <div className={styles.archStepNumber}>3</div>
            <h4>Deliver</h4>
            <p>Agents complete tasks in parallel, results flow back to you</p>
          </div>
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
        <PatternsSection />
        <FeaturesSection />
        <ArchitectureSection />
      </main>
    </Layout>
  );
}
