import S from "@sanity/desk-tool/structure-builder";

import IframePreview from "../previews/IframePreview";
import { SettingsStructure } from "./settingsStructure";
import { BlogStructure } from "./blogStructure";
import { MdInsertDriveFile } from "react-icons/md";

// Web preview configuration
const remoteURL = "https://sanity-gatsby-blog-web-fpn4yxqj.netlify.app";
const localURL = "http://localhost:8000";
const previewURL =
  window.location.hostname === "localhost" ? localURL : remoteURL;

export const getDefaultDocumentNode = (props) => {
  /**
   * Here you can define fallback views for document types without
   * a structure definition for the document node. If you want different
   * fallbacks for different types, or document values (e.g. if there is a slug present)
   * you can set up that logic in here too.
   * https://www.sanity.io/docs/structure-builder-reference#getdefaultdocumentnode-97e44ce262c9
   */
  const { schemaType } = props;
  if (schemaType == "post") {
    return S.document().views([
      S.view.form(),
      S.view
        .component(IframePreview)
        .title("Web preview")
        .options({ previewURL }),
    ]);
  }
  return S.document().views([S.view.form()]);
};

/**
 * This defines how documents are grouped and listed out in the Studio.
 * Relevant documentation:
 * - https://www.sanity.io/guides/getting-started-with-structure-builder
 * - https://www.sanity.io/docs/structure-builder-introduction
 * - https://www.sanity.io/docs/structure-builder-typical-use-cases
 * - https://www.sanity.io/docs/structure-builder-reference
 */

export default () =>
  S.list()
    .title("Content")
    .items([
      SettingsStructure,
      S.listItem()
        .title("Pages")
        .icon(MdInsertDriveFile)
        .child(
          S.documentTypeList("page")
            .title("Pages")
            .menuItems(S.documentTypeList("page").getMenuItems())
            .filter("_type == $type")
            .params({ type: "page" })
            .child((documentId) => S.document().documentId(documentId))
        ),
      BlogStructure,
    ]);