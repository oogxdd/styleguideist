import { atoms } from 'data/components'

console.log(atoms)
export default () => {
  return (
    <nav
      aria-label="File Tree Navigation"
      style={{ marginLeft: 24 }}
      className="max-w-xs"
    >
      <ul
        className="ActionList ActionList--tree ActionList--full"
        role="tree"
        aria-label="File Tree"
        data-filterable-for="file-tree-filter-field"
        data-filterable-type="substring"
        data-tree-entry-type="root"
        data-target="diff-file-filter.treeRoot"
        data-action="
    filterable:change:diff-file-filter#hideEmptyDirectories
    filterable:change:file-tree#instrumentPathFilterChange
    filterable:change:action-list#setupFocusZone
  "
      >
        <Item label="atoms" items={atoms} />
      </ul>
    </nav>
  )
}

const Item = ({ depth = 1, expanded = true, label = 'app', items = [] }) => {
  return (
    <li
      className="ActionList-item ActionList-item--hasSubItem js-tree-node"
      aria-level={1}
      role="treeitem"
      data-skip-substring-filter
      data-tree-entry-type="directory"
    >
      <button
        className="ActionList-content ActionList-content--hasActiveSubItem"
        aria-expanded={expanded}
        type="button"
        data-action="click:action-list#handleItemWithSubItemClick"
        tabIndex={0}
        style={{
          // '--ActionList-tree-depth': 3,
          paddingLeft: `calc(8px * ${depth})`,
        }}
      >
        <span className="ActionList-item-action ActionList-item-action--leading">
          <svg
            aria-hidden="true"
            height={16}
            viewBox="0 0 16 16"
            version="1.1"
            width={16}
            data-view-component="true"
            className="octicon octicon-chevron-down ActionList-item-collapseIcon"
          >
            <use href="#octicon_chevron-down_16" />
          </svg>
        </span>
        <span className="ActionList-item-visual ActionList-item-visual--leading">
          <svg
            aria-label="Directory"
            aria-hidden="true"
            height={16}
            viewBox="0 0 16 16"
            version="1.1"
            width={16}
            data-view-component="true"
            className="octicon octicon-file-directory-fill hx_color-icon-directory"
          >
            <use href="#octicon_file-directory-fill_16" />
          </svg>
        </span>
        <span className="ActionList-item-label ActionList-item-label--truncate">
          {label}
        </span>
      </button>
      <Subs items={items} />
    </li>
  )
}

