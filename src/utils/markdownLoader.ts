
import { useState, useEffect } from 'react';

// Get the base URL for assets - important for GitHub Pages deployment
const getBaseUrl = () => {
  const baseUrl = import.meta.env.BASE_URL || '/';
  return baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
};

export const useMarkdownContent = (path: string) => {
  const [content, setContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      setIsLoading(true);
      try {
        // First try with the original path
        let response = await fetch(path);
        
        // If that fails, try with the base URL prefixed
        if (!response.ok) {
          // For GitHub Pages, we need to adjust the path
          const adjustedPath = path.startsWith('/') 
            ? `${getBaseUrl()}${path.slice(1)}` 
            : `${getBaseUrl()}${path}`;
            
          response = await fetch(adjustedPath);
          
          // If still not found, try public directory
          if (!response.ok) {
            const publicPath = path.startsWith('/') 
              ? `${getBaseUrl()}public${path}` 
              : `${getBaseUrl()}public/${path}`;
              
            response = await fetch(publicPath);
          }
        }
        
        if (!response.ok) {
          throw new Error(`Failed to load markdown: ${response.status} ${response.statusText}`);
        }
        
        const text = await response.text();
        setContent(text);
      } catch (err: any) {
        console.error('Error loading markdown:', err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchContent();
  }, [path]);

  return { content, isLoading, error };
};
