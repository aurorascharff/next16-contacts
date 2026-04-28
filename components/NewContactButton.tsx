'use client';

import React from 'react';
import { createEmptyContact } from '@/data/actions/contact';

import SubmitButton from './ui/SubmitButton';

export default function NewContactButton() {
  return (
    <form action={createEmptyContact}>
      <SubmitButton type="submit" theme="secondary">
        New
      </SubmitButton>
    </form>
  );
}
