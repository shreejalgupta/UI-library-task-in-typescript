
import ComponentDemo from "../ComponentsDemo";

import Carousel from "@/components/Carousel/Carousel";
import PropsTable from "@/components/Personal/PropsTable";



const CarouselPage = () => {
  const basicUsageCode = `import { Carousel } from "@/components/Carousel/Carousel"
  
  <Carousel slides={["link-1", "link-2", "link-3"]} size='lg' animation="scaleIn" hoverAnimation="scale" />
  
  `;

  const propsData = [
    {
      prop: "size",
      type: '"sm" | "md" | "lg" | "xl" | "xxl"',
      default: '"md"',
      description: "The size of the Controls",
    },
    {
      prop: "animation",
      type: '"fadeIn" | "scaleIn" | "slideUp" | "bounceIn" | "none"',
      default: '"none"',
      description: "Animation when mounting",
    },
    {
      prop: "hoverAnimation",
      type: '"jiggle" | "scale" | "bounce" | "none"',
      default: '"none"',
      description: "hovering on element animation",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-12">
      <header className="space-y-2">
        <p
          className="text-4xl font-bold tracking-tight"
          style={{ color: "var(--text-color)" }}
        >
          Carousel
        </p>
        <p className="text-lg text-gray-600">
          Displays a tooltip with customizable variants, sizes, and positions.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <ComponentDemo code={basicUsageCode}>
          <Carousel
            slides={[
              "https://picsum.photos/id/1018/600/400",
              "https://picsum.photos/id/1015/600/400",
              "https://picsum.photos/id/1019/600/400",
            ]}
            size="lg"
            animation="scaleIn"
            hoverAnimation="scale"
          />
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <PropsTable data={propsData} />
      </section>
    </div>
  );
};

export default CarouselPage;
