import PostListItem from '@/components/post-list-item';
import { posts } from '@/dummy-data';
import { Link } from 'expo-router';
import { FlatList } from 'react-native';

export default function HomeScreen() {
  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => <PostListItem post={item} />}
      ListHeaderComponent={() => (
        <>
          <Link
            href="/new-post"
            className="text-blue-500 p-4 text-center text-3xl"
          >
            New Post
          </Link>
          <Link
            href="/login"
            className="text-blue-500 p-4 text-center text-3xl"
          >
            Log in
          </Link>
        </>
      )}
    />
  );
}
