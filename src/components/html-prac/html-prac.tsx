import { useCallback, useState } from 'react';

export const HtmlPrac = () => {
  const [id, setId] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = useCallback(() => {
    // なんか処理
  }, []);

  return (
    <div>
      {/* formタグ */}
      {/* form無し */}
    </div>
  );
};
