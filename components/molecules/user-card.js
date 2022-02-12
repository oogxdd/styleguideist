export const UserCard = ({ post }) => (
  <div
    className="mt-6 flex items-center"
    sx={{ variant: 'molecules.usercard' }}
  >
    <div className="flex-shrink-0">
      <a href={post.author.href}>
        <span className="sr-only">{post.author.name}</span>
        <img
          className="h-10 w-10 rounded-full"
          src={post.author.imageUrl}
          alt=""
          sx={{ variant: 'atoms.avatar' }}
        />
      </a>
    </div>
    <div className="ml-3">
      <p
        className="text-sm font-medium text-gray-900"
        sx={{ color: 'text', variant: 'atoms.name' }}
      >
        <a href={post.author.href} className="hover:underline">
          {post.author.name}
        </a>
      </p>
      <div
        className="flex space-x-1 text-sm"
        sx={{ color: 'text2', variant: 'atoms.caption' }}
      >
        <time dateTime={post.datetime}>{post.date}</time>
        <span aria-hidden="true">&middot;</span>
        <span>{post.readingTime} read</span>
      </div>
    </div>
  </div>
)
