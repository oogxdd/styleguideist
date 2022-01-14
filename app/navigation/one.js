export default () => (
  <div
    className="max-h-screen overflow-hidden mt-8"
    style={{
      // width: 'calc(20rem - 6px)',
      // minWidth: 'calc(20rem - 6px)'
      width: 'calc(18rem - 0px)',
      // minWidth: 'calc(16rem - 0px)',
      minWidth: 'calc(18rem - 0px)',
    }}
  >
    <div
      className="parameters grid grid-cols-1 gap-x-8 gap-y-10 pt-0 min-h-screen overflow-scroll"
      style={{
        maxHeight: '125vh',
        marginLeft: '-31px',
      }}
    >
      <form
        className="block pt-2 pb-6 flex flex-col gap-y-3"
        sx={{
          borderColor: 'borderColor',
          // paddingRight: 30,
          minHeight: '125vh',
        }}
      >
        <Item>Blog post</Item>
        <Item level={1}>Image</Item>
        <Item level={1}>Label</Item>
        <Item level={1}>Heading 2</Item>
        <Item level={1}>Paragraph</Item>
        <Item level={1}>User card</Item>
        <Item level={2}>Name</Item>
        <Item level={2}>Caption</Item>
      </form>
    </div>
  </div>
)

const Item = ({ level = 0, children }) => {
  return <span style={{ marginLeft: level * 16 }}>{children}</span>
}
