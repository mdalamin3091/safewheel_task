import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
	uri: process.env.NEXT_PUBLIC_API_URL,
	cache: new InMemoryCache(),
	 // headers:{
  //  		authorization:localStorage.getItem("token") || ""
  // 	}
});

export default client;
