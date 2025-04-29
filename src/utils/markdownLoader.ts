
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
        // For development environment
        let response = await fetch(path);
        
        if (!response.ok) {
          // Try with base path for production
          const adjustedPath = path.startsWith('/') 
            ? path.substring(1)  // Remove leading slash
            : path;
            
          response = await fetch(adjustedPath);
          
          // If still not found, try with the base URL for GitHub Pages
          if (!response.ok) {
            const baseUrlPath = `${getBaseUrl()}${adjustedPath}`;
            response = await fetch(baseUrlPath);
          }
        }
        
        if (!response.ok) {
          console.error(`Failed to load markdown: ${path}`);
          // Set default content instead of throwing error
          setContent('# Content Not Available\n\nPlease check back later.');
        } else {
          const text = await response.text();
          setContent(text);
        }
      } catch (err: any) {
        console.error('Error loading markdown:', err);
        setError(err);
        // Set default content on error
        setContent('# Error Loading Content\n\nPlease try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchContent();
  }, [path]);

  return { content, isLoading, error };
};
