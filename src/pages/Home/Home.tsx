import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LayoutDashboard, Sparkles, ShieldCheck, Activity, CalendarDays, Moon, Sun, User, Bell, SlidersHorizontal, TrendingUp, Shield } from 'lucide-react';
import ButtonComponent from '../../components/Button/button';
import styles from './home.module.css';

const navItems = [
  { icon: <LayoutDashboard size={18} />, label: 'Home', active: true },
  { icon: <Sparkles size={18} />, label: 'AI Planner' },
  { icon: <SlidersHorizontal size={18} />, label: 'Simulator' },
  { icon: <ShieldCheck size={18} />, label: 'Plans' },
  { icon: <Bell size={18} />, label: 'Notifications' },
];

const statCards = [
  { title: 'Goal Progress', value: '60%', subtitle: 'completed this month', progress: 60 },
  { title: 'Performance Score', value: '78/100', subtitle: 'top 20% consistent' },
  { title: 'Risk Level', value: 'Low', subtitle: 'On track for goals', badge: true },
  { title: 'Consistency', value: '5 days active', subtitle: 'Current streak' },
];

const plans = [
  { category: 'Finance', title: 'Aggressive Savings', progress: 45, status: 'On Track' },
  { category: 'Health', title: 'Marathon Prep', progress: 30, status: 'Behind' },
  { category: 'Career', title: 'Career Transition', progress: 80, status: 'On Track' },
];

const suggestions = [
  {
    title: 'High Spending Alert',
    text: 'You spent 40% more than usual this week on dining out. Try reducing food delivery to get back on track with your Savings Plan.',
    action: 'Apply Budget Fix',
    color: '#fef4e6',
  },
  {
    title: 'Optimal Rest Opportunity',
    text: 'Based on your activity levels, scheduling a rest day tomorrow will improve your Marathon Prep recovery by 15%.',
    action: 'Schedule Rest',
    color: '#eef8f3',
  },
  {
    title: 'Skill Synergy',
    text: "You've been studying Python. Adding a quick 2-hour SQL module this weekend aligns perfectly with your Career Transition goal.",
    action: 'Add to Plan',
    color: '#f0f7f2',
  },
];

const quickSuggestions = ['Save money', 'Improve productivity', 'Reduce stress'];

const modeItems = [
  { label: 'Goal Mode', icon: <TrendingUp size={18} /> },
  { label: 'Problem Mode', icon: <Shield size={18} /> },
  { label: 'Future Mode', icon: <Activity size={18} /> },
];

const initialActivities = [
  { label: 'Meditate 10 mins', done: true },
  { label: 'Read 10 pages', done: false },
  { label: 'Drink 2L water', done: true },
  { label: 'Track expenses', done: false },
];

