import Button from '@/components/Button/Button';
import ModalDialog from '@/components/ModalDialog/ModalDialog';
import TodoList from '@/components/TodoList/TodoList';
// import React, { useState, useEffect } from 'react';
// import pb from '@/api/pocketbase';

function TodoPage() {
  const handleClick = () => {
    console.log('클릭');
  };
  return (
    <div>
      <TodoList />
      <ModalDialog />
    </div>
  );
}

export default TodoPage;
