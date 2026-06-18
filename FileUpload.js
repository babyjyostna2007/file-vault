import { useState, useEffect } from 'react';
import './FileUpload.css';

function FileUpload({ onUpload }) {
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!uploading) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setUploading(false);
          setMessage('✅ Upload complete!');
          return 100;
        }
        return prev + 10;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [uploading]);

  function getCategory(type) {
    if (type.startsWith('image/')) return 'Images';
    if (type.startsWith('video/')) return 'Videos';
    if (type.includes('pdf') || type.includes('document')) return 'Documents';
    return 'Others';
  }

  function handleFile(file) {
    if (!file) return;

    const newFile = {
      id: Date.now(),
      name: file.name,
      size: file.size,
      type: file.type,
      category: getCategory(file.type),
      uploadedAt: new Date(),
      url: URL.createObjectURL(file),
    };

    setProgress(0);
    setUploading(true);
    setMessage('');

    setTimeout(() => {
      onUpload(newFile);
    }, 1100);
  }

  function handleInputChange(e) {
    handleFile(e.target.files[0]);
    e.target.value = '';
  }

  function handleDrop(e) {
    e.preventDefault();
    setDragOver(false);
    handleFile(e.dataTransfer.files[0]);
  }

  return (
    <div className="upload-section">
      <div
        className={`upload-zone ${dragOver ? 'drag-over' : ''}`}
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
      >
        <div className="upload-icon">📁</div>
        <p className="upload-text">Drag & drop a file here</p>
        <p className="upload-or">or</p>
        <label className="upload-btn">
          Browse File
          <input
            type="file"
            onChange={handleInputChange}
            style={{ display: 'none' }}
          />
        </label>
      </div>

      {(uploading || progress > 0) && (
        <div className="progress-wrapper">
          <div className="progress-header">
            <span>{progress < 100 ? 'Uploading...' : message}</span>
            <span>{progress}%</span>
          </div>
          <div className="progress-bar-bg">
            <div
              className="progress-bar-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default FileUpload;