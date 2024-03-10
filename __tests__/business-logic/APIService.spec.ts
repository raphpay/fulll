import APIService from '../../src/business-logic/APIService';
import { IGithubResponse, IUser } from '../../src/business-logic/model/IUser';

describe('APIService', () => {
  describe('getUsers', () => {
    it('should fetch users from GitHub API', async () => {
      // Mock GitHub API response
      const mockResponse: IGithubResponse = {
        incomplete_results: false,
        items: [
          {
            avatar_url: 'https://avatars.githubusercontent.com/u/41484808?v=4',
            events_url: 'https://api.github.com/users/raphpay/events{/privacy}',
            followers_url: 'https://api.github.com/users/raphpay/followers',
            following_url:
              'https://api.github.com/users/raphpay/following{/other_user}',
            gists_url: 'https://api.github.com/users/raphpay/gists{/gist_id}',
            gravatar_id: '',
            html_url: 'https://github.com/raphpay',
            id: 41484808,
            login: 'raphpay',
            node_id: 'MDQ6VXNlcjQxNDg0ODA4',
            organizations_url: 'https://api.github.com/users/raphpay/orgs',
            received_events_url:
              'https://api.github.com/users/raphpay/received_events',
            repos_url: 'https://api.github.com/users/raphpay/repos',
            score: 1,
            site_admin: false,
            starred_url:
              'https://api.github.com/users/raphpay/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/raphpay/subscriptions',
            type: 'User',
            url: 'https://api.github.com/users/raphpay',
          },
        ],
        total_count: 1,
      };

      // Mock fetch function
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue(mockResponse),
      });

      // Call the getUsers method
      const users: IUser[] = await APIService.getUsers('raphpay');

      // Assertions
      expect(global.fetch).toHaveBeenCalledWith(
        'https://api.github.com/search/users?q=raphpay',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      expect(users.length).toBe(1);
      expect(users[0].id).toBe('41484808');
      expect(users[0].login).toBe('raphpay');
    });
  });
});
