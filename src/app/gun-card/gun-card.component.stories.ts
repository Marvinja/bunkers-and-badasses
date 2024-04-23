import type { Meta, StoryObj } from '@storybook/angular';
import { GunCardComponent } from './gun-card.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<GunCardComponent> = {
  title: 'Bunkers & Badasses/Gun Card',
  component: GunCardComponent,
};

export default meta;
type Story = StoryObj<GunCardComponent>;

export const Primary: Story = {
    args: {
        level: 1,
        guild: "Alas!",
        rarity: 'Common',
        element: 'N/A',
        prefix: 'BIP!',
        type: 'Combat Rifle',
    }
};
