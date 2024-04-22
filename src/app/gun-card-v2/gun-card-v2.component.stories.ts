import type { Meta, StoryObj } from '@storybook/angular';
import { GunCardV2Component } from './gun-card-v2.component';

const meta: Meta<GunCardV2Component> = {
  title: 'Bunkers & Badasses/Gun Card v2',
  component: GunCardV2Component,
};

export default meta;
type Story = StoryObj<GunCardV2Component>;

export const Primary: Story = {
    args: {
        gun: {
            level: 1,
            guild: "Alas!",
            rarity: 'Common',
            element: 'N/A',
            prefix: 'BIP!',
            type: 'Combat Rifle',
        }
    }
};
