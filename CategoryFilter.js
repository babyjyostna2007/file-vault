import './CategoryFilter.css';

const CATEGORIES = ['All', 'Documents', 'Images', 'Videos', 'Others'];

function CategoryFilter({ selected, onSelect }) {
  return (
    <div className="filter-section">
      <div className="filter-header">
        <span className="filter-label">Filter by category</span>
        <select
          value={selected}
          onChange={(e) => onSelect(e.target.value)}
          className="filter-select"
        >
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="tag-chips">
        {CATEGORIES.map((cat) => (
          <span
            key={cat}
            onClick={() => onSelect(cat)}
            className={`chip ${selected === cat ? 'chip-active' : ''}`}
          >
            {cat}
          </span>
        ))}
      </div>
    </div>
  );
}

export default CategoryFilter;