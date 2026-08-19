import ComponentDemo from '../ComponentsDemo'

type Props = {}

const CarouselPage = (props: Props) => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-12">
          <header className="space-y-2">
            <p
              className="text-4xl font-bold tracking-tight"
              style={{ color: "var(--text-color)" }}
            >
              Tooltip
            </p>
            <p className="text-lg text-gray-600">
              Displays a tooltip with customizable variants, sizes, and positions.
            </p>
          </header>
    
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Usage</h2>
            <ComponentDemo>
                <div className="flex gap-4 flex-wrap relative">
                    
                </div>
            </ComponentDemo>
        </section>
    </div>
  )
}

export default CarouselPage