export const Statistics = ({ title, stats }) => {
  return (
    <div>
      <section className="statistics">
        <h2 className="title">{title}</h2>

        <ul className="stat-list">
          <li className="item">
            <span className="label">{stats.label}</span>
            <span className="percentage">4%</span>
          </li>
          <li className="item">
            <span className="label">.mp3</span>
            <span className="percentage">14%</span>
          </li>
          <li className="item">
            <span className="label">.pdf</span>
            <span className="percentage">41%</span>
          </li>
          <li className="item">
            <span className="label">.mp4</span>
            <span className="percentage">12%</span>
          </li>
        </ul>
      </section>
    </div>
  );
};
