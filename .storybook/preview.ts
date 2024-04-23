import type { Preview } from "@storybook/angular";
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
import DocumentationTemplate from "./DocumentationTemplate.mdx"

setCompodocJson(docJson);

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
    docs: {
      page: DocumentationTemplate,
    }
  },
};

export default preview;
