/**
 * Tipos para o serviço de usuário
 */

export interface UserProfile {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: 'admin' | 'user';
  createdAt: string;
  updatedAt: string;
}

export interface UpdateUserData {
  name?: string;
  avatar?: string;
}