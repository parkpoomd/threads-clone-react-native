import { Post } from '@/types';
import { Ionicons } from '@expo/vector-icons';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Image, Pressable, Text, View } from 'react-native';

dayjs.extend(relativeTime);

function formatTimeAgo(dateString: string): string {
  return dayjs(dateString).fromNow();
}

export default function PostListItem({ post }: { post: Post }) {
  const timeAgo = formatTimeAgo(post.createdAt);
  const hasReplies = post.replies.length > 0;

  return (
    <Pressable className="flex-row p-4 border-b border-gray-800/70 active:bg-gray-900/50">
      {/* Avatar */}
      <View className="mr-3">
        <Image
          source={{ uri: post.user.image }}
          className="w-12 h-12 rounded-full"
        />
      </View>

      {/* Content */}
      <View className="flex-1">
        {/* User Info */}
        <View className="flex-row items-center">
          <Text className="text-white font-bold mr-2">
            {post.user.username}
          </Text>
          <Text className="text-gray-500">
            {dayjs(post.createdAt).fromNow()}
          </Text>
        </View>

        {/* Post content */}
        <Text className="text-white mt-2 mb-3">{post.content}</Text>

        {/* Interaction Buttons */}
        <View className="flex-row gap-4 mt-2">
          <Pressable className="flex-row items-center">
            <Ionicons name="heart-outline" size={20} color="#d1d5db" />
            <Text className="text-gray-300 ml-2">0</Text>
          </Pressable>

          <Pressable className="flex-row items-center">
            <Ionicons name="chatbubble-outline" size={20} color="#d1d5db" />
            <Text className="text-gray-300 ml-2">0</Text>
          </Pressable>

          <Pressable className="flex-row items-center">
            <Ionicons name="repeat-outline" size={20} color="#d1d5db" />
            <Text className="text-gray-300 ml-2">0</Text>
          </Pressable>

          <Pressable className="flex-row items-center">
            <Ionicons name="paper-plane-outline" size={20} color="#d1d5db" />
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
}
