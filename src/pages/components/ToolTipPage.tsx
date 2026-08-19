
import { Tooltip } from "@/components/Tooltip/Tooltip";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const TooltipPage = () => {
  const basicUsageCode = `
import { Tooltip } from "@/components/Tooltip/Tooltip"

<Tooltip content="Dark Tooltip" variant="dark" size="sm" position="left"animation="scaleIn">
              <button className="px-3 py-2 bg-slate-900 text-white cursor-pointer rounded">Hover me</button>
            </Tooltip>
            <Tooltip content="Info Tooltip" variant="primary" size="md" position="bottom">
              <button className="px-3 py-2 bg-indigo-600 hover:bg-indigo-700 text-white transition-colors duration-300 cursor-pointer rounded">Hover me</button>
            </Tooltip>
            <Tooltip content="Success Tooltip" variant="ok" size="lg" position="top" animation="slideUp">
              <button className="px-3 py-2 bg-green-500 hover:bg-green-600 transition-colors  duration-300 cursor-pointer rounded">Hover me</button>
            </Tooltip>
            <Tooltip content="Warning Tooltip" variant="ghost" size="sm" position="bottom" animation="bounceIn">
              <button className="px-3 py-2 bg-gray-50 hover:bg-gray-100 text-gray-700 cursor-pointer duration-300 rounded">Hover me</button>
            </Tooltip>
            <Tooltip content="Error Tooltip" variant="destructive" size="md" position="right">
              <button className="px-3 py-2 bg-red-700 text-white cursor-pointer rounded">Hover me</button>
            </Tooltip>`;

  const propsData = [
    {
      prop: "variant",
      type: '"dark" | "primary" | "secondary" | "ok" | "ghost" | "destructive"',
      default: '"dark"',
      description: "The visual style variant of the tooltip",
    },
    {
      prop: "size",
      type: '"sm" | "md" | "lg"',
      default: '"md"',
      description: "The size of the tooltip",
    },
    {
      prop: "position",
      type: '"top" | "bottom" | "left" | "right"',
      default: '"top"',
      description: "The position of the tooltip relative to the trigger",
    },
    {
      prop: "animation",
      type: '"fadeIn" | "scaleIn" | "slideUp" | "bounceIn" | "none"',
      default: '"fadeIn"',
      description: "Animation when mounting",
    },
    {
      prop: "asChild",
      type: "boolean",
      default: "false",
      description: "Render tooltip as child element instead of default div",
    },
    {
      prop: "content",
      type: "ReactNode",
      default: "undefined",
      description: "The content displayed inside the tooltip",
    },
    {
      prop: "children",
      type: "ReactNode",
      default: "undefined",
      description: "The trigger element that shows the tooltip on hover",
    },
  ];

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
        <ComponentDemo code={basicUsageCode}>
          <div className="flex gap-4 flex-wrap relative">
            <Tooltip
              content="Dark Tooltip"
              variant="dark"
              size="sm"
              position="left"
              animation="scaleIn"
            >
              <button className="px-3 py-2 bg-slate-900 text-white cursor-pointer rounded">
                Hover me
              </button>
            </Tooltip>
            <Tooltip
              content="Info Tooltip"
              variant="primary"
              size="md"
              position="bottom"
            >
              <button className="px-3 py-2 bg-indigo-600 hover:bg-indigo-700 text-white transition-colors duration-300 cursor-pointer rounded">
                Hover me
              </button>
            </Tooltip>
            <Tooltip
              content="Success Tooltip"
              variant="ok"
              size="lg"
              position="top"
              animation="slideUp"
            >
              <button className="px-3 py-2 bg-green-500 hover:bg-green-600 transition-colors  duration-300 cursor-pointer rounded">
                Hover me
              </button>
            </Tooltip>
            <Tooltip
              content="Warning Tooltip"
              variant="ghost"
              size="sm"
              position="bottom"
              animation="bounceIn"
            >
              <button className="px-3 py-2 bg-gray-50 hover:bg-gray-100 text-gray-700 cursor-pointer duration-300 rounded">
                Hover me
              </button>
            </Tooltip>
            {/* <Tooltip
              content="Link tooltip"
              variant="dark"
              position="bottom"
              asChild
            >
              <a href="/home" className="text-indigo-600 underline">
                Go Home
              </a>
            </Tooltip> */}
            <Tooltip
              content="Error Tooltip"
              variant="destructive"
              size="md"
              position="right"
            >
              <button className="px-3 py-2 bg-red-700 text-white cursor-pointer rounded">
                Hover me
              </button>
            </Tooltip>
          </div>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <PropsTable data={propsData} />
      </section>
    </div>
  );
};

export default TooltipPage;
