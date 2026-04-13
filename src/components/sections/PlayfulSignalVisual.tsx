import type { CSSProperties } from "react";

import { useReducedMotion } from "framer-motion";

type ProjectMetric = {
  metric: string;
  metricLabel: string;
  title: string;
};

type PlayfulSignalVisualProps = {
  focusAreas: string[];
  projects: ProjectMetric[];
};

const sequenceLengths = [9, 8, 10, 7];
const activePattern = new Set([
  "0-0",
  "0-2",
  "0-5",
  "0-7",
  "1-1",
  "1-3",
  "1-4",
  "1-6",
  "2-0",
  "2-2",
  "2-4",
  "2-8",
  "3-1",
  "3-2",
  "3-5",
  "3-6",
]);

function MeterColumn({
  index,
  reduceMotion,
}: {
  index: number;
  reduceMotion: boolean;
}) {
  return (
    <div className="meter-column">
      {Array.from({ length: 7 }).map((_, stepIndex) => {
        const height = ((stepIndex + index) % 5) + 3;
        const active = stepIndex <= height;

        return (
          <span
            key={`${index}-${stepIndex}`}
            className="meter-column__step"
            data-active={active}
            style={
              reduceMotion
                ? undefined
                : ({ "--meter-delay": `${(index + stepIndex) * 140}ms` } as CSSProperties)
            }
          />
        );
      })}
    </div>
  );
}

export function PlayfulSignalVisual({
  focusAreas,
  projects,
}: PlayfulSignalVisualProps) {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <div className="signal-deck hardware-panel">
      <div className="signal-deck__scan" aria-hidden="true" />

      <div className="signal-deck__top">
        <div className="signal-deck__matrix surface-tone--graphite">
          <div className="signal-deck__module-heading">
            <span className="status-led" data-active />
            <span>Core Focus</span>
          </div>

          <div className="sequence-grid">
            {focusAreas.map((item, rowIndex) => (
              <div key={item} className="sequence-grid__row">
                <p className="sequence-grid__label">{item}</p>
                <div className="sequence-grid__cells">
                  {Array.from({ length: sequenceLengths[rowIndex] ?? 8 }).map(
                    (_, cellIndex) => {
                      const active = activePattern.has(`${rowIndex}-${cellIndex}`);

                      return (
                        <span
                          key={`${item}-${cellIndex}`}
                          className="sequence-grid__cell"
                          data-active={active}
                          style={
                            reduceMotion
                              ? undefined
                              : ({
                                  "--pulse-delay": `${(rowIndex * 220) + (cellIndex * 90)}ms`,
                                } as CSSProperties)
                          }
                        />
                      );
                    },
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="signal-deck__stack">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`metric-well ${index === 0 ? "surface-tone--orange" : "surface-tone--sage"}`}
            >
              <p className="metric-well__title">{project.title}</p>
              <p className="metric-well__value mono-data">{project.metric}</p>
              <p className="metric-well__label">{project.metricLabel}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="signal-deck__bottom">
        <div className="signal-wave surface-tone--bone">
          <div className="signal-deck__module-heading">
            <span className="status-led" data-active />
            <span>Signal Flow</span>
          </div>

          <div className="signal-wave__bars">
            {Array.from({ length: 22 }).map((_, index) => (
              <span
                key={`wave-${index}`}
                className="signal-wave__bar"
                style={
                  reduceMotion
                    ? undefined
                    : ({
                        "--bar-delay": `${index * 85}ms`,
                        "--bar-height": `${24 + ((index * 7) % 68)}%`,
                      } as CSSProperties)
                }
              />
            ))}
          </div>
        </div>

        <div className="meter-well surface-tone--utility">
          <div className="signal-deck__module-heading">
            <span className="status-led" data-active />
            <span>Activity</span>
          </div>

          <div className="meter-well__grid">
            {Array.from({ length: 8 }).map((_, index) => (
              <MeterColumn
                key={`meter-${index}`}
                index={index}
                reduceMotion={reduceMotion}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
