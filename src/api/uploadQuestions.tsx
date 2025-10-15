import apiClient from './config';

export const uploadQuestions = async (file: File): Promise<void> => {
  const formData = new FormData();
  formData.append('file', file);

  await apiClient.post('/questions/file', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
