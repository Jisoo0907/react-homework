import Button from '@/components/Button/Button';
import DoitList from '@/components/DoitList/DoitList';
// import React, { useState, useEffect } from 'react';
// import pb from '@/api/pocketbase';

function TodoPage() {
  const handleClick = () => {
    console.log('클릭');
  };
  return (
    <div>
      <Button variant="primary" onClick={handleClick}>
        레이블
      </Button>
      <Button variant="secondary">다른 레이블</Button>
      <Button variant="tertiary" disabled>
        비활성화된 버튼
      </Button>
      <DoitList />
    </div>
  );
}

export default TodoPage;
