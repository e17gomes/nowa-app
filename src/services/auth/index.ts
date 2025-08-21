/**
 * Serviço de autenticação
 * Gerencia login, logout e estado de autenticação
 */

import type { LoginCredentials, AuthResponse } from './types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

export const authService = {
  /**
   * Realiza login do usuário
   */
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error('Falha na autenticação');
    }

    return response.json();
  },

  /**
   * Realiza logout do usuário
   */
  async logout(): Promise<void> {
    const token = this.getToken();
    if (token) {
      await fetch(`${API_BASE_URL}/auth/logout`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
      });
    }
    this.clearToken();
  },

  /**
   * Obtém token do localStorage
   */
  getToken(): string | null {
    return localStorage.getItem('auth_token');
  },

  /**
   * Salva token no localStorage
   */
  setToken(token: string): void {
    localStorage.setItem('auth_token', token);
  },

  /**
   * Remove token do localStorage
   */
  clearToken(): void {
    localStorage.removeItem('auth_token');
  },

  /**
   * Verifica se usuário está autenticado
   */
  isAuthenticated(): boolean {
    return !!this.getToken();
  },
};

export * from './types';