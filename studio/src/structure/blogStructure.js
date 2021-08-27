import S from "@sanity/desk-tool/structure-builder";
import {
  MdChromeReaderMode,
  MdPerson,
  MdDescription,
  MdLocalOffer,
} from "react-icons/md";

export const BlogStructure = S.listItem()
  .title("Blog")
  .icon(MdChromeReaderMode)
  .child(
    S.list()
      .title("Settings")
      .items([
        S.listItem()
          .title("Blog posts")
          .icon(MdDescription)
          .schemaType("post")
          .child(S.documentTypeList("post").title("Blog posts")),
        S.listItem()
          .title("Authors")
          .icon(MdPerson)
          .schemaType("author")
          .child(S.documentTypeList("author").title("Authors")),
        S.listItem()
          .title("Categories")
          .icon(MdLocalOffer)
          .schemaType("category")
          .child(S.documentTypeList("category").title("Categories")),
      ])
  );