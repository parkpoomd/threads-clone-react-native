import { Post, User } from './types';

export const users: User[] = [
  {
    id: '1',
    username: 'alex_codes',
    name: 'Alex Chen',
    image: 'https://i.pravatar.cc/150?img=1',
    bio: 'Software engineer | Building cool stuff 🚀',
  },
  {
    id: '2',
    username: 'sarah_designs',
    name: 'Sarah Johnson',
    image: 'https://i.pravatar.cc/150?img=5',
    bio: 'UI/UX Designer | Coffee enthusiast ☕',
  },
  {
    id: '3',
    username: 'mike_tech',
    name: 'Mike Rodriguez',
    image: 'https://i.pravatar.cc/150?img=12',
    bio: 'Tech blogger | Always learning 📚',
  },
  {
    id: '4',
    username: 'jess_creative',
    name: 'Jessica Lee',
    image: 'https://i.pravatar.cc/150?img=9',
    bio: 'Creative director | Art lover 🎨',
  },
  {
    id: '5',
    username: 'david_music',
    name: 'David Kim',
    image: 'https://i.pravatar.cc/150?img=33',
    bio: 'Musician | Producer 🎵',
  },
];

function getRandomUser(): User {
  return users[Math.floor(Math.random() * users.length)];
}

const postData = [
  {
    id: 'p1',
    createdAt: '2024-01-15T10:30:00Z',
    content:
      'Just shipped a new feature! 🎉 The team worked really hard on this one. Excited to see what you all think!',
  },
  {
    id: 'p2',
    createdAt: '2024-01-15T11:00:00Z',
    content:
      'New design system is live! Clean, modern, and accessible. What do you think?',
  },
  {
    id: 'p3',
    createdAt: '2024-01-15T12:15:00Z',
    content: 'Reading about the latest AI developments. The future is wild 🤖',
  },
  {
    id: 'p4',
    createdAt: '2024-01-15T13:45:00Z',
    content:
      "Working on a new project that combines art and technology. Can't wait to share more!",
  },
  {
    id: 'p5',
    createdAt: '2024-01-15T14:20:00Z',
    content:
      'New track dropping next week! Been working on this for months. Hope you love it 🎶',
  },
  {
    id: 'p6',
    createdAt: '2024-01-15T15:00:00Z',
    content:
      'Code review tip: Always explain the "why" not just the "what". Makes a huge difference!',
  },
  {
    id: 'p7',
    createdAt: '2024-01-15T16:30:00Z',
    content:
      'Color theory is fascinating. The way colors interact and create emotion is pure magic ✨',
  },
  {
    id: 'p8',
    createdAt: '2024-01-15T17:00:00Z',
    content: 'Just finished a marathon coding session. Time for some rest! 😴',
  },
  {
    id: 'p9',
    createdAt: '2024-01-15T18:15:00Z',
    content:
      'The best code is code you never have to write. Simplicity wins every time.',
  },
  {
    id: 'p10',
    createdAt: '2024-01-15T19:00:00Z',
    content:
      "Learning something new every day. That's what keeps this job exciting!",
  },
  {
    id: 'p11',
    createdAt: '2024-01-15T20:30:00Z',
    content:
      'Debugging is like being a detective in a crime movie where you are also the murderer.',
  },
  {
    id: 'p12',
    createdAt: '2024-01-15T21:00:00Z',
    content: 'Coffee and code. The perfect combination ☕💻',
  },
  {
    id: 'p13',
    createdAt: '2024-01-15T22:15:00Z',
    content:
      'Open source is amazing. So grateful for all the contributors out there!',
  },
  {
    id: 'p14',
    createdAt: '2024-01-15T23:00:00Z',
    content:
      "Refactoring legacy code is like archaeology. You never know what you'll find!",
  },
  {
    id: 'p15',
    createdAt: '2024-01-16T00:30:00Z',
    content: 'Good night, devs! Keep building amazing things 🌙',
  },
];

export const posts: Post[] = postData.map((data) => {
  const user = getRandomUser();
  return {
    ...data,
    user_id: user.id,
    user,
    parent_id: null,
    parent: null,
    replies: [],
  };
});
