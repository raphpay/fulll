import IUser, { IGithubResponse } from './model/IUser';

class APIService {
  /**
   * Fetches users from the GitHub API based on the provided endpoint.
   * @param endpoint The search query or endpoint to fetch users from.
   * @returns A Promise that resolves to an array of IUser objects representing the fetched users.
   * @throws Error if the API call fails or if the API rate limit is exceeded.
   */
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

  /**
   * Extracts user data from the GitHub API response.
   * @param response The response object from the GitHub API.
   * @returns An array of IUser objects extracted from the response.
   */
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
