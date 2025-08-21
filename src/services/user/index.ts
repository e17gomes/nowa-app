/**
 * Serviço de usuário
 * Gerencia operações relacionadas ao perfil do usuário
 */

import { apiService } from '../api';
import type { UserProfile, UpdateUserData } from './types';

export const userService = {
  /**
   * Obtém perfil do usuário atual
   */
  async getProfile(): Promise<UserProfile> {
    const response = await apiService.get<UserProfile>('/user/profile');
    return response.data;
  },

  /**
   * Atualiza perfil do usuário
   */
  async updateProfile(data: UpdateUserData): Promise<UserProfile> {
    const response = await apiService.put<UserProfile>('/user/profile', data);
    return response.data;
  },

  /**
   * Lista todos os usuários (admin only)
   */
  async getUsers(): Promise<UserProfile[]> {
    const response = await apiService.get<UserProfile[]>('/users');
    return response.data;
  },
};

export * from './types';