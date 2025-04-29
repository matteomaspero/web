
import { useState, useEffect } from 'react';

export const useMarkdownContent = (filePath: string) => {
  const [content, setContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(filePath);
        if (!response.ok) {
          throw new Error(`Failed to load markdown: ${response.statusText}`);
        }
        const text = await response.text();
        setContent(text);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error'));
        console.error('Error loading markdown:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMarkdown();
  }, [filePath]);

  return { content, isLoading, error };
};
