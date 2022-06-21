import { useState, useContext } from 'react'
import { AppContext } from 'context'

// import { atoms, molecules, organisms, pages } from 'data/components'

import * as components from 'data/components'

const Navigation = () => {
  const {
    selectedCategory,
    setSelectedCategory,
    selectedComponent,
    setSelectedComponent,
  } = useContext(AppContext)

  return (
    <nav
      aria-label="File Tree Navigation"
      style={
        {
          // transform: 'scale(0.9)',
          // transformOrigin: 'center left',
        }
      }
      // className="max-w-xs"
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
        <Folder
          label="atoms"
          items={components.atoms.filter((c) => !!c.component)}
          expanded={selectedCategory === 'atoms'}
        />
        <Folder
          label="molecules"
          items={components.molecules}
          expanded={selectedCategory === 'molecules'}
        />
        <Folder
          label="organisms"
          items={components.organisms}
          expanded={selectedCategory === 'organisms'}
        />
        <Folder
          label="pages"
          items={components.pages}
          expanded={selectedCategory === 'pages'}
        />
      </ul>
    </nav>
  )
}

export default Navigation

const Folder = ({ depth = 1, expanded = true, label = 'app', items = [] }) => {
  const {
    selectedCategory,
    setSelectedCategory,
    selectedComponent,
    setSelectedComponent,
  } = useContext(AppContext)

  // const hasActiveItem = selectedComponent.group === label
  const hasActiveItem = false

  return (
    <li
      className={`ActionList-item ActionList-item--hasSubItem js-tree-node`}
      aria-level={1}
      role="treeitem"
      data-skip-substring-filter
      data-tree-entry-type="directory"
    >
      <button
        className={`ActionList-content ${
          hasActiveItem ? 'ActionList-content--hasActiveSubItem' : ''
        }`}
        aria-expanded={expanded}
        type="button"
        data-action="click:action-list#handleItemWithSubItemClick"
        tabIndex={0}
        style={{
          // '--ActionList-tree-depth': 3,
          paddingLeft: `calc(8px * ${depth})`,
        }}
        onClick={() => {
          if (selectedCategory === label) {
            setSelectedCategory(null)
          } else {
            setSelectedCategory(label)
          }
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

const Subs = ({ items = [] }) => {
  const {
    selectedCategory,
    setSelectedCategory,
    selectedComponent,
    setSelectedComponent,
  } = useContext(AppContext)

  return (
    <ul
      className="ActionList ActionList--subGroup"
      data-filterable-for="file-tree-filter-field"
      data-filterable-type="substring"
      role="group"
    >
      {items.map((item) => {
        const isActive = selectedComponent.value === item.value

        return (
          <Item
            item={item}
            isActive={isActive}
            showSub={isActive}
            key={item.value}
            depth={1}
          />
        )
      })}
    </ul>
  )
}

const Item = ({ item, isActive, depth, showSub, onClick }) => {
  const {
    selectedCategory,
    setSelectedCategory,
    selectedComponent,
    setSelectedComponent,
    selectedSubComponent,
    setSelectedSubComponent,
    selectedComponentVariant,
  } = useContext(AppContext)

  return (
    <>
      <li
        className={`
        ActionList-item
        ActionList-item--subItem
        js-tree-node
        ${isActive ? 'ActionList-item--navActive' : ''}
      `}
        role="treeitem"
        aria-level={2}
        onClick={() => {
          if (onClick) {
            onClick()
          } else {
            setSelectedComponent(item)
            setSelectedCategory(item.group)
          }
        }}
        // style={{ background: 'initial' }}
      >
        <a
          className="ActionList-content hx_ActionList-content"
          data-turbo="false"
          tabIndex={-1}
          aria-expanded={true}
          style={{
            // '--ActionList-tree-depth': 3,
            paddingLeft: `calc(8px * ${depth})`,
            background: isActive ? 'rgba(208, 215, 222, 0.24)' : 'initial',
          }}
        >
          {depth < 2 && (
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
          )}
          <span className="ActionList-item-label ActionList-item-label--truncate hx_ActionList-item-label">
            {item.label}
          </span>
          {/*
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
        */}
        </a>
      </li>
      {showSub && item.children && (
        <ul
          className="ActionList ActionList--subGroup"
          data-filterable-for="file-tree-filter-field"
          data-filterable-type="substring"
          role="group"
        >
          {item.children.map((item) => {
            const isActive = false

            return (
              <Item
                item={item}
                showSub={true}
                isActive={isActive}
                key={item.value}
                depth={depth + 3}
                onClick={() => {
                  setSelectedSubComponent({
                    ...components[item.group].find(
                      (component) => component.value === item.value,
                    ),
                    variant: item.variant,
                    subvalue: item.subvalue,
                  })
                  // setSelectedSubComponent(selectedComponent)
                  // alert('ok here')
                }}
              />
            )
          })}
        </ul>
      )}
    </>
  )
}
