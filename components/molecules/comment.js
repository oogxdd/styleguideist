import { Avatar } from 'components/atoms'

export const Comment = ({
  comment = {
    id: 1,
    name: 'Leslie Alexander',
    date: '4d ago',
    imageId: '1494790108377-be9c29b29330',
    body:
      'Ducimus quas delectus ad maxime totam doloribus reiciendis ex. Tempore dolorem maiores. Similique voluptatibus tempore non ut.',
  },
}) => (
  <li>
    <div className="flex space-x-3">
      <div className="flex-shrink-0">
        <Avatar
          md
          src={`https://images.unsplash.com/photo-${comment.imageId}?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`}
          alt=""
        />
      </div>
      <div>
        <div className="text-sm">
          <a href="#" className="font-medium text-gray-900">
            {comment.name}
          </a>
        </div>
        <div className="mt-1 text-sm text-gray-700">
          <p>{comment.body}</p>
        </div>
        <div className="mt-2 text-sm space-x-2">
          <span className="text-gray-500 font-medium">{comment.date}</span>{' '}
          <span className="text-gray-500 font-medium">&middot;</span>{' '}
          <button type="button" className="text-gray-900 font-medium">
            Reply
          </button>
        </div>
      </div>
    </div>
  </li>
)
