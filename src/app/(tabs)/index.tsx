import PostListItem from '@/components/post-list-item';
import { posts } from '@/dummy-data';
import { FlatList } from 'react-native';

export default function HomeScreen() {
  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => <PostListItem post={item} />}
    />
  );
}
