import S from "@sanity/desk-tool/structure-builder";
import { MdSettings, MdMenu, MdPublic, MdVerticalAlignTop, MdVerticalAlignBottom } from "react-icons/md";

export const SettingsStructure = S.listItem()
  .title("Settings")
  .icon(MdSettings)
  .child(
    S.list()
      .title("Settings")
      .items([
        S.documentListItem()
          .title("Header")
          .icon(MdVerticalAlignTop)
          .id("header")
          .schemaType("header"),
        S.documentListItem()
          .title("Footer")
          .icon(MdVerticalAlignBottom)
          .id("footer")
          .schemaType("footer"),
        S.listItem()
          .title("Menus")
          .icon(MdMenu)
          .child(
            S.documentTypeList("menus")
              .title("Menus")
              .filter("_type == $type")
              .params({ type: "menus" })
          ),
        S.documentListItem()
          .title("Global SEO")
          .icon(MdPublic)
          .id("globalSeo")
          .schemaType("globalMeta"),
      ])
  );