const Subs = () => (
  <ul
    className="ActionList ActionList--subGroup"
    data-filterable-for="file-tree-filter-field"
    data-filterable-type="substring"
    role="group"
  >
    <li
      id="file-tree-item-diff-70b6a4ba131b90d3682f0b2ba111ccabb455e5584068bdfc9744f713f79db1a5"
      className="ActionList-item ActionList-item--subItem js-tree-node"
      role="treeitem"
      aria-level={2}
      data-action="
click:action-list#handleItemClick
click:file-tree#instrumentSelectFile
    "
      data-target="file-tree.fileTreeNode"
      data-targets="
diff-file-filter.treeEntries
file-tree.fileTreeNodes
    "
      data-hydro-click-payload='{"event_type":"pull_request.user_action","payload":{"category":"file_tree","data":{"file_count":20,"path":"app/index.js","extension":".js"},"pull_request_id":"aa532f9620cff9079dae1e80256f9d13ddfd5ee9","user_id":15590185,"action":"file_selected","originating_url":"https://github.com/maximignatev/styleguideist/commit/aa532f9620cff9079dae1e80256f9d13ddfd5ee9"}}'
      data-hydro-click-hmac="981307f7d36576822c3d22e902f9e64f6da8ef593f29784fbe911fd012213874"
      data-file-type=".js"
      data-file-deleted="false"
      data-tree-entry-type="file"
    >
      <span data-filterable-item-text hidden>
        app/index.js
      </span>
      <a
        className="ActionList-content hx_ActionList-content"
        href="#diff-70b6a4ba131b90d3682f0b2ba111ccabb455e5584068bdfc9744f713f79db1a5"
        data-turbo="false"
        tabIndex={-1}
        aria-expanded={false}
      >
        <span className="ActionList-item-visual ActionList-item-visual--leading hx_ActionList-item-visual">
          <svg
            aria-label="File"
            aria-hidden="true"
            height={16}
            viewBox="0 0 16 16"
            version="1.1"
            width={16}
            data-view-component="true"
            className="octicon octicon-file color-fg-muted"
          >
            <use href="#octicon_file_16" />
          </svg>
        </span>
        <span className="ActionList-item-label ActionList-item-label--truncate hx_ActionList-item-label">
          index.js
        </span>
        <span className="ActionList-item-visual ActionList-item-visual--trailing hx_ActionList-item-visual">
          <svg
            title="modified"
            aria-hidden="true"
            height={16}
            viewBox="0 0 16 16"
            version="1.1"
            width={16}
            data-view-component="true"
            className="octicon octicon-diff-modified color-fg-attention"
          >
            <use href="#octicon_diff-modified_16" />
          </svg>
        </span>
      </a>
    </li>
    <li
      id="file-tree-item-diff-987c7e55e5da6ceefbdd3d0f7452d9ad2735583da570f68dc35657eb897c5eb2"
      className="ActionList-item ActionList-item--subItem js-tree-node"
      role="treeitem"
      aria-level={2}
      data-action="
click:action-list#handleItemClick
click:file-tree#instrumentSelectFile
    "
      data-target="file-tree.fileTreeNode"
      data-targets="
diff-file-filter.treeEntries
file-tree.fileTreeNodes
    "
      data-hydro-click-payload='{"event_type":"pull_request.user_action","payload":{"category":"file_tree","data":{"file_count":20,"path":"app/preview.js","extension":".js"},"pull_request_id":"aa532f9620cff9079dae1e80256f9d13ddfd5ee9","user_id":15590185,"action":"file_selected","originating_url":"https://github.com/maximignatev/styleguideist/commit/aa532f9620cff9079dae1e80256f9d13ddfd5ee9"}}'
      data-hydro-click-hmac="650dc76a8a9b07e8244a1ae20a834f22b11993e8597d927a94c419d63b0f2886"
      data-file-type=".js"
      data-file-deleted="false"
      data-tree-entry-type="file"
    >
      <span data-filterable-item-text hidden>
        app/preview.js
      </span>
      <a
        className="ActionList-content hx_ActionList-content"
        href="#diff-987c7e55e5da6ceefbdd3d0f7452d9ad2735583da570f68dc35657eb897c5eb2"
        data-turbo="false"
        tabIndex={-1}
      >
        <span className="ActionList-item-visual ActionList-item-visual--leading hx_ActionList-item-visual">
          <svg
            aria-label="File"
            aria-hidden="true"
            height={16}
            viewBox="0 0 16 16"
            version="1.1"
            width={16}
            data-view-component="true"
            className="octicon octicon-file color-fg-muted"
          >
            <use href="#octicon_file_16" />
          </svg>
        </span>
        <span className="ActionList-item-label ActionList-item-label--truncate hx_ActionList-item-label">
          preview.js
        </span>
        <span className="ActionList-item-visual ActionList-item-visual--trailing hx_ActionList-item-visual">
          <svg
            title="modified"
            aria-hidden="true"
            height={16}
            viewBox="0 0 16 16"
            version="1.1"
            width={16}
            data-view-component="true"
            className="octicon octicon-diff-modified color-fg-attention"
          >
            <use href="#octicon_diff-modified_16" />
          </svg>
        </span>
      </a>
    </li>
    <li
      id="file-tree-item-diff-118e029846a0f54906fd5646da373f9c3a65ad0c3f74e1ca4d2263a941201775"
      className="ActionList-item ActionList-item--subItem js-tree-node ActionList-item--navActive"
      role="treeitem"
      aria-level={2}
      data-action="
click:action-list#handleItemClick
click:file-tree#instrumentSelectFile
    "
      data-target="file-tree.fileTreeNode"
      data-targets="
diff-file-filter.treeEntries
file-tree.fileTreeNodes
    "
      data-hydro-click-payload='{"event_type":"pull_request.user_action","payload":{"category":"file_tree","data":{"file_count":20,"path":"app/tabs.js","extension":".js"},"pull_request_id":"aa532f9620cff9079dae1e80256f9d13ddfd5ee9","user_id":15590185,"action":"file_selected","originating_url":"https://github.com/maximignatev/styleguideist/commit/aa532f9620cff9079dae1e80256f9d13ddfd5ee9"}}'
      data-hydro-click-hmac="87ff301cfddd5698741ae0ba2114c61a6eba09858c6f7a7b921a03578d3b5a75"
      data-file-type=".js"
      data-file-deleted="false"
      data-tree-entry-type="file"
      aria-current="location"
    >
      <span data-filterable-item-text hidden>
        app/tabs.js
      </span>
      <a
        className="ActionList-content hx_ActionList-content"
        href="#diff-118e029846a0f54906fd5646da373f9c3a65ad0c3f74e1ca4d2263a941201775"
        data-turbo="false"
        tabIndex={-1}
      >
        <span className="ActionList-item-visual ActionList-item-visual--leading hx_ActionList-item-visual">
          <svg
            aria-label="File"
            aria-hidden="true"
            height={16}
            viewBox="0 0 16 16"
            version="1.1"
            width={16}
            data-view-component="true"
            className="octicon octicon-file color-fg-muted"
          >
            <use href="#octicon_file_16" />
          </svg>
        </span>
        <span className="ActionList-item-label ActionList-item-label--truncate hx_ActionList-item-label">
          tabs.js
        </span>
        <span className="ActionList-item-visual ActionList-item-visual--trailing hx_ActionList-item-visual">
          <svg
            title="modified"
            aria-hidden="true"
            height={16}
            viewBox="0 0 16 16"
            version="1.1"
            width={16}
            data-view-component="true"
            className="octicon octicon-diff-modified color-fg-attention"
          >
            <use href="#octicon_diff-modified_16" />
          </svg>
        </span>
      </a>
    </li>
  </ul>
)
