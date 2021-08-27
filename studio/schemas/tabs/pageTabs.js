import Tabs from "sanity-plugin-tabs";

export default {
  name: "pageTabs",
  type: "object",
  title: "Page Tabs",
  inputComponent: Tabs,
  fieldsets: [
    { name: "content", title: "Content" },
    { name: "defaultMeta", title: "Meta" },
  ],
  fields: [
    {
      type: "pageContent",
      name: "content",
      fieldset: "content",
    },
    {
      type: "metaCard",
      name: "meta",
      fieldset: "defaultMeta",
    },
  ],
};