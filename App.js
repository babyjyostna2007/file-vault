import { useState } from 'react';
import Header from './components/Header';
import LoginPage from './components/LoginPage';
import FileUpload from './components/FileUpload';
import FileList from './components/FileList';
import CategoryFilter from './components/CategoryFilter';
import ViewModal from './components/ViewModal';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [files, setFiles] = useState([]);
  const [category, setCategory] = useState('All');
  const [viewingFile, setViewingFile] = useState(null);

  function handleUpload(newFile) {
    setFiles((prev) => [...prev, newFile]);
  }

  function handleDelete(id) {
    setFiles((prev) => prev.filter((f) => f.id !== id));
  }

  function handleView(file) {
    setViewingFile(file);
  }

  function handleCloseView() {
    setViewingFile(null);
  }

  const filteredFiles =
    category === 'All' ? files : files.filter((f) => f.category === category);

  if (!isLoggedIn) {
    return <LoginPage onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <div className="app-wrapper">
      <Header title="File Vault" onLogout={() => setIsLoggedIn(false)} />
      <main className="app-main">
        <FileUpload onUpload={handleUpload} />
        <CategoryFilter selected={category} onSelect={setCategory} />
        <FileList
          files={filteredFiles}
          onDelete={handleDelete}
          onView={handleView}
        />
      </main>
      {viewingFile && (
        <ViewModal file={viewingFile} onClose={handleCloseView} />
      )}
    </div>
  );
}

export default App;