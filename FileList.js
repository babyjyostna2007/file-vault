import FileCard from './FileCard';
import './FileList.css';

function FileList({ files, onDelete, onView }) {
  if (files.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">📂</div>
        <p className="empty-text">No files yet. Upload something!</p>
      </div>
    );
  }

  return (
    <div className="file-grid">
      {files.map((file) => (
        <FileCard
          key={file.id}
          file={file}
          onDelete={onDelete}
          onView={onView}
        />
      ))}
    </div>
  );
}

export default FileList;