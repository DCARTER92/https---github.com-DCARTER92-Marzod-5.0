import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function ChapterViewer() {
  const { book, section, chapter } = useParams();
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const basePath = "/books page content/";
    const path = encodeURI(basePath + book + "/" + section + "/" + chapter + ".txt");
    fetch(path)
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.text();
      })
      .then(text => {
        setContent(text);
        setLoading(false);
      })
      .catch(err => {
        setContent('Error loading chapter.');
        setLoading(false);
      });
  }, [book, section, chapter]);

  return (
    <div className="p-6 prose max-w-none">
      <h1 className="text-3xl font-bold mb-4">{decodeURIComponent(chapter).replace(/-/g, ' ')}</h1>
      {loading ? (
        <p>Loading chapter content...</p>
      ) : (
        <pre className="whitespace-pre-wrap">{content}</pre>
      )}
    </div>
  );
}
