type ProjectMetric = {
  metric: string;
  metricLabel: string;
  title: string;
};

type PlayfulSignalVisualProps = {
  focusAreas: string[];
  projects: ProjectMetric[];
};

export function PlayfulSignalVisual({
  focusAreas,
  projects,
}: PlayfulSignalVisualProps) {
  return (
    <div className="signal-console hardware-panel surface-tone--graphite">
      <div className="signal-console__scan" aria-hidden="true" />
      <div className="signal-console__status-strip" aria-hidden="true">
        <div className="status-cluster">
          <span className="status-cluster__cell status-cluster__cell--orange" />
          <span className="status-cluster__cell status-cluster__cell--teal" />
          <span className="status-cluster__cell status-cluster__cell--yellow" />
          <span className="status-cluster__cell status-cluster__cell--red" />
        </div>
        <div className="signal-console__trace">
          <span className="signal-console__trace-line" />
          <span className="signal-console__trace-line signal-console__trace-line--teal" />
        </div>
      </div>

      <div className="signal-console__body">
        <div className="signal-console__section signal-console__section--focus">
          <div className="module-header">
            <span className="status-led" data-active />
            <p className="module-header__label">Current Focus</p>
          </div>

          <ul className="console-focus-list">
            {focusAreas.map((item, index) => (
              <li key={item} className="console-focus-item">
                <span className="console-focus-item__index mono-data">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="console-focus-item__label">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="signal-console__section signal-console__section--metrics">
          <div className="module-header">
            <span className="status-led" data-active />
            <p className="module-header__label">Measured Outcomes</p>
          </div>

          <div className="console-metric-list">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className={`console-metric ${index === 0 ? "surface-tone--orange-soft" : "surface-tone--teal"}`}
              >
                <p className="console-metric__title">{project.title}</p>
                <p className="console-metric__value mono-data">{project.metric}</p>
                <p className="console-metric__label">{project.metricLabel}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
