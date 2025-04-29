
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
        // Normalize path - remove leading slash if exists
        const normalizedPath = path.startsWith('/') ? path.substring(1) : path;
        
        // Try different path variations
        const pathsToTry = [
          normalizedPath,                                    // Direct path
          `${getBaseUrl()}${normalizedPath}`,                // With base URL
          `${getBaseUrl()}public/${normalizedPath}`,         // With public folder
        ];
        
        let response: Response | null = null;
        let successfulPath = '';
        
        // Try each path until one succeeds
        for (const pathToTry of pathsToTry) {
          console.log(`Trying to fetch markdown from: ${pathToTry}`);
          try {
            const res = await fetch(pathToTry);
            if (res.ok) {
              response = res;
              successfulPath = pathToTry;
              break;
            }
          } catch (err) {
            console.warn(`Failed to fetch from ${pathToTry}`, err);
          }
        }
        
        if (response && response.ok) {
          console.log(`Successfully loaded markdown from: ${successfulPath}`);
          const text = await response.text();
          setContent(text);
        } else {
          console.error(`Failed to load markdown: ${path}`);
          // Set default content instead of throwing error
          setContent('# Content Not Available\n\nPlease check back later.');
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
