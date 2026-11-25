const SkeletonLoader = () => (
  <div className="skeleton-loader" role="status" aria-live="polite" aria-label="Loading portfolio">
    <div className="skeleton-nav">
      <span className="skeleton-block skeleton-brand" />
      <span className="skeleton-block skeleton-nav-links" />
    </div>
    <div className="skeleton-hero">
      <div className="skeleton-copy">
        <span className="skeleton-block skeleton-eyebrow" />
        <span className="skeleton-block skeleton-title" />
        <span className="skeleton-block skeleton-title skeleton-title-short" />
        <span className="skeleton-block skeleton-description" />
        <span className="skeleton-block skeleton-description skeleton-description-short" />
        <span className="skeleton-block skeleton-button" />
      </div>
      <span className="skeleton-block skeleton-art" />
    </div>
  </div>
);

export default SkeletonLoader;
