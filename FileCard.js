import { useState } from 'react';
import './FileCard.css';

function getFileIcon(category) {
  switch (category) {
    case 'Images': return '🖼️';
    case 'Videos': return '🎬';
    case 'Documents': return '📄';
    default: return '📦';
  }
}

function FileCard({ file, onDelete, onView }) {
  const [confirm, setConfirm] = useState(false);

  return (
    <div className="file-card">
      <div className="file-card-icon">{getFileIcon(file.category)}</div>

      <div className="file-card-info">
        <p className="file-name">{file.name}</p>
        <p className="file-meta">{file.category} · {(file.size / 1024).toFixed(1)} KB</p>
        <p className="file-meta">{file.uploadedAt.toLocaleString()}</p>
      </div>

      <div className="file-card-actions">
        <button className="btn-view" onClick={() => onView(file)}>
          View
        </button>

        {confirm ? (
          <div className="confirm-row">
            <button className="btn-confirm-yes" onClick={() => onDelete(file.id)}>
              Yes
            </button>
            <button className="btn-confirm-no" onClick={() => setConfirm(false)}>
              No
            </button>
          </div>
        ) : (
          <button className="btn-delete" onClick={() => setConfirm(true)}>
            Delete
          </button>
        )}
      </div>
    </div>
  );
}

export default FileCard;