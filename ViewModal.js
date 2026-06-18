import './ViewModal.css';

function ViewModal({ file, onClose }) {
  function renderPreview() {
    if (file.category === 'Images') {
      return <img src={file.url} alt={file.name} className="modal-preview-img" />;
    }

    if (file.category === 'Videos') {
      return (
        <video controls className="modal-preview-video">
          <source src={file.url} type={file.type} />
          Your browser does not support video preview.
        </video>
      );
    }

    if (file.type === 'application/pdf') {
      return (
        <iframe
          src={file.url}
          title={file.name}
          className="modal-preview-pdf"
        />
      );
    }

    return (
      <div className="modal-no-preview">
        <div className="no-preview-icon">📦</div>
        <p>No preview available for this file type.</p>
        <a href={file.url} download={file.name} className="download-link">
          Download file
        </a>
      </div>
    );
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <p className="modal-filename">{file.name}</p>
            <p className="modal-filemeta">
              {file.category} · {(file.size / 1024).toFixed(1)} KB
            </p>
          </div>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>

        <div className="modal-body">
          {renderPreview()}
        </div>
      </div>
    </div>
  );
}

export default ViewModal;