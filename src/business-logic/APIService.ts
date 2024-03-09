import IUser, { IGithubResponse } from './model/IUser';

class APIService {
  static async getUsers(endpoint: string): Promise<IUser[]> {
    try {
      const url = `https://api.github.com/search/users?q=${endpoint}`;
      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
      };

      const response = await fetch(url, {
        method: 'GET',
        headers,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const githubResponse = (await response.json()) as IGithubResponse;
      const users = this.extractUsers(githubResponse);
      return users;
    } catch (error) {
      console.log('Error fetching data:', error);
      throw error;
    }
  }

  private static extractUsers(response: IGithubResponse): IUser[] {
    if (!response || !response.items || !Array.isArray(response.items)) {
      return [];
    }

    return response.items.map((item: any) => ({
      id: String(item.id),
      login: item.login,
    }));
  }
}

export default APIService;
