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
        if (response.status === 403 || 429) {
          // See https://docs.github.com/en/rest/using-the-rest-api/rate-limits-for-the-rest-api?apiVersion=2022-11-28#exceeding-the-rate-limit
          throw new Error('API Rate limit exceeded! Please try again later.');
        } else {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
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
