type FromPromise = Awaited<Promise<number>>;


interface User {
	name: string;
}

async function fetchUsers(): Promise<User[]> {
	const users: User[] = [
		{
			name: 'Alex'
		}
	]

	return users;
}

const users = fetchUsers();

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>;

type UnwrappedPromise<T> = T extends Promise<infer Return> ? Return : T;
type FetchDataReturnType = UnwrappedPromise<ReturnType<typeof fetchUsers>>;
