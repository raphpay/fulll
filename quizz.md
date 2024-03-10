## Mobile Quizz

1. What would return the following code? -> Answer :
"<></>" creates a fragment, it will in fact not create a <View> component.
- B
	```jsx
	<ScrollView>
	  <View>
	    <Text>Hello</Text>
	    <Text>World</Text>
	  </View>
	</ScrollView>
	```

2. Which reducer code do not follow best practices? -> Answer : 
It is not recommanded to directly mutate the state.

- A
	```ts
	case ADD_USERID:
	    state.users.push[4];
	    return state;
	```



3. Which reducer code is correct? -> Answer
A reducer needs to use a middleware ( like redux-thunk ) to return an asynchronous code. 
- A)
	```ts
	export function userSetData(
	  state: IUserState,
	  action: UserSetDataAction,
	): IUserState {
	  const { data, authType } = action
	
	  return { ...state, data, authType, loading: false }
	}
	```

4. A higher-order component is a function that: -> Answer
	- A) takes a component and returns a new component

5. What is "windowing"? -> Answer
	- B) a technique to render a small subset of a larger dataset

6. Which methods are not usable with React hooks? -> Answer
	- A) getDerivedStateFromError

7. Which status code is not an error? -> Anwswer: 

	- A) 204
	- D) 200

8. Use Typescript to describe the following function which returns a success message when the request has been successfully sent, returns a code status when the request has failed. -> Answer: 

	```ts
	/* Usage */ 
	const messageOrCodeStatus = await registerUser("Laurent", 35);
	```

  ```ts
	/* Implementation */ 
  async function registerUser(name: string, age: Int): Promise<string> {
    try {
      return new Promise(resolve => {
        setTimeout(() => {
            resolve({ status: 200, message: "User successfully registered" });
        }, 1000);
      });
    } catch {
      throw error.status;
    }
  }

	const messageOrCodeStatus = await registerUser("Laurent", 35);
	```
  

9. What is the main difference between queries and mutations in GraphQL? Queries are used to get data and fields are executed in parallel; mutations are used to create, edit or delete data and executed serially for the top-level fields.

10. What does not permit to interact with servers within React Native project? -> Answer:

- C) SwiftUI