export default function HomePage() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [query, setQuery] = useState('I earn 20k/month and want to save more. What should I do?');
  const [activeMode, setActiveMode] = useState('Goal Mode');
  const [savings, setSavings] = useState(3000);
  const [activities, setActivities] = useState(initialActivities);

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const completedActivities = activities.filter((activity) => activity.done).length;
  const targetGoal = 50000;
  const baseSavings = 1500;
  const monthsRemaining = Math.ceil(targetGoal / savings);
  const baseMonths = Math.ceil(targetGoal / baseSavings);
  const savedMonths = Math.max(0, baseMonths - monthsRemaining);

  function toggleActivity(index: number) {
    setActivities((current) =>
      current.map((item, idx) => (idx === index ? { ...item, done: !item.done } : item)),
    );
  }

  return (
    <div className={styles.page}>
      <aside className={styles.sidebar}>
        <div className={styles.brandBlock}>
          <div className={styles.brandAvatar}>L</div>
          <div className={styles.brandDetails}>
            <span className={styles.brandName}>LifePilot AI</span>
            <span className={styles.brandLabel}>Dashboard</span>
          </div>
        </div>

        <nav className={styles.navList}>
          {navItems.map((item) => (
            <button
              key={item.label}
              className={[styles.navItem, item.active ? styles.navItemActive : ''].join(' ')}
              type="button"
              onClick={() => {
                if (item.label === 'Home') return;
                if (item.label === 'AI Planner') navigate('/');
              }}
            >
              <span className={styles.navIcon}>{item.icon}</span>
              <span className={styles.navLabel}>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className={styles.sidebarFooter}>
          <button className={styles.themeToggle} type="button" onClick={() => setDarkMode((prev) => !prev)}>
            {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
          </button>
          <button className={styles.profileButton} type="button" onClick={() => navigate('/')}> 
            <User size={16} />
            <span>Profile</span>
          </button>
        </div>
      </aside>

      <main className={styles.content}>
        <section className={styles.heroCard}>
          <div className={styles.heroHead}>
            <div className={styles.heroTitleBlock}>
              <div className={styles.badge}>{activeMode}</div>
              <h1>What do you want to improve today?</h1>
            </div>
            <p className={styles.heroSubtitle}>Describe your situation and get a structured, actionable plan.</p>
          </div>

          <div className={styles.modeRow}>
            {modeItems.map((item) => (
              <button
                key={item.label}
                type="button"
                className={[styles.modeButton, activeMode === item.label ? styles.modeButtonActive : ''].join(' ')}
                onClick={() => setActiveMode(item.label)}
              >
                <span className={styles.modeIcon}>{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          <div className={styles.heroInputWrapper}>
            <textarea
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className={styles.heroTextarea}
              rows={5}
              placeholder="Tell the AI what area you'd like help with..."
            />
            <ButtonComponent variant="Primary" className={styles.heroButton} type="button">
              Generate Plan
            </ButtonComponent>
          </div>

          <div className={styles.suggestionsRow}>
            <span>Suggestions:</span>
            <div className={styles.suggestionTags}>
              {quickSuggestions.map((suggestion) => (
                <button key={suggestion} type="button" onClick={() => setQuery(suggestion)}>
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.statsGrid}>
          {statCards.map((item) => (
            <div key={item.title} className={styles.statCard}>
              <div className={styles.statHeader}>
                <span>{item.title}</span>
                {item.badge ? <span className={styles.riskBadge}>Low</span> : null}
              </div>
              <div className={styles.statValue}>{item.value}</div>
              <div className={styles.statSubtitle}>{item.subtitle}</div>
              {item.progress !== undefined && (
                <div className={styles.progressBar}>
                  <div className={styles.progressFill} style={{ width: `${item.progress}%` }} />
                </div>
              )}
            </div>
          ))}
        </section>

        <section className={styles.plansSection}>
          <div className={styles.sectionHeader}>
            <h2>Your Active Plans</h2>
            <button type="button" className={styles.viewAll}>View All</button>
          </div>

          <div className={styles.planCards}>
            {plans.map((plan) => (
              <div key={plan.title} className={styles.planCard}>
                <div className={styles.planTop}>
                  <span>{plan.category}</span>
                  <span className={plan.status === 'Behind' ? styles.statusBehind : styles.statusOnTrack}>{plan.status}</span>
                </div>
                <h3>{plan.title}</h3>
                <div className={styles.planProgressRow}>
                  <div className={styles.progressBarSmall}>
                    <div className={styles.progressFillSmall} style={{ width: `${plan.progress}%` }} />
                  </div>
                  <span>{plan.progress}%</span>
                </div>
                <div className={styles.planActions}>
                  <button type="button">View</button>
                  <button type="button">Continue</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.suggestionsSection}>
          <h2>AI Suggestions for You</h2>
          <div className={styles.suggestionCards}>
            {suggestions.map((item) => (
              <div key={item.title} className={styles.suggestionCard} style={{ backgroundColor: item.color }}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <div className={styles.suggestionActions}>
                  <ButtonComponent variant="Secondary" className={styles.suggestionButton}>{item.action}</ButtonComponent>
                  <button type="button" className={styles.dismissButton}>Dismiss</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.simulationSection}>
          <div className={styles.simulationPanel}>
            <div className={styles.simulationHeader}>Try a quick simulation</div>
            <h2>"What if I saved more?"</h2>
            <p>Adjust your monthly contribution below to see how fast you could reach your $50,000 down payment goal.</p>
            <div className={styles.simulationSlider}>
              <span>$500</span>
              <div className={styles.sliderTrack}> 
                <div className={styles.sliderThumb} style={{ left: `${((savings - 500) / 4500) * 100}%` }} />
              </div>
              <span>$5,000</span>
            </div>
            <input
              type="range"
              min={500}
              max={5000}
              step={100}
              value={savings}
              className={styles.simulationRange}
              onChange={(e) => setSavings(Number(e.target.value))}
            />
            <div className={styles.currentContribution}>
              Monthly Savings: <strong>${savings.toLocaleString()}</strong> <span>${baseSavings} current</span>
            </div>
          </div>

          <div className={styles.simulationResults}>
            <div className={styles.resultsHeader}>Simulation Results</div>
            <div className={styles.resultsValue}>{monthsRemaining}</div>
            <div className={styles.resultsPhrase}>to reach your $50,000 goal</div>
            <div className={styles.successNote}>
              Great news! You&apos;ll reach your goal {savedMonths} months earlier compared to your current saving rate.
            </div>
            <ButtonComponent variant="Primary" className={styles.updatePlanButton}>Update Plan</ButtonComponent>
          </div>
        </section>

        <section className={styles.activitySection}>
          <h2>Activity Tracker</h2>
          <div className={styles.activityGrid}>
            <div className={styles.activityCard}>
              <div className={styles.cardHeader}>
                <span>Daily Activity</span>
                <Activity size={18} />
              </div>
              <div className={styles.activityValue}>Tasks Completed</div>
              <div className={styles.activityProgressBar}>
                <div className={styles.progressFill} style={{ width: `${(completedActivities / activities.length) * 100}%` }} />
              </div>
              <p>Keep going! You have {activities.length - completedActivities} tasks left today.</p>
            </div>

            <div className={styles.activityCard}>
              <div className={styles.cardHeader}>
                <span>Habit Tracker</span>
                <Sparkles size={18} />
              </div>
              <div className={styles.habitList}>
                {activities.map((activity, index) => (
                  <button
                    key={activity.label}
                    type="button"
                    className={styles.habitItem}
                    onClick={() => toggleActivity(index)}
                  >
                    <span className={activity.done ? styles.habitDone : styles.habitPending} />
                    <span>{activity.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.activityCard}>
              <div className={styles.cardHeader}>
                <span>Weekly Summary</span>
                <CalendarDays size={18} />
              </div>
              <div className={styles.weeklyChart}>
                {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => (
                  <div key={day} className={styles.barWrapper}>
                    <div className={styles.weekBar} style={{ height: `${40 + index * 8}px` }} />
                    <span>{day}</span>
                  </div>
                ))}
              </div>
              <div className={styles.summaryNote}>You improved by <strong>12%</strong> this week!</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
