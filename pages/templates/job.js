import { Navigation, Breadcrumbs } from 'components/molecules'
import { UserBlock, InformationBlock } from 'components/organisms'

export default function Dashboard() {
  return (
    <div className="relative min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <Navigation />
        <Breadcrumbs />
      </header>
      <main className="py-10">
        <UserBlock />
        <InformationBlock />
      </main>
    </div>
  )
}
// {/*
// */}
// {/*
// */}
// {/*
// */}
